import React from 'react';
import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function SaleBarChart({data}) {
    return (
      <ResponsiveContainer width="100%" height="100%" aspect={3}>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid  stroke="#F8F8F8	" vertical={false} />
          <XAxis dataKey="name" tickLine={false} padding={{ left: 20, right: 20 }} tick={{fontSize: 12}} axisLine={false}/>
          <Tooltip />
          <Legend wrapperStyle={{fontSize: "13px"}} iconSize={10} iconType={'circle'}/>
          <Bar dataKey="Online Sales" fill="#008eff" barSize={15} radius={4} />
          <Bar dataKey="Offline Sales"  fill="#5dee73"barSize={15} radius={4} />
        </BarChart>
      </ResponsiveContainer>
    );
  }

