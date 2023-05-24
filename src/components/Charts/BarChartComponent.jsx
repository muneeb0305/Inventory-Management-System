import React from 'react';
import { useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

export default function BarChartComponent({ data }) {
  const toggle = useSelector(state => state.appState.darkMode)

  return (
    <ResponsiveContainer width="100%" height="100%" aspect={3}>
      <BarChart width={100} height={100} data={data}>
        <CartesianGrid stroke={`${toggle ? "#3ba1c5" : "#F8F8F8"}`} vertical={false} />
        <XAxis dataKey="name" tickLine={false} padding={{ left: 20, right: 20 }} tick={{ fontSize: 12 }} axisLine={false} />
        <Bar dataKey="Total Orders" fill={`${toggle ? "#134b5f" : "#00a1ff"}`} barSize={15} radius={4} />
      </BarChart>
    </ResponsiveContainer>
  );
}


