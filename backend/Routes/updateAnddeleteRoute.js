import { Router } from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import { deleteJobData, updateJobData } from "../controllers/updateAndDelete.controller.js";
const router = Router();

router.post("/update/:id", protectRoute, updateJobData);
router.delete("/delete/:id", protectRoute, deleteJobData);

export default router