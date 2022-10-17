import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import Layout from "../components/Layout.tsx";
export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <title>Runme: Run your Readme.md</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/style.css" />
      </Head>
      <Component />
    </>
  );
}
