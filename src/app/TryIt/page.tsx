import {
  Space,
  Container
} from '@mantine/core';
import ChatBox from '@/components/ChatBox/ChatBox';

export default function Pricing() {
  return (
    <Container size={'75%'}>
      <Space h="xl" />
      <ChatBox />
    </Container>
  );
}
