import React, { useEffect, useState } from 'react'
import Navbar from './shared/Navbar'
import { motion } from 'framer-motion'
import FilterCard from './FilterCard'

const jobsArray = [
    { _id: 1, title: 'Frontend Developer', company: 'Company A', location: 'Location A' },
    { _id: 2, title: 'Backend Developer', company: 'Company B', location: 'Location B' },
    { _id: 3, title: 'Data Scientist', company: 'Company C', location: 'Location C' },
    { _id: 4, title: 'Graphic Designer', company: 'Company D', location: 'Location D' },
    { _id: 5, title: 'FullStack Developer', company: 'Company E', location: 'Location E' },
    { _id: 6, title: 'DevOps Engineer', company: 'Company F', location: 'Location F' },
    { _id: 7, title: 'QA Engineer', company: 'Company G', location: 'Location G' },
    { _id: 8, title: 'Project Manager', company: 'Company H', location: 'Location H' },
];

const Jobs = () => {
    const [filterJobs, setFilterJobs] = useState(jobsArray);

    // Uncomment and modify the following lines if you plan to use Redux
    // const { allJobs, searchedQuery } = useSelector(store => store.job);
    // useEffect(() => {
    //     if (searchedQuery) {
    //         const filteredJobs = allJobs.filter((job) => {
    //             return job.title.toLowerCase().includes(searchedQuery.toLowerCase()) ||
    //                 job.description.toLowerCase().includes(searchedQuery.toLowerCase()) ||
    //                 job.location.toLowerCase().includes(searchedQuery.toLowerCase())
    //         })
    //         setFilterJobs(filteredJobs)
    //     } else {
    //         setFilterJobs(allJobs)
    //     }
    // }, [allJobs, searchedQuery]);

    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto mt-5'>
                <div className='flex gap-5'>
                    <div className='w-20%'>
                        <FilterCard />
                    </div>
                    {
                        filterJobs.length <= 0 ? <span>Job not found</span> : (
                            <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
                                <div className='grid grid-cols-3 gap-4'>
                                    {
                                        filterJobs.map((job) => (
                                            <motion.div
                                                key={job._id}
                                                initial={{ opacity: 0, x: 100 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -100 }}
                                                transition={{ duration: 0.3 }}
                                                className='border p-4 rounded-md shadow-md'
                                            >
                                                <h2 className='text-xl font-semibold'>{job.title}</h2>
                                                <p className='text-gray-600'>{job.company}</p>
                                                <p className='text-gray-600'>{job.location}</p>
                                            </motion.div>
                                        ))
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Jobs
