import React from "react";
import Bugsnag from "@bugsnag/js";
import BugsnagPluginReact from "@bugsnag/plugin-react";

const isProduction = process.env.NEXT_PUBLIC_VERCEL_ENV === "production";

if (!Bugsnag.isStarted()) {
  Bugsnag.start({
    apiKey: process.env.NEXT_PUBLIC_BUGSNAG_API_KEY as string,
    plugins: [new BugsnagPluginReact()],
  });
}

const BugsnagErrorBoundary =
  Bugsnag.getPlugin("react")!.createErrorBoundary(React);

export default BugsnagErrorBoundary;
