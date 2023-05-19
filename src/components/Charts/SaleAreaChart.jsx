import { CheckCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { AreaChart, Area, ResponsiveContainer, Legend } from 'recharts';



export default function SaleAreaChart({data}) {
    const renderLegend = () => {
        return (
            <>          
                <ul className='flex justify-center pt-2 border-t-2 mt-4 '>
                    <li className='mx-5 text-blue-500 flex items-center border-r-2'><CheckCircleIcon className='h-4'/>Last Month <span className='px-3 border-r-2'></span></li>
                    <li className='text-green-500 flex items-center'><CheckCircleIcon className='h-4'/>This Month</li>
                </ul>
                <ul className='flex justify-center'>
                    <li className='mx-5 text-gray-500 font-medium '>45,000 </li>
                    <li className=' text-gray-500 font-medium'>75,000</li>
                </ul>
            </>
        );
    }
        return (
            <ResponsiveContainer width="100%" height="75%">
                <AreaChart
                    data={data}
                    margin={{
                        right: 5,
                        left: 5,
                    }}
                >
                    <Legend content={renderLegend} iconSize={0} iconType={'line'}/>
                    <Area type="monotone" dataKey="Last Month" stackId="1" stroke="#0000ff" fill="#008eff" />
                    <Area type="monotone" dataKey="ThisMonth" stackId="1" stroke="#008000" fill="#5dee73" />
                </AreaChart>
            </ResponsiveContainer>
        );
    }
