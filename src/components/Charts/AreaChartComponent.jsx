import React from 'react';
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function AreaChartComponent({data}) {
    return (
      <ResponsiveContainer width="100%" height="100%" aspect={3}>
        <AreaChart
          data={data}
          margin={{
            right: 5,
            left: 5,
        }}
        >
                <CartesianGrid  stroke="#F8F8F8	" vertical={false} />

          <XAxis dataKey="name" tickLine={false} padding={{ left: 20, right: 20 }} tick={{fontSize: 12}} axisLine={false}/>
          <Tooltip />
          <Area type="monotone" dataKey="Cancel Orders" stackId="1"  stroke="#ff3838" fill="#ff3838" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
