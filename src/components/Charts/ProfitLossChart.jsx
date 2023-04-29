import React from 'react';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function ProfitLossChart ({data}) {
    return (
      <ResponsiveContainer width="100%" height="100%" aspect={3}>
        <LineChart data={data} margin={{left:12, right:12}}>
        <CartesianGrid  stroke="#F8F8F8	" vertical={false} />
          <XAxis dataKey="name" tickLine={false}  tick={{fontSize: 13}} axisLine={false} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Profit" stroke="#5cde07" />
          <Line type="monotone" dataKey="Loss" stroke="#ff3838" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
