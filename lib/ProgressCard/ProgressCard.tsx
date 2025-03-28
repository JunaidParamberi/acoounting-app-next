'use client';

import { Card, Progress, Text } from '@mantine/core';

interface ProgressCardProps {
  title: string;
  currentAmount: number;
  targetAmount: number;
}

export function ProgressCard({ title, currentAmount, targetAmount }: ProgressCardProps) {
  const progressPercentage = (currentAmount / targetAmount) * 100;

  return (
    <Card
      withBorder
      style={{ width: '100%' }}
      radius="md"
      padding="xl"
      bg="var(--mantine-color-body)"
    >
      <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
        {title}
      </Text>
      <Text fz="lg" fw={500}>
        ${currentAmount.toLocaleString()} / ${targetAmount.toLocaleString()}
      </Text>
      <Progress value={progressPercentage} mt="md" size="lg" radius="xl" />
    </Card>
  );
}
