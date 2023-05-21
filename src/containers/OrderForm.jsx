import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../components/Input/input'
import Button from '../components/Button/Button';
import { changeName } from '../Redux-Store/AppSlice';
import { showItems } from '../Redux-Store/InventorySlice';
import { addOrder, orderbyId, updateOrder } from '../Redux-Store/OrderSlice';
import Alert from '../components/Alert/Alert';

export default function OrderForm() {
    const { id } = useParams()
    const isID = !!id
    const breadCrumb = { name: "Update Order" }
    const dispatch = useDispatch()
    isID && dispatch(changeName(breadCrumb))
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
        dispatch(showItems())
        if (isID) {
            dispatch(orderbyId(id))
                .unwrap()
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
        // eslint-disable-next-line
    }, [isID, id])
    const Item = useSelector(state => state.inventory.items)
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
            dispatch(updateOrder([oldData._id, { ...Form }]))
                .unwrap()
                .then(() => {
                    Alert({ icon: 'success', title: 'Order Updated' })
                    setTimeout(() => {
                        navigate('/Admin/Order_Details')
                    }, 2000);
                    setForm({
                        customer_id: '',
                        customer_Name: '',
                        quantity: '',
                        product: '',
                        address: '',
                        city: '',
                        amount: '',
                        status: ''
                    })
                })
                .catch((err) => {
                    Alert({ icon: 'error', title: err })
                })
        }
        else {
            dispatch(addOrder({ ...Form }))
                .unwrap()
                .then(() => {
                    Alert({ icon: 'success', title: 'Order Added' })
                    setForm({
                        customer_id: '',
                        customer_Name: '',
                        product: '',
                        quantity: '',
                        address: '',
                        city: '',
                        amount: '',
                        status: ''
                    })
                })
                .catch((err) => {
                    Alert({ icon: 'error', title: err })
                })
        }
    }

    return (
        <section>
            <div className={`${isID ? "bg-gray-50 pt-20" : 'bg-transparent pt-5'} min-h-screen `}>
                <div className={`container mx-auto ${isID ? 'px-5' : ''}`}>
                    <div className='bg-white p-5 shadow-lg rounded-lg'>
                        <form onSubmit={handleSubmit}>
                            {
                                isID &&
                                <div className="grid md:grid-cols-3 md:gap-6">
                                    <Input type="text" name="customer_Name" value={Form.customer_Name} onChange={handleChange} title={'Customer Name'} disabled />
                                </div>
                            }
                            <div className="grid md:grid-cols-2 md:gap-6">
                                <Input type="text" name="address" value={Form.address} onChange={handleChange} title={'Address'} />
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
                                <Input type="number" name="quantity" value={Number(Form.quantity)} onChange={handleChange} min={1} title={'Quantity'} />
                                <Input type="text" name="amount" value={Form.amount = Item.find((data) => data.itemName === Form.product)?.priceOut * Form.quantity || ''} onChange={handleChange} disabled title={'Amount'} />
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
                            <Button type="submit" label={'Submit'} />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
