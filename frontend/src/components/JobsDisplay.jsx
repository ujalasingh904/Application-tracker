import { useState } from 'react'
import getUserJobs from '../hooks/getUserJobs'
import { useJobsContext } from '../context/JobsContext'
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdDoneOutline } from "react-icons/md";
import updatejobHook from '../hooks/updatejobHook';
import deletejobHook from '../hooks/deletejobHook';

const JobsDisplay = () => {
    const { loading } = getUserJobs()
    const { jobsArray } = useJobsContext()
    const jobsArraySize = jobsArray.length

    const { updateLoading, updateJob } = updatejobHook()
    const { deleteLoading, deleteJob } = deletejobHook();



    const [updateIndex, setupdateIndex] = useState(null);
    const [loaderIndex, setLoaderindex] = useState(false)
    const [formData, setformData] = useState([]);
    // console.log(formData.id)


    const handleUpdate = async (e, index, jobId) => {
        e.preventDefault()
        setupdateIndex(null)
        const updatedFormData = { ...formData, id: jobId };
        setformData(updatedFormData);
        setLoaderindex(index)
        await updateJob(updatedFormData);

    }

    const handleEdit = (index, jobKastatus) => {
        setupdateIndex(index);
        formData.length = 0;
        setformData({ status: jobKastatus })
    }

    const handleDelete = async (e, jobId)=>{
        e.preventDefault()
        formData.length = 0;
        const updatedFormData = { id: jobId };
        setformData(updatedFormData);
        await deleteJob(updatedFormData);
    }


    return (

        jobsArraySize > 0 ? (loading || deleteLoading ) ? <div className='loader w-[5%]'></div> :
            <div className='overflow-auto  max-h-[60vh] rounded-b-lg'>
                <table className='w-full text-left table-auto rounded-lg'>

                    <thead>
                        <tr className='bg-[#02182B] text-white font-normal'>
                            <th className='py-3 px-4 text-lg font-semibold rounded-tl-lg'>Company name</th>
                            <th className='py-3 px-4 text-lg font-semibold '>Job role</th>
                            <th className='py-3 px-4 text-lg font-semibold '>Platform</th>
                            <th className='py-3 pl-4 pr-24 text-lg font-semibold '>Status</th>
                            <th className='py-3 px-4 text-lg font-semibold '>Date applied</th>
                            <th className='py-3 px-4 text-lg font-semibold rounded-tr-lg'></th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            jobsArray.map((job, index) => {
                                const lastJob = index === jobsArraySize - 1;
                                return (
                                    <tr className='bg-sky-200' key={index}>
                                        <td className={`py-3 px-4 ${lastJob ? 'rounded-bl-lg':'border-b'}  border-r border-indigo-950`}>{job.companyName}</td>
                                        <td className={`py-3 px-4 ${lastJob ? '':'border-b'} border-r border-indigo-950`}>{job.jobRole}</td>
                                        <td className={`py-3 px-4 ${lastJob ? '':'border-b'}  border-r border-indigo-950`}>{job.platform}</td>
                                        {updateIndex === index ?
                                            <td className={` px-2 ${lastJob ? '':'border-b'} border-r border-indigo-950`} >
                                                <select
                                                    onChange={(e) => setformData({ [e.target.id]: e.target.value })}
                                                    name="status" id="status" className='py-1 px-2 outline-none shadow appearance-none rounded w-full cursor-pointer'>
                                                    <option value="">Select a status</option>
                                                    <option value="Applied">Applied</option>
                                                    <option value="Applied Referral">Applied Referral</option>
                                                    <option value="Assignment">Assignment</option>
                                                    <option value="Interview">Interview</option>
                                                    <option value="Rejected">Rejected</option>
                                                    <option value="Selected">Selected</option>
                                                </select> </td> :
                                            <td className={`py-3 px-4 ${lastJob ? '':'border-b'}  border-r border-indigo-950`}
                                            >{(updateLoading && loaderIndex === index) ? <div className='loader w-[18%]'></div> : job.status}
                                            </td>

                                        }

                                        <td className={`py-3 px-4 ${lastJob ? '':'border-b'} border-r border-indigo-950`}>{job.dateApplied}</td>
                                        <td className={`py-3 px-4 ${lastJob ? 'rounded-br-lg':'border-b'}  border-indigo-950 text-center`}>
                                            <div className='flex gap-4'>
                                                {
                                                    updateIndex === index ? <MdDoneOutline fontSize={23} className='cursor-pointer'
                                                        onClick={(e) => handleUpdate(e, index, job._id)} /> :

                                                        <MdModeEdit fontSize={23} className='cursor-pointer'
                                                            onClick={() => handleEdit(index, job.status)}
                                                        />
                                                }
                                                <MdDelete fontSize={23} className='cursor-pointer'
                                                    onClick={(e) => handleDelete(e,job._id)}
                                                />
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
            </div> :

            <p className='text-3xl font-semibold underline'>No applications found :( </p>
    )
}

export default JobsDisplay