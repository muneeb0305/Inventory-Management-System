import React from 'react'
import { useSelector } from 'react-redux'
export default function Table({ tableData, tableHeader }) {
  const toggle = useSelector(state => state.appState.darkMode)

  return (
    <section >
      <div className='w-full'>
        <div className="p-4">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-x-auto">
                <table className="min-w-full">
                <thead className={`${toggle?'bg-dark1 ':'bg-blue-600'} text-white text-center`}>
                    <tr className='text-center'>
                      {tableHeader.map((header, index) => (
                        <th key={index} className="text-sm font-medium px-6 py-4">{header}</th>
                      ))}
                    </tr>
                  </thead>
                  {tableData && tableData.length ? (
                    <tbody>
                      {tableData.map((data, index) => (
                        <tr key={index} className={`${toggle ? 'hover:bg-dark5 border-b border-dark6 ' : 'hover:bg-gray-50 border-b '}   text-center`}>
                          <td className="font-medium px-6 py-4 whitespace-nowrap text-sm  text-gray-900">
                            {data.City}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-900">
                            {data.Clients}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-900">
                            {data.ProductSold}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-900">
                            Rs: {data.Sale}/-
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
    </section>
  )

}