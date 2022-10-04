import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import Layout from "../components/Layout.tsx";

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <title>runme</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component />
      </Layout>
    </>
  );
}