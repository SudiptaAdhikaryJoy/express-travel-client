import React, { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react'
import {
    MenuIcon,
    XIcon,
    UserCircleIcon,
    LogoutIcon,
    AnnotationIcon,
} from '@heroicons/react/outline'
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
// import logo1 from '../../../images/Go_on_Logo.svg'

const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <div>
            <Popover className="relative bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex justify-between items-center border-gray-100 py-6 md:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <Link to="/">
                                {/* logo */}
                                <div className="flex items-center">
                                    <img
                                        className="h-8 w-auto sm:h-10"
                                        src={'https://upload.wikimedia.org/wikipedia/commons/archive/e/ec/20140815011948%21Go_on_Logo.svg'}
                                        alt=""
                                    />
                                </div>
                            </Link>
                        </div>
                        <div className="-mr-2 -my-2 md:hidden">
                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500">
                                <span className="sr-only">Open menu</span>
                                <MenuIcon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                        </div>
                        <Popover.Group as="nav" className="hidden md:flex space-x-10 items-center">
                            <Link to="/dashboard/newblog" className="text-base font-medium text-white hover:text-gray-300">
                                New blog
                            </Link>

                            {user?.email && <Popover className="relative">
                                {({ open }) => (
                                    <>
                                        <Popover.Button
                                            className={(
                                                open ? 'text-yellow-600' : 'text-yellow-600',
                                                'group bg-transparent text-yellow-600 rounded-md inline-flex items-center text-base font-medium focus:outline-none'
                                            )}
                                        >
                                            <UserCircleIcon
                                                className={(
                                                    open ? 'text-yellow-600' : 'text-yellow-400',
                                                    'ml-2 h-8 w-8 group-hover:text-yellow-700'
                                                )}
                                                aria-hidden="true"
                                            />
                                        </Popover.Button>

                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-200"
                                            enterFrom="opacity-0 translate-y-1"
                                            enterTo="opacity-100 translate-y-0"
                                            leave="transition ease-in duration-150"
                                            leaveFrom="opacity-100 translate-y-0"
                                            leaveTo="opacity-0 translate-y-1"
                                        >
                                            <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 max-w-md sm:px-0">
                                                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                    <div className="relative grid gap-4 bg-gray-900 px-5 py-6 sm:gap-2 sm:p-6">
                                                        <Link to="/dashboard/myblogs">
                                                            <div className="flex hover:bg-gray-600 rounded-lg text-yellow-500 p-3">
                                                                <AnnotationIcon className="h-6 w-6 text-yellow-400" aria-hidden="true" />
                                                                <p className="ml-4">My&nbsp;Blogs</p>
                                                            </div>
                                                        </Link>
                                                        <div onClick={logOut} className="flex hover:bg-gray-600 rounded-lg hover:text-yellow-600 text-yellow-500 p-3">
                                                            <LogoutIcon className="h-6 w-6 text-yellow-600" aria-hidden="true" />
                                                            <p className="ml-4">Sign Out</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Popover.Panel>
                                        </Transition>
                                    </>
                                )}
                            </Popover>}
                        </Popover.Group>
                        {!user?.email &&
                            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                                <Link to="/signin" className="whitespace-nowrap text-base font-medium text-gray-200 hover:text-white">
                                    Sign in
                                </Link>
                                <Link
                                    to="/signup"
                                    className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-yellow-600 hover:bg-yellow-700"
                                >
                                    Sign up
                                </Link>

                            </div>
                        }
                    </div>
                </div>

                {/* mobile menu */}

                <Transition
                    as={Fragment}
                    enter="duration-200 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                            <div className="pt-5 pb-6 px-5">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <img
                                            className="h-8 w-auto"
                                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                            alt="Workflow"
                                        />
                                    </div>
                                    {/* menu icon */}
                                    <div className="-mr-2">
                                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500">
                                            <span className="sr-only">Close menu</span>
                                            <XIcon className="h-6 w-6" aria-hidden="true" />
                                        </Popover.Button>
                                    </div>
                                </div>
                            </div>
                            <div className="py-6 px-5 space-y-6">
                                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                    <Link to="/explore" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                        Explore
                                    </Link>
                                </div>
                                {/* mobile menu bottom */}
                                <div>
                                    <Link
                                        to="/signup"
                                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-yellow-600 hover:bg-yellow-700"
                                    >
                                        Sign up
                                    </Link>
                                    <p className="mt-6 text-center text-base font-medium text-gray-500">
                                        Existing customer?{' '}
                                        <Link to="/signin" className="text-yellow-600 hover:text-yellow-500">
                                            Sign in
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>
        </div>
    );
};

export default Header;