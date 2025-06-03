'use client';

import { ReactNode } from "react";
import { CartProvider } from  "@/app/context/cart/CartProvider"

export default function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      {children}
    </CartProvider>
  );
}
