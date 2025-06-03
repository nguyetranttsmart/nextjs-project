"use client";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { ICartItem } from "@/components/cart";
import { CartContext, CartContextType } from "@/app/hook/CartContext";

const CART_KEY = "cart";

function getCartFromCookies(): ICartItem[] {
  try {
    const cart = Cookies.get(CART_KEY);
    return cart ? JSON.parse(cart) : [];
  } catch {
    return [];
  }
}

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<ICartItem[]>(getCartFromCookies());

  useEffect(() => {
    Cookies.set(CART_KEY, JSON.stringify(cart), { expires: 7 });
  }, [cart]);

  const addToCart: CartContextType["addToCart"] = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const updateQuantity: CartContextType["updateQuantity"] = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: quantity > 0 ? quantity : 1 } : item
      )
    );
  };

  const removeFromCart: CartContextType["removeFromCart"] = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart: CartContextType["clearCart"] = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQuantity, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
