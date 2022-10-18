import { ComponentChildren, VNode } from "preact";
import {
  CloudIcon,
  CopyIcon,
  PlayIcon,
  RepoIcon,
  TableIcon,
  TerminalIcon,
  VariableIcon,
} from "./Icons.tsx";

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
    <div class="p-4 flex flex-col items-center justify-center text-center space-y-1">
      <div>{icon}</div>
      <h1 class="font-bold text-2xl">{text}</h1>
      {description && <p>{description}</p>}
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
      <div class="text-center">
        <h1 id="arrows-graphic" class="relative text-4xl md:text-5xl lg:text-6xl tracking-[0.02em] font-bold">
          How it works</h1>
        <div class="max-w-[600px]">
          <p class="text-2xl leading-9">
            Everything a markdown file can do and way more.{' '}
            <span id="underline-graphic" class="relative ">No changes </span>
            required.
          </p>
        </div>
        {/* <br class="hidden lg:block" /> */}

      </div>
      <div class="flex flex-col lg:grid grid-cols-2 gap-2 w-full justify-center">
        <Feature
          text="Click to run commands"
          icon={<PlayIcon />}
          description="Effortlessly complete your README's steps"
        />
        <Feature
          text="Rich notebook interactivity"
          icon={<TableIcon />}
          description="Overlay commands with web app like interactivity"
        />
        <Feature
          text="Baseline shell compatibility"
          icon={<TerminalIcon />}
          description="Break out of shell without losing compatability"
        />
        <Feature
          text="Stateful environment variables"
          icon={<VariableIcon />}
          description="Reliably define the execution environment"
        />
        <Feature
          text="Click to copy"
          icon={<CopyIcon />}
          description="Copy & paste with environment variables filled in"
        />
        <Feature
          text="Cloud-native notebooks"
          icon={<CloudIcon />}
          description="Deeply integrated with your favorite cloud services"
        />
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
      <div class="py-48 lg:py-32">
        <div class="space-y-4">
          <h1 class="text-white text-4xl xs:text-5xl lg:text-6xl tracking-[0.02em] font-bold"><span id="open-source-graphic" class="relative mr-2">Open Source</span> Software</h1>
          <p class="text-white text-2xl tracking-[0.02em] leading-10">This project is APL 2.0 licensed and sources are available on Github.</p>
        </div>
        <div class="mt-12 flex flex-col items-center justify-center space-y-10 font-semibold lg:text-lg tracking-[0.02em] leading-[140%]">
          <a href="https://github.com/stateful/vscode-runme" class="w-full flex flex-col xs:flex-row xs:items-center xs:space-x-4">
            <span class="bg-[#E476FF] rounded-md p-4">stateful/vscode-runme</span>
            <div>
              The VS Code Extension
            </div>
          </a>
          <a href="https://github.com/stateful/runme" class="flex flex-col-reverse xs:flex-row xs:items-center xs:space-x-4">
            <div>
              Command Line Interface (CLI) and parser
            </div>
            <span class="bg-[#3693FF] rounded-md p-4">stateful/runme</span>
          </a>
          <a href="https://github.com/stateful/runme.dev" class="flex flex-col xs:flex-row xs:items-center xs:space-x-4">
            <span class="bg-[#F62459] rounded-md p-4">stateful/runme.dev</span>
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
      <img src="/terminal.png" alt="Terminal with rdme list command" />
    </div>
  );
}
