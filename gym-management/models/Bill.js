import mongoose from "mongoose";

const billSchema = new mongoose.Schema(
  {
    member: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Member",
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    month: {
      type: String,
      required: true, // e.g. "March 2025"
    },
    status: {
      type: String,
      enum: ["paid", "unpaid"],
      default: "paid",
    },
    paymentDate: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }

);

export default mongoose.model("Bill", billSchema);
