import React from 'react'
import { useSelector } from 'react-redux'
export default function ViewOrderTable() {
    const tableHeader = ["Order ID", "Date", "Customer Name", "Product", "Quantity", "Status", "Amount"]
    const orderState = useSelector((state) => state.Orders)
    const UserState = useSelector((state) => state.User.find((user) => user.token === JSON.parse(localStorage.getItem('token'))))
    const tableData = orderState.filter((data) => data.customer_id === UserState.id)
    let color = ''
    return (
        <section >
            <div className='bg-gray-100 min-h-screen pb-4'>
                <div className='container mx-auto px-5'>
                    <h1 className='text-4xl font-medium py-7'>Your Orders</h1>

                    <div className='w-full'>
                        <div className="p-4">
                            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full">
                                            <thead className="bg-blue-500 text-white text-center">
                                                <tr className='text-center'>
                                                    {tableHeader.map((header, index) => (
                                                        <th key={index} className="text-sm font-medium px-6 py-4">{header}</th>
                                                    ))}
                                                </tr>
                                            </thead>
                                            {tableData.length ? (
                                                <tbody>
                                                    {tableData.map((row, index) => (
                                                        <tr key={index} className="border-b hover:bg-gray-50 text-center">
                                                            <td key={index} className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                                {row.order_id}
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-900">
                                                                {row.date}
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