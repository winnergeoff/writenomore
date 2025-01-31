import { Accordion, Container, Title, Group } from '@mantine/core';
import classes from './SimpleFAQ.module.css';
import WalterLogo2 from '../WalterLogo/WalterLogo2';

const accordionData = [
  {
    control: 'What is WalterAI?',
    panel: 'WalterAI is an AI assisant that you can use to enhance anything from work emails to fiction novels. It can also analyze spreadsheets and notes you may have from class or work via its drag and drop functionality. The possibilities are endless.',
    id: 'what-is-walter-ai'
  },
  {
    control: 'What is WalterAI?',
    panel: 'WalterAI is an AI assisant that you can use to enhance anything from work emails to fiction novels. It can also analyze spreadsheets and notes you may have from class or work via its drag and drop functionality. The possibilities are endless.',
    id: 'what-is-walter-ai1'
  },
  {
    control: 'What is WalterAI?',
    panel: 'WalterAI is an AI assisant that you can use to enhance anything from work emails to fiction novels. It can also analyze spreadsheets and notes you may have from class or work via its drag and drop functionality. The possibilities are endless.',
    id: 'what-is-walter-ai2'
  },
  {
    control: 'What is WalterAI?',
    panel: 'WalterAI is an AI assisant that you can use to enhance anything from work emails to fiction novels. It can also analyze spreadsheets and notes you may have from class or work via its drag and drop functionality. The possibilities are endless.',
    id: 'what-is-walter-ai3'
  },
  {
    control: 'What is WalterAI?',
    panel: 'WalterAI is an AI assisant that you can use to enhance anything from work emails to fiction novels. It can also analyze spreadsheets and notes you may have from class or work via its drag and drop functionality. The possibilities are endless.',
    id: 'what-is-walter-ai4'
  },
  {
    control: 'What is WalterAI?',
    panel: 'WalterAI is an AI assisant that you can use to enhance anything from work emails to fiction novels. It can also analyze spreadsheets and notes you may have from class or work via its drag and drop functionality. The possibilities are endless.',
    id: 'what-is-walter-ai5'
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