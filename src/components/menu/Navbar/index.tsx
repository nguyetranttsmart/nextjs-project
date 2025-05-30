"use client";

import { SideCart } from "@/components/cart";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaRegUserCircle, FaShoppingCart } from "react-icons/fa";
import styles from "./style.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <>
      <nav
        className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ""}`}
      >
        <div className={styles.container}>
          <div className={styles.logo}>
            <Link href="/">Ecommerce</Link>
          </div>

          <div
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </div>

          <div className={styles.menuWrapper}>
            <ul className={`${styles.menu} ${menuOpen ? styles.menuOpen : ""}`}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/products">Products</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
          </div>
          <div className={styles.rightIcons}>
            <button
              onClick={() => setShowCart(true)}
              className={styles.iconLink}
            >
              <FaShoppingCart />
            </button>
            <Link href="/login" className={styles.iconLink}>
              <FaRegUserCircle />
            </Link>
          </div>
        </div>
      </nav>
      {showCart && <SideCart onClose={() => setShowCart(false)} />}
    </>
  );
}
