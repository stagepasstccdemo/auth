import React from "react";
import routes from "./routesMap.json";

export const lazyRoutes = routes.map(({element, path}) => {
  const routeName = element;

  const RouteComponent = React.lazy(() => 
    import("../pages").then((module: any) => ({
      default: module[routeName],
    }))
  );
  return {RouteComponent, path};
})