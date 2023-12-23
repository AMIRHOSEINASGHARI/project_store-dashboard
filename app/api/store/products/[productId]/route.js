import connectDB from "@/utils/connectDB";
import { StoreDashboardProduct } from "@/utils/models/product";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    await connectDB();
  } catch (error) {
    console.log("Cannot connect to DB!", error);
    return NextResponse.json(
      { msg: "Server Error!", success: false },
      { status: 500 }
    );
  }

  const productId = params.productId;

  try {
    const product = await StoreDashboardProduct.findById(productId);

    return NextResponse.json(
      { msg: "Product fetched!", success: true, product },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { msg: "Server Error!", success: false },
      { status: 500 }
    );
  }
}
