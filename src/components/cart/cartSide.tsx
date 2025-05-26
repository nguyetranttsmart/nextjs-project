'use client';
import React from 'react';
import { useEffect, useState } from 'react';
import { getCart } from './cart';
import { CartItem } from "./cart";
import styles from "./CartSide.module.css";
import { IoClose } from 'react-icons/io5';



interface Props{
    onClose: () => void;
}
export default function cartSide({onClose}: Props) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const totalPrice = cartItems.reduce(
  (total, item) => total + item.price * item.quantity,
  0
);
    useEffect(()=>{
        setCartItems(getCart());
    },[])
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
        <div key={item.id} className={styles.item}>
          <img src={item.imageUrl} alt={item.title} />
          <div>
            <p>{item.title}</p>
            <p>${item.price.toFixed(2)} × {item.quantity}</p>
          </div>
        </div>
      ))}

      <div className={styles.totalPrice}>
        <p><strong>Total:</strong> ${totalPrice.toFixed(2)}</p>
      </div>
    </>
  )}
</div>
      </div>
    </div>
  );
}