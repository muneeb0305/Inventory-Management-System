import React from 'react'
export default function Table({ tableHeader, tableData }) {
  return (
    <section >
      <table className="min-w-full flex">
        <thead className="text-left p-5">
          <tr className='flex flex-col'>
            {tableHeader.map((header, index) => (
              <th key={index} className="text-md font-medium px-6 py-3">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody className='p-5'>
          <tr className="flex flex-col text-right">
            <td className="px-6 py-3 whitespace-nowrap text-md  text-gray-900">
              {tableData.category}
            </td>
            <td className="px-6 py-3 whitespace-nowrap text-md  text-gray-900">
              {tableData.itemName}
            </td>
            <td className="px-6 py-3 whitespace-nowrap text-md  text-gray-900">
              {tableData.brand}
            </td>
            <td className="px-6 py-3 whitespace-nowrap text-md  text-gray-900">
              {tableData.stock}
            </td>
            <td className="px-6 py-3 whitespace-nowrap text-md  text-gray-900">
              {tableData.priceIn}
            </td>
            <td className="px-6 py-3 whitespace-nowrap text-md  text-gray-900">
              {tableData.priceOut}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}