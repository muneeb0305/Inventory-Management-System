import React, { useState } from 'react'
import Modal from '../Modal/InventoryModel';

export default function Table(props) {
  const tableData = props.tableData;
  const [searchValue1, setSearchValue1] = useState('');
  const [searchValue2, setSearchValue2] = useState('');
  const [searchValue3, setSearchValue3] = useState('');

  const tableHeader = props.tableHeader;

  const handleSearch1 = (event) => {
    setSearchValue1(event.target.value);
  }
  const handleSearch2 = (event) => {
    setSearchValue2(event.target.value);
  }
  const handleSearch3 = (event) => {
    setSearchValue3(event.target.value);
  }
  const filteredData = tableData.filter(row => {
    if (row.itemName.toLowerCase().includes(searchValue1.toLowerCase()) &&
      row.brand.toLowerCase().includes(searchValue2.toLowerCase()) &&
      row.category.toLowerCase().includes(searchValue3.toLowerCase())) {
      return true;
    }
    return false;
  });

  return (
    <section>
      <div className='w-full'>
        <div className="p-4">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-x-auto">
                <div className='grid md:grid-cols-3 gap-5'>
                  <div className="relative rounded-md shadow-sm border-gray-100 border-2 mb-5">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                      <svg className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                        <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                      </svg>
                    </div>
                    <input
                      className="form-input rounded-md py-2 pl-10 pr-4 block w-full leading-5 bg-white placeholder-gray-500 text-gray-900 focus:outline-none focus:placeholder-gray-400 focus:bg-white focus:text-gray-900"
                      type="Search"
                      placeholder="Search By Name"
                      value={searchValue1}
                      onChange={handleSearch1}
                    />
                  </div>
                  <div className="relative rounded-md shadow-sm border-gray-100 border-2 mb-5">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                      <svg className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                        <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                      </svg>
                    </div>
                    <input
                      className="form-input rounded-md py-2 pl-10 pr-4 block w-full leading-5 bg-white placeholder-gray-500 text-gray-900 focus:outline-none focus:placeholder-gray-400 focus:bg-white focus:text-gray-900"
                      type="Search"
                      placeholder="Search By Brand"
                      value={searchValue2}
                      onChange={handleSearch2}
                    />
                  </div>
                  <div className="relative rounded-md shadow-sm border-gray-100 border-2 mb-5">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                      <svg className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                        <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                      </svg>
                    </div>
                    <input
                      className="form-input rounded-md py-2 pl-10 pr-4 block w-full leading-5 bg-white placeholder-gray-500 text-gray-900 focus:outline-none focus:placeholder-gray-400 focus:bg-white focus:text-gray-900"
                      type="Search"
                      placeholder="Search By Category"
                      value={searchValue3}
                      onChange={handleSearch3}
                    />
                  </div>
                </div>
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
                  <tbody>
                    {filteredData.map((data, index) => (
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
                          <Modal ID={data._id} />
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
