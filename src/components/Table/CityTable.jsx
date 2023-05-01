import React from 'react'
import { useSelector } from 'react-redux'
export default function Table() {
  const tableHeader = ["City", "Clients", "Product Sold", "Sale"]
  const Orders = useSelector((state) => state.Orders.map((data) => data));
  const CityNames = Orders.map((data) => data.city);
  const UniqueCity = new Set(CityNames);

  const CitiesObject = [...UniqueCity].reduce((arr, city) => {
    let TotalAmount = 0;
    const Clients = Orders.filter((order) => order.city === city).map((data) => data.customer_Name);
    const Product = Orders.filter((order) => order.city === city).map((data) => data.quantity);
    const UniqueClients = new Set(Clients).size
    const AmountArray = Orders
      .filter((data) => data.city === city)
      .map((data) => data.amount);
      AmountArray.forEach(amount => {
        TotalAmount += Number(amount);
      }
    );
    console.log(TotalAmount)
    arr.push({
      City: city,
      Clients: UniqueClients,
      'Product Sold': Product,
      Sale: TotalAmount
    });

    return arr;
  }, []);

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
                    </tr>
                  </thead>
                  {CitiesObject.length ? (
                    <tbody>
                      {CitiesObject.map((data, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50 text-center">
                          <td className="font-medium px-6 py-4 whitespace-nowrap text-sm  text-gray-900">
                            {data.City}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-900">
                            {data.Clients}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-900">
                            {data['Product Sold']}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-900">
                            Rs: {data.Sale}/-
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