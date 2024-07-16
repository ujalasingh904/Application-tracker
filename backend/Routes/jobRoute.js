import { Router } from "express"; 
import { getAllJobs, jobData } from "../controllers/jobData.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";
const router = Router()


router.post("/jobData", protectRoute , jobData);
router.get("/getalljobs", protectRoute , getAllJobs);


export default router 