import AdminRoutes from '../Admin/AdminRoutes'
import CustomerRoutes from '../Customer/CustomerRoutes'
import LoginLayout from '../Login/LoginLayout'
import { Route, Routes } from 'react-router-dom';
export default function Authentication() {
    // const Role = JSON.parse(localStorage.getItem('User'))
    // console.log(Role)
    return (
        <Routes>
            <Route path="Admin/*" element={<AdminRoutes />} />
            <Route path="Customer/*" element={<CustomerRoutes />} />
             <Route path="/*" element={<LoginLayout />} />
        </Routes >
    );
}
