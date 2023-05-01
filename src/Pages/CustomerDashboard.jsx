import React from 'react'
import DashboardCard from '../components/cards/DashboardCard'
import DashboardCardData from '../data/DashboardCardData'
import OrderForm from './OrderForm'
import { useSelector } from 'react-redux'

export default function CustomerDashboard() {

  const orderState = useSelector((state) => state.Orders)
  const UserState = useSelector((state) => state.User.find((user)=>user.token===JSON.parse(localStorage.getItem('token'))))
  const orderPlaced = orderState.filter((data) =>data.customer_id===UserState.id &&data.status === 'Order Placed').length
  const orderPending = orderState.filter((data) => data.customer_id===UserState.id &&data.status !== 'Order Placed' && data.status !== 'Order Delivered').length
  const orderDelivered = orderState.filter((data) =>data.customer_id===UserState.id && data.status === 'Order Delivered').length
  console.log(orderDelivered)
  return (
    <section>
      <div className='bg-gray-100 min-h-screen pb-4'>
        <div className='container mx-auto px-5'>
          <h1 className='text-4xl font-medium py-7'>Dashboard</h1>
          <div className='flex flex-wrap justify-center gap-5'>
            {
              DashboardCardData.map(({ title, icon, color }) => {
                if (title === 'Order Placed') {
                  return (<DashboardCard
                    key={title}
                    color={color}
                    icon={icon}
                    title={title}
                    value={orderPlaced}
                  />)
                }
                else if (title === 'Pending Orders') {
                  return (<DashboardCard
                    key={title}
                    color={color}
                    icon={icon}
                    title={title}
                    value={orderPending}
                  />)
                }
                return (<DashboardCard
                  key={title}
                  color={color}
                  icon={icon}
                  title={title}
                  value={orderDelivered}
                />)
              })
            }
          </div>
          <OrderForm/>
        </div>
      </div>
    </section>
  )
}