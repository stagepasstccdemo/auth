import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";

import * as Sentry from "@sentry/browser";
import { Integrations } from "@sentry/tracing";
import Root from "./root.component";

Sentry.init({
  dsn: "https://a5fe265f8716489bb751c5a172f55385@o4504899977936896.ingest.sentry.io/4505022371528704",
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
  beforeSend: (event) => {
    if (window.location.hostname === "localhost") {
      return null;
    }
    return event;
  },
});

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    Sentry.withScope((scope) => {
      scope.setExtra("props", props);
      scope.setExtra("info", info);
      Sentry.captureException(err);
    });

    return null;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;

export { useAuth } from "@hooks/useAuth";
