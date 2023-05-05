import React from 'react'
import CommunityEvents from '../../static/svg/community-events.svg'
import { useState } from 'react';
import copy from 'copy-to-clipboard';

const brewText = "brew install stateful/tap/runme";

export function Hero() {
  const [copied, setCopied] = useState(false);

  const copyBrew = () => {
    copy(brewText);
    setCopied(true)
    setTimeout(()=> {
      setCopied(false)
    }, 5000)
  }

  return (
    <div className="relative px-4 pt-12 space-y-12 text-center text-white md:px-0 md:pt-24">
      <div className="absolute top-0 left-0 w-full h-[85%] lg:h-[75%] z-[-1]">
        <svg className='z-0 min-h-full' xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1567 884" fill="none" preserveAspectRatio="none"
        >
          <path className='z-0' d="M0 -103L1567 -57.3276V776L0 884V-103Z" fill="#0D003D" />
        </svg>
      </div>
      <div className="z-10 select-none bg-[#0D003D]">
     <div className="max-w-3xl py-4 mx-auto ">
     <h3 className="text-4xl leading-snug md:text-5xl">The <span className="font-semibold">Next-Gen</span> <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-fuchsia-500">Runner</span> for development workflows.</h3>
      <div className="py-2 font-mono text-lg font-gray-200">Markdown-native tools to express workflows for your apps & services.</div>
     </div>
 
        <div className="flex flex-col items-center justify-center py-4 space-y-3 md:space-x-4 md:flex-row md:space-y-0">
          <a
            href="/docs/intro"
          >
           <div className="px-4 py-2 font-bold rounded-md bg-purpleish-100 hover:bg-purpleish-200 whitespace-nowrap">Documentation</div>
          </a>

          <a
            href="https://github.com/stateful/runme"
          >
           <div className="px-4 py-2 font-bold border-2 rounded-md border-purpleish-100 hover:border-purpleish-200 whitespace-nowrap">View on Github</div>
          </a>
        </div>
        <div className="flex flex-col items-center justify-center py-2 space-x-2 text-xs text-gray-300 md:flex-row">{copied? <span className="text-cyan-400">Copied to clipboard 👍</span> : <span className="font-mono cursor-pointer hover:underline" onClick={()=> {
          copyBrew()
        }}>{brewText}</span>}<span className="hidden md:block">|</span> <a href="https://marketplace.visualstudio.com/items?itemName=stateful.runme" className="font-medium underline cursor-pointer hover:underline hover:brightness-150">VS Code Extension</a></div>
      </div>
      <div className="mt-12 w-4/5 md:w-3/4 mx-auto lg:max-w-[800px] xl:max-w-[900px] 2xl:max-w-[1000px]">
        <video autoPlay loop muted playsInline>
          <source src="/videos/intro.mp4" type="video/mp4" />
          <source src="/videos/intro.webm" type="video/webm" />
        </video>
      </div>
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
    <div className="mt-[60px] bg-cover bg-[url('/img/community/splash.png')] bg-[color:#0D003D] bg-no-repeat bg-center relative space-y-12 text-center text-white community-header">
      <div className="w-2/3 pt-12 pb-32 mx-auto mt-12 text-left lg:pb-64 lg:pt-24">
        <h2 className="[text-shadow:_0px_0px_5px_#b393d3,_0px_0px_10px_#0D003D,_0px_0px_10px_#b393d3,_0px_0px_20px_#b393d3] pb-8 text-5xl xl:text-6xl 2xl:text-8xl font-bold tracking-[0.03em]">
          Runme Community
        </h2>
        <h3 className="py-2 [text-shadow:_0px_0px_5px_#0D003D,_0px_0px_10px_#0D003D,_0px_0px_20px_#0D003D,_0px_0px_30px_#0D003D,_0px_0px_50px_#0D003D,_0px_0px_70px_#0D003D] text-lg md:text-2xl">📰 Stay up to date with new features and functionality</h3>
        <h3 className="py-2 [text-shadow:_0px_0px_5px_#0D003D,_0px_0px_10px_#0D003D,_0px_0px_20px_#0D003D,_0px_0px_30px_#0D003D,_0px_0px_50px_#0D003D,_0px_0px_70px_#0D003D] text-lg md:text-2xl">🤝 Connect with other developers about their tools</h3>
        <h3 className="py-2 [text-shadow:_0px_0px_5px_#0D003D,_0px_0px_10px_#0D003D,_0px_0px_20px_#0D003D,_0px_0px_30px_#0D003D,_0px_0px_50px_#0D003D,_0px_0px_70px_#0D003D] text-lg md:text-2xl">🚀 Shape the Runme roadmap and priorities</h3>
        <h3 className="py-2 [text-shadow:_0px_0px_5px_#0D003D,_0px_0px_10px_#0D003D,_0px_0px_20px_#0D003D,_0px_0px_30px_#0D003D,_0px_0px_50px_#0D003D,_0px_0px_70px_#0D003D] text-lg md:text-2xl">👀 Exposure to early showcases and proof of concepts</h3>
        <h3 className="py-2 [text-shadow:_0px_0px_5px_#0D003D,_0px_0px_10px_#0D003D,_0px_0px_20px_#0D003D,_0px_0px_30px_#0D003D,_0px_0px_50px_#0D003D,_0px_0px_70px_#0D003D] text-lg md:text-2xl">🎉 Help and support to get Runme working for you!</h3>
      </div>
    </div>
  );
}

