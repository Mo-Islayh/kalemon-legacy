import "@/styles/globals.css";
import "remixicon/fonts/remixicon.css";

import { DefaultSeo } from "next-seo";
import { createSEOConfig } from "@/utils/seo";

import type { AppProps } from "next/app";

import AppLayout from "@/components/layout/AppLayout";
import ThirdPartyScripts from "@/components/ThirdPartyScripts/ThirdPartyScripts";

import React from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <DefaultSeo {...createSEOConfig({})} />
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
      <ThirdPartyScripts />
    </React.Fragment>
  );
}
