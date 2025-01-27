'use client';

import { useState } from 'react';
import {
  Button,
  Container,
  Textarea,
  Text,
  Group,
  Stack,
  Notification,
  Card,
  Title,
  Space,
} from '@mantine/core';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

const ChatBox = () => {
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null); // State to track errors

  const handleSubmit = async () => {
    if (!question.trim()) return;

    const newMessages: ChatMessage[] = [...messages, { role: 'user', content: question }];
    setMessages(newMessages); // Update state with user message
    setQuestion('');
    setLoading(true);
    setError(null); // Reset any previous error

    try {
      const response = await fetch('/api/chat-gemini', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      });

      const data = await response.json();

      // If the API returns an error, we need to display it
      if (response.status !== 200) {
        throw new Error(data.error || 'Something went wrong');
      }

      // If successful, update messages with assistant's answer
      setMessages([
        ...newMessages,
        { role: 'assistant', content: data }
      ]);
    } catch (error: any) {
      console.error('Error:', error);
      setError(error.message || 'Failed to fetch answer from ChatGPT');
      setMessages([
        ...newMessages,
        { role: 'assistant', content: 'Sorry, something went wrong.' }
      ]);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Container size="sm">
      <Space h="xl" />
      <Card shadow="md" padding="lg" radius="md" withBorder>
        <Stack gap="lg">
          {/* Title */}
          <Title order={1} ta="center">
            Chat with Walter
          </Title>

          {/* Notification for errors */}
          {error && (
            <Notification
              color="red"
              title="Error"
              onClose={() => setError(null)} // Hide error notification on close
              style={{ marginBottom: '20px' }}
            >
              {error}
            </Notification>
          )}

          {/* Chat messages */}
          <div style={{ maxHeight: 400, overflowY: 'auto' }}>
            {messages.map((message, index) => (
              <Card key={index} shadow="sm" radius="md" withBorder style={{ marginBottom: '12px' }}>
                <Text fw={500} color={message.role === 'user' ? 'blue' : 'green'}>
                  {message.role === 'user' ? 'You' : 'Walter'}:
                </Text>
                <Text>{message.content}</Text>
              </Card>
            ))}
          </div>

          {/* Input area for the question */}
          <Textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Enter the text you need us to help you with!"
            autosize
            minRows={2}
            maxRows={6}
            radius="md"
          />

          {/* Submit Button */}
          <Group align="right">
            <Button
              onClick={handleSubmit}
              loading={loading}
              disabled={loading || !question.trim()}
              variant="outline"
              radius="md"
            >
              Ask
            </Button>
          </Group>
        </Stack>
      </Card>
    </Container>
  )
}

export default ChatBox;