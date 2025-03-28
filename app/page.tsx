import Link from 'next/link';
import { Button } from '@mantine/core';

export default function HomePage() {
  return (
    <>
      {/* <ColorSchemeToggle /> */}
      <Button>
        <Link href="dashboard">Dashboard</Link>
      </Button>
    </>
  );
}
