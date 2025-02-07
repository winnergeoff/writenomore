import { Button, Group, SimpleGrid, Textarea, TextInput, Title, Space } from '@mantine/core';
import { useForm } from '@mantine/form';
import Card from '@/components/Card/Card';
import WalterLogo2 from '../WalterLogo/WalterLogo2';

const Contact = () => {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
    },
  });

  return (
    <>
      <Space h="xl" />
      <form onSubmit={form.onSubmit(() => {})}>
        <Group justify="center">
          <Title
            order={2}
            size="h1"
            style={{ fontFamily: 'Greycliff CF, var(--mantine-font-family)' }}
            fw={900}
            ta="center"
          >
            Get in touch
          </Title>
          <WalterLogo2 />
        </Group>

        <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
          <TextInput
            label="Name"
            placeholder="Your name"
            name="name"
            variant="filled"
            {...form.getInputProps('name')}
          />
          <TextInput
            label="Email"
            placeholder="Your email"
            name="email"
            variant="filled"
            {...form.getInputProps('email')}
          />
        </SimpleGrid>

        <TextInput
          label="Subject"
          placeholder="Subject"
          mt="md"
          name="subject"
          variant="filled"
          {...form.getInputProps('subject')}
        />
        <Textarea
          mt="md"
          label="Message"
          placeholder="Your message"
          maxRows={10}
          minRows={5}
          autosize
          name="message"
          variant="filled"
          {...form.getInputProps('message')}
        />

        <Group justify="center" mt="xl">
          <Button type="submit" size="md">
            Send message
          </Button>
        </Group>
      </form>
      <Space h="xl" />
      <Card />
    </>
  );
}

export default Contact;