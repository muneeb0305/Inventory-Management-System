import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../components/Input/Input'
import Button from '../components/Button/Button';
import { changeName } from '../features/App/AppSlice';
import { addItem, showItemsByID, updateItem } from '../features/Inventory/InventorySlice';
import Alert from '../components/Alert/Alert';

export default function Additem() {
    const dispatch = useDispatch()
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
                Alert({ icon: 'success', title: 'Item Updated' })
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
                Alert({ icon: 'error', title: err })
            })
            :
            dispatch(addItem({ ...Form }))
                .unwrap()
                .then(() => {
                    Alert({ icon: 'success', title: 'Item Added' })
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
                    Alert({ icon: 'error', title: err })
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
    const toggle = useSelector(state=> state.appState.darkMode)

    return (
        <section>
            <div className={`${toggle ? "bg-dark3 pt-20" : 'bg-gray-100 pt-20'} min-h-screen `}>
                <div className="container mx-auto px-5 pt-5">
                <div className={`${toggle?'bg-dark4':'bg-white'} p-5 shadow-lg rounded-lg`}>
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
