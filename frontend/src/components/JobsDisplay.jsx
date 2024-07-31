import React from 'react'
import getUserJobs from '../hooks/getUserJobs'
import { useJobsContext } from '../context/JobsContext'

const JobsDisplay = () => {
    const { loading } = getUserJobs()
    const { jobsArray } = useJobsContext()
    console.log(jobsArray)
    return (
        <div className='overflow-x-auto'>
            <table className='w-full text-left table-auto rounded-lg'>

                <thead>
                    <tr className='bg-[#02182B] text-white font-normal'>
                        <th className='py-3 px-4 text-lg font-semibold rounded-tl-lg'>Company name</th>
                        <th className='py-3 px-4 text-lg font-semibold '>Job role</th>
                        <th className='py-3 px-4 text-lg font-semibold '>Platform</th>
                        <th className='py-3 px-4 text-lg font-semibold '>Status</th>
                        <th className='py-3 px-4 text-lg font-semibold '>Date applied</th>
                        <th className='py-3 px-4 text-lg font-semibold rounded-tr-lg'></th>
                    </tr>
                </thead>

                <tbody>
                    {
                        jobsArray.map((job, index) => {
                            
                            return (
                                <tr className='bg-sky-200'>
                                    <td className='py-3 px-4 border-b   md:border-r border-indigo-950'>{job.companyName}</td>
                                    <td className='py-3 px-4 border-b md:border-r border-indigo-950'>{job.jobRole}</td>
                                    <td className='py-3 px-4 border-b md:border-r border-indigo-950'>{job.platform}</td>
                                    <td className='py-3 px-4 border-b md:border-r border-indigo-950'>{job.status}</td>
                                    <td className='py-3 px-4 border-b md:border-r border-indigo-950'>{job.dateApplied}</td>
                                    <td className='py-3 px-4 border-b   border-indigo-950 text-center'>
                                        <div>
                                            <span>update</span>
                                            <span>delete</span>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })

                    }



                    {/* // <tr className='bg-sky-200'>
                    //     <td className='py-3 px-4  border-indigo-950 rounded-bl-lg   md:border-r'>adobe</td>
                    //     <td className='py-3 px-4  border-indigo-950  md:border-r'>sde</td>
                    //     <td className='py-3 px-4  border-indigo-950  md:border-r'>internshala</td>
                    //     <td className='py-3 px-4  border-indigo-950  md:border-r'>applied</td>
                    //     <td className='py-3 px-4  border-indigo-950  md:border-r'>30 jul 2024</td>
                    //     <td className='py-3 px-4  border-indigo-950 rounded-br-lg  text-center'>
                    //         <div>
                    //             <span>update</span>
                    //             <span>delete</span>
                    //         </div>
                    //     </td>
                    // </tr> */}

                </tbody>


            </table>
        </div>
    )
}

export default JobsDisplay