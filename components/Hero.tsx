export function Hero() {
  return (
    <div class="px-12 py-2 pt-32 flex flex-col lg:flex-row space-y-12 lg:space-x-12 lg:space-y-0">
      <div class="space-y-4">
        <div class="flex text-xl md:text-2xl items-center space-x-3">
          <span class="text-[#42FCCC]">.md</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="21"
            viewBox="0 0 22 21"
            fill="none"
          >
            <path
              d="M11.3229 18.802C12.0347 13.9746 12.7995 4.0514 10.1648 2.97776"
              stroke="#00D1FF"
              stroke-width="4"
              stroke-linecap="round"
            />
            <path
              d="M19.7862 10.7362C15.8463 11.4763 6.92544 12.5577 2.76142 10.9632"
              stroke="#00D1FF"
              stroke-width="4"
              stroke-linecap="round"
            />
          </svg>
          <span class="text-[#F12828]">runme</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <path
              d="M20.3865 8.52636C15.5019 8.62206 4.49064 8.68236 4.49064 8.68236"
              stroke="#00D1FF"
              stroke-width="4"
              stroke-linecap="round"
            />
            <path
              d="M21.0303 15.0562L4.00003 15.0404"
              stroke="#00D1FF"
              stroke-width="4"
              stroke-linecap="round"
            />
          </svg>
          <span class="text-[#FF00A8]">runable docs</span>
        </div>
        <h2 class="text-5xl xl:text-6xl 2xl:text-7xl font-bold">
          The Interactive Docs Extension for VS Code
        </h2>

        <div class="flex flex-col lg:flex-row lg:items-center lg:space-x-2">
          <div class="bg-[#e75b5b] py-[20px] rounded-md text-base w-[200px] h-[40px] flex items-center justify-center font-[400]">
            <a href="https://github.com/stateful/vscode-runme/releases/tag/0.1.0-edge.7">
              Install the extension
            </a>
          </div>
          <span>or Search in the marketplace</span>
        </div>
      </div>
      <img
        src="/runme-website-commands-v2.gif"
        class="rounded-md object-cover scale-110 z-10 h-auto sm:max-w-xl xl:max-w-[720px] z-10"
      />
    </div>
  );
}
