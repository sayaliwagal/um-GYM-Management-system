import Member from "../models/Member.js";
import logger from "../utils/logger.js";

// ADD MEMBER
export const addMember = async (req, res) => {
try {
    const member = await Member.create(req.body);

    // ✅ LOG SUCCESS
    logger.info(`Member created: ${member._id}`);

    res.status(201).json(member);
  } catch (error) {
    // ❌ LOG ERROR
    logger.error(`Add member failed: ${error.message}`);

    res.status(500).json({ message: error.message });
  }

};

// GET ALL MEMBERS
export const getMembers = async (req, res) => {
  try {
    const members = await Member.find();
    res.json(members);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE MEMBER
export const updateMember = async (req, res) => {
  try {
    const updated = await Member.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    logger.info(`Member updated: ${req.params.id}`);

    res.json(updated);
  } catch (error) {
    logger.error(`Update member failed: ${error.message}`);
    res.status(500).json({ message: error.message });
  }
};


// DELETE MEMBER
export const deleteMember = async (req, res) => {
  try {
    await Member.findByIdAndDelete(req.params.id);

    logger.info(`Member deleted: ${req.params.id}`);

    res.json({ message: "Member deleted" });
  } catch (error) {
    logger.error(`Delete member failed: ${error.message}`);
    res.status(500).json({ message: error.message });
  }
};

