"use client";
import ProductForm from '@/components/products/ProductForm';
import { ChangeEvent, FormEvent, useState } from 'react';
import styles from "./CreateProduct.module.css";

interface ProductFormState {
  title: string;
  description: string;
  price: number | '';
  compareAtPrice: number | '';
  imageUrl: string;
}

export default function CreateProductPage() {
  const [form, setForm] = useState<ProductFormState>({
    title: '',
    description: '',
    price: '',
    compareAtPrice: '',
    imageUrl: '',
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]:
        name === 'price' || name === 'compareAtPrice'
          ? value === ''
            ? ''
            : Number(value)
          : value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    if (
      !form.title ||
      form.price === '' ||
      form.price <= 0 ||
      form.compareAtPrice === '' ||
      form.compareAtPrice < 0 ||
      !form.imageUrl
    ) {
      setMessage('Vui lòng nhập đầy đủ và hợp lệ các trường bắt buộc!');
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage('Tạo sản phẩm thành công!');
        setForm({
          title: '',
          description: '',
          price: '',
          compareAtPrice: '',
          imageUrl: '',
        });
      } else {
        setMessage(data.message || 'Có lỗi xảy ra');
      }
    } catch {
      setMessage('Lỗi mạng hoặc server');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
    <div style={{ maxWidth: 500, margin: '2rem auto', padding: '0 1rem' }}>
      <h1>Tạo sản phẩm mới</h1>
      <ProductForm
        form={form}
        onChange={handleChange}
        onSubmit={handleSubmit}
        loading={loading}
        message={message}
      />
      </div>
      </div>
  );
}
