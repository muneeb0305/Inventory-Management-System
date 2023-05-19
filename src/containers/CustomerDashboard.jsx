import React, { useEffect, useState } from 'react'
import SaleCard from '../components/cards/SaleCard'
import DashboardCardData from '../data/DashboardCardData'
import OrderForm from './OrderForm'
import Orders from '../API/Orders'
import { useDispatch, useSelector } from 'react-redux'
import { changeName } from '../Redux-Store/actions'

export default function CustomerDashboard() {
  const isAdded = useSelector((state) => state.appState.isAdded)
  const [Data, setData] = useState(0)
  useEffect(() => {
    Orders.customerCard()
      .then((data) => setData(data))
      .catch((err) => { throw err })
  }, [isAdded])
  const dispatch = useDispatch()
  dispatch(changeName({ name: "Dashboard" }))
  return (
    <section>
      <div className='bg-gray-100 min-h-screen pb-4 pt-20'>
        <div className='container mx-auto px-5'>
          <div className='grid gap-6 mb-5 md:grid-cols-3'>
            {
              DashboardCardData.map(({ title, icon, color, textColor, bgColor }) => {
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
          <OrderForm />
        </div>
      </div>
    </section>
  )
}