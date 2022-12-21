import { UnstyledButton, Group, ThemeIcon, Text } from "@mantine/core";
import Link from "next/link";
import { signInWithGoogle } from "../../../utils/auth";

interface MainLinkProps {
  label: string;
  href: string;
  icon: any;
  color: string;
}

function MainLink({ label, href, icon, color }: MainLinkProps) {
  return (
    <UnstyledButton component="div" my="md">
      <Link href={href}>
        <Group>
          <ThemeIcon color={color} variant="light">
            {icon}
          </ThemeIcon>
          <Text>{label}</Text>
        </Group>
      </Link>
    </UnstyledButton>
  );
}

const linkData = [
  {
    icon: null,
    label: "Test Link",
    href: "/",
    color: "red",
  },
  {
    icon: null,
    label: "Test Link 2",
    href: "/",
    color: "green",
  },
  {
    icon: null,
    label: "Test Link 3",
    href: "/",
    color: "blue",
  },
];

function MainLinks() {
  const links = linkData.map((link) => (
    <MainLink
      label={link.label}
      href={link.href}
      icon={link.icon}
      key={link.label}
      color={link.color}
    />
  ));
  return <div>{links}</div>;
}

export function UnauthLinks() {
  const handleSignIn = async () => await signInWithGoogle();
  return (
    <div>
      <UnstyledButton component="div" my="md" onClick={handleSignIn}>
        <Group>
          <ThemeIcon color="red" variant="light">
            {null}
          </ThemeIcon>
          <Text>Log in</Text>
        </Group>
      </UnstyledButton>
      <MainLink label="Sign up" icon={null} color="green" href="/signup" />
    </div>
  );
}

export default MainLinks;
