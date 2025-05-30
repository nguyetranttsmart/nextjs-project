"use client";
import {
  getCart,
  ICartItem,
  removeFromCart,
  updateQuantity
} from "@/components/cart";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import styles from "./style.module.css";

interface Props {
  onClose: () => void;
}
export default function SideCart({ onClose }: Props) {
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );


  const router = useRouter();
    const subTotal = (quantity: number, price: number) => {
    return quantity * price;
  }
  const handleQuantityChange = (id: string, delta: number) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === id) {
        const newQuantity = item.quantity + delta;
        if (newQuantity >= 1) {
          updateQuantity(id, newQuantity);
          return { ...item, quantity: newQuantity };
        }
      }
      return item;
    });
    setCartItems(getCart());
  };
  const handleRemove = (id: string) => {
    removeFromCart(id);
    setCartItems(getCart());
  };
  useEffect(() => {
    setCartItems(getCart());
  }, []);
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
                    <p>
                      ${item.price.toFixed(2)} 
                    </p>
                  </div>
                  <div className={styles.quantityControls}>
                    <button onClick={() => handleQuantityChange(item.id, -1)}>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleQuantityChange(item.id, 1)}>
                      +
                    </button>
                    <p className="cartSubtotal">
                    $ {subTotal(
                      item.quantity,
                      item.price
                    ).toFixed(2)}
                  </p>
                    <button
                      className={styles.deleteBtn}
                      onClick={() => handleRemove(item.id)}
                    >
                      x
                    </button>
                    
                  </div>
                    
                </div>
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
