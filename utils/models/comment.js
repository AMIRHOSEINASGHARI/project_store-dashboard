const { Schema, models, model } = require("mongoose");

const commentSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  answer: { type: String, default: "" },
  productId: { type: Schema.Types.ObjectId, ref: "StoreDashboardProduct" },
  senderId: { type: Schema.Types.ObjectId, ref: "StoreShopUser" },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutabale: true,
  },
});

export const StoreShopComment =
  models?.StoreShopComment || model("StoreShopComment", commentSchema);
