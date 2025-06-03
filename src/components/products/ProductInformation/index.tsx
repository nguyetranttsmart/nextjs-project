"use client";
import React, { useState } from "react";
import styles from "./style.module.css";
import { useCart } from "@/app/hook/CartContext";
import { SideCart } from "@/components/cart";

interface Product {
  _id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  imageUrl: string;
}

interface ProductInformationProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductInformationProps) {
  const [showCart, setShowCart] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product.title,
      title: product.title,
      price: product.price,
      imageUrl: product.imageUrl,
      quantity: 1,
    });

    setShowCart(true);
  };
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>{product.title}</h1>

        {product.imageUrl && (
          <div className={styles.imageWrapper}>
            {" "}
            <img
              src={product.imageUrl}
              alt={product.title}
              className={styles.image}
            />
          </div>
        )}

        <p className={styles.description}>{product.description}</p>
        <div className={styles.content}>
          <div className={styles.pricing}>
            <div className={styles.price}>
              ${product.price.toLocaleString()}
            </div>

            {product.compareAtPrice &&
              product.compareAtPrice > product.price && (
                <div className={styles.comparePrice}>
                  ${product.compareAtPrice.toLocaleString()}
                </div>
              )}
          </div>

          <button className={styles.button} onClick={handleAddToCart}>
            Add to cart
          </button>
        </div>
      </div>
      {showCart && <SideCart onClose={() => setShowCart(false)} />}
    </>
  );
}
