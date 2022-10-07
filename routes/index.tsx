import {
  CloudIcon,
  CopyIcon,
  PlayIcon,
  RepoIcon,
  TableIcon,
  TerminalIcon,
  VariableIcon,
} from "../components/Icons.tsx";
import type { ComponentChildren, VNode } from "preact";

import ServiceTabs from "../islands/ServiceTabs.tsx";

type FeatureProps = {
  text: string;
  icon: VNode;
  description?: string;
};
type SectionProps = {
  children: ComponentChildren;
  title: string;
  description: string;
};

const Feature = (props: FeatureProps) => {
  const { text, icon, description } = props;
  return (
    <div class="p-6 flex flex-col items-center justify-center space-y-2">
      <div>{icon}</div>
      <div class="font-semibold text-lg">{text}</div>
      {description && <div>{description}</div>}
    </div>
  );
};

const Section = (props: SectionProps) => {
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

export default function Home() {
  return (
    <>
      <div class="min-h-screen 2xl:min-h-[50vh] z-[100] text-white max-w-[1440px] mx-auto">
        <div class="text-center py-20 space-y-2">
          <h2 class="text-5xl xl:text-6xl 2xl:text-7xl font-bold">
            Run your README.md
          </h2>
          <h3 class="text-2xl">
            Use dev-friendly markdown to craft interactive runbooks in VS Code.
          </h3>
          <div className="flex flex-col items-center justify-center py-12 space-y-2">
            <div class="bg-[#e75b5b] py-[20px] rounded-md text-base w-[280px] h-[40px] flex items-center justify-center font-semibold">
              <a href="https://marketplace.visualstudio.com/items?itemName=stateful.runme">
                Install the extension
              </a>
            </div>

            <div class="font-medium">
              or search{" "}
              <i class="rounded text-[#EB5757] bg-[#5E5B54] p-0.5">runme</i> in
              the VS Code extension panel
            </div>
          </div>
          <div class="lg:w-3/4 mx-auto">
            <img src="/sidebyside.png" />
          </div>
        </div>

        <Section
          title="Open Source Software"
          description="This project is totally open source and available on Github."
        >
          <div class="flex mx-auto ">
            <div className="flex flex-col space-y-2 ">
              <div className="flex flex-row space-x-2 items-center">
                <RepoIcon />
                <a href="" class="text-blue-400">
                  stateful/vscode-runme
                </a>
                <div> - VS Code extension</div>
              </div>
              <div className="flex flex-row space-x-2 items-center">
                <RepoIcon />

                <a href="" class="text-blue-400">
                  stateful/runme
                </a>
                <div> - Command Line Interface (CLI) and parser</div>
              </div>
              <div className="flex flex-row space-x-2 items-center">
                <RepoIcon />

                <a href="" class="text-blue-400">
                  stateful/runme.dev
                </a>
                <div> - Showcase website and example readme</div>
              </div>
            </div>
          </div>
        </Section>
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

        <Section
          title="Command Line Interface"
          description="Parse and run markdown files in the terminal."
        >
          <img src="/terminal.png" alt="Terminal with rdme list command" />
        </Section>
        <Section
          title="Cloud Service Integrations"
          description="Visibly embedded inline in your docs.
          "
        >
          <div class="pt-6">
            <ServiceTabs />
          </div>
        </Section>
      </div>
    </>
  );
}
