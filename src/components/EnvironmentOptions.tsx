import React from "react";
import { TerminalIcon, VSCodeIcon, GlobeIcon, SSHIcon } from "./Icons";

const options = [
  {
    title: "Runme VS Code Extension",
    href: "/getting-started/vs-code",
    icon: VSCodeIcon,
  },
  {
    title: "Runme CLI",
    href: "/getting-started/cli",
    icon: TerminalIcon,
  },
  {
    title: "Runme Web",
    href: "/getting-started/web",
    icon: GlobeIcon,
  },
  {
    title: "Runme via SSH",
    href: "/getting-started/runme-via-ssh",
    icon: SSHIcon,
  },
];

export default function EnvironmentOptions() {
  return (
    <div className="flex gap-1.5 justify-center items-center flex-row p-2 m-2">
      {options.map(({ href, title, icon }) => {
        return (
          <a
            className="text-center shadow-md p-2 m-4 min-w-[200px] rounded"
            href={href}
            title={title}
            target="_self"
          >
            {icon({ className: "my-0 mx-auto" })}
            <span>{title}</span>
          </a>
        );
      })}
    </div>
  );
}
