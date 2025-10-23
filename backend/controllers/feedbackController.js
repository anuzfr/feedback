import Feedback from "../models/Feedback.js";
import User from "../models/User.js";

export const submitFeedback = async (req, res) => {
  const { username } = req.params;
  const { message, from } = req.body;

  const user = await User.findOne({ username });
  if (!user) return res.status(404).json({ message: "User not found" });

  const feedback = await Feedback.create({
    toUser: user._id,
    message,
    from: from || "Anonymous",
  });

  res.json(feedback);
};

export const getMyFeedback = async (req, res) => {
  const feedback = await Feedback.find({ toUser: req.user._id }).sort({ createdAt: -1 });
  res.json(feedback);
};
