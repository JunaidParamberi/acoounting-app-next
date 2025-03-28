'use client';

import React from 'react';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Card } from '@mantine/core';

const data = [
  { name: 'Jan 2025', value: 1000 },
  { name: 'Feb 2025', value: 3000 },
  { name: 'Mar 2025', value: 5000 },
  { name: 'Apr 2025', value: 5000 },
  { name: 'May 2025', value: 5000 },
  { name: 'Jun 2025', value: 5000 },
  { name: 'Jan 2025', value: 1000 },
  { name: 'Feb 2025', value: 3000 },
  { name: 'Mar 2025', value: 5000 },
  { name: 'Apr 2025', value: 5000 },
  { name: 'May 2025', value: 5000 },
  { name: 'Jun 2025', value: 5000 },
];

const CashFlowChart = () => {
  const cardStyle = {
    padding: '1.5rem',
    borderRadius: '8px',

    width: '100%',
  };

  const headingStyle = {
    fontSize: '1rem',
    marginBottom: '1rem',
  };

  const tooltipStyle = {
    borderColor: '#444',
    color: 'black',
  };

  return (
    <Card style={cardStyle}>
      <h2 style={headingStyle}>Cash Flow</h2>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="name" stroke="#aaa" />
          <YAxis stroke="#aaa" />
          <Tooltip contentStyle={tooltipStyle} />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={{ fill: '#3b82f6', r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default CashFlowChart;
