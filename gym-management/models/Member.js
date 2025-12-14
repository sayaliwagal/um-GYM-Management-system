import mongoose from "mongoose";

const memberSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    membershipType: {
      type: String,
      enum: ["monthly", "quarterly", "yearly"],
      default: "monthly",
    },
    joinDate: {
      type: Date,
      default: Date.now,
    },
    feeAmount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
    feePackage: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "FeePackage"
}

  },
  { timestamps: true }
);

export default mongoose.model("Member", memberSchema);
