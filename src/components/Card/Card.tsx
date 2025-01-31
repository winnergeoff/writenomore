import Link from 'next/link';
import { IconUserQuestion } from '@tabler/icons-react';
import { Paper, Text, ThemeIcon } from '@mantine/core';
import classes from './Card.module.css';

const Card = () => {
  return (
    <Link href="/FAQ" className={classes.cardLink}>
      <Paper withBorder radius="md" className={classes.card}>
        <ThemeIcon
          size="xl"
          radius="md"
          variant="gradient"
          gradient={{ deg: 0, from: 'pink', to: 'orange' }}
        >
          <IconUserQuestion size={28} stroke={1.5} />
        </ThemeIcon>
        <Text size="xl" fw={500} mt="md">
          Did you know?
        </Text>
        <Text size="sm" mt="sm" c="dimmed">
          Many answers to common questions can also be found in our FAQ! Take a peek there to see if we 
          may already have the answers to your questions there!
        </Text>
      </Paper>
    </Link>
  );
}

export default Card;