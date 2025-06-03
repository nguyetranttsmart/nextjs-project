"use client";
import { useCart } from "@/app/hook/CartContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import styles from "./style.module.css";
import {CartItem} from "@/components/cart";

interface Props {
  onClose: () => void;
}
export default function SideCart({ onClose }: Props) {
  const {cart: cartItems, updateQuantity, removeFromCart} = useCart();
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );


  const router = useRouter();

  const handleQuantityChange = (id: string, delta: number) => {
    const item = cartItems.find(i => i.id === id);
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
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.cart} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2>Your Cart</h2>
          <button className={styles.closeBtn} onClick={onClose}>
            <IoClose size={24} />
          </button>
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
                <button
                  className={styles.checkoutBtn}
                  onClick={() => {
                    onClose();
                    router.push("/cart");
                  }}
                >
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
