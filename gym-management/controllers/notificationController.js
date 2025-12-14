import Notification from "../models/Notification.js";
import Member from "../models/Member.js";

export const generateMonthlyNotifications = async (req, res) => {
  try {
    const month = new Date().toLocaleString("default", { month: "long", year: "numeric" });

    const members = await Member.find({ status: "active" });

    for (const member of members) {
      const exists = await Notification.findOne({
        member: member._id,
        month
      });

      if (!exists) {
        await Notification.create({
          member: member._id,
          month,
          message: `Monthly fee of ₹${member.feeAmount} is due for ${month}`
        });
      }
    }

    res.status(201).json({ message: "Monthly notifications generated" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMemberNotifications = async (req, res) => {
  try {
    const { memberId } = req.params;

    const notifications = await Notification.find({ member: memberId })
      .sort({ createdAt: -1 });

    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
