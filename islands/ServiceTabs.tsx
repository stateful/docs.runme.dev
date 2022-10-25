import { StateUpdater, useState } from "preact/hooks";

const Tab = (props: {
  id: string;
  text: string;
  setTab: StateUpdater<string>;
  tab: string;
}) => {
  const { id, text, setTab, tab } = props;
  return (
    <div
      class={`${id === tab && "bg-[#3693FF] p-3 rounded-[58px]"
        } lg:w-48 text-center font-semibold cursor-pointer text-blue-400`}
      id={id}
      onClick={() => {
        setTab(id);
      }}
    >
      <p>
        {text}
      </p>
    </div>
  );
};

const ImageMap: {
  [key: string]: string;
} = {
  deno: "/tabs/deno.gif",
  vercel: "/tabs/vercel.gif",
};

const ServiceTabs = () => {
  const [tab, setTab] = useState("deno");
  return (
    <div class="px-1 my-48 flex flex-col items-center justify-center space-y-8 text-center">
      <h1 class="text-4xl lg:text-6xl tracking-[0.02em] font-bold">
        <span id="clouds-graphic" class="relative">
          Cloud{" "}
        </span>
        Service Integrations
      </h1>
      <p class="text-2xl leading-9">Visibility and status embedded inline in your docs.</p>
      {/* <div class="w-full flex flex-row flex-wrap space-x-4 items-center justify-center">
        <Tab text="Deno Deploy" id="deno" setTab={setTab} tab={tab} />
        <Tab text="Vercel" id="vercel" setTab={setTab} tab={tab} />
        <div class="font-semibold">More coming soon...</div>
        <Tab text="Netlify" id="netlify" setTab={setTab} tab={tab} />
        <Tab text="Begin" id="begin" setTab={setTab} tab={tab} />
      </div> */}
      <div class="p-6">
        {ImageMap[tab]
          ? <img class="xl:max-w-[900px] 2xl:max-w-[1200px]" src={ImageMap[tab]} />
          : (
            <div class="text-2xl font-semibold h-80 flex items-center justify-center">
              Coming soon...
            </div>
          )}
      </div>
    </div>
  );
};

export default ServiceTabs;
