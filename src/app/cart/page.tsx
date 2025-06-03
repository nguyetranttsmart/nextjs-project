"use client";
import React from "react";
import { useCart } from "@/app/hook/CartContext";
import styles from "./CartPage.module.css";
import CartItem from "@/components/cart/CartItem";

export default function Page() {
  const { cart: cartItems, updateQuantity, removeFromCart } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleQuantityChange = (id: string, delta: number) => {
    const item = cartItems.find((i) => i.id === id);
    if (!item) return;

    const newQuantity = item.quantity + delta;
    if (newQuantity >= 1) {
      updateQuantity(id, newQuantity);
    }
  };

  const handleRemove = (id: string) => {
    removeFromCart(id);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.cart} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2>Your Cart</h2>
        </div>
        <div className={styles.body}>
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onQuantityChange={handleQuantityChange}
                  onRemove={handleRemove}
                />
              ))}
              <div className={styles.totalPrice}>
                <p>
                  <strong>Total:</strong> ${totalPrice.toFixed(2)}
                </p>
              </div>
              <div className={styles.checkoutContainer}>
                <button className={styles.checkoutBtn}>Checkout</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
