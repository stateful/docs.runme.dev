import { Bar3Icon, DiscordIcon, XIcon } from "../components/Icons.tsx";

import { useState } from "preact/hooks";

export default function Header({ isHomepage = false }) {
  const [open, setOpen] = useState(false);
  return (
    <nav class={`flex flex-col  w-full top-0 z-10 ${isHomepage ? 'text-white bg-[#0D003D]' : 'text-black'}`}>
      <div class="px-1 py-4 md:px-12 flex justify-between items-center">
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
        <div class="hidden md:flex lg:mt-0 space-x-4 lg:space-x-8 items-center text-lg lg:text-xl">
          <a href="/blog" class="hover:underline">
            Blog
          </a>
          <a
            href="https://github.com/stateful/vscode-runme"
            class="hover:underline"
          >
            Github
          </a>
          <a
            href="https://github.com/stateful/vscode-runme"
            class="hover:underline"
          >
            Marketplace
          </a>
          <a
            href="https://github.com/stateful/vscode-runme"
            class="hover:underline"
          >
            CLI
          </a>
          <a
            href="https://github.com/stateful/vscode-runme"
            class="border-b-4 border-[#5B3ADF] flex items-center flex-row space-x-2"
          >
            <div>Join the Discord</div>
            <DiscordIcon />
          </a>
        </div>
        <div
          class="block md:hidden flex flex-col"
          onClick={() => setOpen((prev) => !prev)}
        >
          {!open ? <Bar3Icon /> : <XIcon />}
        </div>
      </div>
      <div
        class={`${open ? "flex" : "hidden"
          } md:hidden px-12 py-4 flex-col justify-between space-y-4`}
      >
        <a href="/blog" class="hover:underline text-xl">
          Blog
        </a>
        <a
          href="https://github.com/stateful/vscode-runme"
          class="hover:underline text-xl"
        >
          Github
        </a>
        <a
          href="https://github.com/stateful/vscode-runme"
          class="hover:underline text-xl"
        >
          Marketplace
        </a>
        <a
          href="https://github.com/stateful/vscode-runme"
          class="hover:underline text-xl"
        >
          CLI
        </a>
        <a
          href="https://github.com/stateful/vscode-runme"
          class="hover:underline text-xl flex items-center flex-row space-x-2"
        >
          <div>Join the Discord</div>
          <DiscordIcon />
        </a>
      </div>
    </nav>
  );
}
