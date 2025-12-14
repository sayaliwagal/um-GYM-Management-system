import mongoose from "mongoose";

const feePackageSchema = new mongoose.Schema({
  name: String,
  duration: String,
  amount: Number
});

export default mongoose.model("FeePackage", feePackageSchema);
