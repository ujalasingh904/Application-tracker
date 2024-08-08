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
  // console.log(jobsArraySize)
  // console.log(jobsArray)


  return (
    <div className=''>
      <Navbar />

      <div className='flex flex-col justify-center items-center lg:w-[67.666667%] mx-auto p-12 pb-[1.3rem] border-b-4 border-l-4 border-r-4'>

        <div className='flex justify-between items-center w-full'>
          <div className='flex items-center justify-center gap-x-3'>
            <h1 className='text-white font-bold text-4xl'>Create your job applications</h1>
            <span className='text-3xl text-white font-semibold'> ({jobsArray.length}) </span>
          </div>

          {!create && <FaCirclePlus className='text-3xl text-white cursor-pointer'
            onClick={() => setCreate(!create)}
          />}
          {create && <RxCrossCircled className='text-3xl cursor-pointer text-red-600 ' onClick={() => setCreate(!create)}
          />}
        </div>

        <div className='pt-20 min-h-[69.4vh]  w-full  flex items-start justify-center'>
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