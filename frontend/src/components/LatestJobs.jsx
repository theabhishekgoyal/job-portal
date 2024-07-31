import React from 'react';

const randomJobs = [
    { _id: 1, title: 'Frontend Developer', company: 'Company A', location: 'Location A' },
    { _id: 2, title: 'Backend Developer', company: 'Company B', location: 'Location B' },
    { _id: 3, title: 'Data Scientist', company: 'Company C', location: 'Location C' },
    { _id: 4, title: 'Graphic Designer', company: 'Company D', location: 'Location D' },
    { _id: 5, title: 'FullStack Developer', company: 'Company E', location: 'Location E' },
    { _id: 6, title: 'DevOps Engineer', company: 'Company F', location: 'Location F' },
    { _id: 7, title: 'QA Engineer', company: 'Company G', location: 'Location G' },
    { _id: 8, title: 'Project Manager', company: 'Company H', location: 'Location H' },
];

const LatestJobs = () => {
    return (
        <div className='max-w-7xl mx-auto my-20'>
            <h1 className='text-4xl font-bold'>
                <span className='text-[#6A38C2]'>Latest & Top </span> Job Openings
            </h1>
            <div className='grid grid-cols-3 gap-4 my-5'>
                {
                    randomJobs.length <= 0 
                        ? <span>No Job Available</span> 
                        : randomJobs.slice(0, 6).map((job) => (
                            <div key={job._id} className='border p-4 rounded-md shadow-md'>
                                <h2 className='text-xl font-semibold'>{job.title}</h2>
                                <p className='text-gray-600'>{job.company}</p>
                                <p className='text-gray-600'>{job.location}</p>
                            </div>
                          ))
                }
            </div>
        </div>
    )
}

export default LatestJobs;
