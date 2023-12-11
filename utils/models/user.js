import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  username: String,
  displayName: String,
  password: String,
  avatar: { type: String, default: "" },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutabale: true,
  },
});

const StoreDashboardUser =
  models?.StoreDashboardUser || model("StoreDashboardUser", userSchema);

export default StoreDashboardUser;
