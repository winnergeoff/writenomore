import { Accordion, Container, Title, Group } from '@mantine/core';
import classes from './SimpleFAQ.module.css';
import WalterLogo2 from '../WalterLogo/WalterLogo2';

const accordionData = [
  {
    control: 'What is WriteNoMore?',
    panel: 'WriteNoMore is a specialized version of ChatGPT designed to streamline content creation across various formats. It adapts to specific user needs, including tone, target audience, style, and word count, ensuring tailored and engaging output. By first developing a structured outline, WriteNoMore organizes key points, estimates word counts for each section, and then seamlessly crafts the content with a logical flow. Whether you&apos;re writing blog posts, articles, or reports, this method ensures clarity, coherence, and efficiency—making it an ideal tool for generating well-structured, high-quality written content.',
    id: 'what-is-write-no-more'
  },
  {
    control: 'Who should use WriteNoMore?',
    panel: 'WriteNoMore is designed for anyone who needs help writing fast, high-quality content.',
    id: 'who-should-use-write-no-more'
  },
];

const SimpleFAQ = () => {
  const accordionItems = accordionData.map((item) => (
    <Accordion.Item  key={item.id} className={classes.item} value={item.id}>
      <Accordion.Control>{item.control}</Accordion.Control>
      <Accordion.Panel>{item.panel}</Accordion.Panel>
    </Accordion.Item>
  ));
  return (
    <Container size="sm" className={classes.wrapper}>
      <Group justify="center" className={classes.title}>
        <Title ta="center">
          Frequently Asked Questions
        </Title>
        <WalterLogo2 />
      </Group>

      <Accordion variant="separated">
        {accordionItems}
      </Accordion>
    </Container>
  );
}

export default SimpleFAQ;