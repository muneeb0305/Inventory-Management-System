import React, { useEffect } from 'react'
import SaleCard from '../components/cards/Card'
import DashboardCardData from '../data/DashboardCardData'
import OrderForm from '../containers/OrderForm'
import { useDispatch, useSelector } from 'react-redux'
import { changeName } from '../Redux-Store/AppSlice'
import { customerCard } from '../Redux-Store/OrderSlice'

export default function CustomerDashboard() {
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(changeName({ name: "Dashboard" }))
    dispatch(customerCard())
    // eslint-disable-next-line
  }, [])
  const Data = useSelector(state => state.orders.customerCard)

  return (
    <section>
      <div className='bg-gray-100 min-h-screen pb-4 pt-20'>
        <div className='container mx-auto px-5'>
          <div className='grid gap-6 mb-5 md:grid-cols-3'>
            {
              DashboardCardData.map(({ title, icon, textColor, bgColor }) => {
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