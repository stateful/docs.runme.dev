import BrowserOnly from '@docusaurus/BrowserOnly';
import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";

import Meta from "@site/src/components/Meta";

import clsx from "clsx";

import {
  faArrowRight,
  faChevronDown,
  faChevronUp,
  faLink,
  faTableList,
  faTerminal,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function (props) {
  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => {
        return <ExamplesPage {...props} />;
      }}
    </BrowserOnly>
  );
}

function ExampleLayout({ children }) {
  return (
    <Layout>
      <Meta />
      <div className="max-w-screen-lg min-h-screen px-4 py-20 mx-auto content lg:px-0">
        <div>
          {children}
        </div>
      </div>
    </Layout>
  )
}

function ExamplesPage({ examples, example }) {
  if (example) {
    return (
      <ExampleLayout>
        <ExampleContent entry={example} />
        <a href="/examples">
          <div className="flex flex-row items-center justify-center pt-20 space-x-2 text-3xl">
            <div>More examples</div> <FontAwesomeIcon icon={faArrowRight} size="xs" />
          </div>
        </a>
      </ExampleLayout>
    );
  }

  return (
    <ExampleLayout>
      <Examples examples={examples} />
    </ExampleLayout>
  )
}

function ExampleContent({ entry }) {
  const { description, img, webm, mp4, slug, runme, repo, docs, tags, title } = entry;
  const video = webm || mp4;

  return (
    <div className="flex flex-col px-4">
      <div className="text-5xl font-medium text-center">{title}</div>
      <div className="pt-6 text-sm font-medium md:text-center text-purpleish-800">
        [{tags.sort().join(", ")}]
      </div>
      <div className="py-6 text-lg">{description}</div>
      <div className="flex flex-col space-y-1 md:space-x-4 md:items-center md:justify-center md:space-y-0 md:flex-row">
        {docs && (
          <div>
            <a href={docs}>Documentation</a>
          </div>
        )}
        {repo && (
          <div>
            <a href={repo}>Repository</a>
          </div>
        )}
        {runme && (
          <a href={runme}>
            <div className="relative h-6 w-[120px]">
              <img
                src="https://badgen.net/badge/Open%20with/Runme/5B3ADF?icon=https://runme.dev/img/logo.svg"
                alt=""
              />
            </div>
          </a>
        )}
      </div>

      {img && (
        <div className="relative w-full h-[200px] md:h-[600px] p-4 mt-6">
          <img src={img} className="object-contain aspect-auto" alt={slug} />
        </div>
      )}
      {video && (
        <div className="relative w-full p-4 px-16 overflow-auto">
          <video autoPlay loop muted playsInline className="object-contain aspect-auto">
            <source src={webm} type="video/webm" />
            <source src={mp4} type="video/mp4" />
          </video>
        </div>
      )}
    </div>
  );
}

const Examples = ({ examples }) => {
  const [entries, setEntries] = useState(examples);
  // const tags = [...new Set(examplesArr.map((entry) => entry.tags).flat())];
  const tags = []
  const [tagsOn, setTagsOn] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    setEntries(
      examples
        .filter((entry) => {
          const inter = entry.tags.filter((value) => tagsOn.includes(value));
          return !tagsOn.length || inter.length > 0;
        })
        .filter((entry) => !filter.length || JSON.stringify(entry).includes(filter))
    );
  }, [tagsOn, filter]);

  return (
    <div>
      <div className="pb-6">
        <h1 className="text-5xl font-medium">Examples</h1>
        <h3 className="py-1 text-xl text-neutral-500">A collection of cool ways to use Runme.</h3>
      </div>

      <div className="flex flex-col space-y-4 md:space-x-8 md:flex-row md:space-y-0">
        <div className="flex flex-col md:items-center md:justify-center">
          <input
            className="px-3 py-2 text-sm border-2 rounded outline-none focus:border-purpleish-500 focus:outline-none focus:ring-0 focus:ring-offset-0 text-neutral-800"
            placeholder="Filter..."
            type="text"
            id="filter-input"
            name="filter"
            size={22}
            autoCapitalize="off"
            autoCorrect="off"
            value={filter}
            onChange={(e) => {
              setFilter(e.target.value);
            }}
          />
          <div className="flex justify-end w-full py-0.5 px-1">
            <a
              className="text-xs cursor-pointer"
              onClick={() => {
                setFilter("");
                return false;
              }}
            >
              Clear
            </a>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex flex-row flex-wrap ">
            {tags.sort().map((tag) => {
              return (
                <div
                  key={tag}
                  onClick={() => {
                    if (tagsOn.includes(tag)) {
                      setTagsOn(tagsOn.filter((entry) => entry !== tag));
                    } else {
                      setTagsOn([...tagsOn, tag]);
                    }
                  }}
                  className={clsx(
                    "mx-1 py-0.5 px-2 border rounded-md cursor-pointer mt-1",
                    {
                      "bg-purpleish-500 text-white": tagsOn.includes(tag),
                    },
                    { "text-neutral-700": !tagsOn.includes(tag) }
                  )}
                >
                  {tag}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="py-8 divide-y">
        {entries.map((entry) => {
          return <ShowEntry entry={entry} key={entry.slug} />;
        })}
      </div>
    </div>
  );
};

const ShowEntry = ({ entry }) => {
  const { title, slug, tags } = entry;
  const [open, setOpen] = useState(false);
  const url = slug || `${title?.toLowerCase().replaceAll(" ", "-")}`;
  const cli = tags?.includes("cli");
  const notebook = tags?.includes("notebook");

  return (
    <div className="w-full py-3" id={slug}>
      <div className="flex flex-col space-y-3">
        <div className="flex flex-row justify-between px-2 cursor-pointer group">
          <div className="flex flex-row items-center md:space-x-2">
            <a href={`/examples/${url}`} className="hover:brightness-75">
              <FontAwesomeIcon icon={faLink} />
            </a>
            <div className="flex flex-row items-center space-x-2">
              <h2
                className="text-xl"
                onClick={() => {
                  setOpen(!open);
                }}
              >
                {title}
              </h2>
              <a
                className="hidden px-2 text-lg md:px-0 group-hover:block"
                href={`/examples#${url}`}
              >
                #
              </a>
            </div>
          </div>
          <div
            className="flex flex-row items-center px-1 space-x-4 md:space-x-10"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <div className="flex flex-row items-center space-x-2">
              {cli === true && (
                <FontAwesomeIcon
                  icon={faTerminal}
                  size="2xs"
                  className="p-1 text-white rounded bg-neutral-600"
                />
              )}
              {notebook === true && (
                <FontAwesomeIcon icon={faTableList} size="lg" className="text-neutral-600" />
              )}
            </div>
            <div className="flex items-center cursor-pointer text-purpleish-500 hover:brightness-90">
              {open ? (
                <FontAwesomeIcon icon={faChevronUp} />
              ) : (
                <FontAwesomeIcon icon={faChevronDown} />
              )}
            </div>
          </div>
        </div>
        {open && <EntryContent {...entry} />}
      </div>
    </div>
  );
};
const EntryContent = (entry) => {
  const { description, img, webm, mp4, slug, runme, repo, docs, tags } = entry;
  const video = webm || mp4;

  return (
    <div className="flex flex-col px-4 py-4 border rounded-sm">
      <div>{description}</div>
      <div className="flex flex-col pt-4 space-y-1 md:space-x-4 md:items-center md:justify-center md:space-y-0 md:flex-row">
        {docs && (
          <div>
            <a href={docs}>Documentation</a>
          </div>
        )}
        {repo && (
          <div>
            <a href={repo}>Repository</a>
          </div>
        )}
        {runme && (
          <a href={runme}>
            <div className="relative h-6 w-[120px]">
              <img
                src="https://badgen.net/badge/Open%20with/Runme/5B3ADF?icon=https://runme.dev/img/logo.svg"
                alt=""
              />
            </div>
          </a>
        )}
      </div>
      <div className="py-1 text-sm font-medium md:text-center text-purpleish-800">
        [{tags.sort().join(", ")}]
      </div>

      {img && (
        <div className="relative w-full h-[200px] md:h-[600px] p-4 mt-6">
          <img src={img} className="object-contain aspect-auto" alt={slug} />
        </div>
      )}
      {video && (
        <div className="relative w-full p-4 px-16 overflow-auto">
          <video autoPlay loop muted playsInline className="object-contain aspect-auto">
            <source src={webm} type="video/webm" />
            <source src={mp4} type="video/mp4" />
          </video>
        </div>
      )}
    </div>
  );
};
