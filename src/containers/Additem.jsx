import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import Input from '../components/Input/input'
import Button from '../components/Button/Button';
import { changeName } from '../Redux-Store/AppSlice';
import { addItem, showItemsByID, updateItem } from '../Redux-Store/InventorySlice';

export default function Additem() {
    const dispatch = useDispatch()
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
    })
    const { id } = useParams()
    const navigate = useNavigate()
    const isID = !!id
    const [Form, setForm] = useState({
        itemName: '',
        brand: '',
        priceIn: '',
        priceOut: '',
        category: '',
        stock: '',
        image: '',
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevState) => ({ ...prevState, [name]: value }));
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        isID ? dispatch(updateItem([id, { ...Form }]))
            .unwrap()
            .then(() => {
                Toast.fire({
                    icon: 'success',
                    title: 'Item Updated'
                })
                setTimeout(() => {
                    navigate('/Admin/Inventory')
                }, 2000);
                setForm({
                    itemName: '',
                    brand: '',
                    priceIn: '',
                    priceOut: '',
                    category: '',
                    stock: '',
                    image: '',
                })
            })
            .catch((err) => {
                Toast.fire({
                    icon: 'error',
                    title: err
                })
            })
            :
            dispatch(addItem({ ...Form }))
                .unwrap()
                .then(() => {
                    Toast.fire({
                        icon: 'success',
                        title: 'Item Added'
                    })
                    setTimeout(() => {
                        navigate('/Admin/Inventory')
                    }, 2000);
                    setForm({
                        itemName: '',
                        brand: '',
                        priceIn: '',
                        priceOut: '',
                        category: '',
                        stock: '',
                        image: '',
                    })
                })
                .catch((err) => {
                    Toast.fire({
                        icon: 'error',
                        title: err
                    })
                })
    }
    useEffect(() => {
        dispatch(changeName({ name: isID ? "Update Item" : "Add Item" }))
        if (isID) {
            dispatch(showItemsByID(id))
                .unwrap()
                .then((payload) => {
                    setForm({
                        itemName: payload.itemName,
                        brand: payload.brand,
                        priceIn: payload.priceIn,
                        priceOut: payload.priceOut,
                        category: payload.category,
                        stock: payload.stock,
                        image: payload.image,
                    })
                })
                .catch(err => { throw err })
        }
    }, [isID, id, dispatch])
    return (
        <section>
            <div className="bg-gray-50 min-h-screen pt-20">
                <div className="container mx-auto px-5 pt-5">
                    <div className='bg-white p-5 shadow-lg rounded-lg'>
                        <form onSubmit={handleSubmit}>
                            <div className='mb-4'>
                                <Input type="text" name="image" value={Form.image} onChange={handleChange} title={'Upload Image Url'} />
                            </div>
                            <div className="grid md:grid-cols-2 md:gap-6">
                                <Input type="text" name="itemName" value={Form.itemName} onChange={handleChange} title={'Item Name'} />
                                <Input type="text" name="brand" value={Form.brand} onChange={handleChange} title={'Brand'} />
                            </div>
                            <div className="grid md:grid-cols-2 md:gap-6">
                                <Input type="number" name="priceIn" value={Form.priceIn} onChange={handleChange} title={'Price In'} />
                                <Input type="number" name="priceOut" value={Form.priceOut} onChange={handleChange} title={'Price out'} />
                            </div>
                            <div className="grid md:grid-cols-2 md:gap-6">
                                <Input type="text" name="category" value={Form.category} onChange={handleChange} title={'Category'} />
                                <Input type="number" name="stock" value={Form.stock} onChange={handleChange} title={'Stock'} />
                            </div>
                            <Button type="submit" label={'Submit'} />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
