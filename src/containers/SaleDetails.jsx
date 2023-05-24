import React, { useEffect, useState } from 'react'
import Card from '../components/cards/Card'
import SaleCardData from '../data/SaleCardData'
import SaleBarChart from '../components/Charts/SaleBarChart';
import SaleAreaChart from '../components/Charts/SaleAreaChart';
import SaleBarChart2 from '../components/Charts/SaleBarChart2';
import { DocumentIcon } from '@heroicons/react/24/solid';
import CityTable from '../components/Table/CityTable';
import RevenueData from '../data/RevenueData';
import CustomerSatisfactionData from '../data/CustomerSatisfactionData';
import TargetRealityData from '../data/TargetRealityData';
import { useDispatch, useSelector } from 'react-redux';
import { changeName } from '../features/App/AppSlice';
import { cityOrders, saleCard } from '../features/Sale/SaleSlice';
import Loader from '../components/Loader/Loader';

export default function SaleDetails() {
  const dispatch = useDispatch()
  const [showLoader, setShowLoader] = useState(true)
  //Table Headers
  const tableHeader = ["City", "Clients", "Product Sold", "Sale"]
  //Redux States
  const Loading = useSelector(state => state.sale.loading)
  const _saleCard = useSelector((state) => state.sale.saleCard)
  const _cityOrders = useSelector((state) => state.sale.orders)
  const toggle = useSelector(state => state.appState.darkMode)

  useEffect(() => {
    dispatch(changeName({ name: 'Sale Overview' }))
    dispatch(saleCard())
    dispatch(cityOrders())
    setTimeout(() => {
      setShowLoader(Loading)
    }, 500);
    // eslint-disable-next-line
  }, [])

  return (
    showLoader ? <Loader /> :
      <section>
        <div className={`${toggle ? 'bg-dark3' : 'bg-gray-100'} min-h-screen pb-4 pt-20`}>
          <div className='container mx-auto px-5 pt-5'>
            <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
              {SaleCardData.map(({ textColor, bgColor, title, icon }) => {
                if (title === 'Total Clients') {
                  return (
                    <Card
                      key={title}
                      textColor={toggle ? 'text-dark4' : 'text-orange-500'}
                      bgColor={toggle ? 'bg-dark10' : 'bg-orange-100'}
                      icon={icon}
                      title={title}
                      value={_saleCard.TotalUsers}
                    />)
                }
                else if (title === 'Total Sales') {
                  return (
                    <Card
                      key={title}
                      textColor={toggle ? 'text-dark4' : 'text-green-500'}
                      bgColor={toggle ? 'bg-dark10' : 'bg-green-100'}
                      icon={icon}
                      title={title}
                      value={'Rs: ' + _saleCard.TotalSale + "/-"}
                    />)
                }
                else if (title === 'Total Orders') {
                  return (
                    <Card
                      key={title}
                      textColor={toggle ? 'text-dark4' : 'text-blue-500'}
                      bgColor={toggle ? 'bg-dark10' : 'bg-blue-100'}
                      icon={icon}
                      title={title}
                      value={_saleCard.TotalOrders}
                    />)
                }
                return (
                  <Card
                    key={title}
                    textColor={toggle ? 'text-dark4' : 'text-teal-500'}
                    bgColor={toggle ? 'bg-dark10' : 'bg-teal-100'}
                    icon={icon}
                    title={title}
                    value={_saleCard.ProductSold}
                  />)
              })}
            </div>
            <div className="grid gap-3 mb-8 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 ">
              <div className={` ${toggle ? 'bg-dark4' : 'bg-white '} p-5 rounded-lg md:col-span-2`}>
                <h2 className='text-xl font-medium mb-5'>Total Revenue</h2>
                <SaleBarChart data={RevenueData} />
              </div>
              <div className={`${toggle ? 'bg-dark4' : 'bg-white '} p-5 rounded-lg`}>
                <h2 className='text-xl font-medium mb-5'>Customer Satisfaction</h2>
                <SaleAreaChart data={CustomerSatisfactionData} />
              </div>
              <div className={`${toggle ? 'bg-dark4' : 'bg-white '} p-5 rounded-lg`}>
                <h2 className='text-xl font-medium mb-5'>Target Vs Reality</h2>
                <SaleBarChart2 data={TargetRealityData} />
              </div>
            </div>
            <div className='mt-10 mb-5 gap-5'>
              <div className={`${toggle ? 'bg-dark4 border-2 border-dark2' : 'bg-white border-2'} rounded-lg  shadow-lg p-5`}>
                <div className='flex items-center mb-5'>
                  <DocumentIcon className={`h-7 w-7  ${toggle ? 'text-dark2' : 'text-blue-500'} `} />
                  <h2 className='text-xl pl-3'>Sales By Cities</h2>
                </div>
                <CityTable tableData={_cityOrders} tableHeader={tableHeader} />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
