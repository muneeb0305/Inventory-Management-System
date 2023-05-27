import React, { useEffect } from 'react'
import DashboardCardData from '../data/DashboardCardData'
import BarChart from '../components/Charts/BarChartComponent'
import { CalendarDaysIcon, ClipboardDocumentCheckIcon, HandThumbUpIcon } from '@heroicons/react/24/solid'
import Table from '../components/Table/Table'
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
import Alert from '../components/Alert/Alert'

export default function Dashboard() {
  const dispatch = useDispatch()
  const [showLoader, setShowLoader] = useState(true)
  //Table Headers
  const Headers = ["Date", "Customer Name", "Product", "Quantity", "Amount", "Status", "Action"]
  //Redux States
  const data = useSelector((state) => state.orders.orders)
  const toggle = useSelector(state => state.appState.darkMode)
  const adminLoader = useSelector((state) => state.orders.adminloader)
  const orderloader = useSelector((state) => state.orders.orderloader)
  const AdminCard = useSelector((state) => state.orders.adminCard)
  const error = useSelector((state) => state.orders.error.error)

  useEffect(() => {
    //BreadCrumb
    dispatch(changeName({ name: 'Dashboard' }))
    dispatch(recentOrders())
    dispatch(adminCard())
    setTimeout(() => {
      setShowLoader(adminLoader && orderloader)
    }, 500);
    // eslint-disable-next-line
  }, [])

  return (
    showLoader ? <Loader /> :
      <section>
        {error && Alert({ icon: 'error', title: error })}
        <div className={`${toggle ? 'bg-dark3' : 'bg-gray-100'} min-h-screen pb-4 pt-20`}>
          <div className='container mx-auto px-5 pt-5'>
            <div className='grid gap-6 mb-5 md:grid-cols-2'>
              <div className={`order-1 lg:order-1 ${toggle ? 'bg-dark4 border-2 border-dark2' : 'bg-white border-2'}   w-full p-4 shadow-lg overflow-hidden rounded-lg`}>
                <div className='flex align-middle justify-between mb-10'>
                  <div className='flex items-center'>
                    <CalendarDaysIcon className={`h-7 w-7 ${toggle ? 'text-dark2' : 'text-blue-500'} `} />
                    <h2 className={`text-xl pl-3 ${toggle ? 'text-dark2 ' : 'text-black'}`}>Total Orders</h2>
                  </div>
                </div>
                <BarChart data={TotalOrderData} />
              </div>
              <div className='lg:order-2 flex flex-col gap-6'>
                {
                  DashboardCardData.map(({ title, icon }) => {
                    if (title === 'Order Placed') {
                      return (<Card
                        key={title}
                        textColor={toggle ? 'text-dark4' : 'text-blue-500'}
                        bgColor={toggle ? 'bg-dark10' : 'bg-blue-100'}
                        icon={icon}
                        title={title}
                        value={AdminCard.OrderPlaced}
                      />)
                    }
                    else if (title === 'Pending Orders') {
                      return (<Card
                        key={title}
                        textColor={toggle ? 'text-dark4' : 'text-orange-500'}
                        bgColor={toggle ? 'bg-dark10' : 'bg-orange-100'}
                        icon={icon}
                        title={title}
                        value={AdminCard.OrderPending}
                      />)
                    }
                    return (<Card
                      key={title}
                      textColor={toggle ? 'text-dark4' : 'text-green-500'}
                      bgColor={toggle ? 'bg-dark10' : 'bg-green-100'}
                      icon={icon}
                      title={title}
                      value={AdminCard.OrderDelivered}
                    />)
                  })
                }
              </div>
            </div>
            <div className={`${toggle ? 'bg-dark4 border-2 border-dark2' : 'bg-white border-2'} rounded-lg  shadow-lg p-5`}>
              <div className='flex items-center'>
                <ClipboardDocumentCheckIcon className={`h-7 w-7  ${toggle ? 'text-dark2' : 'text-blue-500'} `} />
                <h2 className='text-xl pl-3'>Recent Orders</h2>
              </div>
              <Table color="bg-red-500" tableData={data} tableHeader={Headers} updateLink={'update_order'} name="recentOrders" dataArr={['date', 'customer_Name', 'product', 'quantity', 'amount']} />
            </div>
            <div className='mt-5  md:grid-cols-2 lg:grid-cols-2 grid  gap-5'>
              <TopSelling />
              <div className={`${toggle ? 'bg-dark4 border-2 border-dark2' : 'bg-white border-2'} border-2 w-full p-5 shadow-lg overflow-hidden`}>
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