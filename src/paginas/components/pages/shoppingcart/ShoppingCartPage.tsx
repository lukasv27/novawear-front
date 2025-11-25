import { useCart } from "../../CartProvider";
import { Button } from "@/components/ui/button";
import Navbar from "../../NavBar";
import { Trash2, Minus, Plus, ShoppingBag } from "lucide-react";

export default function ShoppingCartPage() {
  const { cart, removeFromCart, updateQuantity, total } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-20 flex flex-col items-center">
          <ShoppingBag className="h-16 w-16 text-gray-400 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Tu carrito está vacío</h2>
          <p className="text-gray-500 mb-6">Agrega productos para comenzar tu compra</p>
          <Button onClick={() => window.location.href = "/"}>Ir a la tienda</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Carrito de Compras</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map(item => (
              <div key={item.productId + item.size} className="bg-white rounded-lg shadow p-4 flex flex-col sm:flex-row gap-4 hover:shadow-lg transition">
                {/* Imagen */}
                <div className="w-full sm:w-32 h-32 flex-shrink-0">
                  <img 
                    src={item.imageBase64} 
                    alt={item.name} 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                {/* Detalles y controles */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-sm text-gray-500">Talla: {item.size}</p>
                    <p className="text-lg font-bold mt-2">${item.price}</p>
                  </div>

                  <div className="flex items-center gap-4 mt-4">
                    {/* Cantidad */}
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.productId, item.size, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                      className="h-8 w-8"
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="w-12 text-center">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.productId, item.size, item.quantity + 1)}
                      className="h-8 w-8"
                    >
                      <Plus className="w-4 h-4" />
                    </Button>

                    {/* Subtotal */}
                    <span className="ml-auto font-semibold">
                      
                    </span>

                    {/* Eliminar */}
                    <Button className="text-red-600 hover:bg-red-100 p-2 rounded"
                      variant="ghost"
                      size="icon"
                      onClick={() => removeFromCart(item.productId, item.size)}
                      
                    >
                      <Trash2 className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Resumen del pedido */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6 sticky top-4">
              <h2 className="text-xl font-bold mb-4">Resumen del pedido</h2>
              <div className="flex justify-between mb-2">
                <span className="text-gray-500">Subtotal</span>
                <span className="font-semibold">${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-gray-500">Envío</span>
                <span className="font-semibold">Gratis</span>
              </div>
              <div className="border-t my-4"></div>
              <div className="flex justify-between text-lg font-bold mb-6">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <Button className="w-full mb-3">Proceder al pago</Button>
              <Button variant="outline" className="w-full" onClick={() => window.location.href = "/"}>
                Continuar comprando
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
