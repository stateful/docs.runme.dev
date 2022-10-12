import { ComponentChildren, VNode } from 'preact'
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

export function Section (props: SectionProps) {
  return (
    <div class="px-12 py-6 flex flex-col items-center py-14">
      <div class="flex flex-col justify-center items-center">
        <h1 class="text-4xl font-bold">{props.title}</h1>
        <p class="text-xl mt-4 font-medium ">{props.description}</p>
      </div>
      <div class="py-6 flex flex-row flex-wrap space-x-4 lg:w-3/4 mx-auto">
        {props.children}
      </div>
    </div>
  );
};

export function Feature (props: FeatureProps) {
  const { text, icon, description } = props;
  return (
    <div class="p-4 flex flex-col items-center justify-center space-y-1">
      <div>{icon}</div>
      <div class="font-semibold text-lg">{text}</div>
      {description && <div>{description}</div>}
    </div>
  );
};

export function Repo ({ url, name, description }: RepoProps) {
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
};

export function HowItWorks() {
  return (
    <Section
      title="How it works"
      description="Everything a markdown file can do, and way more. No changes required."
    >
      <div class="flex flex-col lg:grid grid-cols-2 gap-2 w-full justify-center">
        <Feature
          text="Click to run commands"
          icon={<PlayIcon />}
          description="effortlessly complete your README's steps"
        />
        <Feature
          text="Rich notebook interactivity"
          icon={<TableIcon />}
          description="overlay commands with web app like interactivity"
        />
        <Feature
          text="Baseline shell compatibility"
          icon={<TerminalIcon />}
          description="break out of shell without losing compatability"
        />
        <Feature
          text="Stateful environment variables"
          icon={<VariableIcon />}
          description="reliably define the execution environment"
        />
        <Feature
          text="Click to copy"
          icon={<CopyIcon />}
          description="copy & paste with environment variables filled in"
        />
        <Feature
          text="Cloud-native notebooks"
          icon={<CloudIcon />}
          description="deeply integrated with your favorite cloud services"
        />
      </div>
    </Section>
  )
}

export function OpenSource() {
  return (
    <Section
      title="Open Source Software"
      description="This project is APL 2.0 licensed and sources are available on Github."
    >
      <div class="flex mx-auto">
        <div class="flex flex-col space-y-4 md:space-y-1">
          <Repo
            url="http://github.com/stateful/vscode-runme"
            name="stateful/vscode-runme"
            description="The VS Code extension"
          />
          <Repo
            url="http://github.com/stateful/runme"
            name="stateful/runme"
            description="Command Line Interface (CLI) and parser"
          />
          <Repo
            url="http://github.com/stateful/runme.dev"
            name="stateful/runme.dev"
            description="Showcase website and example Readme"
          />
        </div>
      </div>
    </Section>
  )
}

export function CLI() {
  return (
    <Section
      title="Command Line Interface"
      description="Parse and run markdown files in the terminal."
    >
      <img src="/terminal.png" alt="Terminal with rdme list command" />
    </Section>
  )
}