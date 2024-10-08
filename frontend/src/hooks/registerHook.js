import axios from "axios";
import { useState } from 'react'
import toast from "react-hot-toast" 
import { useAuthContext } from "../context/AuthContext";


const registerHook = () => {

    const [loading, setLoading] = useState(false); 
    const { setAuthUser } = useAuthContext()

    const register = async (formData) => {
        const success = handleinputErrors({ name: formData.name, email: formData.email, password: formData.password })
        if(!success) return;
        setLoading(true)
        try {
            // const url = `${import.meta.env.VITE_BASE_URL}/api/auth/signup`;
            const url = `https://application-tracker-nq3b.onrender.com/api/auth/signup`;
            const { data: res } = await axios.post(url, formData, { withCredentials: true });
            if (res.error)
                throw new Error(res.error)

            toast.success("Accounted created  sucessfully")
            sessionStorage.setItem('user', JSON.stringify(res));
            setAuthUser(res)
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }

    return { loading, register };

}

export default registerHook

function handleinputErrors({ name, email,password}) {

    if(!name || !email || !password ){
        toast.error("Please fill all the fields")
        return false
    }

    if(password.length < 8 ){
        toast.error("Password must be at least 8 characters")
        return false
    }

    return true;

}