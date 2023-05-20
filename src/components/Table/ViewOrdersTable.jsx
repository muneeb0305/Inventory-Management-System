import React, { useEffect, useState } from 'react'
import Orders from '../../API/Orders'
import { useDispatch } from 'react-redux'
import { changeName } from '../../Redux-Store/AppSlice'
export default function ViewOrderTable() {
    const tableHeader = ["#", "Date", "Customer Name", "Product", "Quantity", "Status", "City", "Amount"]
    const dispatch = useDispatch()
    dispatch(changeName({ name: "Orders" }))
    const [Data, setData] = useState([])
    useEffect(() => {
        Orders.customerOrder()
            .then((data) => setData(data))
            .catch(err => { throw err })
    }, [])

    let color = ''
    return (
        <section >
            <div className='bg-gray-100 min-h-screen  pt-20'>
                <div className='container mx-auto px-5 bg-white border-2 w-full shadow-lg'>
                    <div className='w-full'>
                        <div className="p-4">
                            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full">
                                            <thead className="bg-blue-600 text-white text-center">
                                                <tr className='text-center'>
                                                    {tableHeader.map((header, index) => (
                                                        <th key={index} className="text-sm font-medium px-6 py-4">{header}</th>
                                                    ))}
                                                </tr>
                                            </thead>
                                            {Data && Data.length ? (
                                                <tbody>
                                                    {Data.map((row, index) => (
                                                        <tr key={index} className="border-b hover:bg-gray-50 text-center">
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