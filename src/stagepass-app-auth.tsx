import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";

import * as Sentry from "@sentry/browser";
import { Integrations } from "@sentry/tracing";
import Root from "./root.component";

Sentry.init({
  dsn: "insert-dsn-here",
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
