import { usersJobsModel } from "../models/usersJob.model.js"
import { jobModel } from "../models/job.model.js"

export const updateJobData = async (req, res) => {
    try {
        const updateJobId = req.params.id

        const job = await jobModel.findById(updateJobId);
        if (!job)
            return res.status(404).json({ message: "Job not found" })

        const updateStatus = await jobModel.findByIdAndUpdate(
            updateJobId,
            {
                $set: {
                    status: req.body.status
                }
            }, { new: true }
        )
        // res.status(200).json({ message: "Job updated successfully", updateStatus })
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
        console.log("error in updateJobData controller", error.message);
        return res.status(500).json({ message: error.message })
    }
}

export const deleteJobData = async (req, res) => {
    try {
        const deleteJobId = req.params.id;
        const userId = req.user._id;
        if (!userId) {
            return res.status(404).json({ error: 'user not found ' });
        }

        const result = await usersJobsModel.updateOne(
            { participant: userId },
            { $pull: { userjobs: deleteJobId } }
        );

        if (result.nModified === 0) {
            return res.status(404).json({ error: 'Job not found or already removed' });
        }

        await jobModel.findByIdAndDelete(deleteJobId);
        // res.status(200).json({ message: "Job Deleted Successfully" })
         

        const user = await usersJobsModel.findOne({ participant: userId }).populate("userjobs")

        if(!user){
            return res.status(200).json([]);
        }

        return res.status(200).json(user.userjobs);

    } catch (error) {
        console.log("error in deleteJobData controller", error.message);
        res.status(500).json({
            message: "Error in deleting job data" + error.message
        })
    }

}


