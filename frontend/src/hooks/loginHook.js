import axios from "axios";
import { useState } from 'react'
import toast from "react-hot-toast" 
import { useAuthContext } from "../context/AuthContext";

const loginHook = () => {

    const [Loginloading, setLoginLoading] = useState(false); 
    const { setAuthUser  } = useAuthContext();

    const loginfunction = async (formData) => {
        const success = handleinputErrors({ email: formData.email, password: formData.password })
        if (!success) return;

        setLoginLoading(true);
        try {

            const url = `https://application-tracker-7nun.onrender.com/api/auth/login`;
            console.log(import.meta.env.VITE_BASE_URL)
            const { data: res } = await axios.post(url, formData, { withCredentials: true });
            if (res.error) 
                throw new Error(res.error)

            toast.success("Logged in sucessfully")
            sessionStorage.setItem('user', JSON.stringify(res));
            setAuthUser(res)
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoginLoading(false);
        }
    }

    return { Loginloading, loginfunction };
}

export default loginHook

function handleinputErrors({ email,password}) {

    if(!email || !password ){
        toast.error("Please fill all the fields")
        return false
    }

    if(password.length < 8 ){
        toast.error("Password must be at least 8 characters")
        return false
    }

    return true;

}