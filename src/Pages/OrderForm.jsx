import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Orders from '../Services/Orders';
import Inventory from '../Services/Inventory';

export default function OrderForm() {
    const { id } = useParams()
    const isID = !!id
    const [Item, setItem] = useState([])
    const [oldData, setoldData] = useState()
    const navigate = useNavigate()
    const [Form, setForm] = useState({
        customer_id: '',
        customer_Name: '',
        product: '',
        quantity: '',
        address: '',
        city: '',
        amount: '',
        status: ''
    })
    useEffect(() => {
        Inventory.getItem()
            .then((data) => setItem(data))
            .catch(err => { throw err })
        if (isID) {
            Orders.OrderbyId(id)
                .then((data) => {
                    setoldData(data)
                    setForm({
                        customer_id: data.customer_id,
                        customer_Name: data.customer_Name,
                        product: data.product,
                        quantity: data.quantity,
                        address: data.address,
                        city: data.city,
                        amount: data.amount,
                        status: data.status
                    })
                })
                .catch(err => { throw err })
        }
    }, [isID, id])
    const inventoryItems = Item && Item.map((data) => data.itemName)
    const status = ['Order Placed', 'Order Received', 'Order Picked', 'Order Packaged', 'Order Shipped', 'Order Delivered']
    const City = ['Peshawar', 'Lahore', 'Islamabad', 'Karachi']


    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...Form, [name]: name === "quantity" ? Number(value) : value })
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        if (isID) {
            Orders.updateOrder(oldData._id, { ...Form })
            navigate('/Admin/Order_Details')
        }
        else {
            Orders.addOrder({ ...Form })
        }
        setForm({
            customer_id: '',
            customer_Name: '',
            quantity: '',
            address: '',
            city: '',
            amount: '',
            status: ''
        })
    }

    return (
        <section>
            <div className="bg-gray-50 min-h-screen">
                <div className="container mx-auto px-5">
                    <h1 className="text-4xl font-medium py-7">{isID ? "Update" : "Add"} Order</h1>
                    <div className='bg-white p-5 shadow-lg rounded-lg'>
                        <form onSubmit={handleSubmit}>
                            {
                                isID &&
                                <div className="grid md:grid-cols-3 md:gap-6">

                                    <div className="relative z-0 w-full mb-6 group">
                                        <input type="text" name="customer_Name" value={Form.customer_Name} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " disabled required />
                                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Customer Name</label>
                                    </div>
                                </div>
                            }
                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" name="address" value={Form.address} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <label className="text-gray-500 pr-5">Select City</label>
                                    <select className="w-52 bg-white border border-gray-300 rounded-md shadow-sm py-2 text-center text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" name='city' value={Form.city} onChange={handleChange} required>
                                        <option hidden value="">Select City</option>
                                        {
                                            City.map((data, index) => (
                                                <option key={index} value={data}>{data}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="relative z-0 w-full mb-6 group">
                                    <label className="text-gray-500 pr-5">Select Product</label>
                                    <select className="w-52 bg-white border border-gray-300 rounded-md shadow-sm py-2 text-center text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" name='product' value={Form.product} onChange={handleChange} required>
                                        <option hidden value="">Select Product</option>
                                        {
                                            inventoryItems.map((data, index) => (
                                                <option key={index} value={data}>{data}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="number" name="quantity" value={Number(Form.quantity)} onChange={handleChange} min={1} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Quantity</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" name="amount" value={Form.amount = Item.find((data) => data.itemName === Form.product)?.priceOut * Form.quantity || ''} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " disabled />
                                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Amount</label>
                                </div>
                            </div>
                            {
                                isID ?
                                    <div className="grid md:grid-cols-2 md:gap-6">
                                        <div className="relative inline-flex">
                                            <select className="w-52 bg-white border border-gray-300 rounded-md shadow-sm py-2 text-center text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" name='status' value={Form.status} onChange={handleChange} required>
                                                <option hidden value="">Status</option>
                                                {
                                                    status.map((data, index) => (
                                                        <option key={index} value={data}>{data}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                    </div> : null
                            }
                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-4">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
