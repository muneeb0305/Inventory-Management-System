import { useDispatch, useSelector } from 'react-redux';
import AppRoutes from '../Routes'
import LoginLayout from '../Routes/LoginLayout'
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Logout, checkToken } from '../features/Auth/AuthSlice';

export default function Authentication() {
    const _Token = sessionStorage.getItem('token')
    const _Role = useSelector((state) => state.Auth.role)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(checkToken({ token: _Token }))
            .unwrap()
            .then((payload) => {
                const role = payload.role
                const token = payload.token
                if (token && role) {
                    navigate(`/${role}`)
                }
                else if (!_Token) {
                    dispatch(Logout())
                }
            })
            .catch(err => { throw err })
        //eslint-disable-next-line
    }, [])

    return (
        <Routes>
            {
                _Token && _Role === 'Admin' ? <Route path="Admin/*" element={<AppRoutes role={'Admin'} />} /> :
                    _Token && _Role === 'Customer' ? <Route path="Customer/*" element={<AppRoutes role={'Customer'} />} /> :
                        <Route path="/*" element={<LoginLayout />} />
            }
        </Routes >
    );
}
