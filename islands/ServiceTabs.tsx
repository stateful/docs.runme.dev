import { useState } from "preact/hooks";

const Tab = (props: {
  id: string;
  text: string;
  setTab: Function;
  tab: string;
}) => {
  const { id, text, setTab, tab } = props;
  return (
    <div
      class={`${id === tab && "underline"} cursor-pointer text-blue-300`}
      id={id}
      onClick={() => {
        setTab(id);
      }}
    >
      {text}
    </div>
  );
};

const ImageMap: {
  [key: string]: string;
} = {
  deno: "/tabs/deno.png",
  vercel: "/tabs/vercel.png",
};

const ServiceTabs = () => {
  const [tab, setTab] = useState("deno");
  return (
    <div>
      <div class="w-full flex flex-row space-x-4 items-center justify-center">
        <Tab text="Deno Deploy" id="deno" setTab={setTab} tab={tab} />
        <Tab text="Vercel" id="vercel" setTab={setTab} tab={tab} />
        <Tab text="Netlify" id="netlify" setTab={setTab} tab={tab} />
        <Tab text="Begin" id="begin" setTab={setTab} tab={tab} />
      </div>
      <div class="p-6">
        {ImageMap[tab] ? (
          <img src={ImageMap[tab]} />
        ) : (
          <div class="text-2xl font-semibold h-80 flex items-center justify-center">
            Coming soon...
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceTabs;
