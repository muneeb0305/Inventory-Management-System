import React, { useEffect } from 'react'
import DashboardCardData from '../data/DashboardCardData'
import BarChart from '../components/Charts/BarChartComponent'
import { CalendarDaysIcon, ClipboardDocumentCheckIcon, HandThumbUpIcon } from '@heroicons/react/24/solid'
import Table from '../components/Table/OrderTable'
import TotalOrderData from '../data/TotalOrderData'
import SaleAreaChart from '../components/Charts/SaleAreaChart'
import CustomerSatisfactionData from '../data/CustomerSatisfactionData'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../components/cards/Card'
import { changeName } from '../features/App/AppSlice'
import { adminCard, recentOrders } from '../features/Orders/OrderSlice'
import TopSelling from '../components/CustomComponent/TopSelling'
import { useState } from 'react'
import Loader from '../components/Loader/Loader'


export default function Dashboard() {
  const dispatch = useDispatch()
  const Headers = ["Order ID", "Date", "Customer Name", "Product", "Quantity", "Status", "Amount"]

  const [showLoader, setShowLoader] = useState(true)

  const Loading = useSelector(state => state.orders.loading)
  const data = useSelector((state) => state.orders.orders)
  const AdminCard = useSelector((state) => state.orders.adminCard)

  useEffect(() => {
    dispatch(changeName({ name: 'Dashboard' }))
    dispatch(recentOrders())
    dispatch(adminCard())
    setTimeout(() => {
      setShowLoader(Loading)
    }, 1000);
    // eslint-disable-next-line
  }, [])

  return (
    showLoader ? <Loader /> :
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
                </div>
                <BarChart data={TotalOrderData} />
              </div>
              <div className='lg:order-2 flex flex-col gap-6'>
                {
                  DashboardCardData.map(({ title, textColor, bgColor, icon, color }) => {
                    if (title === 'Order Placed') {
                      return (<Card
                        key={title}
                        textColor={textColor}
                        bgColor={bgColor}
                        icon={icon}
                        title={title}
                        value={AdminCard.OrderPlaced}
                      />)
                    }
                    else if (title === 'Pending Orders') {
                      return (<Card
                        key={title}
                        textColor={textColor}
                        bgColor={bgColor}
                        icon={icon}
                        title={title}
                        value={AdminCard.OrderPending}
                      />)
                    }
                    return (<Card
                      key={title}
                      textColor={textColor}
                      bgColor={bgColor}
                      icon={icon}
                      title={title}
                      value={AdminCard.OrderDelivered}
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
              <Table color="bg-red-500" tableData={data} tableHeader={Headers} name="recentOrders" />
            </div>
            <div className='mt-5  md:grid-cols-2 lg:grid-cols-2 grid  gap-5'>
              <TopSelling />
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