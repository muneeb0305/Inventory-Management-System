import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input/Input'
import Button from '../components/Button/Button';
import Alert from '../components/Alert/Alert';
import { useDispatch } from 'react-redux';
import { addUser } from '../features/Users/UserSlice';

export default function RegistrationForm() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [Form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        retype_password: '',
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        //if password matches then create user else error
        if (Form.password === Form.retype_password) {
            dispatch(addUser({ ...Form }))
                .unwrap()
                .then(() => {
                    Alert({ icon: 'success', title: 'Customer Added' })
                    setTimeout(() => {
                        navigate('/');
                    }, 2000);
                    setForm({
                        id: '',
                        name: '',
                        email: '',
                        password: '',
                        retype_password: '',
                    })
                })
                .catch((err) => {
                    Alert({ icon: 'error', title: err })
                })
        }
        else {
            Alert({ icon: 'error', title: ' Password Not Matched' })
        }
    }
    return (
        <section>
            <div className="bg-gray-50 min-h-screen ">
                <div className="container w-9/12 mx-auto px-5">
                    <h1 className="text-4xl font-medium py-7 text-center">Customer Registration</h1>
                    <div className='bg-white p-5 shadow-lg rounded-lg'>
                        <form onSubmit={handleSubmit}>
                            <div className="grid md:grid-cols-2 md:gap-6">
                                <Input type="text" name="name" value={Form.name} onChange={handleChange} minLength={8} title={'Customer Name'} />
                                <Input type="email" name="email" value={Form.email} onChange={handleChange} title={'Email Address'} />
                            </div>
                            <div className="grid md:grid-cols-2 md:gap-6">
                                <Input type="password" name="password" value={Form.password} onChange={handleChange} title={'Password'} />
                                <Input type="password" name="retype_password" value={Form.retype_password} onChange={handleChange} title={'Retype Password'} />
                            </div>
                            <Button type="submit" label={'Submit'} />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
