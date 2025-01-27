'use client';

import { useState } from 'react';
import { Button, Container, Text, Title } from '@mantine/core';
import classes from './Hero.module.css';
import { Dots } from './Dots';
import ChatBox from '../ChatBox/ChatBox';

const Hero = () => {
  const [showChatBox, setShowChatBox] = useState(true);
  const toggleChatBox = () => {
    setShowChatBox(!showChatBox);
  };

  return (
    <div className={classes.wrapper}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />
      <div className={classes.inner}>
        <Title className={classes.title}>
          <Text component="span" className={classes.highlight} inherit>
            Write No More
          </Text>{' '}
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" c="dimmed" className={classes.description}>
            Write concisely, accurately, and clearly with our AI companion.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button
            onClick={toggleChatBox}
            className={classes.control}
            size="lg"
            variant="default"
            color="gray"
          >
            Try It Out
          </Button>
          <Button className={classes.control} size="lg">
            See Pricing
          </Button>
        </div>
        {showChatBox && (
          <ChatBox />
        )}
      </div>
    </div>
  );
};

export default Hero;