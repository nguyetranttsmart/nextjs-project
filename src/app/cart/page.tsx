'use client';
import React from 'react';
import { useEffect, useState } from 'react';
import { getCart, updateQuantity, removeFromCart } from "@/components/cart/cart";
import { CartItem } from "@/components/cart/cart";
import styles from "./CartPage.module.css";


export default function page()  {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
        const totalPrice = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const handleQuantityChange = (id: string, delta: number) => {
        cartItems.map(item => {
          if (item.id === id) {
            const newQuantity = item.quantity + delta;
            if (newQuantity >= 1) {
              updateQuantity(id, newQuantity);
              return { ...item, quantity: newQuantity };
              
            }
          }
          return item;
        });
         setCartItems(getCart())
      };
       const handleRemove = (id: string) => {
        removeFromCart(id);
        setCartItems(getCart());
      };
        useEffect(()=>{
            setCartItems(getCart());
        },[])
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
        <div key={item.id} className={styles.item}>
          <img src={item.imageUrl} alt={item.title} />
          <div>
            <p>{item.title}</p>
            <p>${item.price.toFixed(2)} × {item.quantity}</p>
          </div>
          <div className={styles.quantityControls}>
            <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
             <span>{item.quantity}</span>
              <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
               <button className={styles.deleteBtn} onClick={() => handleRemove(item.id)}>x</button>

                    </div>
        </div>
        
      ))}

            <div className={styles.totalPrice}>
              <p><strong>Total:</strong> ${totalPrice.toFixed(2)}</p>
            </div>
            <div className={styles.checkoutContainer}>
        <button
          className={styles.checkoutBtn}
          
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

