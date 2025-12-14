import express from "express";
import { exportBills } from "../controllers/billController.js";

const router = express.Router();

router.get("/export", exportBills);

export default router;
