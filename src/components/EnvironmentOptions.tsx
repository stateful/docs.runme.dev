import React from "react";
import { TerminalIcon, VSCodeIcon } from "./Icons";

const options = [
  {
    title: "Runme VS Code extension",
    href: "/getting-started/vs-code",
    icon: VSCodeIcon,
  },
  {
    title: "Runme CLI",
    href: "/getting-started/cli",
    icon: TerminalIcon,
  },
];

export default function EnvironmentOptions() {
  return (
    <div className="flex gap-1.5 justify-center items-center flex-row p-2 m-2">
      {options.map(({ href, title, icon }) => {
        return (
          <a
            className="text-center shadow-md p-2 min-w-fit rounded"
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
