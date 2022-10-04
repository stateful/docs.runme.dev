import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function Footer(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <footer class="p-24 max-w-[1440px] mx-auto 2xl:px-0">
      <div class="flex flex-col lg:flex-row space-y-4 lg:space-y-0 justify-between">
        <div class="space-y-2">
          <p class="text-xl font-medium">Brought to you by:</p>
          <a href="https://www.stateful.com/" class="cursor-pointer">
            <img src="/Stateful-logo.svg" />
          </a>
          <p class="font-medium text-transparent text-xl bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">The developer happiness company.</p>
        </div>
        <div>
          <h1 class="text-2xl font-bold">Connect with us:</h1>
          <ol class="text-xl space-y-2">
            <li>
              <a class="text-gray-300 hover:underline text-xl" href="https://www.stateful.com/">Website</a>
            </li>
            <li>
              <a class="text-gray-300 hover:underline text-xl" href="https://github.com/stateful/vscode-runme">Github</a>
            </li>
            <li>
              <a class="text-gray-300 hover:underline text-xl" href="https://discord.com/invite/BQm8zRCBUY">Discord</a>
            </li>
          </ol>
        </div>
      </div>
    </footer>
  );
}
