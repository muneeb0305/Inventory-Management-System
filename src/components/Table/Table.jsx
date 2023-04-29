import React, { useState } from 'react'
import Modal from '../Modal/Modal';
export default function Table(props) {
  const tableData = props.tableData;
  
  const [Data, setData] = useState(tableData)
  
  const tableHeader = props.tableHeader;
  
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
                    {Data.length ? (
                    <tbody>
                      {Data.map((row, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50 text-center">
                            {tableHeader.map((header, index) => (
                                <td key={index} className="px-6 py-4 whitespace-nowrap text-sm  text-gray-900">
                                  {row[header]}
                                </td>
                            ))}
                            <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-900 ">
                                {Data.length ? <Modal index={index} Data={Data} setData={setData}/> : null}
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