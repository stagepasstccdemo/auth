import React from "react";
import routes from "./routesMap.json";

type PagesModule = {
  [key: string]: React.ComponentType<any>;
};

export const lazyRoutes = routes.map(({ element, path }) => {
  const routeName = element;

  const RouteComponent = React.lazy(() =>
    import("../pages").then((module: PagesModule) => ({
      default: module[routeName],
    }))
  );
  return { RouteComponent, path };
});
