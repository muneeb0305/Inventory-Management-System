import React from 'react'
import Modal from '../Modal/Model';
import Inventory from '../../API/Inventory';

export default function Table(props) {
  const tableData = props.tableData;
  const tableHeader = props.tableHeader;
  return (
    <section>
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
                      <th className="text-sm font-medium px-6 py-4">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((data, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50 text-center">
                        <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-900">
                          {data.itemName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-900">
                          {data.brand}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-900">
                          {data.priceIn}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-900">
                          {data.priceOut}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-900">
                          {data.category}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-900">
                          {data.stock}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-900 ">
                          <Modal ID={data._id} updateLink={`update_Item/${data._id}`} name={'Inventory'} deleteAPi={(id) => Inventory.deleteItem(id)} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}