export function Navigation() {
  return (
    <nav class="px-12 py-4 flex justify-between items-center ">
      <div class="flex items-center space-x-2 lg:space-x-4">
        <img
          src="/runme-logo.svg"
          alt="Runme play button"
          class="max-w-[35px] max-h-[35px]"
        />

        <h1 class="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          readme
        </h1>
      </div>
      <div class="flex lg:mt-0 space-x-4 lg:space-x-12 items-center">
        <a
          href="https://github.com/stateful/vscode-runme"
          class="hover:underline text-xl"
        >
          Github
        </a>
        <div class="hidden md:flex items-center space-x-2 bg-[#e75b5b] px-6 py-2 rounded-lg">
          <a
            href="https://discord.com/invite/BQm8zRCBUY"
            class="hover:underline text-sm"
          >
            Join Our Discord
          </a>
          <img
            src="/Discord-Logo.svg"
            alt="Discord icon"
            class="hidden lg:block"
          />
        </div>
      </div>
    </nav>
  );
}
