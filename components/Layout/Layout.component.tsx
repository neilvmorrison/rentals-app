import { AppShell, Navbar, Header } from "@mantine/core";
import { ReactNode, useState } from "react";
import { useUser } from "../../contexts/user.context";
import NavBar from "./NavBar";

interface LayoutProps {
  children: ReactNode | ReactNode[];
}

function Layout({ children }: LayoutProps) {
  const { isAuthenticated, user } = useUser();
  const [showNavBar, setShowNavBar] = useState(true);
  function toggleNavBar() {
    setShowNavBar((prevState) => !prevState);
  }
  return (
    <AppShell
      padding="md"
      navbar={
        <NavBar
          isOpen={showNavBar}
          isAuthenticated={isAuthenticated}
          user={user}
        />
      }
      header={
        <Header height={60} p="xs">
          <button onClick={toggleNavBar}>ClickMe</button>
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      {children}
    </AppShell>
  );
}

export default Layout;
