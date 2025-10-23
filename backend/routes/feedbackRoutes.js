import express from "express";
import { submitFeedback, getMyFeedback } from "../controllers/feedbackController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/:username", submitFeedback); // public
router.get("/my-feedback", protect, getMyFeedback); // private

export default router;
