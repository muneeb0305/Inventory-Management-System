import React, { useEffect, useState } from 'react'
import Card from '../components/cards/Card'
import DashboardCardData from '../data/DashboardCardData'
import OrderForm from '../containers/OrderForm'
import { useDispatch, useSelector } from 'react-redux'
import { changeName } from '../features/App/AppSlice'
import { customerCard } from '../features/Orders/OrderSlice'
import Loader from '../components/Loader/Loader'

export default function CustomerDashboard() {

  const [showLoader, setShowLoader] = useState(true)

  const Loading = useSelector(state => state.orders.loading)
  const Data = useSelector(state => state.orders.customerCard)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(changeName({ name: "Dashboard" }))
    dispatch(customerCard())
    setTimeout(() => {
      setShowLoader(Loading)
    }, 1000);
    // eslint-disable-next-line
  }, [])

  return (
    showLoader ? <Loader /> :
      <section>
        <div className='bg-gray-100 min-h-screen pb-4 pt-20'>
          <div className='container mx-auto px-5'>
            <div className='grid gap-6 mb-5 md:grid-cols-3'>
              {
                DashboardCardData.map(({ title, icon, textColor, bgColor }) => {
                  if (title === 'Order Placed') {
                    return (<Card
                      key={title}
                      textColor={textColor}
                      bgColor={bgColor}
                      icon={icon}
                      title={title}
                      value={Data.OrderPlaced}
                    />)
                  }
                  else if (title === 'Pending Orders') {
                    return (<Card
                      key={title}
                      textColor={textColor}
                      bgColor={bgColor}
                      icon={icon}
                      title={title}
                      value={Data.OrderPending}
                    />)
                  }
                  return (<Card
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