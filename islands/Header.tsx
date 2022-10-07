import { useState } from "preact/hooks";
import { Bar3Icon, XIcon } from "../components/Icons.tsx";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <nav class="flex flex-col">
      <div class="px-12 py-4 flex justify-between items-center">
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
        <div class="hidden md:flex lg:mt-0 space-x-2 lg:space-x-8 items-center">
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
            class="hover:underline text-xl flex flex-row space-x-2"
          >
            <div>Join the Discord</div>
            <img
              src="/Discord-Logo.svg"
              alt="Discord icon"
              class="hidden lg:block"
            />
          </a>
          {/* <div class="hidden md:flex items-center space-x-2 bg-[#e75b5b] px-6 py-2 rounded-lg">
          <a
            href="https://discord.com/invite/BQm8zRCBUY"
            class="hover:underline text-sm"
          >
            Install the extension
          </a>
        </div> */}
        </div>
        <div class="block md:hidden flex flex-col" onClick={() => setOpen(prev => !prev)} >
          {!open ? <Bar3Icon /> : <XIcon />}
        </div>
      </div>
      <div class={`${open ? 'flex' : 'hidden'} md:hidden px-12 py-4 flex-col justify-between space-y-4`}>
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
          class="hover:underline text-xl flex flex-row space-x-2"
        >
          <div>Join the Discord</div>
          <img
            src="/Discord-Logo.svg"
            alt="Discord icon"
            class="hidden lg:block"
          />
        </a>
      </div>

    </nav >
  );
}
