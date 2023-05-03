import { useDispatch } from 'react-redux';
import AdminRoutes from '../Admin/AdminRoutes'
import CustomerRoutes from '../Customer/CustomerRoutes'
import LoginLayout from '../Login/LoginLayout'
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { LoginSuccess } from '../actions';
export default function Authentication() {
    const navigate = useNavigate()
    const _Token = JSON.parse(localStorage.getItem('token'));
    const _Role = JSON.parse(localStorage.getItem('User'));
    const dispatch = useDispatch()
    useEffect(() => {
        if (_Token && _Role) {
            dispatch(LoginSuccess(_Token, _Role))
            navigate(`/${_Role}`)
        }
        else if (!_Token) { localStorage.clear() }

    }, [dispatch, _Token, _Role, navigate])

    return (
        <Routes>
            {
                _Token && _Role === 'Admin' ? <Route path="Admin/*" element={<AdminRoutes />} /> :
                    _Token && _Role === 'Customer' ? <Route path="Customer/*" element={<CustomerRoutes />} /> :
                        <Route path="/*" element={<LoginLayout />} />
            }
        </Routes >
    );
}
