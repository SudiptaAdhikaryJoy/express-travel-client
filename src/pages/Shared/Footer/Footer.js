import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-slate-400'>
            <div className="w-10/12 mx-auto">
                <div className="flex py-4">
                    <div className="text-left flex items-center space-x-4">
                        <img className='w-1/12' src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Go_on_Logo.svg" alt="" />
                        <p className="font-semibold text-gray-800 w-7/12">Express Travel come and explore the world. Our Agency offer you high quality services and in cheap rate.</p>
                    </div>
                    <div className="w-3/12 text-right text-gray-800">
                        <h3 className="text-2xl font-bold mb-4">Useful links</h3>
                        <div className="grid font-semibold">
                            <Link to="/">Home</Link>
                            <Link to="/newblog">New blog</Link>
                            <Link to="/dashboard/myblogs">My blogs</Link>
                        </div>
                    </div>
                </div>
                <div className="border-t-2 border-gray-500 font-semibold text-gray-800 py-2">
                     <span className="text-black">Express Travel &copy; {new Date().getFullYear()}</span> .All rights reserve
                </div>
            </div>
        </div>
    );
};

export default Footer;