import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeName } from '../../features/App/AppSlice'
import { customerOrders } from '../../features/Orders/OrderSlice'
import Loader from '../Loader/Loader'
export default function ViewOrderTable() {
    const tableHeader = ["#", "Date", "Customer Name", "Product", "Quantity", "Status", "City", "Amount"]
    const dispatch = useDispatch()
    const [showLoader, setShowLoader] = useState(true)
    const toggle = useSelector(state => state.appState.darkMode)

    const Loading = useSelector(state => state.orders.loading)
    useEffect(() => {
        dispatch(changeName({ name: "Orders" }))
        dispatch(customerOrders())
        setTimeout(() => {
            setShowLoader(Loading)
        }, 500);
        // eslint-disable-next-line 
    }, [])

    const Orders = useSelector((state) => state.orders.userOrders)

    let color = ''
    return (
        showLoader ? <Loader /> :
            <section >
                <div className={`${toggle ? 'bg-dark3' : 'bg-gray-100'} min-h-screen pb-4 pt-20`}>
                    <div className={` ${toggle?'bg-dark4 border-2 border-dark2':'bg-white border-2'} container mx-auto px-5 2 w-full shadow-lg`}>
                        <div className='w-full'>
                            <div className="p-4">
                                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                        <div className="overflow-x-auto">
                                            <table className="min-w-full">
                                                <thead className={`${toggle ? 'bg-dark1 ' : 'bg-blue-600'} text-white text-center`}>
                                                    <tr className='text-center'>
                                                        {tableHeader.map((header, index) => (
                                                            <th key={index} className="text-sm font-medium px-6 py-4">{header}</th>
                                                        ))}
                                                    </tr>
                                                </thead>
                                                {Orders && Orders.length ? (
                                                    <tbody>
                                                        {Orders.map((row, index) => (
                                                            <tr key={index} className={`${toggle ? 'hover:bg-dark5 border-b border-dark6 ' : 'hover:bg-gray-50 border-b '}   text-center`}>
                                                                <td key={index} className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                                    {index + 1}
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-900">
                                                                    {new Date(row.date).toLocaleDateString()}
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-900">
                                                                    {row.customer_Name}
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-900">
                                                                    {row.product}
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-900">
                                                                    {row.quantity}
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-900">
                                                                    {
                                                                        row.status === 'Order Delivered' ? (
                                                                            color = "bg-green-500",
                                                                            <span className={`${color} rounded-full p-2 shadow-md text-white font-normal whitespace-nowrap`}>{row.status}</span>
                                                                        ) : row.status === 'Order Placed' ? (
                                                                            color = "bg-red-500",
                                                                            <span className={`${color} rounded-full p-2 shadow-md text-white font-normal whitespace-nowrap`}>{row.status}</span>
                                                                        ) : row.status === 'Order Received' ? (
                                                                            color = "bg-green-500",
                                                                            <span className={`${color} rounded-full p-2 shadow-md text-white font-normal whitespace-nowrap`}>{row.status}</span>
                                                                        ) : row.status === 'Order Picked' ? (
                                                                            color = "bg-purple-500",
                                                                            <span className={`${color} rounded-full p-2 shadow-md text-white font-normal whitespace-nowrap`}>{row.status}</span>
                                                                        ) : row.status === 'Order Packaged' ? (
                                                                            color = "bg-orange-500",
                                                                            <span className={`${color} rounded-full p-2 shadow-md text-white font-normal whitespace-nowrap`}>{row.status}</span>
                                                                        ) : row.status === 'Order Shipped' ? (
                                                                            color = "bg-green-500",
                                                                            <span className={`${color} rounded-full p-2 shadow-md text-white font-normal whitespace-nowrap`}>{row.status}</span>
                                                                        ) : (
                                                                            color = "bg-blue-500",
                                                                            <span className={`${color} rounded-full p-2 shadow-md text-white font-normal whitespace-nowrap`}>{row.status}</span>
                                                                        )
                                                                    }
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-900">
                                                                    {row.city}
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-900">
                                                                    Rs: {row.amount}/-
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                ) : (
                                                    <tbody>
                                                        <tr>
                                                            <td colSpan={tableHeader.length} className="text-center text-sm text-gray-400 pt-4">No Data Found</td>
                                                        </tr>
                                                    </tbody>
                                                )}
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )

}