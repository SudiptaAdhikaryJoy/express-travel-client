import { CheckIcon, XIcon } from '@heroicons/react/outline';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [isAdmin, setIsAdmin] = useState(false);

    const onSubmit = data => {
        fetch('https://calm-citadel-62315.herokuapp.com/users', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setIsAdmin(!isAdmin);
                    reset();
                }
            })
    };

    return (
        <div>
            <h1 className="text-yellow-600 font-bold text-3xl">Make Admin</h1>
            {
                isAdmin && <span className="bg-green-100 text-green-600 rounded-md flex justify-between tracking-wider p-1 mt-4"><span className="flex"><CheckIcon className="h-6 w-6 mr-2" aria-hidden="true" />Updated !</span><XIcon onClick={() => setIsAdmin(!isAdmin)} className="h-6 w-6" aria-hidden="true" /></span>
            }
            <form className="space-x-4 pt-8" onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="ring-2 ring-yellow-600 rounded-md w-1/2 p-2"
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="example@gmail.com"
                />
                {/* errors will return when field validation fails  */}
                {
                    errors.email && <span className="bg-indigo-50 text-yellow-500 rounded-md">This field is required</span>
                }
                <input className="bg-yellow-600 hover:bg-yellow-700 text-white rounded-md ring-4 ring-yellow-300 p-2" type="submit" value="Make Admin" />
            </form>
        </div>
    );
};

export default MakeAdmin;