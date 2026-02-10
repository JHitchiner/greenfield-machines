import React, { useState } from 'react';
import { Menu, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CartDropdown } from '@/components/store/CartDropdown';
import { QuoteModal } from '@/components/store/QuoteModal';
export function Navbar() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const handleOpenQuote = () => {
    setIsQuoteModalOpen(true);
  };
  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-primary p-1.5 rounded-lg">
                <ShieldCheck className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-display font-bold tracking-tight">GREENFIELD</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-sm font-medium hover:text-emerald-600 transition-colors">Solutions</a>
              <a href="#catalog" className="text-sm font-medium hover:text-emerald-600 transition-colors">Catalog</a>
              <a href="#" className="text-sm font-medium hover:text-emerald-600 transition-colors">Resources</a>
              <a href="#" className="text-sm font-medium hover:text-emerald-600 transition-colors">Support</a>
            </div>
            <div className="flex items-center gap-4">
              <CartDropdown onOpenQuote={handleOpenQuote} />
              <Button
                variant="outline"
                className="hidden sm:inline-flex border-slate-300 dark:border-slate-700 hover:bg-emerald-50 dark:hover:bg-emerald-950/20"
                onClick={handleOpenQuote}
              >
                Request Quote
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>
      <QuoteModal open={isQuoteModalOpen} onOpenChange={setIsQuoteModalOpen} />
    </>
  );
}