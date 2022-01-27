import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAuth from '../../../Hooks/useAuth';

const SignUp = () => {
    const { signinUser, signInError } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const location = useLocation();
    const navigate = useNavigate();

    const onSubmit = data => {
        signinUser(data.email, data.password, location, navigate);
    };

    return (
        <div className="max-w-7xl px-4 sm:px-6 mx-auto py-6">
            <Link to="/">
                <div className="flex items-center justify-center">
                    <img
                        className="h-8 w-auto sm:h-10"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        alt=""
                    />&nbsp;
                    <h3 className="font-bold text-indigo-500 text-xl">BURFORD WOODCRAFT</h3>
                </div>
            </Link>
            <h2 className="text-2xl pt-4 font-bold text-gray-600">SignIn Here</h2>
            <div className="flex justify-around items-center bg-gray-50 rounded-xl mt-8">
                <form className="flex flex-col space-y-4 mt-8" onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className="ring-2 ring-yellow-600 rounded-md p-2"
                        type="email"
                        {...register("email", { required: true })}
                        placeholder="Your Email"
                    />
                    {/* errors will return when field validation fails  */}
                    {
                        errors.email && <span className="bg-indigo-50 text-yellow-500 rounded-md">This field is required</span>
                    }
                    <input
                        className="ring-2 ring-yellow-600 rounded-md p-2"
                        type="password"
                        {...register("password", { required: true })}
                        placeholder="Your password"
                    />
                    {/* errors will return when field validation fails  */}
                    {
                        errors.password && <span className="bg-indigo-50 text-yellow-500 rounded-md">This field is required</span>
                    }
                    {
                        signInError && <p>{signInError}</p>
                    }
                    <input className="bg-yellow-600 hover:bg-yellow-700 text-white rounded-md p-2" type="submit" value="Sign in" />
                    <p>Already have an Account? <span className="text-yellow-600"><Link to="/signup">Please Sign up</Link></span></p>
                </form>
                <img className="" src="https://blog.hubspot.com/hubfs/registration-form-template.jpg" alt="" />
            </div>
        </div>
    );
};

export default SignUp;