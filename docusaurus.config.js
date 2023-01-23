// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const title = "Runme: Run your Readme.md";
const description =
  "Runme is a VS Code extension that transparently opens markdown files as runnable VS Code notebooks so that repo maintainers can annotate code blocks to enhance the interactive runbook-like experience.";
const siteName = "Runme.dev";
const imageUrl = "https://runme.dev/img/twitter-image.png";
const twitterHandle = "@stateful";
const prodUrl = "https://runme.dev";
const keywords = [
  "runme",
  "readme",
  "vscode",
  "code",
  "markdown",
  "README.md",
  "onboarding",
  "notebook",
  "renderer",
];
const previewImages = [
  "https://runme.dev/img/sidebyside.png",
  "https://runme.dev/img/intro.gif",
];

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Runme",
  tagline:
    "Everything a markdown file can do and way more. No changes required.",
  url: "https://runme.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "stateful", // Usually your GitHub org/user name.
  projectName: "runme", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    async function tailwindCSS(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
    [
      "@docusaurus/plugin-pwa",
      {
        debug: true,
        offlineModeActivationStrategies: [
          "appInstalled",
          "standalone",
          "queryString",
        ],
        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            href: "/img/logo.svg",
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.json", // your PWA manifest
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "rgb(88, 57, 218)",
          },
        ],
      },
    ],
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/stateful/runme.dev/edit/main",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/stateful/runme.dev/edit/main",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-N8HQR9WTV5",
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        { "http-equiv": "Content-Type", content: "text/html; charset=utf-8" },
        { name: "description", content: description },
        { name: "keywords", content: keywords.join(",") },
        { name: "robots", content: "index, follow" },
        { name: "language", content: "English" },
        { name: "author", content: "Stateful Inc." },
        { name: "contact", content: "contact@stateful.com" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: twitterHandle },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: imageUrl },
        { property: "og:title", content: title },
        { property: "og:site_name", content: siteName },
        { property: "og:url", content: prodUrl },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        ...previewImages.map((imgUrl) => ({
          property: "og:image",
          content: imgUrl,
        })),
      ],
      navbar: {
        logo: {
          alt: "Runme Logo",
          src: "img/logo.svg",
          href: "/",
        },
        items: [
          {
            type: "html",
            position: "left",
            value: /*html*/ `<h1 class="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              <a href="/">runme</a>
            </h1>`,
          },
          {
            type: "doc",
            docId: "intro",
            position: "right",
            label: "Documentation",
            className: "docsLink",
          },
          {
            href: "https://github.com/stateful/runme",
            label: "GitHub",
            position: "right",
            className: "githubLink",
          },
          {
            href: "https://discord.gg/BQm8zRCBUY",
            label: "Join our Discord",
            position: "right",
            className: "discordLink",
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
          apiKey: process.env.ALGOLIA_API_KEY,
          indexName: process.env.ALGOLIA_INDEX_NAME,
          appId: process.env.ALGOLIA_APP_ID
      },
    })
};

module.exports = config;
