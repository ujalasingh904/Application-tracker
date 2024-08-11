import React from 'react'
import { useState } from 'react';
import registerHook from '../hooks/registerHook';
import loginHook from '../hooks/loginHook';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";


const LoginAndRegister = () => {

    const [login, setLogin] = useState(true);
    const [formData, setformData] = useState([]);
    const [showPassword, setShowPassword] = useState(false);

    const { loading, register } = registerHook();
    const { Loginloading, loginfunction } = loginHook();


    const handleChange = (e) => {
        setformData({ ...formData, [e.target.id]: e.target.value })
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        await register(formData);
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        await loginfunction(formData);
    }


    return (
        <div className='p-4 h-screen flex  items-center  '>

            <div className='flex flex-col  max-w-96 rounded-2xl p-8 mx-auto  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 gap-8 cursor-pointer shadow-[0px_0px_100px_15px_rgb(255,255,255)] transition-all'>
                <div className='flex justify-center gap-8 sm:gap-10'>
                    <button
                        className='border-[3px] border-t-0  py-3 px-6 sm:px-10 rounded-lg text-md sm:text-xl text-white hover:bg-white hover:text-black font-semibold transition-all hover:scale-90 '
                        onClick={() => setLogin(true)}
                    >Login</button>

                    <button className='border-[3px] border-b-0 py-3 px-4 sm:px-8 rounded-lg text-md sm:text-xl text-white font-semibold hover:bg-white hover:scale-90 hover:text-black   transition-all'
                        onClick={() => setLogin(false)}
                    >Register</button>
                </div>

                <form className='w-full flex flex-col gap-6'
                    onSubmit={login ? handleLogin : handleRegister}
                >
                    <div className={`flex flex-col gap-2 text-white ${login ? 'hidden' : "flex"}`}>
                        <label className='font-semibold'>Name</label>
                        <input
                            className='p-2 outline-none rounded-md border-[3px] border-transparent bg-[#ffffff59] border-solid focus:border-white  text-sm sm:text-md' type="text"
                            id='name'
                            onChange={handleChange}
                            required
                            placeholder='Enter your name' />
                    </div>
                    <div className='flex flex-col gap-2 text-white'>
                        <label className='font-semibold'>Email</label>
                        <input
                            className=' p-2  outline-none rounded-md border-[3px] border-transparent bg-[#ffffff59] border-solid focus:border-white text-sm sm:text-md'
                            type="email"
                            id='email'
                            onChange={handleChange}
                            required
                            placeholder='Enter Your Email' />

                    </div>
                    <div className='flex flex-col gap-2 text-white'>
                        <label className='font-semibold'>Password</label>
                        <div className='relative flex items-center'>
                            <input
                                className='p-2  outline-none rounded-md border-[3px] border-transparent bg-[#ffffff59] border-solid focus:border-white w-full text-white text-sm sm:text-md' type={`${showPassword ? 'text' : 'password'}`}
                                id='password'
                                onChange={handleChange}
                                required
                                placeholder='Enter Your Password' />
                            {showPassword ? <FaEyeSlash className='absolute right-5 text-xl' onClick={() => setShowPassword(!showPassword)} /> : <FaEye className='absolute right-5 text-xl' onClick={() => setShowPassword(!showPassword)} />}
                        </div>
                    </div>
                    <div className='flex w-full justify-center'>

                        <button className='py-2 sm:py-3 px-5 sm:px-10 rounded-full  sm:text-xl text-black font-semibold hover:scale-[1.05] transition-all bg-white '
                            type='submit'
                            onClick={login ? handleLogin : handleRegister}
                        >{(loading || Loginloading) ? <div className="loader"></div> : (login ? "Login" : "Register")}</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default LoginAndRegister