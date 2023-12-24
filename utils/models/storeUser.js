const { Schema, models, model } = require("mongoose");

const userSchema = new Schema({
  username: String,
  displayName: String,
  password: String,
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutabale: true,
  },
});

export const StoreShopUser =
  models?.StoreShopUser || model("StoreShopUser", userSchema);
