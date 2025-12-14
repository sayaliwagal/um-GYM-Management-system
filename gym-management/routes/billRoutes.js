import express from "express";
import {
  createBill,
  getBills,
  getBillsByMember
} from "../controllers/billController.js";

const router = express.Router();

router.post("/", createBill);
router.get("/", getBills);

// 👇 NEW ROUTE
router.get("/member/:memberId", getBillsByMember);

export default router;
