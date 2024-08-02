import { useState } from 'react';
import Navbar from './Navbar'
import { FaCirclePlus } from "react-icons/fa6";
import { RxCrossCircled } from "react-icons/rx";
import InputField from './InputField';
import { useJobsContext } from '../context/JobsContext';
import JobsDisplay from './JobsDisplay';

const Home = () => {
  const [create, setCreate] = useState(false)
  const { jobsArray } = useJobsContext()
  const jobsArraySize = jobsArray.length
  console.log(jobsArraySize)
  console.log(jobsArray)


  return (
    <div className='bg-blue-400/20'>
      <Navbar />

      <div className='flex flex-col justify-center items-center lg:w-2/3 mx-auto p-12 bg-slate-400 '>
        <div className='flex justify-between items-center w-full'>
          <div className='flex items-center justify-center gap-x-5'>
            <h1 className='text-white font-bold text-4xl'>Create your job applications</h1>
            <span className='text-3xl text-white font-semibold'> ({jobsArray.length}) </span>
          </div>

          {!create && <FaCirclePlus className='text-3xl cursor-pointer'
            onClick={() => setCreate(!create)}
          />}
          {create && <RxCrossCircled className='text-3xl cursor-pointer text-[#ef0000]' onClick={() => setCreate(!create)}
          />}
        </div>

        <div className='py-12 min-h-[70vh] w-full flex items-center justify-center'>
          {
            create ? <InputField setCreate={setCreate} /> :
              <JobsDisplay />
          }
        </div>




      </div>
    </div>
  )
}

export default Home