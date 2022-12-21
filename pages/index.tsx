import Head from "next/head";
import PageLayout from "../components/PageLayout/PageLayout.component";

export default function Home() {
  return (
    <div>
      <Head>
        <title>RentalApp</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout>
        <h1>Home</h1>
      </PageLayout>
    </div>
  );
}
