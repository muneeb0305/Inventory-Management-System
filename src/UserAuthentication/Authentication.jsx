import { useDispatch, useSelector } from 'react-redux';
import AdminRoutes from '../Admin/AdminRoutes'
import CustomerRoutes from '../Customer/CustomerRoutes'
import LoginLayout from '../Login/LoginLayout'
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { LoginSuccess, Logout } from '../actions';
export default function Authentication() {
    const navigate = useNavigate()
    const Role = useSelector((state) => state.Auth.role)
    const Token = useSelector((state) => state.Auth.token)
    const _Token = JSON.parse(localStorage.getItem('token'));
    const _Role = JSON.parse(localStorage.getItem('User'));
    const dispatch = useDispatch()
    useEffect(() => {
        if (_Token && _Role) {
            dispatch(LoginSuccess(_Token, _Role))
            navigate(`/${_Role}`)   
        }
        else if (!_Token) { dispatch(Logout()) }

    }, [dispatch, _Token, _Role, navigate])

    return (
        <Routes>
            {
                Token && Role === 'Admin' ? <Route path="Admin/*" element={<AdminRoutes />} /> :
                    Token && Role === 'Customer' ? <Route path="Customer/*" element={<CustomerRoutes />} /> :
                        <Route path="/*" element={<LoginLayout />} />
            }
        </Routes >
    );
}
