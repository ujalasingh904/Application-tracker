import React from 'react'
import { useState } from 'react';
import registerHook from '../hooks/registerHook';
import loginHook from '../hooks/loginHook';


const LoginAndRegister = () => {

    const [login, setLogin] = useState(true);
    const [formData, setformData] = useState([]);

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
        <div className='p-4 h-screen flex  items-center first'>

            <div className='flex flex-col  max-w-96 rounded-md p-8 mx-auto  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 gap-8'>
                <div className='flex justify-center gap-10'>
                    <button
                        className='bg-[#ff0000] py-3 px-10 rounded-full text-xl text-white hover:opacity-80 transition-all'
                        onClick={() => setLogin(true)}
                    >Login</button>

                    <button className='bg-[#0051ff] py-3 px-10 rounded-full text-xl text-white hover:opacity-80 transition-all'
                        onClick={() => setLogin(false)}
                    >Register</button>
                </div>

                <form className='w-full flex flex-col gap-6'
                    onSubmit={login ? handleLogin : handleRegister}
                >
                    <div className={`flex flex-col gap-2 ${login ? 'hidden' : "flex"}`}>
                        <label className='font-semibold text-lg'>Name</label>
                        <input
                            className='p-2 outline-none rounded-md border-[3px] border-transparent  border-solid focus:border-sky-500 text-l' type="text"
                            id='name'
                            onChange={handleChange}
                            required
                            placeholder='Enter your name' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='font-semibold text-lg'>Email</label>
                        <input
                            className='p-2 outline-none rounded-md border-[3px] border-transparent  border-solid focus:border-sky-500'
                            type="email"
                            id='email'
                            onChange={handleChange}
                            required
                            placeholder='Enter Your Email' />

                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='font-semibold text-lg'>Password</label>
                        <input
                            className='p-2 outline-none rounded-md border-[3px] border-transparent  border-solid focus:border-sky-500' type="password"
                            id='password'
                            onChange={handleChange}
                            required
                            placeholder='Enter Your Password' />
                    </div>
                    <div className='flex w-full justify-center'>

                        <button className='bg-gray-900 py-3 px-10 rounded-full text-xl text-white hover:opacity-80 transition-all'
                            type='submit'
                            onClick={login ? handleLogin : handleRegister}
                        >{ (loading || Loginloading) ? "Loading..." : (login ? "Login" : "Register")}</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default LoginAndRegister