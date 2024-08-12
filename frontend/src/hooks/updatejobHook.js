import axios from "axios"
import { useJobsContext } from "../context/JobsContext"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"

const updatejobHook = () => {

    const [updateLoading, setupdateLoading] = useState(false);
    const { setJobsArray } = useJobsContext()

    const updateJob = async (formData) => {
        setupdateLoading(true) 

        try {
            // const url = `${import.meta.env.VITE_BASE_URL}/api/u&d/update/${formData.id}`
            const url = `https://application-tracker-nq3b.onrender.com/api/u&d/update/${formData.id}`
            const { data: res } = await axios.post(url, formData, { withCredentials: true })
            if(res.error){
                throw new Error(res.error)
            }
            toast.success("Job updated successfully") 
            setJobsArray(res);
        } catch (error) {
           toast.error(error.message)
        } finally {
            setupdateLoading(false)
        }

    }

    return { updateLoading, updateJob }

}

export default updatejobHook