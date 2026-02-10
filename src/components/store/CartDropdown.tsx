import React from 'react';
import { ShoppingCart, Trash2 } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useCartItems, useCartRemoveItem, useCartClear, useCartTotals } from '@/hooks/use-cart';
export function CartDropdown() {
  const items = useCartItems();
  const removeItem = useCartRemoveItem();
  const clearCart = useCartClear();
  const { count, subtotal } = useCartTotals();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative group">
          <ShoppingCart className="h-5 w-5 group-hover:text-amber-600 transition-colors" />
          {count > 0 && (
            <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-[10px] bg-amber-600 animate-in fade-in zoom-in">
              {count}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80 p-0 shadow-2xl border-slate-200 dark:border-slate-800">
        <div className="bg-slate-50 dark:bg-slate-900/50">
          <DropdownMenuLabel className="p-4 flex items-center justify-between">
            <span className="font-display font-bold text-sm uppercase tracking-tight">Shopping Cart</span>
            <Badge variant="outline" className="text-[10px] font-mono">{count} Items</Badge>
          </DropdownMenuLabel>
        </div>
        <Separator />
        <ScrollArea className="h-[320px]">
          {items.length > 0 ? (
            <div className="p-2 space-y-2">
              {items.map((item) => (
                <div key={item.cartId} className="flex gap-3 p-2 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg transition-colors group">
                  <div className="h-16 w-16 shrink-0 rounded-md overflow-hidden border border-slate-200 dark:border-slate-800 bg-white">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex flex-col flex-1 min-w-0 justify-center">
                    <h4 className="text-xs font-bold truncate pr-6">{item.name}</h4>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest">{item.category}</p>
                    <p className="text-sm font-display font-bold mt-1 text-amber-600">
                      ${item.price.toLocaleString()}
                    </p>
                  </div>
                  <button
                    onClick={() => removeItem(item.cartId)}
                    className="opacity-0 group-hover:opacity-100 p-1 text-muted-foreground hover:text-destructive transition-all"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-3">
              <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded-full">
                <ShoppingCart className="h-6 w-6 text-muted-foreground" />
              </div>
              <p className="text-sm text-muted-foreground">Your cart is empty.</p>
              <Button variant="link" size="sm" className="text-amber-600">Start browsing</Button>
            </div>
          )}
        </ScrollArea>
        <Separator />
        <div className="p-4 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-muted-foreground uppercase">Estimated Subtotal</span>
            <span className="text-lg font-display font-bold">${subtotal.toLocaleString()}</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" size="sm" onClick={clearCart} disabled={items.length === 0} className="text-xs">
              Clear Cart
            </Button>
            <Button size="sm" className="btn-gradient text-xs" disabled={items.length === 0}>
              View Quote
            </Button>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}