import axios from "axios"
import { useJobsContext } from "../context/JobsContext"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"

const deletejobHook = () => {

    const [deleteLoading, setdeleteLoading] = useState(false);
    const { setJobsArray } = useJobsContext()

    const deleteJob = async (formData) => {
        setdeleteLoading(true)

        try {
            const url = `${import.meta.env.VITE_BASE_URL}/api/u&d/delete/${formData.id}`
            const { data: res } = await axios.delete(url,{ withCredentials: true })
            if (res.error) {
                throw new Error(res.error)
            }
            toast.success("Job deleted successfully")
            setJobsArray(res);
        } catch (error) {
            toast.error(error.message)
        } finally {
            setdeleteLoading(false)
        }

    }

    return { deleteLoading, deleteJob }

}

export default deletejobHook