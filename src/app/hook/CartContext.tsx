import React, { createContext, useContext } from "react";
import { ICartItem } from "@/components/cart";

export interface CartContextType {
  cart: ICartItem[];
  addToCart: (product: ICartItem) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
