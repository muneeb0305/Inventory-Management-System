import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../features/Auth/AuthSlice';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button/Button';
import Alert from '../components/Alert/Alert';
import Input from '../components/Input/input'
import Select from '../components/Select/Select'
export default function LoginPage() {

    const User = ['Admin', 'Customer']
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [Form, setForm] = useState({
        email: '',
        password: '',
        type: ''
    })
    const handleChange = (e) => {
        setForm({ ...Form, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({ ...Form }))
            .unwrap()
            .then((payload) => {
                const role = payload.role
                if (role === 'Admin') {
                    Alert({ icon: 'success', title: 'Signed in' })
                    navigate('/Admin');
                } else if (role === 'Customer') {
                    Alert({ icon: 'success', title: 'Signed in' })
                    navigate('/Customer');
                }
            })
            .catch((err) => {
                Alert({ icon: 'error', title: err })
            })
    };
    return (
        <section>
            <div className="bg-blue-100 h-screen w-full flex justify-center items-center">
                <div className="bg-blue-600 w-full sm:w-1/2 md:w-9/12 lg:w-1/2 shadow-md flex flex-col md:flex-row items-center mx-5 sm:m-0 rounded">
                    <div className="w-full md:w-1/2 hidden md:flex flex-col justify-center items-center text-white">
                        <h1 className="text-3xl">Hello</h1>
                        <p className="text-5xl font-extrabold">Welcome!</p>
                    </div>
                    <div className="bg-white w-full md:w-1/2 flex flex-col items-center py-32 px-8">
                        <h3 className="text-3xl font-bold text-blue-600 mb-4">
                            LOGIN
                        </h3>
                        <form className="w-full flex flex-col justify-center" onSubmit={handleSubmit} autoComplete='off'>
                            <Input type="email" name="email" value={Form.email} onChange={handleChange} placeholder="Email" title={'Email'} />
                            <Input type="password" name="password" value={Form.password} onChange={handleChange} placeholder="Password" title={'Password'} />
                            <Select label={'Type'} data={User}  name='type' value={Form.type} onChange={handleChange}/>
                            <Button type="submit" label={'Submit'} />
                        </form>
                        <div className='mt-5 shadow-md px-3 py-1 border-2 rounded-lg text-gray-500 hover:text-white hover:cursor-pointer bg-white hover:bg-blue-600'>
                            <Link to='/registration'><p className='text-sm '>Register Your Self</p></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
