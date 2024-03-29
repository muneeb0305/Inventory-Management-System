import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../components/Input/Input'
import Button from '../components/Button/Button';
import { changeName } from '../features/App/AppSlice';
import { showItems } from '../features/Inventory/InventorySlice';
import { addOrder, customerCard, orderbyId, updateOrder } from '../features/Orders/OrderSlice';
import Alert from '../components/Alert/Alert';
import Select from '../components/Select/Select';

export default function OrderForm() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    //Get ID from Param
    const { id } = useParams()
    //Check is ID there or not
    const isID = !!id
    //BreadCrumb
    const breadCrumb = { name: "Update Order" }
    //Redux States
    const Item = useSelector(state => state.inventory.items)
    const toggle = useSelector(state => state.appState.darkMode)
    //only get inventory item names
    const inventoryItems = Item && Item.map((data) => data.itemName)
    //Status dropbox 
    const status = ['Order Placed', 'Order Received', 'Order Picked', 'Order Packaged', 'Order Shipped', 'Order Delivered']
    //City dropbox
    const City = ['Peshawar', 'Lahore', 'Islamabad', 'Karachi']

    const [oldData, setoldData] = useState()
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
        isID && dispatch(changeName(breadCrumb))
        //Item Show in dropbox
        dispatch(showItems())
        //if there's id get his order data on basis of id
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...Form, [name]: name === "quantity" ? Number(value) : value })
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        //if there's ID then update the order else create it
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
                    dispatch(customerCard())
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
            <div className={`${toggle ? isID ? "bg-dark3 pt-20 min-h-screen " : "pt-5" : isID ? "bg-gray-100 pt-20 min-h-screen " : "pt-5"} `}>
                <div className={`container mx-auto ${isID ? 'px-5 ' : ''}`}>
                    <div className={`${toggle ? 'bg-dark4 pt-6' : 'bg-white pt-6'} p-5 shadow-lg rounded-lg`}>
                        <form onSubmit={handleSubmit}>
                            {
                                isID &&
                                <div className="grid md:grid-cols-3 md:gap-6">
                                    <Input type="text" name="customer_Name" value={Form.customer_Name} onChange={handleChange} title={'Customer Name'} disabled />
                                </div>
                            }
                            <div className="grid md:grid-cols-2 md:gap-6">
                                <Input type="text" name="address" value={Form.address} onChange={handleChange} title={'Address'} />
                                <Select label={'City'} data={City} name='city' value={Form.city} onChange={handleChange} />
                            </div>
                            <div className="grid md:grid-cols-2 md:gap-6">
                                <Select label={'Product'} data={inventoryItems} name='product' value={Form.product} onChange={handleChange} />
                                <Input type="number" name="quantity" value={Number(Form.quantity)} onChange={handleChange} min={1} title={'Quantity'} />
                                <Input type="text" name="amount" value={Form.amount = Item.find((data) => data.itemName === Form.product)?.priceOut * Form.quantity || ''} onChange={handleChange} disabled title={'Amount'} />
                            </div>
                            {
                                isID ?
                                    <div className="grid md:grid-cols-2 md:gap-6">
                                        <Select label={'Status'} data={status} name='status' value={Form.status} onChange={handleChange} />
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
