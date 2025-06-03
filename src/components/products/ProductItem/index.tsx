"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "@/app/hook/CartContext";
import { Product } from "@/app/products/type";
import styles from "./ProductItem.module.css";
import { SideCart } from "@/components/cart";

interface Props {
  product: Product;
}

export default function ProductItem({ product }: Props) {
  const { addToCart } = useCart();
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
  };
  return (
    <>
      <div className={styles.card}>
        <Link href={`/collections/${product.slug}`} className={styles.linkArea}>
          <div className={styles.imageWrapper}>
            <img
              src={product.imageUrl}
              alt={product.title}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h2 className={styles.name}>{product.title}</h2>
          </div>
        </Link>

        <div className={styles.bottomArea}>
          <div className={styles.pricing}>
            <span className={styles.price}>${product.price.toFixed(2)}</span>
            <span className={styles.compareAt}>
              ${product.compareAtPrice.toFixed(2)}
            </span>
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
