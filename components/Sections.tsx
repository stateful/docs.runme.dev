import {
  ApacheIcon,
  CloudNativeNotebookIcon,
  CopyButtonIcon,
  DiscordIcon,
  GithubIcon,
  NotebookIcon,
  RedRightArrow,
  RepoIcon,
  RunCommandIcon,
  ShellIcon,
  VariablesIcon,
} from "./Icons.tsx";
import { ComponentChildren, VNode } from "preact";

type SectionProps = {
  children: ComponentChildren;
  title: string;
  description: string;
};

type FeatureProps = {
  text: string;
  icon: VNode;
  description?: string;
};

type RepoProps = {
  url: string;
  description: string;
  name: string;
};

type SectionTitleProps = {
  title: string;
  children: ComponentChildren
}

export function Section(props: SectionProps) {
  return (
    <div class="px-12 py-6 flex flex-col items-center py-14">
      <div class="flex flex-col justify-center items-center">
        <h1 class="text-4xl font-bold text-4xl lg:text-[64px] leading-10 tracking-[0.03em]">
          {props.title}
        </h1>
        <p
          id="underline-graphic"
          class="text-xl mt-4 w-[70%] text-center relative"
        >
          {props.description}
        </p>
      </div>
      <div class="py-6 flex flex-row flex-wrap space-x-4 lg:w-3/4 mx-auto">
        {props.children}
      </div>
    </div>
  );
}

export function SectionTitle(props: SectionTitleProps) {
  return (
    <div class="text-center">
      <h1 id="arrows-graphic" class="relative text-4xl lg:text-6xl tracking-[0.02em] font-bold">
        {props.title}</h1>
      {props.children}
    </div>
  )
}

export function Feature(props: FeatureProps) {
  const { text, icon, description } = props;
  return (
    <div class="lg:w-[520px] lg:odd:ml-auto p-4 flex flex-col justify-end space-y-6">
      <div>{icon}</div>
      <h1 class="font-bold text-[28px]">{text}</h1>
      {description && <p class="text-2xl">{description}</p>}
    </div>
  );
}

export function Repo({ url, name, description }: RepoProps) {
  return (
    <div class="flex md:flex-row md:space-x-2 flex-col md:space-y-0 space-y-1  md:justify-start items-center md:items-start">
      <div>
        <RepoIcon />
      </div>
      <a href={url} class="text-blue-400 hover:text-blue-500 hover:underline">
        {name}
      </a>
      <div>{description}</div>
    </div>
  );
}

export function HowItWorks() {
  return (
    <div class="max-w-[1440px] my-32 mx-auto px-12 py-6 flex flex-col items-center py-14">
      <div class="text-center space-y-4 md:space-y-8">
        <h1 id="arrows-graphic" class="lg:max-w-min mx-auto whitespace-nowrap relative text-4xl md:text-5xl lg:text-6xl tracking-[0.02em] font-bold">
          How it works</h1>
        <div class="lg:whitespace-nowrap">
          <p class="text-2xl leading-9 text-center">
            Use dev-native markdown to craft interactive runbooks for <br class="sm:hidden md:block lg:hidden" />
            <span id="vscode-bolt" class="relative">
              {" "}VS Code.
            </span>
          </p>
        </div>
        {/* <br class="hidden lg:block" /> */}

      </div>
      <div class="mt-24 flex flex-col lg:grid grid-cols-2 gap-4 2xl:gap-12 w-full">
        <Feature
          text="Click to run commands"
          icon={<RunCommandIcon />}
          description="Effortlessly complete your README's steps"
        />
        <Feature
          text="Rich notebook interactivity"
          icon={<NotebookIcon />}
          description="Overlay commands with web app like interactivity"
        />
        <Feature
          text="Baseline shell compatibility"
          icon={<ShellIcon />}
          description="Break out of shell without losing compatability"
        />
        <Feature
          text="Stateful environment variables"
          icon={<VariablesIcon />}
          description="Reliably define the execution environment"
        />
        <Feature
          text="Click to copy"
          icon={<CopyButtonIcon />}
          description="Copy & paste commands and their output"
        />
        <Feature
          text="Cloud-native notebooks"
          icon={<CloudNativeNotebookIcon />}
          description="Deeply integrated with your favorite cloud services"
        />
      </div>
      <div class="w-full mt-12 lg:mt-24">
        <div class="w-full h-[250px] sm:h-[450px] lg:w-[1000px] lg:h-[600px] max-w-6xl mx-auto">
          <iframe
            class='rounded-lg shadow-2xl select-none mx-auto'
            width={'100%'}
            height={'100%'}
            src="https://www.youtube.com/embed/XbYeeMC2oao"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export function OpenSource() {
  return (
    <div class="relative mb-32 flex items-center justify-center min-h-[50vh] px-12 flex flex-col items-center overflow-x-hidden text-white">
      <div class="absolute w-full h-full z-[-1] top-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1567 800" fill="none">
          <path d="M0 0L1567 102.793V718.665L-11 800L0 0Z" fill="#33384D" />
        </svg>
      </div>
      <div class="py-48 lg:px-24 flex flex-col lg:flex-row">
        <div class="space-y-4">
          <div class="flex flex-col-reverse lg:flex-row lg:space-x-4">
            <h1 class="text-white text-4xl xs:text-5xl lg:text-6xl tracking-[0.02em] font-bold">Open Source Software</h1>
            <div class="flex-grow w-3/5">
              <ApacheIcon />
            </div>
          </div>
          <p class="text-white text-2xl tracking-[0.02em] leading-10 lg:w-3/4">This project is {" "}
            <span id="yellow-underline" class="relative whitespace-nowrap">
              APL 2.0 licensed
            </span>
            {" "}and sources are available on Github.</p>
        </div>
        <div class="mt-12 flex flex-col items-center justify-center space-y-10 font-semibold lg:text-lg tracking-[0.02em] leading-[140%]">
          <a href="https://github.com/stateful/vscode-runme" class="w-full flex flex-col sm:flex-row sm:items-center sm:space-x-4">
            <span class="bg-[#E476FF] rounded-md p-4 flex items-center space-x-2">
              <GithubIcon />
              stateful/vscode-runme</span>
            <div>
              The VS Code Extension
            </div>
          </a>
          <a href="https://github.com/stateful/runme" class="w-full flex flex-col sm:flex-row sm:items-center sm:space-x-4">
            <span class="bg-[#3693FF] rounded-md p-4 flex items-center space-x-2">
              <GithubIcon />
              stateful/runme</span>
            <div>
              Command Line Interface (CLI) and parser
            </div>
          </a>
          <a href="https://github.com/stateful/runme.dev" class="w-full flex flex-col sm:flex-row sm:items-center sm:space-x-4">
            <span class="bg-[#F62459] rounded-md p-4 flex items-center space-x-2">
              <GithubIcon />stateful/runme.dev</span>
            <div>
              Showcase website and example readme.md
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export function CLI() {
  return (
    <div class="px-1 my-32 flex flex-col items-center justify-center space-y-8 text-center">
      <h1 id="yellow-arrows-graphic" class="relative text-4xl lg:text-6xl tracking-[0.02em] font-bold">
        Command Line Interface
      </h1>
      <p class="text-2xl leading-9">Parse and run markdown files in the terminal.</p>
      <div class="flex items-center justify-center">
        <div class="px-8 pt-2 pb-5 shadow-lg text-gray-100 font-mono subpixel-antialiased bg-[#0A0A0A]  rounded-lg leading-normal overflow-hidden">
          <div class="mt-4 flex items-center flex-nowrap justify-center space-x-1">
            <span class="text-covey-500">$ brew install{' '}</span>
            <p class="text-white">
              stateful/tap/runme
            </p>
          </div>
        </div>
      </div>
      <p class="text-sm py-0 max-w-sm">
        Other platforms available: <a class="underline font-semibold" href="https://github.com/stateful/runme/releases">https://github.com/stateful/runme/releases</a>
      </p>
      <img src="/terminal.png" alt="Terminal with runme list command" />
    </div>
  );
}

export function FinalCta() {
  return (
    <div class='flex flex-col items-center justify-center'>
      <div class="max-w-[1000px] flex flex-col items-center justify-center py-12 space-y-12 lg:space-x-4">
        <p class="text-5xl font-bold tracking-[0.03em] leading-relaxed sm:leading-normal text-center">Ready to get <span>started?</span></p>
        <a
          href="https://marketplace.visualstudio.com/items?itemName=stateful.runme"
          class="text-2xl text-white flex items-center justify-center bg-[#5B3ADF] px-12 py-[10px] rounded-[60px] text-base leading-[0px] font-semibold"
        >
          <span class="text-2xl font-semibold">Install the extension</span>
        </a>
        <a
          href="https://discord.gg/BQm8zRCBUY"
          class="flex items-center justify-center px-12 py-[20px] rounded-[60px] text-base leading-[0px] font-semibold space-x-3"
        >
          <DiscordIcon />
          <span class="text-xl sm:text-2xl tracking-[0.08em] whitespace-nowrap">Join our Discord</span>
          <RedRightArrow />
        </a>
      </div>
    </div>
  )
}
