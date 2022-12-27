import {
  Header as MantineHeader,
  ThemeIcon,
  UnstyledButton,
  Text,
  Box,
  Button,
  ActionIcon,
} from "@mantine/core";
import { IconMenu2, IconMessage, IconSettings } from "@tabler/icons";
import Link from "next/link";

interface HeaderProps {
  height?: number;
  onClick: () => void;
}

const headerLinksData = [
  {
    icon: <IconSettings />,
    href: "/settings",
  },
  {
    icon: <IconMessage />,
    href: "/messages",
  },
];

function HeaderLinks() {
  const links = headerLinksData.map((link) => {
    return (
      <UnstyledButton key={link.href} ml="sm">
        <Link href={link.href}>
          <ActionIcon color="gray">{link.icon}</ActionIcon>
        </Link>
      </UnstyledButton>
    );
  });
  return <div>{links}</div>;
}

function Header({ height = 60, onClick }: HeaderProps) {
  return (
    <MantineHeader
      height={height}
      p="md"
      sx={{ display: "flex", justifyContent: "space-between" }}
    >
      <Box sx={{ display: "flex" }}>
        <UnstyledButton onClick={onClick}>
          <ActionIcon color="gray">
            <IconMenu2 />
          </ActionIcon>
        </UnstyledButton>
        <Text ml="sm">Tenant Buddy</Text>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Link href="/listing/create">
          <Button variant="subtle">Create a listing</Button>
        </Link>
        <HeaderLinks />
      </Box>
    </MantineHeader>
  );
}

export default Header;
