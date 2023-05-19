import React, { useEffect, useState } from 'react'
import DashboardCardData from '../data/DashboardCardData'
import BarChart from '../components/Charts/BarChartComponent'
import Select from '../components/Select/Select'
import { CalendarDaysIcon, ClipboardDocumentCheckIcon, HandThumbUpIcon, HeartIcon } from '@heroicons/react/24/solid'
import Table from '../components/Table/OrderTable'
import TotalOrderData from '../data/TotalOrderData'
import SaleAreaChart from '../components/Charts/SaleAreaChart'
import CustomerSatisfactionData from '../data/CustomerSatisfactionData'
import Orders from '../API/Orders'
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from 'react-redux'
import { changeName } from '../Redux-Store/actions'
import SaleCard from '../components/cards/SaleCard'

export default function Dashboard() {
  const dispatch = useDispatch()
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
  })
  const Headers = ["Order ID", "Date", "Customer Name", "Product", "Quantity", "Status", "Amount"]
  const [Data, setData] = useState(0)
  const [recentOrders, setrecentOrders] = useState()
  const isDelete = useSelector((state) => state.appState.isDelete)

  useEffect(() => {
    dispatch(changeName({ name: 'Dashboard' }))
    Orders.getAdminCardData()
      .then((data) => setData(data))
      .catch((err) => {
        Toast.fire({
          icon: 'error',
          title: err.error
        })
      })
    Orders.getRecentOrders()
      .then((data) => setrecentOrders(data))
      .catch((err) => {
        Toast.fire({
          icon: 'error',
          title: err.error
        })
      })
    // eslint-disable-next-line
  }, [isDelete])

  return (
    <section>
      <div className='bg-gray-100 min-h-screen pb-4 pt-20'>
        <div className='container mx-auto px-5 pt-5'>
          <div className='grid gap-6 mb-5 md:grid-cols-2'>
            <div className='order-1 lg:order-1 bg-white border-2 w-full p-4 shadow-lg overflow-hidden rounded-lg'>
              <div className='flex align-middle justify-between mb-10'>
                <div className='flex items-center'>
                  <CalendarDaysIcon className="h-7 w-7  text-blue-500" />
                  <h2 className='text-xl pl-3'>Total Orders</h2>
                </div>
                <Select />
              </div>
              <BarChart data={TotalOrderData} />
            </div>
            <div className='lg:order-2 flex flex-col gap-6'>
              {
                DashboardCardData.map(({ title, textColor, bgColor, icon, color }) => {
                  if (title === 'Order Placed') {
                    return (<SaleCard
                      key={title}
                      textColor={textColor}
                      bgColor={bgColor}
                      icon={icon}
                      title={title}
                      value={Data.OrderPlaced}
                    />)
                  }
                  else if (title === 'Pending Orders') {
                    return (<SaleCard
                      key={title}
                      textColor={textColor}
                      bgColor={bgColor}
                      icon={icon}
                      title={title}
                      value={Data.OrderPending}
                    />)
                  }
                  return (<SaleCard
                    key={title}
                    textColor={textColor}
                    bgColor={bgColor}
                    icon={icon}
                    title={title}
                    value={Data.OrderDelivered}
                  />)
                })
              }
            </div>
          </div>
          <div className='bg-white rounded-lg border-2 shadow-lg p-5'>
            <div className='flex items-center'>
              <ClipboardDocumentCheckIcon className="h-7 w-7  text-blue-500" />
              <h2 className='text-xl pl-3'>Recent Orders</h2>
            </div>
            <Table color="bg-red-500" tableData={recentOrders} tableHeader={Headers} />
          </div>
          <div className='mt-5  md:grid-cols-2 lg:grid-cols-2 grid  gap-5'>
            <div className='bg-white border-2 w-full p-5 shadow-lg'>
              <div className='flex align-middle justify-between mb-7'>
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
            <div className='bg-white border-2 w-full p-5 shadow-lg overflow-hidden'>
              <div className='flex align-middle  mb-10'>
                <HandThumbUpIcon className="h-7 w-7  text-green-500" />
                <h2 className='text-xl pl-3'>Customer Satisfaction</h2>
              </div>
              <SaleAreaChart data={CustomerSatisfactionData} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}