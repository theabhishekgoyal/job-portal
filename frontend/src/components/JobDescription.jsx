import React, { useEffect, useState } from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from '@/utils/constant';
import { setSingleJob } from '@/redux/jobSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'sonner';
import Navbar from './shared/Navbar';
import { FaMapMarkerAlt, FaCalendarAlt, FaMoneyBillWave, FaUserTie } from 'react-icons/fa';

const JobDescription = () => {
    const { singleJob } = useSelector(store => store.job);
    const { user } = useSelector(store => store.auth);
    const isInitiallyApplied = singleJob?.applications?.some(application => application.applicant === user?._id) || false;
    const [isApplied, setIsApplied] = useState(isInitiallyApplied);

    const params = useParams();
    const jobId = params.id;
    const dispatch = useDispatch();

    const applyJobHandler = async () => {
        try {
            const res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}`, { withCredentials: true });

            if (res.data.success) {
                setIsApplied(true); // Update the local state
                const updatedSingleJob = { ...singleJob, applications: [...singleJob.applications, { applicant: user?._id }] };
                dispatch(setSingleJob(updatedSingleJob)); // helps us to real time UI update
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    }

    useEffect(() => {
        const fetchSingleJob = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, { withCredentials: true });
                if (res.data.success) {
                    dispatch(setSingleJob(res.data.job));
                    setIsApplied(res.data.job.applications.some(application => application.applicant === user?._id)); // Ensure the state is in sync with fetched data
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchSingleJob();
    }, [jobId, dispatch, user?._id]);

    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto my-10 p-6 bg-white shadow-md rounded-md'>
                <div className='flex items-center justify-between border-b pb-4 mb-4'>
                    <div>
                        <h1 className='font-bold text-2xl'>{singleJob?.title}</h1>
                        <div className='flex items-center gap-2 mt-2'>
                            <Badge className='text-blue-700 font-bold' variant="ghost">{singleJob?.position} Positions</Badge>
                            <Badge className='text-[#F83002] font-bold' variant="ghost">{singleJob?.jobType}</Badge>
                            <Badge className='text-[#7209b7] font-bold' variant="ghost">{singleJob?.salary} LPA</Badge>
                        </div>
                    </div>
                    <Button
                        onClick={isApplied ? null : applyJobHandler}
                        disabled={isApplied}
                        className={`rounded-lg ${isApplied ? 'bg-gray-600 cursor-not-allowed' : 'bg-[#7209b7] hover:bg-[#5f32ad]'}`}>
                        {isApplied ? 'Already Applied' : 'Apply Now'}
                    </Button>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='bg-gray-50 p-4 rounded-md'>
                        <h2 className='text-lg font-semibold mb-2'>Job Details</h2>
                        <div className='space-y-2'>
                            <div className='flex items-center gap-2'>
                                <FaUserTie className='text-gray-700' />
                                <span className='font-semibold'>Role:</span>
                                <span className='text-gray-800'>{singleJob?.title}</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <FaMapMarkerAlt className='text-gray-700' />
                                <span className='font-semibold'>Location:</span>
                                <span className='text-gray-800'>{singleJob?.location}</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <FaCalendarAlt className='text-gray-700' />
                                <span className='font-semibold'>Experience:</span>
                                <span className='text-gray-800'>{singleJob?.experienceLevel} yrs</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <FaMoneyBillWave className='text-gray-700' />
                                <span className='font-semibold'>Salary:</span>
                                <span className='text-gray-800'>{singleJob?.salary} LPA</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <FaUserTie className='text-gray-700' />
                                <span className='font-semibold'>Postions:</span>
                                <span className='text-gray-800'>{singleJob?.position}</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <FaUserTie className='text-gray-700' />
                                <span className='font-semibold'>Total Applied Applicants:</span>
                                <span className='text-gray-800'>{singleJob?.applications?.length}</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <FaCalendarAlt className='text-gray-700' />
                                <span className='font-semibold'>Posted Date:</span>
                                <span className='text-gray-800'>{singleJob?.createdAt.split("T")[0]}</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-lg font-semibold mb-2'>Description</h2>
                        <p className='mt-2 text-gray-800'>{singleJob?.description}</p>
                        <h2 className='text-lg font-semibold mt-4 mb-2'>Requirements</h2>
                        <p className='mt-2 text-gray-800'>{singleJob?.requirements}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobDescription;
