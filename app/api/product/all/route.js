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
    const products = await StoreDashboardProduct.find().sort({ createdAt: -1 });

    return NextResponse.json(
      { msg: "Fetch Succedd", success: true, products },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { msg: "Server Error!", success: false },
      { status: 500 }
    );
  }
}
