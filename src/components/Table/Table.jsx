import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Modal from '../Modal/Model'

export default function Table({ tableData, tableHeader, dataArr, name, color, updateLink }) {
  const toggle = useSelector(state => state.appState.darkMode)
  
  //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(5);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = tableData.slice(indexOfFirstRecord, indexOfLastRecord);
  const changePage = (pageNumber) => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(tableData.length / recordsPerPage);
  const pageButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    pageButtons.push(
      <li key={i} aria-current={i === currentPage ? "page" : undefined}>
        <button
          className={`px-3 py-2 leading-tight ${i === currentPage
            ? "text-white  bg-blue-500 "
            : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
            }`}
          onClick={() => changePage(i)}
        >
          {i}
        </button>
      </li>
    );
  }

  const deleteOrder = () => {
      setCurrentPage(currentPage - 1);
  };
  
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
                    currentRecords && currentRecords.length ? (
                      <tbody>
                        {currentRecords.map((data, index) => (
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
                                <Modal ID={data._id} updateLink={`${updateLink}/${data._id}`} name={name} pagePagination={deleteOrder} />
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
                <div className="mt-8">
        {tableData.length > recordsPerPage && (
          <nav aria-label="Page navigation example" className='md:flex md:justify-center'>
            <ul className="inline-flex items-center -space-x-px">
              <li>
                <button className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 " onClick={() => { if (currentPage > 1) { changePage(currentPage - 1) } }}>
                  <span className="sr-only">Previous</span>
                  <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                </button>
              </li>
              {pageButtons}
              <li>
                <button className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 " onClick={() => { if (currentPage + 1 <= totalPages) { changePage(currentPage + 1) } }}>
                  <span className="sr-only">Next</span>
                  <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

}