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
  //Redux States
  const Loading = useSelector(state => state.orders.loading)
  const toggle = useSelector(state => state.appState.darkMode)
  const Data = useSelector(state => state.orders.customerCard)

  const dispatch = useDispatch()
  useEffect(() => {
    //BreadCrumb
    dispatch(changeName({ name: "Dashboard" }))

    dispatch(customerCard())
    //set loader time 1 second when api give false to show loader in ui
    setTimeout(() => {
      setShowLoader(Loading)
    }, 500);
    // eslint-disable-next-line
  }, [])

  return (
    showLoader ? <Loader /> :
      <section>
        <div className={`${toggle ? 'bg-dark3' : 'bg-gray-100'} min-h-screen pb-4 pt-20`}>
          <div className='container mx-auto px-5'>
            <div className='grid gap-6 mb-5 md:grid-cols-3'>
              {
                DashboardCardData.map(({ title, icon, textColor, bgColor }) => {
                  if (title === 'Order Placed') {
                    return (<Card
                      key={title}
                      textColor={toggle ? 'text-dark4' : 'text-blue-500'}
                      bgColor={toggle ? 'bg-dark10' : 'bg-blue-100'}
                      icon={icon}
                      title={title}
                      value={Data.OrderPlaced}
                    />)
                  }
                  else if (title === 'Pending Orders') {
                    return (<Card
                      key={title}
                      textColor={toggle ? 'text-dark4' : 'text-orange-500'}
                      bgColor={toggle ? 'bg-dark10' : 'bg-orange-100'}
                      icon={icon}
                      title={title}
                      value={Data.OrderPending}
                    />)
                  }
                  return (<Card
                    key={title}
                    textColor={toggle ? 'text-dark4' : 'text-green-500'}
                    bgColor={toggle ? 'bg-dark10' : 'bg-green-100'}
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