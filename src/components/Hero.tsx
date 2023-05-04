import React from 'react'
import TypeWriter from '@site/src/components/TypeWriter'
import CommunityEvents from '../../static/svg/community-events.svg'

export function Hero() {
  const sequence = [
    ['pauseFor', 500],
    ['typeString', '<i>Runme</i>.md'],
    ['pauseFor', 1500],
    ['deleteAll'],
    ['pauseFor', 2500],
    ['typeString', 'Docs!'],
    ['pauseFor', 3000],
    ['deleteAll'],
    ['pauseFor', 1500],
    ['typeString', 'Readme.md'],
    ['pauseFor', 3000],
    ['deleteAll'],
    ['pauseFor', 1500],
  ]

  return (
    <div className="relative pt-24 space-y-12 text-center text-white">
      <div className="absolute top-0 left-0 w-full h-[85%] lg:h-[75%] z-[-1]">
        <svg className='z-0 min-h-full' xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1567 884" fill="none" preserveAspectRatio="none"
        >
          <path className='z-0' d="M0 -103L1567 -57.3276V776L0 884V-103Z" fill="#0D003D" />
        </svg>
      </div>
      <div className="z-10 select-none bg-[#0D003D]">
        <div>
          <a className="text-lg hover:underline" href="https://stateful.com/blog/readmeops-testing-docs-in-ci">💡 Runme v1.0 is finally available! Click to Learn more.</a>
        </div>
        <h2 className="text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-[0.03em] min-h-[100px] sm:min-h-full">
          Run your{" "}
          <TypeWriter sequence={sequence} />
        </h2>
        <h3 className="py-4 text-2xl">
          <span id="everything-underline" className="relative whitespace-nowrap">Everything</span> a markdown file can do and way more.{' '}
          No changes required.
        </h3>
        <div className="flex flex-col items-center justify-center py-4 space-y-8">
          <a
            href="https://marketplace.visualstudio.com/items?itemName=stateful.runme"
            className="bg-[color:var(--ifm-color-primary)] py-[20px] rounded-[60px] text-base w-[220px] h-[40px] leading-[0px] font-semibold"
          >
            Install the extension
          </a>

          <p className="">
            or search{" "}
            <span className="rounded-[6px] font-bold text-white border border-solid border-[color:var(--ifm-color-primary)] p-1.5 font-mono mx-2">runme</span> in
            the VS Code extension panel
          </p>
        </div>
      </div>
      <div className="mt-12 w-4/5 md:w-3/4 mx-auto lg:max-w-[800px] xl:max-w-[900px] 2xl:max-w-[1000px]">
        <video autoPlay loop muted playsInline>
          <source src="/videos/intro.mp4" type="video/mp4" />
          <source src="/videos/intro.webm" type="video/webm" />
        </video>
        {/* <img src="/img/intro.gif" className="rounded-lg shadow-2xl select-none" alt="Runme Demo" /> */}
      </div>
      <h4 className="px-4 text-xl font-semibold text-black dark:text-white">
        <a href="https://stateful.com/blog/readmeops-testing-docs-in-ci">
          Learn about Runme v1.0 🔥
          <svg className="inline pl-2" width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 8.5C7.07682 8.5 19 8.5 19 8.5M19 8.5L12.5 2M19 8.5L12.5 15" stroke="#5B3ADF" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </a>
      </h4>
    </div>
  );
}

export function EventsHero() {
  return (
    <div className="relative pt-8 space-y-12 text-center text-white">
      <div className="z-10 select-none bg-[#0D003D] flex justify-center">
        <CommunityEvents />
      </div>
    </div>
  )
}

export function CommunityHero() {
  return (
    <div className="mt-[60px] bg-cover bg-[url('/img/community/splash.png')] bg-[color:#0D003D] bg-no-repeat bg-center relative pt-24 space-y-12 text-center text-white community-header">
      <div className="mt-12 mx-auto h-[700px] w-2/3 text-left">
        <h2 className="[text-shadow:_0px_0px_5px_#b393d3,_0px_0px_10px_#0D003D,_0px_0px_10px_#b393d3,_0px_0px_20px_#b393d3] pb-8 text-5xl xl:text-6xl 2xl:text-8xl font-bold tracking-[0.03em]">
          Runme Community
        </h2>
        <h3 className="py-2 [text-shadow:_0px_0px_5px_#0D003D,_0px_0px_10px_#0D003D,_0px_0px_20px_#0D003D,_0px_0px_30px_#0D003D,_0px_0px_50px_#0D003D,_0px_0px_70px_#0D003D] text-2xl">📰 Stay up to date with new features and functionality</h3>
        <h3 className="py-2 [text-shadow:_0px_0px_5px_#0D003D,_0px_0px_10px_#0D003D,_0px_0px_20px_#0D003D,_0px_0px_30px_#0D003D,_0px_0px_50px_#0D003D,_0px_0px_70px_#0D003D] text-2xl">🤝 Connect with other developers about their tools</h3>
        <h3 className="py-2 [text-shadow:_0px_0px_5px_#0D003D,_0px_0px_10px_#0D003D,_0px_0px_20px_#0D003D,_0px_0px_30px_#0D003D,_0px_0px_50px_#0D003D,_0px_0px_70px_#0D003D] text-2xl">🚀 Shape the Runme roadmap and priorities</h3>
        <h3 className="py-2 [text-shadow:_0px_0px_5px_#0D003D,_0px_0px_10px_#0D003D,_0px_0px_20px_#0D003D,_0px_0px_30px_#0D003D,_0px_0px_50px_#0D003D,_0px_0px_70px_#0D003D] text-2xl">👀 Exposure to early showcases and proof of concepts</h3>
        <h3 className="py-2 [text-shadow:_0px_0px_5px_#0D003D,_0px_0px_10px_#0D003D,_0px_0px_20px_#0D003D,_0px_0px_30px_#0D003D,_0px_0px_50px_#0D003D,_0px_0px_70px_#0D003D] text-2xl">🎉 Help and support to get Runme working for you!</h3>
      </div>
    </div>
  );
}

