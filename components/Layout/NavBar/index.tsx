import { Navbar } from "@mantine/core";
import { User } from "@firebase/auth";
import MainLinks, { UnauthLinks } from "./Links.component";
import UserTile from "./UserTile.component";

interface NavbarProps {
  isOpen: boolean;
  isAuthenticated: boolean;
  user: User | undefined | null;
}

function NavBar({ isOpen, isAuthenticated, user }: NavbarProps) {
  console.log(user);
  if (!isOpen) return null;
  return (
    <Navbar width={{ base: 280 }} p="xs">
      <Navbar.Section grow mt="md">
        <MainLinks />
      </Navbar.Section>
      <Navbar.Section>
        {isAuthenticated ? <UserTile user={user} /> : <UnauthLinks />}
      </Navbar.Section>
    </Navbar>
  );
}

export default NavBar;
