import express from "express";
import { exportBills } from "../controllers/reportController.js";

const router = express.Router();

// ✅ EXPORT REPORT
router.get("/export", exportBills);

export default router;
