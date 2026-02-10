import React, { useState, useMemo } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/components/store/HeroSection';
import { ProductCard } from '@/components/store/ProductCard';
import { FilterSidebar, FilterState } from '@/components/store/FilterSidebar';
import { MACHINES } from '@/lib/machine-data';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { SlidersHorizontal, PackageSearch } from 'lucide-react';
import { Toaster, toast } from 'sonner';
import { useCartAddItem } from '@/hooks/use-cart';
export function HomePage() {
  const addItem = useCartAddItem();
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    priceRange: [0, 250000],
  });
  const filteredProducts = useMemo(() => {
    return MACHINES.filter((m) => {
      const matchesCategory = filters.categories.length === 0 || filters.categories.includes(m.category);
      const matchesPrice = m.price >= filters.priceRange[0] && m.price <= filters.priceRange[1];
      return matchesCategory && matchesPrice;
    });
  }, [filters]);
  const handleAddToCart = (id: string) => {
    const machine = MACHINES.find(m => m.id === id);
    if (machine) {
      addItem(machine);
      toast.success(`${machine.name} added to quote.`, {
        description: "Items successfully added to your Greenfield request.",
      });
    }
  };
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <div id="catalog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-display font-bold uppercase tracking-tight">Equipment Catalog</h2>
              <p className="text-muted-foreground">Showing {filteredProducts.length} precision industrial solutions</p>
            </div>
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm" className="flex items-center gap-2 border-slate-300">
                    <SlidersHorizontal className="h-4 w-4" /> Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <SheetHeader>
                    <SheetTitle>Filter Catalog</SheetTitle>
                  </SheetHeader>
                  <div className="mt-8">
                    <FilterSidebar filters={filters} setFilters={setFilters} />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-10">
            <aside className="hidden lg:block w-64 shrink-0 h-fit sticky top-24">
              <FilterSidebar filters={filters} setFilters={setFilters} />
            </aside>
            <div className="flex-grow">
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((machine) => (
                    <ProductCard
                      key={machine.id}
                      machine={machine}
                      onAddToCart={handleAddToCart}
                    />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-24 text-center">
                  <div className="bg-emerald-50 dark:bg-emerald-950/20 p-6 rounded-full mb-4">
                    <PackageSearch className="h-12 w-12 text-emerald-600/50" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">No matches found</h3>
                  <p className="text-muted-foreground max-w-sm">
                    Try adjusting your filters or search terms to find the Greenfield equipment you need.
                  </p>
                  <Button
                    variant="link"
                    className="mt-4 text-emerald-600"
                    onClick={() => setFilters({ categories: [], priceRange: [0, 250000] })}
                  >
                    Clear all filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-2xl font-display font-bold text-white tracking-tight">GREENFIELD</span>
              </div>
              <p className="max-w-sm text-sm leading-relaxed">
                Leading the global transition to autonomous manufacturing. Providing mission-critical hardware for the precision factories of tomorrow with Greenfield Machines.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li>Sales: +1 (800) GRN-FIELD</li>
                <li>Email: ops@greenfield-machines.com</li>
                <li>HQ: Detroit Innovation Hub, MI</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Follow</h4>
              <ul className="space-y-3 text-sm">
                <li className="hover:text-emerald-500 cursor-pointer transition-colors">LinkedIn</li>
                <li className="hover:text-emerald-500 cursor-pointer transition-colors">X Platforms</li>
                <li className="hover:text-emerald-500 cursor-pointer transition-colors">Industrial News</li>
              </ul>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-slate-900 text-[10px] uppercase tracking-widest font-bold flex flex-col sm:flex-row justify-between gap-4">
            <p>�� 2025 Greenfield Industrial Platforms Inc. All Rights Reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
      <Toaster position="bottom-right" richColors />
    </div>
  );
}