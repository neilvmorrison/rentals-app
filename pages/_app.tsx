import "../styles/globals.css";
import type { AppProps } from "next/app";
import { UserProvider } from "../contexts/user.context";
import Navbar from "../components/Navbar/navbar.component";
import { MantineProvider } from "@mantine/styles";
import Layout from "../components/Layout/Layout.component";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <UserProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserProvider>
    </MantineProvider>
  );
}
