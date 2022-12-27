import dynamic from "next/dynamic";
import { Text } from "@mantine/core";
import Head from "next/head";
import { useState } from "react";
import PageLayout from "../components/PageLayout/PageLayout.component";

function Loading() {
  return (
    <div>
      <h1>Loading...</h1>
    </div>
  );
}

// const AddressAutofill = dynamic(() => import("../components/AddressAutofill"), {
//   loading: Loading,
//   ssr: false,
// });

// const SearchBox = dynamic(() => import("../components/SearchBox"), {
//   loading: Loading,
//   ssr: false,
// });

export default function Home() {
  const [val, setVal] = useState("");
  return (
    <div>
      <Head>
        <title>MyRentalApp</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout>
        <Text>This is my Text</Text>
      </PageLayout>
    </div>
  );
}
