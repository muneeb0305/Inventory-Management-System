import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AddOrder, UpdateOrder } from '../actions/index';
import { useNavigate, useParams } from 'react-router-dom';

export default function OrderForm() {
    const { id } = useParams()
    const navigate = useNavigate()
    const isID = !!id
    const dispatch = useDispatch()
    const status = ['Order Placed', 'Order Received', 'Order Picked', 'Order Packaged', 'Order Shipped', 'Order Delivered']
    const updatedData = useSelector((state) => state.Orders.find((data) => data.id === Number(id)))
    const ID_Counter = Date.now();
    const [Form, setForm] = useState({
        id: '',
        customer_Name: '',
        date: '',
        product: '',
        status: '',
        amount: '',
    })
    const handleChange = (e) => {
        setForm({ ...Form, [e.target.name]: e.target.value })
    };
    console.log(id)
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(Form)
        isID ? dispatch(UpdateOrder({ ...Form })) : dispatch(AddOrder({ ...Form, id: ID_Counter }))
        setForm({
            id: '',
            customer_Name: '',
            date: '',
            product: '',
            status: '',
            amount: '',
        })
        navigate('/Order_Details')
    }
    useEffect(() => {
        if (isID) {
            setForm({
                id: updatedData.id,
                customer_Name: updatedData.customer_Name,
                date: updatedData.date,
                product: updatedData.product,
                status: updatedData.status,
                amount: updatedData.amount,
            })
        }
    }, [isID, updatedData])

    return (
        <section>
            <div className="bg-gray-50 min-h-screen">
                <div className="container mx-auto px-5">
                    <h1 className="text-4xl font-medium py-7">{isID ? "Update" : "Add"} Item</h1>
                    <div className='bg-white p-5 shadow-lg rounded-lg'>
                        <form onSubmit={handleSubmit}>
                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" name="customer_Name" value={Form.customer_Name} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Customer Name</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="date" name="date" value={Form.date} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Order Date</label>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" name="product" value={Form.product} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="number" name="amount" value={Form.amount} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Amount</label>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="relative inline-flex">
                                    <select className="appearance-none bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" name='status' value={Form.status} onChange={handleChange} required>
                                        <option hidden value="">Status</option>
                                        {
                                            status.map((data, index) => (
                                                <option key={index} value={data}>{data}</option>
                                            ))
                                        }
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12l-6-6h12l-6 6z" /></svg>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-4">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
