import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { XIcon } from '@heroicons/react/outline';
import useAuth from '../../../Hooks/useAuth';

const NewBlog = () => {
    const { user, admin } = useAuth();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [blogAdded, setBlogAdded] = useState(false);

    const onSubmit = data => {
        data.status = admin ? 'approved' : 'pending';
        data.email = user?.email;
        fetch('https://calm-citadel-62315.herokuapp.com/blogs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setBlogAdded(true);
                    reset();
                }
            })
    };

    return (
        <div className="w-9/12 mx-auto">
            <h2 className="text-2xl bg-yellow-50 text-yellow-600 font-bold rounded-lg mb-4 p-4">Share your experience</h2>
            <form className="flex flex-col space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="ring-2 ring-yellow-600 rounded-md p-2"
                    type="text"
                    {...register("img_url", { required: true })}
                    placeholder="Blog image URL"
                />
                {/* errors will return when field validation fails  */}
                {
                    errors.img_url && <span className="bg-yellow-50 text-yellow-500 rounded-md">This field is required</span>
                }

                <input
                    className="ring-2 ring-yellow-600 rounded-md p-2"
                    type="text"
                    {...register("blogTitle", { required: true })}
                    placeholder="Blog title"
                />
                {/* errors will return when field validation fails  */}
                {
                    errors.blogTitle && <span className="bg-yellow-50 text-yellow-500 rounded-md">This field is required</span>
                }

                <textarea
                    className="ring-2 ring-yellow-600 rounded-md p-2 h-32"
                    type="email"
                    {...register("description", { required: true })}
                    placeholder="Description"
                />
                {/* errors will return when field validation fails  */}
                {
                    errors.description && <span className="bg-yellow-50 text-yellow-500 rounded-md">This field is required</span>
                }
                <input
                    className="ring-2 ring-yellow-600 rounded-md p-2"
                    type="number"
                    {...register("cost", { required: true })}
                    placeholder="Cost"
                />
                {/* errors will return when field validation fails  */}
                {
                    errors.cost && <span className="bg-yellow-50 text-yellow-500 rounded-md">This field is required</span>
                }
                <input
                    className="ring-2 ring-yellow-600 rounded-md p-2"
                    type="text"
                    {...register("location", { required: true })}
                    placeholder="Location"
                />
                {/* errors will return when field validation fails  */}
                {
                    errors.location && <span className="bg-yellow-50 text-yellow-500 rounded-md">This field is required</span>
                }
                <input
                    className="ring-2 ring-yellow-600 rounded-md p-2"
                    type="text"
                    {...register("category", { required: true })}
                    placeholder="Category"
                />
                {/* errors will return when field validation fails  */}
                {
                    errors.category && <span className="bg-yellow-50 text-yellow-500 rounded-md">This field is required</span>
                }

                <div className='flex justify-between'>
                    <input
                        className="ring-2 ring-yellow-600 rounded-md p-2"
                        type="text"
                        {...register("rating", { required: true })}
                        placeholder="Rating"
                    />
                    {/* errors will return when field validation fails  */}
                    {
                        errors.rating && <span className="bg-yellow-50 text-yellow-500 rounded-md">This field is required</span>
                    }
                    <input
                        className="ring-2 ring-yellow-600 rounded-md p-2"
                        type="text"
                        {...register("time", { required: true })}
                        placeholder="Time"
                    />
                    {/* errors will return when field validation fails  */}
                    {
                        errors.time && <span className="bg-yellow-50 text-yellow-500 rounded-md">This field is required</span>
                    }
                    <input
                        className="ring-2 ring-yellow-600 rounded-md p-2"
                        type="text"
                        {...register("date", { required: true })}
                        placeholder="Date"
                    />
                    {/* errors will return when field validation fails  */}
                    {
                        errors.date && <span className="bg-yellow-50 text-yellow-500 rounded-md">This field is required</span>
                    }
                </div>
                {
                    blogAdded && <span className="bg-green-50 text-green-500 rounded-md flex justify-between tracking-wider p-1">Blog added<XIcon onClick={() => setBlogAdded(false)} className="h-6 w-6" aria-hidden="true" /></span>
                }

                <input className="bg-yellow-600 hover:bg-yellow-700 text-white rounded-md p-2" type="submit" value="Add Blog" />
            </form>
        </div>
    );
};

export default NewBlog;