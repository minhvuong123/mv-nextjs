import "@/styles/globals.css";
import Layout from "@/components/layout/layout";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="witdh=device-width, intial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
