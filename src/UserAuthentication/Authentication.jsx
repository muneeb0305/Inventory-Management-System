import AdminRoutes from '../Admin/AdminRoutes'
import CustomerRoutes from '../Customer/CustomerRoutes'
import LoginLayout from '../Login/LoginLayout'
export default function Authentication() {
    const token = JSON.parse(localStorage.getItem('token'));
    const userRole = JSON.parse(localStorage.getItem('User'));
    if (token && userRole === 'Admin') {
        return <AdminRoutes />;
    } else if (token && userRole === 'Customer') {
        return <CustomerRoutes />;
    } else {
        return <LoginLayout />;
    }
}
