import React from 'react';
import LatestJobCards from './LatestJobCards';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const LatestJobs = () => {
    const { allJobs } = useSelector(store => store.job);
    const navigate = useNavigate();

    const handleMoreJobsClick = () => {
        navigate('/jobs');
    }

    return (
        <div className='max-w-7xl mx-auto my-20 p-5 bg-white rounded-lg shadow-md'>
            <h1 className='text-4xl font-bold mb-5'>
                <span className='text-[#6A38C2]'>Latest & Top </span> Job Openings
            </h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {
                    allJobs.length <= 0 ? (
                        <span className='text-gray-500'>No Job Available</span>
                    ) : (
                        allJobs.slice(0, 6).map((job) => (
                            <LatestJobCards key={job._id} job={job} />
                        ))
                    )
                }
            </div>
            <div className='flex justify-end mt-5'>
                <button 
                    onClick={handleMoreJobsClick}
                    className='px-4 py-2 bg-[#6A38C2] text-white font-semibold rounded-lg shadow hover:bg-[#4a2596] transition-colors duration-300'
                >
                    More Jobs
                </button>
            </div>
        </div>
    );
}

export default LatestJobs;
