import React from 'react'
import DashboardCard from '../components/cards/DashboardCard'
import DashboardCardData from '../data/DashboardCardData'
import BarChart from '../components/Charts/BarChartComponent'
import Select from '../components/Select/Select'
import { ArchiveBoxXMarkIcon, BanknotesIcon, CalendarDaysIcon, ClipboardDocumentCheckIcon, HandThumbUpIcon, HeartIcon, ShoppingBagIcon } from '@heroicons/react/24/solid'
import AreaChartComponent from '../components/Charts/AreaChartComponent'
import RadialBarChartComponent from '../components/Charts/RadialBarChartComponent'
import LineChartComponent from '../components/Charts/ProfitLossChart'
import Table from '../components/Table/Table'
import RecentOrderData from '../data/RecentOrderData'
import Profit_Loss_Data from '../data/Profit_Loss_Data'
import TotalOrderData from '../data/TotalOrderData'
import CancelOrderData from '../data/CancelOrderData'
import ClientOrderData from '../data/ClientOrderData'
import SaleAreaChart from '../components/Charts/SaleAreaChart'
import CustomerSatisfactionData from '../data/CustomerSatisfactionData'

export default function Dashboard() {
  const Headers = ["Order ID", "Date", "Customer Name", "Product", "Status", "Amount"]
  return (
    <section>
      <div className='bg-gray-100 min-h-screen pb-4'>
        <div className='container mx-auto px-5'>
          <h1 className='text-4xl font-medium py-7'>Dashboard</h1>
          <div className='flex flex-wrap justify-center gap-5'>
            {DashboardCardData.map(({ title, value, icon, color }) => (
              <DashboardCard
                key={title}
                color={color}
                icon={icon}
                title={title}
                value={value}
              />
            ))}
          </div>
          <div className='mt-10 mb-5 md:grid-cols-2 lg:grid-cols-2 grid  gap-5'>
            <div className='bg-white border-2 w-full p-5 shadow-lg overflow-hidden'>
              <div className='flex align-middle justify-between mb-10'>
                <div className='flex items-center'>
                  <BanknotesIcon className="h-7 w-7  text-green-500" />
                  <h2 className='text-xl pl-3'>Profit / Loss</h2>
                </div>
                <Select />
              </div>
              <LineChartComponent data={Profit_Loss_Data} />
            </div>
            <div className='bg-white border-2 w-full p-5 shadow-lg'>
              <div className='flex align-middle justify-between mb-10'>
                <div className='flex items-center'>
                  <HeartIcon className="h-7 w-7  text-red-500" />
                  <h2 className='text-xl pl-3'>Top Selling Products</h2>
                </div>
              </div>
              <ul className="divide-y divide-gray-200 flex  flex-col align-middle ">
                <li className="pb-3 sm:pb-4">
                  <div className="flex items-center justify-between p-4">

                    <div className="">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Jeans
                      </p>

                    </div>
                    <div>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        9,200 Sell
                      </p>
                    </div>
                  </div>
                </li>
                <li className="pb-3 sm:pb-4">
                  <div className="flex items-center justify-between p-4">

                    <div className="">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Hoodies
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        8,600 Sell
                      </p>
                    </div>
                  </div>
                </li>
                <li className="pb-3 sm:pb-4">
                  <div className="flex items-center justify-between p-4">

                    <div className="">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Jackets
                      </p>

                    </div>
                    <div>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        7,600 Sell
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className='mt-10 mb-5 md:grid-cols-2 lg:grid-cols-2 grid  gap-5'>
            <div className='bg-white border-2 w-full p-5 shadow-lg overflow-hidden'>
              <div className='flex align-middle justify-between mb-10'>
                <div className='flex items-center'>
                  <CalendarDaysIcon className="h-7 w-7  text-blue-500" />
                  <h2 className='text-xl pl-3'>Total Orders</h2>
                </div>
                <Select />
              </div>
              <BarChart data={TotalOrderData}/>
            </div>
            <div className='bg-white border-2 w-full  p-5 shadow-lg overflow-hidden'>
              <div className='flex align-middle justify-between mb-10'>
                <div className='flex items-center'>
                  <ArchiveBoxXMarkIcon className="h-7 w-7  text-red-500" />
                  <h2 className='text-xl pl-3'>Cancel Orders</h2>
                </div>
                <Select />
              </div>
              <AreaChartComponent data={CancelOrderData} />
            </div>
          </div>
          <div className='mt-10 mb-5 md:grid-cols-2 lg:grid-cols-2 grid  gap-5'>
            <div className='bg-white border-2 w-full p-5 shadow-lg overflow-hidden'>
              <div className='flex align-middle  mb-10'>
                  <HandThumbUpIcon className="h-7 w-7  text-green-500" />
                  <h2 className='text-xl pl-3'>Customer Satisfaction</h2>
              </div>
              <SaleAreaChart data={CustomerSatisfactionData} />
            </div>
            <div className='bg-white border-2 w-full p-5 shadow-lg overflow-hidden'>
              <div className='flex align-middle justify-start mb-10'>
                <ShoppingBagIcon className="h-7 w-7  text-orange-500" />
                <h2 className='text-xl pl-3'>Client Orders</h2>
              </div>
              <RadialBarChartComponent data={ClientOrderData} />
            </div>
          </div>
          <div className='bg-white rounded-lg border-2 shadow-lg p-5'>
            <div className='flex items-center mb-5'>
              <ClipboardDocumentCheckIcon className="h-7 w-7  text-blue-500" />
              <h2 className='text-xl pl-3'>Recent Orders</h2>
            </div>
            <Table tableData={RecentOrderData} tableHeader={Headers} />
          </div>
        </div>
      </div>
    </section>
  )
}