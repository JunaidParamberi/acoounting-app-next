'use client';

import React from 'react';
import { ProgressCard } from '@/lib';
import CashFlowChart from './components/CashFlowChart';

const page = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '2rem' }}>
        <ProgressCard title="Total Recievable" currentAmount={5431} targetAmount={10000} />
        <ProgressCard title="Total Payable" currentAmount={1000} targetAmount={2000} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '2rem', width: '100%' }}>
        <CashFlowChart />
      </div>
    </div>
  );
};

export default page;
