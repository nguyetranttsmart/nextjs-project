    import { NextResponse } from "next/server";
    import clientPromise from "@/app/lib/mongodb";
    import { ObjectId } from "mongodb";

    export async function GET(
    req: Request,
    { params }: { params: { slug: string } }
    ) {
    try {
        const client = await clientPromise;
        const db = client.db(); 
        const collection = db.collection("products");

        const product = await collection.findOne({
        slug: params.slug 
        });

        if (!product) {
        return NextResponse.json({ error: "Product not found" }, { status: 404 });
        }

        return NextResponse.json(product);
    } catch (error) {
        console.error("❌ Error fetching product:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
    }
