import axios from "axios";
import { useState } from 'react'
import toast from "react-hot-toast"
import { useAuthContext } from "../context/AuthContext";


const logoutHook = () => {
    const [loading, setLoading] = useState(false)
    const { setAuthUser } = useAuthContext()

    const logout = async () => {
        setLoading(true)
        try {

            const url = `${import.meta.env.VITE_BASE_URL}/api/auth/logout`
            const { data: res } = await axios.post(url,{}, { withCredentials: true });
            if (res.error)
                throw new Error(res.error)

            toast.success("Logout Successfull")
            setAuthUser(null)
            sessionStorage.removeItem('user')
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }

    return { loading, logout }

}

export default logoutHook