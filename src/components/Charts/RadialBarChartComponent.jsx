import React from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, Tooltip } from 'recharts';

const style = {
    lineHeight: '24px',
};

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip bg-white p-3 shadow-md border-2">
                <p className="label">{`${payload[0].value}`}</p>
            </div>
        );
    }
    return null;
};

export default function RadialBarChartComponent({data}) {
    return (
        <ResponsiveContainer width="100%" height="100%" aspect={2}>
            <RadialBarChart innerRadius="30%" outerRadius="112%"  barSize={15} data={data}>
                <RadialBar
                    minAngle={35}
                    background
                    clockWise
                    dataKey="uv"
                />
                <Tooltip content={<CustomTooltip />} />          
                <Legend iconSize={15} layout="center" verticalAlign="top" wrapperStyle={style} />
            </RadialBarChart>
        </ResponsiveContainer>
    );
}
