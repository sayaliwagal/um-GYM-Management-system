import Bill from "../models/Bill.js";
import mongoose from "mongoose";
// CREATE BILL


export const createBill = async (req, res) => {
  try {
    const { member } = req.body;

    if (!mongoose.Types.ObjectId.isValid(member)) {
      return res.status(400).json({ message: "Invalid Member ID" });
    }

    const bill = await Bill.create(req.body);
    res.status(201).json({ message: "Bill created", bill });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// GET ALL BILLS
export const getBills = async (req, res) => {
  try {
    const bills = await Bill.find().populate("member", "name email phone");
    res.status(200).json(bills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// GET BILLS BY MEMBER
export const getBillsByMember = async (req, res) => {
  try {
    const { memberId } = req.params;

    const bills = await Bill.find({ member: memberId })
      .populate("member", "name email phone");

    if (bills.length === 0) {
      return res.status(404).json({ message: "No bills found for this member" });
    }

    res.status(200).json(bills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const exportBills = async (req, res) => {
  const bills = await Bill.find().populate("member");

  let csv = "Member Name,Email,Amount,Date\n";

  bills.forEach((b) => {
    csv += `${b.member?.name},${b.member?.email},${b.amount},${b.createdAt}\n`;
  });

  res.header("Content-Type", "text/csv");
  res.attachment("bills-report.csv");
  res.send(csv);
};
