import { Footer } from "../components/Footer.tsx";

export default function Home() {
  return (
    <div class='bg-[rgba(0,0,0,.75)] text-white'>
      <video autoPlay loop muted class='opacity-20 w-full h-full fixed right-0 top-0 object-cover z-[-10]' >
        <source src='/light-particles-bg.mp4'></source>
      </video>
      <div class='min-h-screen 2xl:min-h-[50vh]'>
        <div class='z-[100] text-white max-w-[1440px] mx-auto'>
          <nav class='px-12 py-4 flex justify-between items-center '>
            <div class="flex items-center space-x-2 lg:space-x-4">
              <img src="/runme-logo.svg" alt="Runme play button" class="max-w-[35px] max-h-[35px]" />

              <h1 class='font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>readme</h1>

            </div>
            <div class="flex lg:mt-0 space-x-4 lg:space-x-12 items-center">
              <a href='https://github.com/stateful/vscode-runme' class='hover:underline text-xl'>Github</a>
              <div class="hidden md:flex items-center space-x-2 bg-[#e75b5b] px-6 py-2 rounded-lg">
                <a href='https://discord.com/invite/BQm8zRCBUY' class='hover:underline text-sm'>Join Our Discord</a>
                <img src="/Discord-Logo.svg" alt="Discord icon" class="hidden lg:block" />
              </div>
            </div>
          </nav>
          <div class='px-12 py-2 pt-32 flex flex-col lg:flex-row space-y-12 lg:space-x-12 lg:space-y-0'>
            <div class='space-y-4'>
              <div class="flex text-xl md:text-2xl items-center space-x-3">
                <span class='text-[#42FCCC]'>.md</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" fill="none">
                  <path d="M11.3229 18.802C12.0347 13.9746 12.7995 4.0514 10.1648 2.97776" stroke="#00D1FF" stroke-width="4" stroke-linecap="round" />
                  <path d="M19.7862 10.7362C15.8463 11.4763 6.92544 12.5577 2.76142 10.9632" stroke="#00D1FF" stroke-width="4" stroke-linecap="round" />
                </svg>
                <span class='text-[#F12828]'>runme</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                  <path d="M20.3865 8.52636C15.5019 8.62206 4.49064 8.68236 4.49064 8.68236" stroke="#00D1FF" stroke-width="4" stroke-linecap="round" />
                  <path d="M21.0303 15.0562L4.00003 15.0404" stroke="#00D1FF" stroke-width="4" stroke-linecap="round" />
                </svg>
                <span class='text-[#FF00A8]'>runable docs</span>
              </div>
              <h2 class="text-5xl xl:text-6xl 2xl:text-7xl font-bold">The Interactive Docs Extension for VS Code</h2>
              <div class="bg-[#e75b5b] py-[20px] rounded-md text-base w-[119px] h-[40px] flex items-center justify-center font-[400]">
                <a href="https://github.com/stateful/vscode-runme">Install</a>
              </div>
            </div>
            {/* <video autoplay loop muted class='z-10 h-auto sm:max-w-xl xl:max-w-[720px] z-10' />
              <source '/run-me-walk.mov' alt='Walkthrough for runme VS Code Extension'></source>
            </video> */}
            <img src='/runme-website-commands-v2.gif' class='rounded-md object-cover scale-110 z-10 h-auto sm:max-w-xl xl:max-w-[720px] z-10' />
          </div>
        </div>
        <div class="px-12 py-6 flex flex-col items-center mt-24 lg:mt-[24vh]">
          <div class='flex flex-col justify-center items-center'>
            <h1 class="text-6xl font-bold">How it works</h1>
            <p class="text-2xl mt-4 font-medium ">
              <span class='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
                runme{' '}
              </span>
              lets you run your markdown documentation.</p>
          </div>
          {/* <section-container direction="row-reverse" title="How it works" description="runme lets you run your markdown documentation."></section-container> */}
          <div class="flex flex-col justify-between mt-12 space-y-10 ">
            <img src="/sidebyside.png" alt="Side by side of markdown and runme commands" class="object-cover object-left mt-12 lg:mt-0 w-full 2xl:max-w-[1500px]" />
            <div class="text-2xl px-12">
              <p class="font-medium">Write your markdown. Any code blocks with the type `sh` will become runnable commands.</p>
              <div class="list-inside space-y-4">
                <h1 class='font-medium underline mt-4'>Use Cases</h1>
                <ol class='list-decimal list-inside lg:mb-0'>
                  <li>Setup application</li>
                  <li>Render web components</li>
                  <li>Build and deploy</li>
                  <p>More coming soon...</p>
                </ol>
              </div>
            </div>

            {/* <img src="/markdown-notebook.png" alt="Shell running markdown files commands" class="mt-12 sm:max-w-xl xl:max-w-[520px]" /> */}
          </div>
        </div>
      </div >
      <Footer />
    </div >
  );
}
