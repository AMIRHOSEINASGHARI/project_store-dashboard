import connectDB from "@/utils/connectDB";
import { StoreShopComment } from "@/utils/models/comment";
import { StoreDashboardProduct } from "@/utils/models/product";
import { StoreShopUser } from "@/utils/models/storeUser";
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
  console.log(productId);

  try {
    const product = await StoreDashboardProduct.findById(productId).populate({
      path: "comments",
      model: StoreShopComment,
      populate: {
        path: "senderId",
        model: StoreShopUser,
        select: ["_id", "displayName"],
      },
    });

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
