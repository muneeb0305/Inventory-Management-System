import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Login from '../../API/Login';
import Swal from 'sweetalert2';
import Input from '../Input/input'

export default function RegistrationForm() {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
    })
    const navigate = useNavigate()
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
        if (Form.password === Form.retype_password) {
            Login.addUser({ ...Form })
                .then(() => {
                    Toast.fire({
                        icon: 'success',
                        title: 'Customer Added'
                    })
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
                    Toast.fire({
                        icon: 'error',
                        title: err
                    })
                })
        }
        else {
            Toast.fire({
                icon: 'error',
                title: ' Password Not Matched'
            })
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
                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-4">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
