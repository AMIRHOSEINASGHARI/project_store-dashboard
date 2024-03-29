import { authOptions } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import { StoreDashboardProduct } from "@/utils/models/product";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req) {
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

  const form = await req.json();

  try {
    await StoreDashboardProduct.create({
      image: form.image,
      title: form.title,
      price: Number(form.price),
      stock: Number(form.stock),
      category: form.category,
      brand: form.brand,
      description: form.description,
      discount: Number(form.discount),
      keywords: form.keywords,
    });
    return NextResponse.json(
      { msg: "Product Created🖐", success: true },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { msg: "Server Error2", success: false },
      { status: 500 }
    );
  }
}
