import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(0);
    const [topBlogs, setTopBlogs] = useState([]);
    const size = 10;

    useEffect(() => {
        fetch(`https://calm-citadel-62315.herokuapp.com/blogs?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                const allBlogs = data.allBlogs.filter(blogs => blogs.status === 'approved');
                setBlogs(allBlogs);
                const blogCount = data.count;
                setCount(Math.ceil(blogCount / size));
            })
    }, [page]);

    useEffect(() => {
        fetch("https://calm-citadel-62315.herokuapp.com/topBlogs")
            .then(res => res.json())
            .then(data => {
                const topBlogs = data.filter(blogs => blogs.status === 'approved' && blogs.rating > 4);
                setTopBlogs(topBlogs);
            })
    }, []);

    return (
        <div className='bg-gray-800'>
            <div className='flex text-center'>
                <div className='grid grid-cols-2 w-9/12 mx-auto space-x-4'>
                    {
                        blogs.map(blog => <div
                            key={blog._id}
                            className='lg:flex items-center my-4 space-x-4'
                        >
                            <img className='w-7/12 lg:w-6/12 rounded-2xl' src={blog?.img_url} alt="" />
                            <div className='text-left'>
                                <h2 className='text-2xl text-white font-bold'>{blog?.blogTitle}</h2>
                                <p className='text-gray-300'>{blog?.description.slice(0, 60)}</p>
                                <Link to={`blog/${blog?._id}`}><button className='bg-white font-semibold px-2 rounded mt-3'>Details</button></Link>
                            </div>
                        </div>)
                    }
                </div>
                <aside className='w-2/12 pr-4'>
                    <h3 className='font-semibold text-xl text-white my-4'>Top blogs</h3>
                    <div className='grid grid-cols-2 gap-4'>
                        {
                            topBlogs.map(blog => <Link to={`blog/${blog?._id}`}><div className='relative' key={blog._id}>
                                <img className='rounded-md' src={blog?.img_url} alt="" />
                                <p className='flex absolute top-0 bottom-0 left-0 right-0 rounded-md  justify-center items-center text-yellow-500' style={{ backgroundColor: "#00000070" }}>{blog?.rating}<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg></p>
                            </div></Link>)
                        }
                    </div>
                </aside>
            </div>
            {/* pagination */}
            <div className='text-center py-12'>
                {
                    [...Array(count).keys()].map(pn => <button className={pn === page ? 'bg-black border-2 border-gray-400 text-white px-2 rounded m-2' : 'm-2 px-2 rounded border-2 border-gray-400 text-gray-500'} onClick={() => setPage(pn)} key={pn}>{pn + 1}</button>)
                }
            </div>
        </div>
    );
};

export default Blogs;