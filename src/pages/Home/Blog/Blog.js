import { LocationMarkerIcon } from '@heroicons/react/outline';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const Blog = () => {
    const [blog, setBlog] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://calm-citadel-62315.herokuapp.com/blog/${id}`)
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [id])

    return (
        <div>
            <Header />
            <div className='bg-gray-800'>
                <div className='w-9/12 mx-auto space-y-4'>
                    <h2 className='text-2xl text-white font-bold py-6'>{blog?.blogTitle}</h2>
                    <img className='mx-auto' src={blog?.img_url} alt="" />
                    <div className='flex justify-between text-yellow-500 font-semibold text-lg w-5/12 mx-auto'>
                        <p>$ {blog?.cost}</p>
                        <p className='flex items-center'><LocationMarkerIcon className="h-6 w-6" />{blog?.location}</p>
                        <p className='flex items-center'>Rating : {blog?.rating} <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg></p>
                    </div>
                    <p className='text-white text-lg tracking-wider pb-6'>{blog?.description}</p>
                    <div className='text-yellow-300 tracking-wider pb-4 space-x-6'>
                        <i>Published time {blog?.time}</i>
                        <i>Published date {blog?.date}</i>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Blog;