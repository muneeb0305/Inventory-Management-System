import React, { useEffect, useState } from 'react'
import DashboardCard from '../components/cards/DashboardCard'
import DashboardCardData from '../data/DashboardCardData'
import OrderForm from './OrderForm'
import Orders from '../API/Orders'
import { useDispatch, useSelector } from 'react-redux'
import { changeName } from '../Redux-Store/actions'

export default function CustomerDashboard() {
  const isAdded = useSelector((state)=>state.appState.isAdded)
  const [Data, setData] = useState(0)
  useEffect(() => {
    Orders.customerCard()
      .then((data) => setData(data))
      .catch((err) => { throw err })
  }, [isAdded])
  const dispatch = useDispatch()
  dispatch(changeName({name: "Dashboard"}))
  return (
    <section>
      <div className='bg-gray-100 min-h-screen pb-4 pt-20'>
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
                    value={Data.OrderPlaced}
                  />)
                }
                else if (title === 'Pending Orders') {
                  return (<DashboardCard
                    key={title}
                    color={color}
                    icon={icon}
                    title={title}
                    value={Data.OrderPending}
                  />)
                }
                return (<DashboardCard
                  key={title}
                  color={color}
                  icon={icon}
                  title={title}
                  value={Data.OrderDelivered}
                />)
              })
            }
          </div>
          <OrderForm />
        </div>
      </div>
    </section>
  )
}