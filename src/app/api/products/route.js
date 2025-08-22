import { getDb } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { name, description, price } = await req.json();
  const db = await getDb();
  const result = await db
    .collection("products")
    .insertOne({ name, description, price });
  return NextResponse.json({ id: result.insertedId });
}

export async function GET(req) {
  const db = await getDb();
  const products = await db.collection("products").find().toArray();
  return NextResponse.json(products);
}
