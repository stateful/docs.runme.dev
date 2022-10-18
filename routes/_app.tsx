import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

const title = 'Runme: Run your Readme.md'
const description = 'Runme is a VS Code extension that transparently opens markdown files as runnable VS Code notebooks so that repo maintainers can annotate code blocks to enhance the interactive runbook-like experience.'
const siteName = 'Runme.dev'
const imageUrl = 'https://staging.runme.dev/intro.gif'
const twitterHandle = '@stateful'
const prodUrl = 'https://runme.dev'
const keywords = ['runme', 'readme', 'vscode', 'code', 'markdown', 'README.md', 'onboarding', 'notebook', 'renderer']
const previewImages = [
  'https://staging.runme.dev/sidebyside.png',
  'https://staging.runme.dev/tabs/deno.gif'
]

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(',')} />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Stateful Inc." />
        <meta name="contact" content="contact@stateful.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={twitterHandle} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:url" content={prodUrl} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        {previewImages.map((imgUrl) => (<meta property="og:image" content={imgUrl} />))}

        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/style.css" />
      </Head>
      <Component />
    </>
  );
}
