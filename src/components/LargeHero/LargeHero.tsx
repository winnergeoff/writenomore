'use client';

import { useState } from 'react';
import { Button, Container, Group, Text } from '@mantine/core';
import classes from './LargeHero.module.css';
import ChatBox from '../ChatBox/ChatBox';

const LargeHero = () => {
  const [showChatBox, setShowChatBox] = useState(false);
  const toggleChatBox = () => {
    setShowChatBox(!showChatBox);
  };
  return (
    <div className={classes.wrapper}>
      <Container size={700} className={classes.inner}>
        <h1 className={classes.title}>
          <Text component="span" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }} inherit>
            Write No More&apos;s
          </Text>{' '}
          WalterAI is an all in one solution
        </h1>

        <Text className={classes.description} color="dimmed">
         Write better and faster using our AI to enhance your own voice.
        </Text>

        <Group className={classes.controls}>
          <Button
            size="xl"
            className={classes.control}
            variant="gradient"
            gradient={{ from: 'blue', to: 'cyan' }}
            onClick={toggleChatBox}
          >
            Get started
          </Button>

          <Button
            component="a"
            href="/Pricing"
            size="xl"
            variant="default"
            className={classes.control}
          >
            Pricing
          </Button>
        </Group>
        {showChatBox && (
          <ChatBox />
        )}
      </Container>
    </div>
  );
}

export default LargeHero;