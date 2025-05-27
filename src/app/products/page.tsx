import { Product } from "./type";
import styles from './Product.module.css';
import ProductItem from "@/components/products/ProductItem"



export default async function Page() {
  const res = await fetch('http://localhost:3000/api/products', { cache: 'no-store' });
  const products: Product[] = await res.json();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Products</h1>
      <div className={styles.grid}>
        {products.map((product, index) => (
          <ProductItem key={index} product={product} />
        ))}
      </div>
    </div>
  );
}
