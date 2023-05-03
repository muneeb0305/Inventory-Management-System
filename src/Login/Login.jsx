import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { LoginSuccess, UserAuthenticate} from '../actions/index';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
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
        dispatch(UserAuthenticate({ ...Form }));
        const tokenFromStorage = JSON.parse(sessionStorage.getItem('token'));
        const userRole = JSON.parse(sessionStorage.getItem('User'));
        if (tokenFromStorage) {
            dispatch(LoginSuccess(tokenFromStorage,userRole))
            if (userRole === 'Admin') {
                navigate('/Admin');
            } else if (userRole === 'Customer') {
                navigate('/Customer');
            }
        } else {
            alert('User Not Found');
        }
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
                            <div className="mb-4">
                                <input type="email" name='email' value={Form.email} onChange={handleChange} placeholder="Email" className="w-full p-3 rounded border placeholder-gray-400 focus:outline-none focus:border-blue-600" />
                            </div>
                            <div className="mb-4">
                                <input type="password" autoComplete='off' name='password' value={Form.password} onChange={handleChange} placeholder="Password" className="w-full p-3 rounded border placeholder-gray-400 focus:outline-none focus:border-blue-600" />
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <label className="text-gray-500 pr-5">Select City</label>
                                <select className="w-52 bg-white border border-gray-300 rounded-md shadow-sm py-2 text-center text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" name='type' value={Form.type} onChange={handleChange} required>
                                    <option hidden value="">Select Type</option>
                                    {
                                        User.map((data, index) => (
                                            <option key={index} value={data}>{data}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <button type="submit" className="bg-blue-600 font-bold text-white focus:outline-none rounded p-3">
                                Submit
                            </button>
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
