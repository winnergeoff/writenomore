import { IconArrowDownRight, IconArrowUpRight } from '@tabler/icons-react';
import { Center, Group, Paper, RingProgress, SimpleGrid, Text, Container } from '@mantine/core';
import classes from './StatsRing.module.css';

const icons = {
  up: IconArrowUpRight,
  down: IconArrowDownRight,
};

const data = [
  { label: 'Words Written', stats: '456,578', progress: 65, color: 'teal', icon: 'up' },
  { label: 'Active Writers', stats: '2,550', progress: 72, color: 'blue', icon: 'up' },
  {
    label: 'Hours Saved',
    stats: '4,735',
    progress: 52,
    color: 'red',
    icon: 'down',
  },
] as const;

const StatsRing = () => {
  const stats = data.map((stat) => {
    const Icon = icons[stat.icon];
    return (
      <Paper withBorder radius="md" p="xs" key={stat.label}>
        <Group>
          <RingProgress
            size={80}
            roundCaps
            thickness={8}
            sections={[{ value: stat.progress, color: stat.color }]}
            label={
              <Center>
                <Icon size={20} stroke={1.5} />
              </Center>
            }
          />

          <div>
            <Text c="dimmed" size="xs" tt="uppercase" fw={700}>
              {stat.label}
            </Text>
            <Text fw={700} size="xl">
              {stat.stats}
            </Text>
          </div>
        </Group>
      </Paper>
    );
  });

  return (
    <Container className={classes.wrapper}>
      <SimpleGrid cols={{ base: 1, sm: 3 }}>{stats}</SimpleGrid>
    </Container>
  );
}

export default StatsRing;