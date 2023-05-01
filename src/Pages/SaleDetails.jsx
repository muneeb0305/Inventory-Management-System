import React from 'react'
import SaleCard from '../components/cards/SaleCard'
import SaleCardData from '../data/SaleCardData'
import SaleBarChart from '../components/Charts/SaleBarChart';
import SaleAreaChart from '../components/Charts/SaleAreaChart';
import SaleBarChart2 from '../components/Charts/SaleBarChart2';
import { DocumentIcon } from '@heroicons/react/24/solid';
import CityTable from '../components/Table/CityTable';
import RevenueData from '../data/RevenueData';
import CustomerSatisfactionData from '../data/CustomerSatisfactionData';
import TargetRealityData from '../data/TargetRealityData';
import { useSelector } from 'react-redux';

export default function SaleDetails() {
  let TotalAmount = 0;
  const TotalOrders = useSelector((state) => state.Orders.length)
  const ProductSold = useSelector((state) => state.Orders.map((data) => data.product).length)
  const Clients = useSelector((state) => state.Orders.map((data) => data.customer_Name))
  const AmountArray = useSelector((state) => state.Orders.map((data) => data.amount))
  const TotalClients = new Set(Clients).size
  for (let i = 0; i < AmountArray.length; i++) {
    TotalAmount += Number(AmountArray[i])
  }
  return (
    <section>
      <div className='bg-gray-100 min-h-screen pb-4'>
        <div className='container mx-auto px-5'>
          <h1 className='text-4xl font-medium py-7'>Sale Overview</h1>
          <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
            {SaleCardData.map(({ textColor, bgColor, title, value, icon, color }) => {
              if (title === 'Total Clients') {
                return (
                  <SaleCard
                    key={title}
                    textColor={textColor}
                    bgColor={bgColor}
                    icon={icon}
                    title={title}
                    value={TotalClients}
                  />)
              }
              else if (title === 'Total Sales') {
                return (
                  <SaleCard
                    key={title}
                    textColor={textColor}
                    bgColor={bgColor}
                    icon={icon}
                    title={title}
                    value={'Rs: ' + TotalAmount + "/-"}
                  />)
              }
              else if (title === 'Total Orders') {
                return (
                  <SaleCard
                    key={title}
                    textColor={textColor}
                    bgColor={bgColor}
                    icon={icon}
                    title={title}
                    value={TotalOrders}
                  />)
              }
              return (
                <SaleCard
                  key={title}
                  textColor={textColor}
                  bgColor={bgColor}
                  icon={icon}
                  title={title}
                  value={ProductSold}
                />)
            })}
          </div>
          <div className="grid gap-3 mb-8 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 ">
            <div className='bg-white p-5 rounded-lg md:col-span-2'>
              <h2 className='text-xl font-medium mb-5'>Total Revenue</h2>
              <SaleBarChart data={RevenueData} />
            </div>
            <div className='bg-white p-5 rounded-lg'>
              <h2 className='text-xl font-medium mb-5'>Customer Satisfaction</h2>
              <SaleAreaChart data={CustomerSatisfactionData} />
            </div>
            <div className='bg-white p-5 rounded-lg'>
              <h2 className='text-xl font-medium mb-5'>Target Vs Reality</h2>
              <SaleBarChart2 data={TargetRealityData} />
            </div>
          </div>
          <div className='mt-10 mb-5 gap-5'>
            <div className='bg-white rounded-lg border-2 shadow-lg p-5'>
              <div className='flex items-center mb-5'>
                <DocumentIcon className="h-7 w-7  text-blue-500" />
                <h2 className='text-xl pl-3'>Sales By Cities</h2>
              </div>
              <CityTable />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
