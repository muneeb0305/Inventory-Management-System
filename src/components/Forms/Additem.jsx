import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Inventory from '../../API/Inventory';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { changeName } from '../../Redux-Store/actions';
import Input from '../Input/input'

export default function Additem() {
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
        isID ? Inventory.updateItem(id, { ...Form })
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
            Inventory.addItem({ ...Form })
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
        if (isID) {
            Inventory.viewItem(id)
                .then((data) => {
                    setForm({
                        itemName: data.itemName,
                        brand: data.brand,
                        priceIn: data.priceIn,
                        priceOut: data.priceOut,
                        category: data.category,
                        stock: data.stock,
                        image: data.image,
                    })
                })
                .catch(err => { throw err })
        }
    }, [isID, id])
    const dispatch = useDispatch()
    dispatch(changeName({ name: isID ? "Update Item" : "Add Item" }))
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
                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-4">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
