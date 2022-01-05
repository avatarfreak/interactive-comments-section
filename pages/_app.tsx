import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import Layout from "../components/layout/Layout";
import "../global/tailwind.css";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Interactive comments section main challenges accepted by avatarfreak"
        />
        <title>Frontend Mentor | Interactive comments Section</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
