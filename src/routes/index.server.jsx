import { Suspense } from "react";

import FeaturedCollections from "../components/FeaturedCollections.server";
import { Layout } from "../components/Layout.server";
import Main from "../components/Main.server";

export default function Home() {
  return (
    <Layout>
      <Suspense>
        <Main />
        <FeaturedCollections />
      </Suspense>
    </Layout>
  );
}
