import React from "react";
import Layout from "@theme/Layout";

import Meta from "@site/src/components/Meta";

/**
 * Docusarus doesn't span the Tailwind context around the header
 * so this file includes TW classes that would otherwise not be
 * compiled into the CSS file
 */
export default function _() {
  return (
    <Layout>
      <Meta />
      <h1 className="text-4xl font-bold"></h1>
    </Layout>
  );
}
