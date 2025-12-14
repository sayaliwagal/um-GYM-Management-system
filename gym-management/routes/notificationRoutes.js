import express from "express";
import {
  generateMonthlyNotifications,
  getMemberNotifications
} from "../controllers/notificationController.js";

const router = express.Router();

// Admin triggers this (monthly)
router.post("/generate", generateMonthlyNotifications);

// Member views notifications
router.get("/member/:memberId", getMemberNotifications);

export default router;
