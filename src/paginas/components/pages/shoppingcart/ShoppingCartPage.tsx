import { useCart } from "@/paginas/components/CartProvider";
import { Button } from "@/components/ui/button";

export default function ShoppingCartPage() {
  const { cart, removeFromCart, updateQuantity, total } = useCart();

  if (cart.length === 0) return <p className="p-10">Tu carrito está vacío.</p>;

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Carrito de Compras</h1>
      <div className="space-y-4">
        {cart.map(item => (
          <div key={item.productId + item.size} className="border p-4 rounded flex justify-between items-center">
            <div>
              <h3 className="font-bold">{item.name}</h3>
              <p>Talla: {item.size}</p>
              <p>Precio: ${item.price}</p>
              <p>Cantidad: 
                <input
                  type="number"
                  value={item.quantity}
                  min={1}
                  onChange={e => updateQuantity(item.productId, item.size, Number(e.target.value))}
                  className="w-16 ml-2 border rounded px-1"
                />
              </p>
            </div>
            <Button onClick={() => removeFromCart(item.productId, item.size)}>Eliminar</Button>
          </div>
        ))}
      </div>
      <h2 className="mt-6 text-xl font-bold">Total: ${total}</h2>
    </div>
  );
}
