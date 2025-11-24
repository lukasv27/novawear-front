import { useContext, useEffect, useState } from "react";
import { useParams, Outlet } from "react-router";
import axios from "axios";
import Navbar from "../../NavBar";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "../../CartProvider";
import { useNavigate } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  price: string;
  category: string;
  size: string;
  imageBase64: string;
}

export default function ProductsPage() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const sizes = ["S", "M", "L", "XL"];
  const [selectedSizes, setSelectedSizes] = useState<{ [key: number]: string }>({});

  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>("http://localhost:8080/products");
        setProducts(response.data);

        // Inicializar tallas por defecto
        const initialSizes: { [key: number]: string } = {};
        response.data.forEach((p) => {
          initialSizes[p.id] = p.size;
        });
        setSelectedSizes(initialSizes);
      } catch (error) {
        console.error("Error al cargar los productos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = categoryName
    ? products.filter((p) => p.category === categoryName)
    : products;

  const handleSizeChange = (productId: number, size: string) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
  };

  if (loading) return <p className="p-10">Cargando productos...</p>;

  return (
    <div className="p-10">
      <Navbar />
      <Outlet />

      <h1 className="text-4xl font-bold mb-6">
        Categoría: {categoryName || "Todos los productos"}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p) => (
            <div key={p.id} className="border rounded p-4">
              <img
                src={p.imageBase64}
                alt={p.name}
                className="w-full h-48 object-cover mb-2"
              />

              <h3 className="font-bold">Marca: {p.name}</h3>
              <p>Precio: ${p.price}</p>

              {/* Dropdown de tallas */}
              <label className="mr-2 font-medium">Selecciona talla:</label>
              <select
                value={selectedSizes[p.id]}
                onChange={(e) => handleSizeChange(p.id, e.target.value)}
                className="custome-select"
              >
                {sizes.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>

              {/* Botón Comprar */}
              <Button
                onClick={() => {addToCart({
                    productId: p.id,
                    name: p.name,
                    price: p.price,
                    size: selectedSizes[p.id],
                    quantity: 1,
                  });
                  // navigate("/shoppingcart"); // opcional: ir al carrito
                }}
                className="add-cart-button mt-5 border p-1 rounded w-full"
              >
                <ShoppingCart className="mr-2" />
                Agregar al carrito
              </Button>
            </div>
          ))
        ) : (
          <p>No hay productos en esta categoría.</p>
        )}
      </div>
    </div>
  );
}
