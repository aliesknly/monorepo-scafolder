import mongoose from "mongoose";
import { UserEntity } from "@repo/app-modules/user";

const UserSchema = new mongoose.Schema<UserEntity>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
  },
  { timestamps: true }
);

export const UserModel = mongoose.model<UserEntity>("user", UserSchema);
