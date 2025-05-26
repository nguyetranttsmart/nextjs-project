'use client';
import React, { useState } from 'react';
import { Product } from "@/app/products/type";
import { addToCart } from "@/components/cart/cart";
import styles from './ProductItem.module.css';
import CartSide from '@/components/cart/cartSide';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // import CSS cho toast

interface Props {
  product: Product;
}

export default function ProductItem({ product }: Props) {
  const [showCart, setShowCart] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      id: product.title,
      title: product.title,
      price: product.price,
      imageUrl: product.imageUrl,
      quantity: 1,
    });

    setShowCart(true);
    alert("Product Added to cart")
  };

  return (
    <>
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <img src={product.imageUrl} alt={product.title} className={styles.image} />
        </div>
        <div className={styles.content}>
          <h2 className={styles.name}>{product.title}</h2>
          <div className={styles.pricing}>
            <span className={styles.price}>${product.price.toFixed(2)}</span>
            <span className={styles.compareAt}>${product.compareAtPrice.toFixed(2)}</span>
          </div>
          <button className={styles.button} onClick={handleAddToCart}>Add to cart</button>
        </div>
      </div>

      {showCart && <CartSide onClose={() => setShowCart(false)} />}
     
    </>
  );
}
