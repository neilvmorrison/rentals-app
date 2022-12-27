import { AppShell } from "@mantine/core";
import { ReactNode, useState } from "react";
import { useUser } from "../../contexts/user.context";
import NavBar from "./NavBar";
import Header from "./Header";

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
      header={<Header onClick={toggleNavBar} />}
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
