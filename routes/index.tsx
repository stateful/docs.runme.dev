export default function Home() {
  return (
    <div class="bg-[rgba(0,0,0,.75)] text-white">
      <video
        autoplay
        loop
        muted
        class="opacity-20 w-full h-full fixed right-0 top-0 object-cover z-[-10]"
      >
        <source src="/light-particles-bg.mp4"></source>
      </video>
      <div class="min-h-screen 2xl:min-h-[50vh]">
        <div class="z-[100] text-white max-w-[1440px] mx-auto">
          <nav class="px-12 py-4 flex justify-between items-center">
            <h1 class="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              readme
            </h1>
            <a
              href="https://github.com/stateful/vscode-runme"
              class="hover:underline text-xl"
            >
              Github
            </a>
          </nav>
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
                <span class="text-[#c084fc]">runme</span>
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
              <div class="bg-[#e75b5b] py-[20px] px-4 font-semibold rounded-md text-base max-w-min h-[40px] flex items-center justify-center font-[400] whitespace-nowrap">
                <a href="https://github.com/stateful/vscode-runme">
                  Install the extension
                </a>
              </div>
            </div>
            {/* <video autoplay loop muted class='z-10 h-auto sm:max-w-xl xl:max-w-[720px] z-10' />
              <source '/run-me-walk.mov' alt='Walkthrough for runme VS Code Extension'></source>
            </video> */}
            <img
              src="/runme-website-commands.gif"
              class="object-cover scale-105 z-10 h-auto sm:max-w-xl xl:max-w-[720px] z-10"
            />
          </div>
        </div>
        <div class="px-12 py-6 flex flex-col items-center mt-24 lg:mt-[24vh]">
          <div class="flex flex-col justify-center items-center">
            <h1 class="text-6xl font-bold">How it works</h1>
            <p class="text-xl mt-4 font-medium ">
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                runme{" "}
              </span>
              lets you run your markdown documentation.
            </p>
          </div>
          {/* <section-container direction="row-reverse" title="How it works" description="runme lets you run your markdown documentation."></section-container> */}
          <div class="flex flex-col-reverse lg:flex-row justify-between mt-12 space-y-10 lg:space-y-0 lg:space-x-12 2xl:space-x-24">
            <img
              src="/markdown-original.png"
              alt="Shell running markdown files commands"
              class="object-cover object-left mt-12 lg:mt-0 sm:max-w-xl xl:max-w-[700px]"
            />
            <div class="text-2xl">
              <p>
                Write your markdown and any code blocks with `sh` will be read
                as runnable commands.
              </p>
              <div class="list-inside space-y-4">
                <h1 class="font-medium underline mt-4">Use Cases</h1>
                <ol class="list-decimal list-inside lg:mb-0">
                  <li>Setup application</li>
                  <li>Render web components</li>
                </ol>
              </div>
              <img
                src="/markdown-notebook.png"
                alt="Shell running markdown files commands"
                class="mt-12 sm:max-w-xl xl:max-w-[520px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
