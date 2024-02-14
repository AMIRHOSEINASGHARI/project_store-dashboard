const { Schema, models, model } = require("mongoose");

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  displayName: { type: String, required: true },
  password: { type: String, required: true },
  avatar: { type: String, default: "" },
  phoneNumber: { type: Number, default: 0 },
  address: { type: String, default: "" },
  orders: [{ type: Schema.Types.ObjectId, ref: "StoreShopOrder", default: [] }],
  likes: [{ type: Schema.Types.ObjectId, ref: "StoreShopLike", default: [] }],
  comments: [
    { type: Schema.Types.ObjectId, ref: "StoreShopComment", default: [] },
  ],
  cart: {
    selectedItems: { type: Array, default: [] },
    totalProducts: { type: Number, default: 0 },
    totalPrice: { type: Number, default: 0 },
    totalDiscountPrice: { type: Number, default: 0 },
    checkout: {
      status: { type: Boolean, default: false },
      date: {
        type: Date,
        default: "",
        immutabale: false,
      },
    },
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutabale: true,
  },
});

export const StoreShopUser =
  models?.StoreShopUser || model("StoreShopUser", userSchema);
