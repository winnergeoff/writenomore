 'use client'
import Link from 'next/link';
import { useState } from 'react';
import {
  IconBook,
  IconPencil,
  IconChevronDown,
  IconGavel,
  IconMail,
  IconMoon,
} from '@tabler/icons-react';
import {
  Box,
  Burger,
  Button,
  Center,
  Collapse,
  Divider,
  Drawer,
  Group,
  HoverCard,
  ScrollArea,
  SimpleGrid,
  Text,
  ThemeIcon,
  UnstyledButton,
  useMantineTheme,
  useMantineColorScheme,
  useComputedColorScheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Navbar.module.css';
import WalterLogo2 from '../WalterLogo/WalterLogo2';

const featuresPopOut = [
  {
    icon: IconGavel,
    title: 'Legal Documents',
    description: 'Let our AI analyze your legal documents',
  },
  {
    icon: IconPencil,
    title: 'Creative Writing',
    description: 'Push through writers block with the help of our AI',
  },
  {
    icon: IconMail,
    title: 'Emails',
    description: 'Our AI can help you craft that important business email in seconds',
  },
  {
    icon: IconBook,
    title: 'School',
    description: 'AI can help enhance your writing without rewriting, give yourself an edge',
  }
];

const navData = [
  { label: 'Try it', url: '/TryIt' },
  { label: 'Pricing', url: '/Pricing' },
  { label: 'FAQ', url: '/FAQ' },
  { label: 'Contact Us', url: '/ContactUs' },
];

interface NavbarLinkProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
  url?: string;
}

function NavbarLink({ label, url }: NavbarLinkProps) {
  return (
    <Link href={`${url}`} className={classes.link}>
      {label}
    </Link>
  );
}

const Navbar = () => {
  const [active, setActive] = useState(0);
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('dark');

  const navButtons = navData.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
      url={link.url}
    />
  ));

  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === 'dark' ? 'light' : 'dark');
  };

  const links = featuresPopOut.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon size={22} color={theme.colors.blue[6]} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Box>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Group h="100%" gap={0} justify="start" visibleFrom="sm">
            <Link href="/" className={classes.link}>
              <WalterLogo2 />
            </Link>
            {navButtons}
            <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Features
                    </Box>
                    <IconChevronDown size={16} color={theme.colors.blue[6]} />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                <Group justify="space-between" px="md">
                  <Text fw={500}>Features</Text>
                </Group>

                <Divider my="sm" />

                <SimpleGrid cols={2} spacing={0}>
                  {links}
                </SimpleGrid>

                <div className={classes.dropdownFooter}>
                  <Group justify="space-between">
                    <div>
                      <Text fw={500} fz="sm">
                        Get started
                      </Text>
                      <Text size="xs" c="dimmed">
                        Sign up for an account today
                      </Text>
                    </div>
                    <Link href='/Pricing' className={classes.unstyledLink}>
                      <Button variant="default">Get started</Button>
                    </Link>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>
          </Group>

          <Group visibleFrom="sm">
            <Button onClick={() => toggleColorScheme()}>
              <IconMoon />
            </Button>
            <Link href="/Login">
              <Button variant="default">Log in</Button>
            </Link>
            <Button>Sign up</Button>
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 80px" mx="-md">
          <Divider my="sm" />

          {navButtons}
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Features
              </Box>
              <IconChevronDown size={16} color={theme.colors.blue[6]} />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}

export default Navbar;