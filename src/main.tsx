import { createRoot } from 'react-dom/client'
import { CartProvider } from './paginas/components/CartProvider'
import './index.css'

// ✅ Importación default, no 'type'
import WebApp from './router/WebApp'

createRoot(document.getElementById('root')!).render(
    <CartProvider>
        <WebApp />
    </CartProvider>
)
