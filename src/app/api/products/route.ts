import { NextResponse } from "next/server";
import clientPromise from "@/app/lib/mongodb";
import { generateSlug } from "@/app/lib/generateSlug";

type Product = {
  title: string;
  description: string;
  price: number;
  compareAtPrice: number;
  imageUrl: string;
  slug: string;
};

// GET handler
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db();
    const products = await db.collection("products").find({}).toArray();
    return NextResponse.json(products);
  } catch (error) {
    console.error("❌ API error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// POST handler
export async function POST(request: Request) {
  try {
    const { title, description, price, compareAtPrice, imageUrl } =
      await request.json();

    if (!title || !price) {
      return NextResponse.json(
        { message: "Title and price are required" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db();
    const collection = db.collection("products");

    // ✅ Generate unique slug
    const baseSlug = generateSlug(title);
    let slug = baseSlug;
    let count = 1;
    while (await collection.findOne({ slug })) {
      slug = `${baseSlug}-${count}`;
      count++;
    }

    const newProduct: Product = {
      title,
      description,
      price,
      compareAtPrice,
      imageUrl,
      slug,
    };

    const result = await collection.insertOne(newProduct);

    return NextResponse.json(
      {
        message: "Product created successfully",
        product: { _id: result.insertedId, ...newProduct },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("❌ API error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
