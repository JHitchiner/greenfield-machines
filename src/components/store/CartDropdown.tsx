import React from 'react';
import { ShoppingCart, Trash2 } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useCartItems, useCartRemoveItem, useCartClear, useCartTotals } from '@/hooks/use-cart';
interface CartDropdownProps {
  onOpenQuote?: () => void;
}
export function CartDropdown({ onOpenQuote }: CartDropdownProps) {
  const items = useCartItems();
  const removeItem = useCartRemoveItem();
  const clearCart = useCartClear();
  const { count, subtotal } = useCartTotals();
  const handleScrollToCatalog = () => {
    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative group">
          <ShoppingCart className="h-5 w-5 group-hover:text-emerald-600 transition-colors" />
          {count > 0 && (
            <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-[10px] bg-emerald-600 animate-in fade-in zoom-in border-2 border-background">
              {count}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80 p-0 shadow-2xl border-slate-200 dark:border-slate-800">
        <div className="bg-emerald-50/50 dark:bg-emerald-900/10">
          <DropdownMenuLabel className="p-4 flex items-center justify-between">
            <span className="font-display font-bold text-sm uppercase tracking-tight">Quote Cart</span>
            <Badge variant="outline" className="text-[10px] font-mono border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400">{count} Items</Badge>
          </DropdownMenuLabel>
        </div>
        <Separator />
        <ScrollArea className="h-[320px]">
          {items.length > 0 ? (
            <div className="p-2 space-y-2">
              {items.map((item) => (
                <div key={item.cartId} className="flex gap-3 p-2 hover:bg-emerald-50 dark:hover:bg-emerald-950/20 rounded-lg transition-colors group relative">
                  <div className="h-16 w-16 shrink-0 rounded-md overflow-hidden border border-slate-200 dark:border-slate-800 bg-white">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex flex-col flex-1 min-w-0 justify-center">
                    <h4 className="text-xs font-bold truncate pr-6">{item.name}</h4>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest">{item.category}</p>
                    <p className="text-sm font-display font-bold mt-1 text-emerald-600">
                      ${item.price.toLocaleString()}
                    </p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      removeItem(item.cartId);
                    }}
                    className="md:opacity-0 group-hover:opacity-100 p-2 text-muted-foreground hover:text-destructive transition-all"
                    aria-label="Remove item"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-3">
              <div className="bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded-full">
                <ShoppingCart className="h-6 w-6 text-emerald-600" />
              </div>
              <p className="text-sm text-muted-foreground">Your quote request is empty.</p>
              <Button variant="link" size="sm" className="text-emerald-600" onClick={handleScrollToCatalog}>
                Start browsing
              </Button>
            </div>
          )}
        </ScrollArea>
        <Separator />
        <div className="p-4 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-muted-foreground uppercase">Estimated Value</span>
            <span className="text-lg font-display font-bold text-emerald-700 dark:text-emerald-500">${subtotal.toLocaleString()}</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <DropdownMenuItem asChild>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={clearCart} 
                disabled={items.length === 0} 
                className="text-xs border-emerald-100 dark:border-emerald-900 hover:bg-emerald-50 dark:hover:bg-emerald-950/20 w-full"
              >
                Clear
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Button
                size="sm"
                className="btn-gradient text-xs w-full"
                disabled={items.length === 0}
                onClick={() => onOpenQuote?.()}
              >
                View Quote
              </Button>
            </DropdownMenuItem>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}