import React from "react";

const InstallCTA = () => {
  return (
    <div className="flex flex-col w-full max-w-5xl px-4 mx-auto my-12 space-y-12 text-center md:px-0">
      <div className="text-6xl leading-snug"> 👍</div>

      <div className="flex flex-col items-center justify-center space-x-0 space-y-3 md:space-x-6 md:flex-row md:space-y-0">
        <a href="https://marketplace.visualstudio.com/items?itemName=stateful.runme">
          <div className="px-4 py-3 mx-auto text-xl font-bold text-white border rounded-md cursor-pointer bg-purpleish-200 whitespace-nowrap hover:brightness-110">
            Runme for VS Code
          </div>
        </a>

        <a href="/docs/cli">
          <div className="px-4 py-3 text-xl font-bold text-white border rounded-md cursor-pointer bg-sky-700 hover:brightness-110 whitespace-nowrap">
            Runme on the CLI
          </div>
        </a>
      </div>
    </div>
  );
};

export default InstallCTA;
