import { Suspense } from "react";
import AppBenefits from "../components/AppBenefits.server";

import FeaturedCollections from "../components/FeaturedCollections.server";
import { Layout } from "../components/Layout.server";
import Main from "../components/Main.server";

export default function Home() {
  return (
    <Layout>
      <Suspense>
        <Main />
        <FeaturedCollections />
        <AppBenefits />
      </Suspense>
    </Layout>
  );
}
