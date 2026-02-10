import React from 'react';
import { ShoppingCart, Menu, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
interface NavbarProps {
  cartCount: number;
}
export function Navbar({ cartCount }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-1.5 rounded-lg">
              <ShieldCheck className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-display font-bold tracking-tight">KINETIX</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Solutions</a>
            <a href="#catalog" className="text-sm font-medium hover:text-primary transition-colors">Catalog</a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Resources</a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Support</a>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-[10px] bg-amber-600">
                  {cartCount}
                </Badge>
              )}
            </Button>
            <Button variant="outline" className="hidden sm:inline-flex">
              Request Quote
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}