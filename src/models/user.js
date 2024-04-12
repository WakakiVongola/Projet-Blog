import mongoose from "mongoose";
import { STRING_LITERAL_DROP_BUNDLE } from "next/dist/shared/lib/constants";

const { Schema } = mongoose;

const userSchema = new Schema(
    {
        email: {
            type: String,
            unique: true,
            required: true
        }, 
        password: {
            type: String,
            required: false,
        },
    },
    { timestamps: true }
);

export default mongoose.models.User || mongoose.models("User", userSchema);