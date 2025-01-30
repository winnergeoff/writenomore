'use client'
import Link from 'next/link';
import { IconSquare, IconCubeSpark, IconOctahedron } from '@tabler/icons-react';
import {
  Badge,
  Card,
  Container,
  Group,
  SimpleGrid,
  Text,
  Title,
  useMantineTheme,
  List,
  Button
} from '@mantine/core';
import classes from './HeroCards.module.css';

const pricingData = [
  {
    title: 'Basic',
    description: 'Our most affordable option',
    listItems: [
      'Limited number of messages per month',
      'Tailored WalterAI experience - pick an identity for your responses',
      'Detailed explanations of the reasoning behind the AI feedback'
    ],
    icon: IconSquare,
  },
  {
    title: 'Advanced',
    description:
      'Our best value',
    listItems: [
      'Large number of messages per month',
      'Tailored WalterAI experience - pick multiple identities for your responses',
      'Detailed explanations of the reasoning behind the AI feedback',
      'Access to our other AI tools',
    ],
    icon: IconCubeSpark,
  },
  {
    title: 'Power',
    description:
      'All the power of our AI Tools',
    listItems: [
      'Unlimited number of messages per month',
      'Tailored WalterAI experience - pick multiple identities for your responses',
      'Detailed explanations of the reasoning behind the AI feedback',
      'Access to our other AI tools',
    ],
    icon: IconOctahedron,
  },
];

const HeroCards = () => {
  const theme = useMantineTheme();
  const features = pricingData.map((feature) => (
    <Link key={feature.title} href='/Payment' className={classes.cardLink}>
      <Card shadow="md" radius="md" className={classes.card} padding="xl">
        <feature.icon size={50} stroke={2} color={theme.colors.blue[6]} />
        <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
          {feature.title}
        </Text>
        <Text fz="sm" c="dimmed" mt="sm" className={classes.smallDescription}>
            {feature.description}
          </Text>
        <List>
          {feature.listItems.map((item) => (
            <List.Item key={item}>{item}</List.Item>
          ))}
        </List>
        <Button
          type="submit"
          size="md"
          className={classes.cardButton}
        >
          Sign up
        </Button>
      </Card>
    </Link>
  ));

  return (
    <Container size="lg" py="xl">
      <Group justify="center">
        <Badge variant="filled" size="lg">
          Write No More
        </Badge>
      </Group>

      <Title order={2} className={classes.title} ta="center" mt="sm">
        Simple Signup. Cancel Anytime.
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Explore all of our pricing options here. We have different plans to work with any budget.
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}

export default HeroCards;