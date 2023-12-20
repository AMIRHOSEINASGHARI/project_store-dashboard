import { authOptions } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import { StoreDashboardProduct } from "@/utils/models/product";
import { getServerSession } from "next-auth";
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

  const session = await getServerSession(authOptions);

  //* CHECKING SESSION
  if (!session) {
    return NextResponse.json(
      { msg: "Unauthorized!", success: false },
      { status: 404 }
    );
  }

  try {
    const products = await StoreDashboardProduct.find();
    const { searchParams } = new URL(req.url);
    const pageNumber = searchParams.get("page");
    const limit = searchParams.get("limit");
    const productsLength = products.length;
    const remainingProducts = productsLength - (pageNumber - 1) * limit;

    if (remainingProducts > limit) {
      const returnedProucts = products.slice(
        (pageNumber - 1) * limit,
        pageNumber * limit
      );
      return NextResponse.json(
        { msg: "Fetch Succeed!", success: true, products: returnedProucts },
        { status: 200 }
      );
    } else {
      const returnedProucts = products.slice(
        (pageNumber - 1) * limit,
        productsLength
      );
      return NextResponse.json(
        {
          msg: "Fetch Succeed!",
          success: true,
          products: returnedProucts,
          isEnd: true,
        },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { msg: "Server Error!", success: false },
      { status: 500 }
    );
  }
}
