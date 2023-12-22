const { Schema, models, model } = require("mongoose");

const productSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  category: { type: String, required: true },
  colors: { type: [String], required: true },
  keywords: { type: [String], required: true },
  orders: [{ type: Schema.Types.ObjectId, ref: "OnlineShopUser", default: [] }],
  brand: { type: String, required: true },
  likes: [
    { type: Schema.Types.ObjectId, ref: "StoreDashboardUser", default: [] },
  ],
  comments: [
    { type: Schema.Types.ObjectId, ref: "StoreDashboardComment", default: [] },
  ],
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutabale: true,
  },
});

export const StoreDashboardProduct =
  models?.StoreDashboardProduct ||
  model("StoreDashboardProduct", productSchema);
