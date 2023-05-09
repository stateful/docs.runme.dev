import React from "react";
import Layout from "@theme/Layout";
import InstallCTA from "@site/src/components/InstallCta";

import Meta from "@site/src/components/Meta";
import Footer from "@site/src/components/Footer";
import { Hero } from "@site/src/components/Hero";
import { Benefits } from "@site/src/components/Sections";
import Testimonials from "@site/src/components/Testimonials";

export default function Home() {
  return (
    <Layout wrapperClassName="main">
      <Meta />
      <div className="relative mb-24 overflow-x-hidden">
        <Hero />
        <Benefits />
        <Testimonials />
        <InstallCTA />
      </div>
      <Footer />
    </Layout>
  );
}
