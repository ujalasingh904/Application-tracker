import { jobModel } from "../models/job.model.js"
import { usersJobsModel } from "../models/usersJob.model.js";

export const jobData = async (req, res) => {
    const { companyName, jobRole, platform, dateApplied, status } = req.body;
    try {

        const userId = req.user._id;
        if (!userId)
            throw new Error("User not found")

        let user = await usersJobsModel.findOne({
            participant: userId
        })

        if (!user) {
            user = await usersJobsModel.create({
                participant: userId
            })
        }
        const newJob = new jobModel({ companyName, jobRole, platform, dateApplied, status })

        if (newJob) {
            user.userjobs.push(newJob._id);

            await Promise.all([newJob.save(), user.save()])
            res.status(201).json(newJob);
        } else {
            res.status(400).json({ message: "Something went wrong!" })
        }
    }
    catch (error) {
        console.log("error in jobData controller", error.message);
        res.status(500).json({ error: error.message });
    }

}

export const getAllJobs = async (req, res) => {
    try {

        const userId = req.user._id;
        if (!userId) {
            throw new Error("User not found")
        }

        const user = await usersJobsModel.findOne({ participant: userId }).populate("userjobs")

        if(!user){
            return res.status(200).json([]);
        }

        return res.status(200).json(user.userjobs);
    } catch (error) {
        console.log("error in getAllJobs controller", error.message);
        res.status(500).json({ error: error.message });
    }
}



