import connectDB from "@/utils/connectDB";
import { StoreDashboardProduct } from "@/utils/models/product";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await connectDB();
  } catch (error) {
    console.log("Cannot connect to DB!", error);
    return NextResponse.json(
      { msg: "Server Error!", success: false },
      { status: 500 }
    );
  }

  try {
    const products = await StoreDashboardProduct.find().select(["category"]);
    const categories = [
      ...new Set(products.map((p) => p.category.toLowerCase())),
    ];

    return NextResponse.json(
      { msg: "Fetch Succedd", success: true, categories },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { msg: "Server Error!", success: false },
      { status: 500 }
    );
  }
}
