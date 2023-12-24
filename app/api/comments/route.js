import { authOptions } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import { StoreShopComment } from "@/utils/models/comment";
import { StoreDashboardProduct } from "@/utils/models/product";
import { StoreShopUser } from "@/utils/models/storeUser";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
  } catch (error) {
    console.log("Cannot connect to DB!", error);
    return NextResponse.json(
      { msg: "Server Error!", success: false },
      { status: 500 }
    );
  }

  const session = await getServerSession(authOptions);

  //* CHECKING SESSION
  if (!session) {
    return NextResponse.json(
      { msg: "Unauthorized!", success: false },
      { status: 404 }
    );
  }

  //* CHECKING CURRENT USER ROLL
  if (session.user.roll === "USER") {
    return NextResponse.json(
      { msg: "Access Blocked!", success: false },
      { status: 400 }
    );
  }

  try {
    const comments = await StoreShopComment.find()
      .populate({
        path: "productId",
        model: StoreDashboardProduct,
        select: [
          "brand",
          "category",
          "createdAt",
          "discount",
          "image",
          "orders",
          "price",
          "stock",
          "title",
          "_id",
        ],
      })
      .populate({
        path: "senderId",
        model: StoreShopUser,
        select: ["createdAt", "displayName", "username", "_id"],
      });

    return NextResponse.json(
      { msg: "Fetch Succeed", success: true, comments },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { msg: "Access Blocked!", success: false },
      { status: 400 }
    );
  }
}
