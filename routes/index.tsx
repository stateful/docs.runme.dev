import { Navigation } from "../components/Navigation.tsx";
import { Hero } from "../components/Hero.tsx";
import { Footer } from "../components/Footer.tsx";

export default function Home() {
  return (
    <div class="bg-[rgba(0,0,0,.75)] text-white">
      <video
        autoPlay
        loop
        muted
        class="opacity-20 w-full h-full fixed right-0 top-0 object-cover z-[-10]"
      >
        <source src="/light-particles-bg.mp4"></source>
      </video>
      <div class="min-h-screen 2xl:min-h-[50vh]">
        <div class="z-[100] text-white max-w-[1440px] mx-auto">
          <Navigation />
          <Hero />
        </div>
        <div class="px-12 py-6 flex flex-col items-center mt-24 lg:mt-[24vh]">
          <div class="flex flex-col justify-center items-center">
            <h1 class="text-6xl font-bold">How it works</h1>
            <p class="text-2xl mt-4 font-medium ">
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                runme{" "}
              </span>
              lets you run your markdown documentation.
            </p>
          </div>
          {/* <section-container direction="row-reverse" title="How it works" description="runme lets you run your markdown documentation."></section-container> */}
          <div class="flex flex-col justify-between mt-12 space-y-10 ">
            <img
              src="/sidebyside.png"
              alt="Side by side of markdown and runme commands"
              class="object-cover object-left mt-12 lg:mt-0 w-full 2xl:max-w-[1500px]"
            />
            <div class="text-2xl px-12">
              <p class="font-medium">
                Write your markdown. Any code blocks with the type `sh` will
                become runnable commands.
              </p>
              <div class="list-inside space-y-4">
                <h1 class="font-medium underline mt-4">Use Cases</h1>
                <ol class="list-decimal list-inside lg:mb-0">
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
      </div>
      <Footer />
    </div>
  );
}
