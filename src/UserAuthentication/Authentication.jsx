import { useDispatch } from 'react-redux';
import AdminRoutes from '../Admin/AdminRoutes'
import CustomerRoutes from '../Customer/CustomerRoutes'
import LoginLayout from '../Login/LoginLayout'
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { LoginSuccess } from '../actions';
export default function Authentication() {
    const _Token = JSON.parse(sessionStorage.getItem('token'));
    const _Role = JSON.parse(sessionStorage.getItem('User'));
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        if (_Token && _Role) {
            dispatch(LoginSuccess(_Token, _Role))
            navigate(`/${_Role}`)
        }
        else if (!_Token) { sessionStorage.clear() }
 // eslint-disable-next-line
    }, [dispatch, _Token, _Role])

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
