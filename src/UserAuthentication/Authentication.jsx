import { useSelector } from 'react-redux';
import AdminRoutes from '../Admin/AdminRoutes'
import CustomerRoutes from '../Customer/CustomerRoutes'
import LoginLayout from '../Login/LoginLayout'
import { Route, Routes } from 'react-router-dom';
export default function Authentication() {
    const Role = useSelector((state) => state.Auth.role)
    const Token = useSelector((state) => state.Auth.token)
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
