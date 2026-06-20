import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  type: 'order' | 'delivery';
  image: string;
  unitOption?: string; // For delivery items (e.g., "500g")
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>, quantity?: number) => void;
  removeItem: (id: string, unitOption?: string) => void;
  updateQuantity: (id: string, quantity: number, unitOption?: string) => void;
  clearCart: () => void;
  getSubtotal: () => number;
  getItemCount: () => number;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addItem = (newItem: Omit<CartItem, 'quantity'>, quantity = 1) => {
    setItems(currentItems => {
      const existingItemIndex = currentItems.findIndex(
        item => item.id === newItem.id && item.unitOption === newItem.unitOption
      );

      if (existingItemIndex > -1) {
        const updated = [...currentItems];
        updated[existingItemIndex].quantity += quantity;
        return updated;
      }

      return [...currentItems, { ...newItem, quantity }];
    });
  };

  const removeItem = (id: string, unitOption?: string) => {
    setItems(currentItems => 
      currentItems.filter(item => !(item.id === id && item.unitOption === unitOption))
    );
  };

  const updateQuantity = (id: string, quantity: number, unitOption?: string) => {
    if (quantity <= 0) {
      removeItem(id, unitOption);
      return;
    }
    
    setItems(currentItems =>
      currentItems.map(item =>
        item.id === id && item.unitOption === unitOption
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => setItems([]);

  const getSubtotal = () => items.reduce((total, item) => total + (item.price * item.quantity), 0);
  
  const getItemCount = () => items.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider value={{
      items,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      getSubtotal,
      getItemCount,
      isCartOpen,
      setIsCartOpen
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
