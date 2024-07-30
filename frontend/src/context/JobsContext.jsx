import { createContext, useContext, useState } from "react";

export const JobsContext = createContext();

export const useJobsContext = () => {
    return useContext(JobsContext);
}

export const JobsContextProvider = ({ children }) => {
    const [jobsArray, setJobsArray] = useState([]);

    return <JobsContext.Provider value={{ jobsArray, setJobsArray }}>
        {children}
    </JobsContext.Provider>
}

