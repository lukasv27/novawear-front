import { ShoppingBag, Menu, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const NavbarAdmin = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
                <div className="text-2xl font-bold bg-gradient-to-r from-vibrant-pink via-vibrant-purple to-vibrant-orange bg-clip-text text-black">
                Nova Wear Store
                </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
                <a href="#" className="text-foreground hover:text-primary transition-colors">
                Inicio
                </a>
                <a href="#productos" className="text-foreground hover:text-primary transition-colors">
                Productos
                </a>
                <a href="#contacto" className="text-foreground hover:text-primary transition-colors">
                Ventas
                </a>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                <ShoppingBag className="h-5 w-5" />
                </Button>
                <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                <Menu className="h-5 w-5" />
                </Button>
            </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
                <a href="#" className="block text-foreground hover:text-primary transition-colors">
                Inicio
                </a>
                <a href="#productos" className="block text-foreground hover:text-primary transition-colors">
                Productos
                </a>
                <a href="#categorias" className="block text-foreground hover:text-primary transition-colors">
                usuarios
                </a>
                <a href="#contacto" className="block text-foreground hover:text-primary transition-colors">
                Ventas
                </a>
            </div>
            )}
        </div>
        </nav>
  );
};

export default NavbarAdmin;
