import React, { useState } from 'react'
import BrowserOnly from '@docusaurus/BrowserOnly'

interface TabProps {
  id: string
  text: string
  setTab: React.Dispatch<React.SetStateAction<string>>
  tab: string
}

const Tabs = () => {
  return (
    <BrowserOnly>
      {() => {
        const [tab, setTab] = useState("vercel")
        return (
          <>
            <div className="w-full flex flex-row flex-wrap space-x-4 items-center justify-center">
              <Tab text="Vercel" id="vercel" setTab={setTab} tab={tab} />
              <Tab text="Deno Deploy" id="deno" setTab={setTab} tab={tab} />
              {/* <div className="font-semibold">More coming soon...</div> */}
              {/* <Tab text="Netlify" id="netlify" setTab={setTab} tab={tab} />
                <Tab text="Begin" id="begin" setTab={setTab} tab={tab} /> */}
            </div>


            <div className="p-2">
              <div className="text-base font-medium xl:text-lg hover:text-blue-600 cursor-pointer pb-6 text-blue-500 hover:underline">
                <a href={ExampleMap[tab]} className="text-blue-400">
                  Check out the example markdown.
                </a>
              </div>

              {ImageMap[tab]
                ? <img className="xl:max-w-[900px] 2xl:max-w-[1200px]" src={ImageMap[tab]} />
                : (
                  <div className="text-2xl font-semibold h-80 flex items-center justify-center">
                    Coming soon...
                  </div>
                )}
            </div>
          </>
        )
      }}
    </BrowserOnly>
  )
}

const Tab = (props: TabProps) => {
  const { id, text, setTab, tab } = props;
  return (
    <div
      className={`${id === tab && "bg-[#3693FF] p-3 rounded-[58px]"
        } p-3 rounded-[58px] border border-gray-200 lg:w-48 text-center font-semibold cursor-pointer hover:shadow`}
      id={id}
      onClick={() => {
        setTab(id);
      }}
    >
      <p className="text-black-400">
        {text}
      </p>
    </div>
  );
};

const ImageMap: {
  [key: string]: string;
} = {
  deno: "/img/tabs/deno.gif",
  vercel: "/img/tabs/vercel.gif",
};

const ExampleMap: {
  [key: string]: string;
} = {
  deno: "https://github.com/stateful/runme.dev/blob/main/README.md",
  vercel: "https://github.com/stateful/vscode-runme/blob/main/examples/deploy/README.md",
};

const ServiceTabs = () => {
  return (
    <div className="px-1 my-48 flex flex-col items-center justify-center space-y-8 text-center text-[color:var(--ifm-font-color-base)]">
      <h1 className="text-4xl lg:text-6xl tracking-[0.02em] font-bold">
        <span id="clouds-graphic" className="relative">
          Cloud{" "}
        </span>
        Service Integrations
      </h1>
      <p className="text-2xl leading-9">Visibility and status embedded inline in your docs.</p>
      <Tabs />
    </div>
  );
};

export default ServiceTabs;
