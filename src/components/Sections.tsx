import {
  ApacheIcon,
  CopyButtonIcon,
  DiscordIcon,
  GithubIcon,
  NotebookIcon,
  PurpleRightArrow,
  RepoIcon,
  RunCommandIcon,
  ShellIcon,
  CiCdIcon,
  FuseDocsIcon,
} from "./Icons";
import React, { ReactNode } from "react";
import TypeWriter from "@site/src/components/TypeWriter";

const sequence = [
  ["pauseFor", 500],
  ["typeString", "Tasks!"],
  ["pauseFor", 2500],
  ["deleteAll"],
  ["pauseFor", 1500],
  ["typeString", "Docs!"],
  ["pauseFor", 2500],
  ["deleteAll"],
  ["pauseFor", 1500],
  ["typeString", "Readme.md!"],
  ["pauseFor", 2500],
  ["deleteAll"],
  ["pauseFor", 1500],
  ["typeString", "Workflows!"],
  ["pauseFor", 2500],
  ["deleteAll"],
  ["pauseFor", 1500],
  ["typeString", "Markdown!"],
  ["pauseFor", 2500],
  ["deleteAll"],
  ["pauseFor", 1500],
];

type FeatureProps = {
  text: string;
  icon: ReactNode;
  description?: string;
};

type RepoProps = {
  url: string;
  description: string;
  name: string;
};

interface SectionTitleProps extends React.PropsWithChildren {
  title: string;
}

export function SectionTitle(props: SectionTitleProps) {
  return (
    <div className="text-center">
      <h1
        id="arrows-graphic"
        className="relative text-4xl lg:text-6xl tracking-[0.02em] font-bold"
      >
        {props.title}
      </h1>
      {props.children}
    </div>
  );
}

export function Feature(props: FeatureProps) {
  const { text, icon, description } = props;
  return (
    <div className="lg:w-[520px] lg:odd:ml-auto p-4 flex flex-col justify-end space-y-6">
      <div>{icon}</div>
      <h1 className="font-bold text-[22px]">{text}</h1>
      {description && <p className="text-xl">{description}</p>}
    </div>
  );
}

export function Repo({ url, name, description }: RepoProps) {
  return (
    <div className="flex flex-col items-center space-y-1 md:flex-row md:space-x-2 md:space-y-0 md:justify-start md:items-start">
      <div>
        <RepoIcon />
      </div>
      <a
        href={url}
        className="text-blue-400 hover:text-blue-500 hover:underline"
      >
        {name}
      </a>
      <div>{description}</div>
    </div>
  );
}

export function Benefits() {
  return (
    <div className="max-w-[1440px] my-16 mx-auto px-12 py-6 flex flex-col items-center">
      <div className="space-y-2 text-center">
        <h2 className="text-5xl font-bold tracking-[0.03em] h-[100px] sm:h-fit">
          Run your <TypeWriter sequence={sequence} />
        </h2>

        <div className="text-xl">
          A better way to configure your local dev environment for a repo.
        </div>
      </div>
      <div className="flex flex-col w-full grid-cols-2 gap-4 mt-12 lg:grid 2xl:gap-1">
        <Feature
          text="Fuse Docs with Workflows & Tasks"
          icon={<FuseDocsIcon />}
          description="Built on Markdown. Turn BUILD.md, DEV.md, README.md, etc into interactive control planes. No changes required and 100% compatible."
        />
        <Feature
          text="No Long Skip Over Intermediary Results"
          icon={<RunCommandIcon />}
          description="Run command blocks while simultaneously following documented steps with context; interoperably in a GUI or a CLI."
        />
        <Feature
          text="Colocated with Code"
          icon={<CopyButtonIcon />}
          description="Avoid code/doc divergence and easily share tasks and workflows that otherwise remain buried in .bash_history's. Make workflows truly portable within your team."
        />
        <Feature
          text="Uplevel Existing Task Definitions"
          icon={<NotebookIcon />}
          description="Works out of the box with NPM Scripts, Ruby Rake, Makefile, Gradle, etc. The combo of the written words and runnable commands is the ultimate docs utility."
        />
        <Feature
          text="Break out of The Terminal"
          icon={<ShellIcon />}
          description="Rich web interactivity without leaving the terminal behind. Render forms, graphs, tables and more without breaking the CLI."
        />
        <Feature
          text="Test Repo's DX in CI/CD"
          icon={<CiCdIcon />}
          description="Automate testing the human-interface of your projects. Detect breakage ahead of time. Use established git-workflows to introduce changes."
        />
      </div>
      <div className="relative space-y-12 text-center text-white pt-14">
        <div className="z-10 select-none">
          <div className="flex flex-col items-center justify-center py-4 space-y-8">
            <a href="/docs/intro">
              <div className="px-4 py-2 font-bold rounded-md bg-purpleish-100 hover:bg-purpleish-200">
                Learn more about how it works 👀
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full mt-12 lg:mt-24">
        <div className="w-full h-[320px] sm:h-[450px] lg:w-[1000px] lg:h-[580px] max-w-5xl mx-auto">
          <iframe
            className="mx-auto rounded-lg shadow-2xl select-none"
            width={"100%"}
            height={"100%"}
            src="https://www.youtube.com/embed/0RpCmDV4wZg"
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
    <div className="relative mb-32 flex items-center justify-center min-h-[30vh] px-12 flex-col overflow-x-hidden text-white">
      <div className="absolute w-full h-full z-[-1] top-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          viewBox="0 0 1567 800"
          fill="none"
        >
          <path d="M0 0L1567 102.793V718.665L-11 800L0 0Z" fill="#33384D" />
        </svg>
      </div>
      <div className="flex flex-col py-48 lg:px-24 lg:flex-row">
        <div className="space-y-4">
          <div className="flex flex-col-reverse lg:flex-row lg:space-x-4">
            <h1 className="text-white text-4xl xs:text-5xl lg:text-5xl tracking-[0.02em] font-bold">
              Open Source Software
            </h1>
            <div className="flex-grow w-4/5">
              <ApacheIcon />
            </div>
          </div>
          <p className="text-white text-2xl tracking-[0.02em] leading-10 lg:w-3/4 2xs:pb-4 lg:pb-0">
            This project is{" "}
            <span id="yellow-underline" className="relative whitespace-nowrap">
              APL 2.0 licensed
            </span>{" "}
            and
            <br />
            sources are available on Github.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-8 font-semibold lg:text-lg tracking-[0.02em] leading-[140%]">
          <a
            href="https://github.com/stateful/vscode-runme"
            className="flex flex-col w-full sm:flex-row sm:items-center sm:space-x-4"
          >
            <span className="bg-[#5B3ADF] rounded-md py-2 p-4 flex items-center space-x-2">
              <GithubIcon />
              stateful/vscode-runme
            </span>
            <div className="mt-2">The VS Code Extension</div>
          </a>
          <a
            href="https://github.com/stateful/runme"
            className="flex flex-col w-full sm:flex-row sm:items-center sm:space-x-4"
          >
            <span className="bg-[#F62459] rounded-md py-2 p-4 flex items-center space-x-2">
              <GithubIcon />
              stateful/runme
            </span>
            <div className="mt-2">Command Line Interface (CLI) and parser</div>
          </a>
          <a
            href="https://github.com/stateful/runme.dev"
            className="flex flex-col w-full sm:flex-row sm:items-center sm:space-x-4"
          >
            <span className="bg-[#3693FF] rounded-md py-2 p-4 flex items-center space-x-2">
              <GithubIcon />
              stateful/runme.dev
            </span>
            <div className="mt-2">Showcase website and example readme.md</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export function CLI() {
  return (
    <div className="px-1 my-32 flex flex-col items-center justify-center space-y-8 text-center text-[color:var(--ifm-font-color-base)]">
      <h1
        id="yellow-arrows-graphic"
        className="relative text-4xl lg:text-6xl tracking-[0.02em] font-bold"
      >
        Command Line Interface
      </h1>
      <p className="text-2xl leading-9">
        Parse and run markdown files in the terminal.
      </p>
      <img src="/img/terminal.png" alt="Terminal with runme list command" />
      <div className="flex items-center gap-6">
        <div className="flex items-center justify-center">
          <div className="px-6 pb-3 border border-solid border-[color:var(--ifm-color-primary)] text-gray-100 font-mono subpixel-antialiased transparent rounded-lg leading-normal overflow-hidden">
            <div className="flex items-center justify-center mt-4 space-x-1 flex-nowrap">
              <span className="text-[color:var(--ifm-color-primary)]">
                $ brew install{" "}
              </span>
              <p className="text-black dark:text-white">stateful/tap/runme</p>
            </div>
          </div>
        </div>
        <p className="max-w-sm py-0 text-sm">
          <a
            className="font-semibold"
            href="https://github.com/stateful/runme/releases"
          >
            Other platforms available
            <svg
              className="inline-block mx-2"
              width="16"
              height="13"
              viewBox="0 0 16 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 6.5C5.51472 6.5 13.7692 6.5 13.7692 6.5M13.7692 6.5L9.26923 2M13.7692 6.5L9.26923 11"
                stroke="#5B3ADF"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </p>
      </div>
    </div>
  );
}

export function Documentation() {
  return (
    <div className="px-1 my-32 flex flex-col items-center justify-center text-center text-[color:var(--ifm-font-color-base)]">
      <h1 className="relative text-4xl lg:text-6xl tracking-[0.02em] font-bold">
        Documentation
      </h1>
      <p className="my-4 mb-20 text-2xl">
        Visibility and status embedded inline in your docs.
      </p>
      <div className="flex justify-start gap-16 2xs:gap-4 mx-auto w-full md:w-[850px] 2xs:px-4 mb-20">
        <div className="flex-initial">
          <svg
            width="125"
            height="125"
            viewBox="0 0 125 125"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="125" height="125" rx="6" fill="#42FCCC" />
            <path
              d="M18 56.5598C22.5 48.3931 32.153 35.5536 40 37.5598C51.5 40.4998 54.3009 54.7885 67 49.0598C76 44.9998 83 16.5598 107.5 24.5598"
              stroke="#E476FF"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M91.3558 64.156C94.261 66.3661 98.3227 70.2233 104.853 74.429C105.31 74.7233 105.459 75.3292 105.148 75.7751C102.164 80.0522 96.1154 84.0577 90.7802 88.2968"
              stroke="#3693FF"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M34.5622 99.7897C31.9739 97.4387 28.3397 93.3427 22.5145 88.8509C22.1341 88.5577 22.0063 88.0356 22.2435 87.618C24.7715 83.1667 30.0648 79.053 34.719 74.6816"
              stroke="#3693FF"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M55.0527 83.249H55.3945C56.3223 83.249 57.1523 83.6071 57.8848 84.3232C58.6335 85.0231 59.0078 85.902 59.0078 86.96C59.0078 88.0016 58.6335 88.8643 57.8848 89.5479C57.1523 90.2152 56.2409 90.5488 55.1504 90.5488C53.9622 90.5488 52.9694 90.0768 52.1719 89.1328C51.3906 88.1725 51 86.8135 51 85.0557C51 83.4443 51.3418 81.9388 52.0254 80.5391C52.7253 79.123 53.5716 78.0081 54.5645 77.1943C55.5736 76.3643 56.4688 75.9492 57.25 75.9492C57.7708 75.9492 58.1777 76.1038 58.4707 76.4131C58.7637 76.7223 58.9102 77.1211 58.9102 77.6094C58.9102 78.3255 58.5928 78.8545 57.958 79.1963C57.0954 79.6683 56.4118 80.2217 55.9072 80.8564C55.4027 81.4912 55.1178 82.2887 55.0527 83.249ZM70.8438 83.249H71.1611C72.0726 83.249 72.8945 83.6071 73.627 84.3232C74.3757 85.0231 74.75 85.902 74.75 86.96C74.75 87.9854 74.3757 88.848 73.627 89.5479C72.8945 90.2477 71.9831 90.5977 70.8926 90.5977C69.6882 90.5977 68.6953 90.1094 67.9141 89.1328C67.1328 88.1562 66.7422 86.7972 66.7422 85.0557C66.7422 83.8024 66.9456 82.6224 67.3525 81.5156C67.7594 80.4089 68.2803 79.4486 68.915 78.6348C69.5661 77.8047 70.2578 77.1536 70.9902 76.6816C71.7389 76.1934 72.4062 75.9492 72.9922 75.9492C73.5293 75.9492 73.9362 76.1038 74.2129 76.4131C74.5059 76.7061 74.6523 77.1048 74.6523 77.6094C74.6523 78.3418 74.335 78.8708 73.7002 79.1963C72.805 79.7008 72.1296 80.2624 71.6738 80.8809C71.2181 81.4831 70.9414 82.2725 70.8438 83.249Z"
              fill="#5B3ADF"
            />
          </svg>
        </div>
        <div className="flex-row text-left">
          <h2 className="relative text-2xl lg:text-3xl tracking-[0.02em] font-bold mb-4 text-[color:var(--ifm-color-primary-dark)] dark:text-[color:var(--ifm-color-primary-more-lightest)]">
            <a href="/docs/getting-started">Getting Started</a>
          </h2>
          <p className="text-xl">
            Learn how to install Runme as CLI or VS Code Extension.
          </p>
          <p className="pt-4 text-xl">
            Click{" "}
            <a
              href="vscode:extension/stateful.runme"
              className="whitespace-nowrap p-2 lg:py-2 2xs:py-0 2xs:mx-0 lg:mx-2 border border-solid border-[color:var(--ifm-color-primary)] text-[color:var(--ifm-color-primary)] hover:text-[color:var(--ifm-color-primary)] rounded"
            >
              Install Extension
            </a>{" "}
            to add Runme to your VS Code.
          </p>
        </div>
      </div>
      <div className="flex justify-start gap-16 2xs:gap-4 mx-auto w-full md:w-[850px] 2xs:px-4 mb-20">
        <div className="flex-initial">
          <svg
            width="125"
            height="125"
            viewBox="0 0 125 125"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="125" height="125" rx="6" fill="#FFDB06" />
            <path
              d="M2 31L78 31"
              stroke="#F62459"
              strokeWidth="4"
              strokeLinecap="square"
            />
            <circle
              cx="87"
              cy="31"
              r="8"
              transform="rotate(-90 87 31)"
              fill="#F62459"
            />
            <path
              d="M2 95L78 95"
              stroke="#3693FF"
              strokeWidth="4"
              strokeLinecap="square"
            />
            <circle
              cx="87"
              cy="95"
              r="8"
              transform="rotate(-90 87 95)"
              fill="#3693FF"
            />
            <path
              d="M123 63L47 63"
              stroke="#5B3ADF"
              strokeWidth="4"
              strokeLinecap="square"
            />
            <circle
              cx="38"
              cy="63"
              r="8"
              transform="rotate(90 38 63)"
              fill="#5B3ADF"
            />
          </svg>
        </div>
        <div className="flex-row text-left">
          <h2 className="relative text-2xl lg:text-3xl tracking-[0.02em] font-bold mb-4 text-[color:var(--ifm-color-primary-dark)] dark:text-[color:var(--ifm-color-primary-more-lightest)]">
            <a href="/docs/configuration">Configuration</a>
          </h2>
          <p className="text-xl">
            Define the execution behavior of code blocks through annotations.
          </p>
          <p className="pt-4 text-xl">
            Add a{" "}
            <a
              href="/docs/configuration"
              className="p-2 text-blue-600 border border-blue-600 border-solid rounded whitespace-nowrap lg:py-2 2xs:py-0 2xs:mx-0 lg:mx-2 hover:text-[color:var(--ifm-color-primary)]"
            >
              background
            </a>{" "}
            annotation to run a task in the background.
          </p>
        </div>
      </div>
      <div className="flex justify-start gap-16 2xs:gap-4 mx-auto w-full md:w-[850px] 2xs:px-4 mb-20">
        <div className="flex-initial">
          <svg
            width="125"
            height="125"
            viewBox="0 0 125 126"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="125" height="125" rx="6" fill="#5B3ADF" />
            <path
              d="M70.2998 30.091C56.4266 12.5192 29.1418 20.8219 20.9664 26.2044"
              stroke="#42FCCC"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M76.8881 26.7939C77.692 33.083 75.6234 40.9395 73.9829 39.639C72.7453 38.6578 66.5175 35.8336 63.7083 32.6136"
              stroke="#42FCCC"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M55.139 96.2146C63.462 112.398 100.924 105.924 104.603 98.0889"
              stroke="#FF906E"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M49.4705 100.199C48.758 93.8993 48.5062 86.2997 52.562 87.3979C54.0864 87.8107 59.9713 91.3114 62.7334 94.5718"
              stroke="#FF906E"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <circle
              cx="30"
              cy="63"
              r="8"
              transform="rotate(90 30 63)"
              fill="#3693FF"
            />
            <circle
              cx="63"
              cy="63"
              r="8"
              transform="rotate(90 63 63)"
              fill="#E476FF"
            />
            <circle
              cx="96"
              cy="63"
              r="8"
              transform="rotate(90 96 63)"
              fill="#FFDB06"
            />
          </svg>
        </div>

        <div className="flex-row text-left">
          <h2 className="relative text-2xl lg:text-3xl tracking-[0.02em] font-bold mb-4 text-[color:var(--ifm-color-primary-dark)] dark:text-[color:var(--ifm-color-primary-more-lightest)]">
            <a href="https://github.com/stateful/vscode-runme/blob/main/CONTRIBUTING.md">
              Contributing
            </a>
          </h2>
          <p className="text-xl">
            Everything is open source and we love your contributions.
          </p>
          <p className="pt-4 text-xl">
            Read our{" "}
            <a
              href="https://github.com/stateful/vscode-runme/blob/main/CONTRIBUTING.md"
              className="p-2 text-red-600 border border-red-600 border-solid rounded whitespace-nowrap lg:py-2 2xs:py-0 2xs:mx-0 lg:mx-2 hover:text-red-600"
            >
              Contributing Guidelines
            </a>{" "}
            for more information.
          </p>
        </div>
      </div>
    </div>
  );
}

export function FinalCta() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="max-w-[1000px] flex flex-col items-center justify-center py-12 space-y-8 lg:space-x-4">
        <p className="text-5xl font-bold tracking-[0.03em] leading-relaxed sm:leading-normal text-center">
          Ready to get{" "}
          <span id="started-underline" className="relative whitespace-nowrap">
            started?
          </span>
        </p>
        <a
          href="https://marketplace.visualstudio.com/items?itemName=stateful.runme"
          className="text-white flex items-center justify-center bg-[#5B3ADF] px-12 py-[10px] rounded-[60px] text-base leading-[0px] font-semibold"
        >
          <span className="text-2xl font-semibold">Install the extension</span>
        </a>
        <a
          href="https://discord.gg/runme"
          className="flex items-center justify-center px-12 rounded-[60px] text-base leading-[0px] font-semibold space-x-3"
        >
          <DiscordIcon />
          <span className="text-lg sm:text-xl tracking-[0.08em] whitespace-nowrap">
            Join our Community
          </span>
          <PurpleRightArrow />
        </a>
      </div>
    </div>
  );
}
