'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  IconCreditCardPay,
  IconDashboard,
  IconFileDollar,
  IconFileInvoice,
  IconFileReport,
  IconSettings,
  IconShoppingBag,
  IconSwitchHorizontal,
  IconUsers,
} from '@tabler/icons-react';
import { Code, Group } from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './sidebar.module.css';

const data = [
  { link: 'dashboard', label: 'Dashboard', icon: IconDashboard },
  { link: 'dashboard', label: 'Transactions', icon: IconSwitchHorizontal },
  { link: 'dashboard', label: 'Items', icon: IconShoppingBag },
  { link: 'dashboard', label: 'Clients', icon: IconUsers },
  { link: 'dashboard', label: 'Quates', icon: IconFileInvoice },
  { link: 'dashboard', label: 'Invoices', icon: IconFileDollar },
  { link: 'dashboard', label: 'Payments', icon: IconCreditCardPay },
  { link: 'dashboard', label: 'Recurring Invoices', icon: IconFileReport },
];

export function Sidebar() {
  const [active, setActive] = useState('Billing');

  const links = data.map((item) => (
    <Link
      className={classes.link}
      data-active={item.label === active || undefined}
      href={`/${item.link}`}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
          <MantineLogo size={28} inverted style={{ color: 'white' }} />
          <Code fw={700} className={classes.version}>
            v3.1.2
          </Code>
        </Group>
        {links}
      </div>

      <div className={classes.footer}>
        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconSettings className={classes.linkIcon} stroke={1.5} />
          <span>Settings</span>
        </a>
      </div>
    </nav>
  );
}
