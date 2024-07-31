import axios from "axios"
import { useJobsContext } from "../context/JobsContext"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"

const getUserJobs = () => {
    const [loading, setloading] = useState(false)
    const { setJobsArray } = useJobsContext()

    useEffect(() => {
        const jobsDisplay = async () => {
            setloading(true)
            try {
                const url = `${import.meta.env.VITE_BASE_URL}/api/job/getalljobs`; 
                const { data: res } = await axios.get(url, { withCredentials: true });
                if (res.error)
                    throw new Error(res.error)
 
                setJobsArray(res); 
                toast.success("fetched all jobs successfully");

            } catch (error) {
                toast.error(error.message)
            } finally {
                setloading(false)
            }
        }
        jobsDisplay();
    }, [])

    return { loading};
}

export default getUserJobs