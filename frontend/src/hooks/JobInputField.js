import axios from "axios";
import { useState, useEffect } from 'react'
import toast from "react-hot-toast"
import { useJobsContext } from "../context/JobsContext";

const JobInputField = () => {
    const [loading, setLoading] = useState(false);
    const { jobsArray, setJobsArray } = useJobsContext()

    const setJobData = async (formData) => {
        const success = handleinputErrors({
            companyName: formData.companyName,
            jobRole: formData.jobRole,
            platform: formData.platform,
            dateApplied: formData.dateApplied,
            status: formData.status
        })
 
        if (!success) return;

        setLoading(true);
        try {

            // const url = `${import.meta.env.VITE_BASE_URL}/api/job/jobData`;
            const url = `https://application-tracker-nq3b.onrender.com/api/job/jobData`;
            const { data: res } = await axios.post(url, formData, { withCredentials: true })

            if (res.error) {
                throw new Error(res.error);
            }

            // console.log("Response:", res);
            // setJobsArray([...jobsArray , res]) 
            toast.success("jobData saved successfully in the database")

        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        } 
    }

    

    return { loading, setJobData }
}

export default JobInputField

function handleinputErrors({ companyName, jobRole, platform, dateApplied, status }) {

    if (!companyName || !jobRole || !platform || !dateApplied || !status) {
        toast.error("Please fill all the fields")
        return false
    }

    return true;
}