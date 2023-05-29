import React from 'react'
import { useSelector } from 'react-redux'
import Modal from '../Modal/Model'

export default function Table({ tableData, tableHeader, dataArr, name, color, updateLink }) {
  const toggle = useSelector(state => state.appState.darkMode)
  
  return (
    <section >
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
                  {
                    tableData && tableData.length ? (
                      <tbody>
                        {tableData.map((data, index) => (
                          <tr key={index} className={`${toggle ? 'hover:bg-dark5 border-b border-dark6 ' : 'hover:bg-gray-50 border-b '}   text-center`}>
                            {
                              dataArr.map(key => (
                                <td key={key} className="font-medium px-6 py-4 whitespace-nowrap text-sm  text-gray-900">
                                  {
                                    key === 'Sale' ? `Rs: ${data[key]}` : key === 'date' ? `${new Date(data[key]).toLocaleDateString()}` : data[key]
                                  }
                                </td>
                              ))

                            }
                            {color &&
                              <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-900">
                              {
                                  data.status === 'Order Delivered' ? (
                                      color = "bg-green-500",
                                      <span className={`${color} rounded-full p-2 shadow-md text-white font-normal whitespace-nowrap`}>{data.status}</span>
                                  ) : data.status === 'Order Placed' ? (
                                      color = "bg-red-500",
                                      <span className={`${color} rounded-full p-2 shadow-md text-white font-normal whitespace-nowrap`}>{data.status}</span>
                                  ) : data.status === 'Order Received' ? (
                                      color = "bg-green-500",
                                      <span className={`${color} rounded-full p-2 shadow-md text-white font-normal whitespace-nowrap`}>{data.status}</span>
                                  ) : data.status === 'Order Picked' ? (
                                      color = "bg-purple-500",
                                      <span className={`${color} rounded-full p-2 shadow-md text-white font-normal whitespace-nowrap`}>{data.status}</span>
                                  ) : data.status === 'Order Packaged' ? (
                                      color = "bg-orange-500",
                                      <span className={`${color} rounded-full p-2 shadow-md text-white font-normal whitespace-nowrap`}>{data.status}</span>
                                  ) : data.status === 'Order Shipped' ? (
                                      color = "bg-green-500",
                                      <span className={`${color} rounded-full p-2 shadow-md text-white font-normal whitespace-nowrap`}>{data.status}</span>
                                  ) : (
                                      color = "bg-blue-500",
                                      <span className={`${color} rounded-full p-2 shadow-md text-white font-normal whitespace-nowrap`}>{data.status}</span>
                                  )
                              }
                          </td>
                            }
                            {name &&
                              <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-900 ">
                                <Modal ID={data._id} updateLink={`${updateLink}/${data._id}`} name={name} />
                              </td>
                            }
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