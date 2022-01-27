import { CheckIcon, ExclamationIcon, XIcon } from '@heroicons/react/outline';
import React, { useEffect, useState } from 'react';

const AllBlogs = () => {
    const [products, setProducts] = useState([]);
    const [productRemoved, setProductRemoved] = useState(false);
    const [statusUpdate, setStatusUpdate] = useState(false);

    useEffect(() => {
        fetch('https://calm-citadel-62315.herokuapp.com/topBlogs')
            .then(res => res.json())
            .then(products => setProducts(products))
    }, [statusUpdate]);

    const handleProductDelete = id => {
        if (window.confirm('Do you want to Delete this blog?')) {
            fetch(`https://calm-citadel-62315.herokuapp.com/blog/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainingProducts = products.filter(product => product._id !== id);
                        setProducts(remainingProducts);
                        setProductRemoved(true);
                    }
                })
        }

    };
    const updateStatus = id => {
        const data = { status: "approved" };
        fetch(`https://calm-citadel-62315.herokuapp.com/status/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setStatusUpdate(true);
                }
            })
    };
    return (
        <div>
            <h1 className="text-yellow-600 font-bold text-3xl">All published blogs</h1>
            {
                productRemoved && <span className="bg-red-50 text-red-500 rounded-md flex justify-between tracking-wider p-1"><span className="flex"><ExclamationIcon className="h-6 w-6 mr-2" aria-hidden="true" />blog Deleted</span><XIcon onClick={() => setProductRemoved(false)} className="h-6 w-6" aria-hidden="true" /></span>
            }
            {
                statusUpdate && <span className="bg-green-100 text-green-600 rounded-md flex justify-between tracking-wider p-1"><span className="flex"><CheckIcon className="h-6 w-6 mr-2" aria-hidden="true" />Updated !</span><XIcon onClick={() => setStatusUpdate(false)} className="h-6 w-6" aria-hidden="true" /></span>
            }
            <div className="grid grid-cols-3 w-10/12 mx-auto gap-8 my-8">
                {
                    products.map(product => <div
                        className="flex"
                        key={product._id}
                    >
                        <div className="flex flex-col justify-between p-4 border-2 rounded-lg hover:shadow-md">
                            <div>
                                <img className="rounded-lg" src={product?.img_url} alt="" />
                                <div className="flex flex-col justify-between space-y-6 my-4">
                                    <h3 className="text-xl font-semibold text-yellow-600">{product?.blogTitle}</h3>
                                    <p>{product?.productInformation}</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                {
                                    product?.status === 'approved' ?
                                        < p className="flex bg-yellow-50 text-yellow-600 px-2 py-1 rounded-lg">{product?.status}
                                        </p>
                                        :
                                        <div className='flex'>
                                            <p className="flex bg-yellow-50 text-yellow-600 mr-2 px-2 py-1 rounded-lg">{product?.status}
                                            </p>
                                            <p
                                                onClick={() => updateStatus(product?._id)}
                                                className="flex bg-green-50 text-green-600 px-2 py-1 rounded-lg cursor-pointer hover:shadow-lg"
                                            >Approved it
                                            </p>
                                        </div>
                                }
                                <button onClick={() => handleProductDelete(product?._id)} className="bg-red-100 text-red-500 py-2 px-4 rounded-lg">Delete</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div >
    );
};

export default AllBlogs;