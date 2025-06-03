"use client";
import { ChangeEvent, FormEvent, useRef, useState } from "react";

interface ProductFormProps {
  form: {
    title: string;
    description: string;
    price: number | '';
    compareAtPrice: number | '';
    imageUrl: string;
  };
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: FormEvent) => void;
  loading: boolean;
  message: string | null;
}

export default function ProductForm({
  form,
  onChange,
  onSubmit,
  loading,
  message,
}: ProductFormProps) {

  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ml_default"); // Thay bằng preset của bạn

    try {
      const res = await fetch("https://api.cloudinary.com/v1_1/dyeq1hzrg/image/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.secure_url) {
        onChange({
          target: {
            name: "imageUrl",
            value: data.secure_url,
          },
        } as any);
      }
    } catch (error) {
      console.error("Lỗi upload ảnh:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div style={{ marginBottom: 12 }}>
        <label htmlFor="title">Tiêu đề</label>
        <input
          id="title"
          name="title"
          type="text"
          value={form.title}
          onChange={onChange}
          required
          placeholder="Nhập tiêu đề sản phẩm"
          style={{ width: '100%', padding: 8, marginTop: 4 }}
        />
      </div>

      <div style={{ marginBottom: 12 }}>
        <label htmlFor="description">Mô tả</label>
        <textarea
          id="description"
          name="description"
          value={form.description}
          onChange={onChange}
          rows={4}
          placeholder="Mô tả sản phẩm (tùy chọn)"
          style={{ width: '100%', padding: 8, marginTop: 4 }}
        />
      </div>

      <div style={{ marginBottom: 12 }}>
        <label htmlFor="price">Giá</label>
        <input
          id="price"
          name="price"
          type="number"
          value={form.price}
          onChange={onChange}
          required
          min={0}
          placeholder="Nhập giá sản phẩm"
          style={{ width: '100%', padding: 8, marginTop: 4 }}
        />
      </div>

      <div style={{ marginBottom: 12 }}>
        <label htmlFor="compareAtPrice">Giá so sánh</label>
        <input
          id="compareAtPrice"
          name="compareAtPrice"
          type="number"
          value={form.compareAtPrice}
          onChange={onChange}
          required
          min={0}
          placeholder="Nhập giá so sánh"
          style={{ width: '100%', padding: 8, marginTop: 4 }}
        />
      </div>

      <div style={{ marginBottom: 12 }}>
        <label htmlFor="imageFile">Chọn ảnh sản phẩm</label>
        <input
          id="imageFile"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          ref={fileInputRef}
          style={{ width: '100%', padding: 8, marginTop: 4 }}
        />
        {uploading && <p>Đang upload ảnh...</p>}
      </div>

      {form.imageUrl && (
        <div style={{ marginBottom: 12 }}>
          <p>Ảnh xem trước:</p>
          <img src={form.imageUrl} alt="Preview" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      )}

      <button
        type="submit"
        disabled={loading || uploading}
        style={{
          padding: '10px 20px',
          backgroundColor: '#0070f3',
          color: 'white',
          border: 'none',
          cursor: loading || uploading ? 'not-allowed' : 'pointer',
        }}
      >
        {loading ? 'Đang gửi...' : uploading ? 'Đang upload ảnh...' : 'Tạo sản phẩm'}
      </button>

      {message && <p style={{ marginTop: 12 }}>{message}</p>}
    </form>
  );
}
