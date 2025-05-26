'use client';

import { useState } from 'react';
import styles from './style.module.css';
import Link from 'next/link';
import { FaShoppingCart,FaRegUserCircle } from "react-icons/fa";
import CartSide  from '@/components/cart/cartSide';

export default function Navbar()  {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);

  return (
     <>
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">Ecommerce</Link>
        </div>

        <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
          <span />
          <span />
          <span />
        </div>

        <div className={styles.menuWrapper}>
          <ul className={`${styles.menu} ${menuOpen ? styles.menuOpen : ''}`}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </div>
         <div className={styles.rightIcons}>
          <button onClick={()=>setShowCart(true)} className={styles.iconLink}>
            <FaShoppingCart />
          </button>
          <Link href="/login" className={styles.iconLink}>
            <FaRegUserCircle/>
          </Link>
        </div>  
      </div>
    </nav>
    {showCart && <CartSide onClose={() => setShowCart(false)} />}
  </>
  );
    
}
