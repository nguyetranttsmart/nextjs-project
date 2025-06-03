import { notFound } from "next/navigation";
import ProductInfomation from "@/components/products/ProductInformation"; 

interface Product {
  _id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  imageUrl: string;
}

interface PageProps {
  params: {
    slug: string;
  };
}

async function getProduct(slug: string): Promise<Product | null> {
  const res = await fetch(`http://localhost:3000/api/products/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) return null;

  return res.json();
}

export default async function ProductDetailPage({ params }: PageProps) {
  const product = await getProduct(params.slug);

  if (!product) return notFound();

  return <ProductInfomation product={product} />;
}