import React, { useState } from 'react';
import { Menu, Settings2, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CartDropdown } from '@/components/store/CartDropdown';
import { QuoteModal } from '@/components/store/QuoteModal';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
export function Navbar() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const handleOpenQuote = () => {
    setIsQuoteModalOpen(true);
  };
  const navLinks = [
    { name: 'Solutions', href: '#' },
    { name: 'Catalog', href: '#catalog' },
    { name: 'Resources', href: '#' },
    { name: 'Support', href: '#' },
  ];
  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-emerald-950 p-1.5 rounded-lg border border-emerald-900/50 shadow-sm shadow-emerald-500/10">
                <Settings2 className="h-6 w-6 text-emerald-500 animate-[spin_10s_linear_infinite]" />
              </div>
              <span className="text-xl font-display font-bold tracking-tight">GREENFIELD</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-sm font-medium hover:text-emerald-600 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <CartDropdown onOpenQuote={handleOpenQuote} />
              <Button
                variant="outline"
                className="hidden sm:inline-flex border-emerald-200 dark:border-emerald-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/20 text-emerald-700 dark:text-emerald-400 font-bold"
                onClick={handleOpenQuote}
              >
                Request Quote
              </Button>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <SheetHeader>
                    <SheetTitle className="text-left font-display font-bold">Navigation</SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-4 mt-8">
                    {navLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        className="text-lg font-medium p-2 hover:bg-emerald-50 dark:hover:bg-emerald-950/20 rounded-md transition-colors"
                      >
                        {link.name}
                      </a>
                    ))}
                    <Button 
                      className="mt-4 btn-gradient w-full"
                      onClick={() => {
                        handleOpenQuote();
                      }}
                    >
                      Request Quote
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
      <QuoteModal open={isQuoteModalOpen} onOpenChange={setIsQuoteModalOpen} />
    </>
  );
}