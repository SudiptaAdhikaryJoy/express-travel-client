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
                                        src={'data:image/png;base64,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'}
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