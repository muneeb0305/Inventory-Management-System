import React from 'react';
import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function BarChartComponent({ data }) {

  return (
    <ResponsiveContainer width="100%" height="100%" aspect={3}>
      <BarChart width={100} height={100} data={data}>
        <CartesianGrid stroke="#F8F8F8	" vertical={false} />
        <XAxis dataKey="name" tickLine={false} padding={{ left: 20, right: 20 }} tick={{ fontSize: 12 }} axisLine={false} />
        <Tooltip />
        <Bar dataKey="Total Orders" fill="#00a1ff" barSize={15} radius={4} />
      </BarChart>
    </ResponsiveContainer>
  );
}


