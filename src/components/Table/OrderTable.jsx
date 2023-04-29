import React from 'react'
import Modal from '../Modal/Modal';
export default function OrderTable({ tableData, tableHeader, color }) {

    return (
        <section >
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
                                            <th className="text-sm font-medium px-6 py-4">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    {tableData.length ? (
                                        <tbody>
                                            {tableData.map((row, index) => (
                                                <tr key={index} className="border-b hover:bg-gray-50 text-center">
                                                    <td key={index} className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                        {row.order_ID}
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
                                                        <span className={`${color} rounded-full p-2 shadow-md text-white font-normal whitespace-nowrap`}>{row.status}</span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-900">
                                                        {row.amount}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-900 ">
                                                        <Modal ID={row.order_ID} />
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    ) : (
                                        <tr>
                                            <td colSpan={tableHeader.length} className="text-center text-sm text-gray-400 pt-4">No Data Found</td>
                                        </tr>
                                    )}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}