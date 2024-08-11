import { useState, useEffect } from "react";
import JobInputField from "../hooks/JobInputField";
import { useJobsContext } from "../context/JobsContext";
import { SELECT_STATUS } from "../constants";

const InputField = ({ setCreate }) => {
    const [formData, setFormData] = useState([])
    const { loading, setJobData } = JobInputField();
    const { jobsArray } = useJobsContext()

    const handleJobData = async (e) => {
        e.preventDefault();
        await setJobData(formData)
        const size = Object.keys(formData).length
        setCreate(size === 5 ? false : true)
    }



    const setTodayDate = (e) => {
        e.preventDefault()
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('dateApplied').value = today;
        setFormData({ ...formData, dateApplied: today });
    };

    const handleChange = (e) => {
        e.preventDefault();
        setFormData({ ...formData, [e.target.id]: e.target.value })
    }

    return (
        <>
            <form className='py-8 px-6 sm:px-10 space-y-4 rounded-md bg-[#6f00ff] w-full'
                onSubmit={handleJobData}
            >

                <div className='md:flex items-center space-y-1 md:gap-4'>
                    <label className='md:w-2/5 font-semibold  text-sm sm:text-lg text-white'>Company Name</label>
                    <input
                        onChange={handleChange} type="text" id='companyName'
                        className='p-1 sm:py-2 sm:px-3 border shadow appearance-none rounded focus:outline-blue-500 w-full text-sm sm:text-base'
                    />
                </div>

                <div className='md:flex items-center  space-y-1 md:gap-4'>
                    <label className='md:w-2/5 font-semibold text-sm sm:text-lg text-white'>Job Role</label>
                    <input
                        onChange={handleChange} type="text" id='jobRole' className='p-1 sm:py-2 sm:px-3 border shadow appearance-none rounded focus:outline-blue-500 w-full text-sm sm:text-base ' />
                </div>

                <div className='md:flex items-center  space-y-1 md:gap-4'>
                    <label className='md:w-2/5 font-semibold text-sm sm:text-lg text-white'>Platform</label>
                    <input
                        onChange={handleChange} type="text" id='platform' className='p-1 sm:py-2 sm:px-3 border shadow appearance-none rounded focus:outline-blue-500 w-full text-sm sm:text-base' />
                </div>

                <div className='md:flex items-center  space-y-1 md:gap-4'>
                    <label className='md:w-2/5 font-semibold text-sm sm:text-lg text-white'>Date Applied</label>

                    <div className="flex items-center w-full">
                        <input
                            onChange={handleChange}
                            type="date"
                            id="dateApplied"
                            className="p-1 sm:py-2 sm:px-3 border shadow appearance-none rounded-tl rounded-bl cursor-pointer focus:outline-blue-500 text-sm sm:text-base flex-1"
                        />
                        <button
                            onClick={setTodayDate}
                            className="px-2 sm:px-4 py-[.25rem] sm:py-[.62rem] rounded-tr rounded-br bg-blue-400 text-white ">
                            Today
                        </button>
                    </div>

                </div>

                <div className='md:flex items-center  space-y-1 md:gap-4'>
                    <label className='md:w-2/5 font-semibold text-sm sm:text-lg text-white'>Status</label>
                    <select
                        onChange={handleChange}
                        name="status" id="status" className='p-1 sm:py-2 sm:px-3 border shadow appearance-none rounded focus:outline-blue-500 w-full cursor-pointer text-sm sm:text-base'>
                        <option value="">Select a status</option>
                        {SELECT_STATUS.map((status, index) => (
                            <option value={status} key={index}>{status}</option>
                        ))}

                    </select>
                </div>

                <div className='flex justify-center items-center'>
                    <button className='px-4 sm:px-6 py-2 text-sm sm:text-base rounded-md bg-green-700 text-white cursor-pointer hover:opacity-80'
                        onClick={handleJobData}
                    >{loading ? <div className="loader"></div> : "Add"}</button>
                </div>

            </form>
        </>
    )
}

export default InputField