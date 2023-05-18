import { useDispatch, useSelector } from 'react-redux';
import AdminRoutes from '../Routes/Admin/AdminRoutes'
import CustomerRoutes from '../Routes/Customer/CustomerRoutes'
import LoginLayout from '../Login/LoginLayout'
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Login from '../Services/Login';
import { LoginSuccess, Logout } from '../Redux-Store/actions/index';

export default function Authentication() {
    const _Token = useSelector((state) => state.Auth.token)
    const _Role = useSelector((state) => state.Auth.role)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        Login.checkToken({ token: sessionStorage.getItem('token') })
            .then(([Token, Role]) => {
                dispatch(LoginSuccess(Token, Role))
                if (Token && Role) {
                    navigate(`/${_Role}`)
                }
                else if (!_Token) { dispatch(Logout()) }
            })
            .catch((err) => {
                throw err
            })
        //eslint-disable-next-line
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
