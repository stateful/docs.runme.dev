import React from "react";
import Layout from "@theme/Layout";

import Meta from "@site/src/components/Meta";
import Footer from "@site/src/components/Footer";
import { DiscordIcon } from "../components/Icons";

export default function Community() {
  const bgImage = "https://runme.dev/svg/community-events.svg";
  const title = "Runme Community Events";
  const description =
    "Join us in our Runme community meetings and let us have a chat on Runme and the DevX space as a whole";

  return (
    <Layout title={title} description={description} wrapperClassName="main">
      <Meta
        title={title}
        description={description}
        imageUrl={bgImage}
        previewImages={[bgImage]}
      />

      <div className="pb-16 pt-36">
        <div className="relative text-center">
          <h3 className="text-6xl font-bold">Runme Community</h3>
        </div>
        <div className="flex flex-col w-2/3 py-24 mx-auto space-y-6">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-row items-center space-x-2">
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
              <a
                className="font-bold text-blue-500 hover:text-blue-500 hover:underline"
                href="https://discord.gg/runme"
              >
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
            <h3 className="text-3xl">Newsletter</h3>
            <div>
              We curate a newsletter about Runme and other DX related topics, we
              email infrequently, you can unsubscribe at any time and we try to
              keep the content focused and useful.
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
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
