import React from 'react'
import styles from "./CartItem.module.css";
import { ICartItem } from "@/components/cart/type";

interface CartItemProps {
  item: ICartItem;
  onQuantityChange: (id: string, delta: number) => void;
  onRemove: (id: string) => void; 
}

export default function CartItem({ item, onQuantityChange, onRemove }: CartItemProps) {
  const subTotal = (quantity: number, price: number) => {
    return quantity * price;
  }
  return (
    <div className={styles.item}>
      <div className={styles.cartInfo}>
      <img src={item.imageUrl} alt={item.title} />
        <p>{item.title}</p>
        <p>${item.price.toFixed(2)} </p>
      </div>
      <div className={styles.quantityControls}>
        <button onClick={() => onQuantityChange(item.id, -1)}>-</button>
        <input
          type="number"
          min={1}
          value={item.quantity}
          onChange={(e) => {
            const value = parseInt(e.target.value);
            if (!isNaN(value) && value >= 1) {
              onQuantityChange(item.id, value - item.quantity);
            }
          }}
          className={styles.quantityInput}
        />
        <button onClick={() => onQuantityChange(item.id, 1)}>+</button>
        <p className="cartSubtotal">
          ${subTotal(item.quantity, item.price).toFixed(2)}
        </p>
        <button className={styles.deleteBtn} onClick={() => onRemove(item.id)}>x</button>
      </div>
    </div>
  );
}