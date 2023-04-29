import { ShoppingBagIcon } from '@heroicons/react/20/solid';
import { DocumentCheckIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { BarChart, Bar, XAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';



export default function SaleBarChart2({data}) {
  const renderLegend = () => {
    return (
        <>          
            <ul className='flex justify-center border-t-2'>

                <li className='mx-3 text-green-500 flex items-center border-r-2'><ShoppingBagIcon className='h-4'/>Reality Sales <span className='px-3 border-r-2'></span></li>
                <li className='text-orange-400 flex items-center'><DocumentCheckIcon className='h-4'/>Target Sales</li>
            </ul>
            <ul className='flex justify-center'>
                <li className='mx-5 text-gray-500 font-medium '>78,823 </li>
                <li className=' text-gray-500 font-medium'>72,122</li>
            </ul>
        </>
    );
}
    return (
      <ResponsiveContainer width="100%" height="80%">
        <BarChart
          data={data}
          margin={{
            right: 5,
            left: 5,
        }}
        >
          <XAxis dataKey="name" tickLine={false} padding={{ left: 20, right: 20 }} tick={{fontSize: 6}} axisLine={false}/>
          <Tooltip />
          <Legend content={renderLegend} iconSize={0} iconType={'line'}/>
          <Bar name='Reality Sales' dataKey="Rsales" fill="#24d224" barSize={20} radius={2} />
          <Bar name='Target Sales'dataKey="Tsales"  fill="#FFA836"barSize={20} radius={2} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
