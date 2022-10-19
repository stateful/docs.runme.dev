import { Bar3Icon, DiscordIcon, XIcon } from "../components/Icons.tsx";

export default function Header({ isHomepage = false }) {
  const BlogLink = () => (<a href="/blog" class="hover:underline select-none">Blog</a>)
  const GithubLink = () => (<a href="https://github.com/stateful/vscode-runme" class="hover:underline select-none">Github</a>)
  const MarketplaceLink = () => (<a href="https://marketplace.visualstudio.com/items?itemName=stateful.runme" class="hover:underline select-none">Marketplace</a>)
  const CLILink = () => (<a href="https://github.com/stateful/runme" class="hover:underline select-none">CLI</a>)
  const DiscordLink = () => (
    <a href="https://discord.gg/BQm8zRCBUY" class="hover:underline select-none flex items-center flex-row space-x-2">
      <div>Join our Discord</div>
      <DiscordIcon />
    </a>
  )

  return (
    <nav class={`p-2 flex flex-col  w-full top-0 z-10 ${isHomepage ? 'text-white bg-[#0D003D]' : 'text-black'}`}>
      <div class="px-1 py-4 md:px-12 flex justify-between items-start">
        <a href="/">
          <div class="flex items-center space-x-2 lg:space-x-4">
            <img
              src="/runme-logo.svg"
              alt="Runme play button"
              class="max-w-[35px] max-h-[35px]"
            />
            <h1 class="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              runme
            </h1>
          </div>
        </a>
        <div class="hidden md:flex lg:mt-0 py-2 space-x-4 lg:space-x-8 items-center text-lg lg:text-xl">
          <BlogLink />
          <GithubLink />
          <MarketplaceLink />
          <CLILink />
          <DiscordLink />
        </div>
        <div class="group md:hidden">
          <input type="checkbox" id="toggle-menu" class="hidden checked:sibling:hidden checked:sibling:sibling:block checked:sibling:sibling:sibling:flex"></input>
          <label for="toggle-menu" class="flex flex-col mt-2">
            <Bar3Icon />
          </label>
          <label for="toggle-menu" class="hidden flex flex-col mt-2 mb-48">
            <XIcon />
          </label>
          <div class={`hidden flex md:hidden px-14 py-4 flex-col text-xl justify-between space-y-4 absolute inset-x-0 ${isHomepage ? 'text-white bg-[#0D003D]' : 'text-black'} top-[70px] z-10`}>
            <BlogLink />
            <GithubLink />
            <MarketplaceLink />
            <CLILink />
            <DiscordLink />
          </div>
        </div>
      </div>
    </nav>
  );
}
