import React, { useEffect} from 'react'
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
import { changeName } from '../Redux-Store/AppSlice';
import { cityOrders, saleCard } from '../Redux-Store/SaleSlice';

export default function SaleDetails() {
  const tableHeader = ["City", "Clients", "Product Sold", "Sale"]
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(changeName({name:'Sale Overview'}))
    dispatch(saleCard())
    dispatch(cityOrders())
    // eslint-disable-next-line
  }, [])

  const _saleCard = useSelector((state)=>state.sale.saleCard)
  const _cityOrders = useSelector((state)=>state.sale.orders)
  return (
    <section>
      <div className='bg-gray-100 min-h-screen pb-4 pt-20'>
        <div className='container mx-auto px-5 pt-5'>
          <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
            {SaleCardData.map(({ textColor, bgColor, title, icon }) => {
              if (title === 'Total Clients') {
                return (
                  <Card
                    key={title}
                    textColor={textColor}
                    bgColor={bgColor}
                    icon={icon}
                    title={title}
                    value={_saleCard.TotalUsers}
                  />)
              }
              else if (title === 'Total Sales') {
                return (
                  <Card
                    key={title}
                    textColor={textColor}
                    bgColor={bgColor}
                    icon={icon}
                    title={title}
                    value={'Rs: ' + _saleCard.TotalSale + "/-"}
                  />)
              }
              else if (title === 'Total Orders') {
                return (
                  <Card
                    key={title}
                    textColor={textColor}
                    bgColor={bgColor}
                    icon={icon}
                    title={title}
                    value={_saleCard.TotalOrders}
                  />)
              }
              return (
                <Card
                  key={title}
                  textColor={textColor}
                  bgColor={bgColor}
                  icon={icon}
                  title={title}
                  value={_saleCard.ProductSold}
                />)
            })}
          </div>
          <div className="grid gap-3 mb-8 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 ">
            <div className='bg-white p-5 rounded-lg md:col-span-2'>
              <h2 className='text-xl font-medium mb-5'>Total Revenue</h2>
              <SaleBarChart data={RevenueData} />
            </div>
            <div className='bg-white p-5 rounded-lg'>
              <h2 className='text-xl font-medium mb-5'>Customer Satisfaction</h2>
              <SaleAreaChart data={CustomerSatisfactionData} />
            </div>
            <div className='bg-white p-5 rounded-lg'>
              <h2 className='text-xl font-medium mb-5'>Target Vs Reality</h2>
              <SaleBarChart2 data={TargetRealityData} />
            </div>
          </div>
          <div className='mt-10 mb-5 gap-5'>
            <div className='bg-white rounded-lg border-2 shadow-lg p-5'>
              <div className='flex items-center mb-5'>
                <DocumentIcon className="h-7 w-7  text-blue-500" />
                <h2 className='text-xl pl-3'>Sales By Cities</h2>
              </div>
              <CityTable tableData={_cityOrders} tableHeader={tableHeader}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
