import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Machine } from '@/lib/machine-data';
import { v4 as uuidv4 } from 'uuid';
export interface CartItem extends Machine {
  cartId: string;
}
interface CartState {
  items: CartItem[];
  addItem: (machine: Machine) => void;
  removeItem: (cartId: string) => void;
  clearCart: () => void;
}
export const useCart = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (machine) =>
        set((state) => ({
          items: [...state.items, { ...machine, cartId: uuidv4() }],
        })),
      removeItem: (cartId) =>
        set((state) => ({
          items: state.items.filter((item) => item.cartId !== cartId),
        })),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: 'kinetix-cart',
    }
  )
);
// Helper selectors for primitives (Zustand Law)
export const useCartItems = () => useCart((s) => s.items);
export const useCartAddItem = () => useCart((s) => s.addItem);
export const useCartRemoveItem = () => useCart((s) => s.removeItem);
export const useCartClear = () => useCart((s) => s.clearCart);
export const useCartTotals = () => {
  const items = useCart((s) => s.items);
  const count = items.length;
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  return { count, subtotal };
};