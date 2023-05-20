import React from "react";
import Layout from "@theme/Layout";

import Meta from "@site/src/components/Meta";
import Footer from "@site/src/components/Footer";
import { DiscordIcon } from "../components/Icons";
import { CommunityHero } from '../components/Hero';

const linkClasses =
  "font-bold text-blue-500 hover:text-blue-500 hover:underline";

export default function Community() {
  const bgImage = "https://runme.dev/svg/community-events.svg";
  const title = "Community";
  const description = "Join the Runme Community!";

  return (
    <Layout title={title} description={description} wrapperClassName="main">
      <Meta
        title={title}
        description={description}
        imageUrl={bgImage}
        previewImages={[bgImage]}
      />
      <CommunityHero />

      <div className="pb-16">
        <div className="flex flex-col w-2/3 py-24 mx-auto space-y-6">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-row items-center pt-8 space-x-2">
              <h3 className="text-3xl">Discord</h3>
              <DiscordIcon />
            </div>
            <div>
              <a href="https://discord.gg/runme">Our Discord server</a> is the
              best way to participate in our community. Bring your questions,
              requests, ideas and showcases. Since Runme is Open Source we are
              especially happy to help you get setup with the code and
              contribute.
            </div>
            <div className="text-xl">
              <a className={linkClasses} href="https://discord.gg/runme">
                Join the Runme Discord
              </a>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-3xl">Community Meeting</h3>
            <div>
              Everyone two weeks we meet in Discord to talk about recent
              development, the roadmap and to answer any questions from our
              users!
            </div>
            <div className="text-xl">
              <a
                className="font-bold text-blue-500 hover:text-blue-500 hover:underline"
                href="/events"
              >
                Learn all the details about the next meeting
              </a>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-3xl">Mailing list</h3>
            <div>
              A newsletter of Runme articles and other cool topics, we email
              infrequently, you can unsubscribe at any time and we try to keep
              the content focused and useful.
            </div>
            <div className="text-xl">
              <a
                className="font-bold text-blue-500 hover:text-blue-500 hover:underline"
                href="https://stateful.com/newsletter"
              >
                Join the Newsletter
              </a>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-3xl">Open Source</h3>
            <div>
              Runme is comprised of a few different code repositories on Github
              and we work hard to make them approachable by eating our own
              dogfood. We really want to support contributors, so give it a try
              and don't be afraid to ask for help.
            </div>
            <table>
              <tr>
                <td>
                  <a
                    className={linkClasses}
                    href="https://github.com/stateful/runme.dev"
                  >
                    runme.dev
                  </a>
                </td>
                <td>The project website and documentation.</td>
              </tr>
              <tr>
                <td>
                  <a
                    className={linkClasses}
                    href="https://github.com/stateful/runme"
                  >
                    stateful/runme
                  </a>
                </td>
                <td>The Go server and CLI interface.</td>
              </tr>
              <tr>
                <td>
                  <a
                    className={linkClasses}
                    href="https://github.com/stateful/vscode-runme"
                  >
                    stateful/vscode-runme
                  </a>
                </td>
                <td>The VS Code extension.</td>
              </tr>
              <tr>
                <td>
                  <a
                    className={linkClasses}
                    href="https://github.com/stateful/runme-action"
                  >
                    stateful/runme-action
                  </a>
                </td>
                <td>A GitHub action to run Runme in CI.</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
