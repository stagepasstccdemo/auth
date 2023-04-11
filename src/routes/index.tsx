import React from "react";
import { Routes as Switch, Route } from "react-router-dom";
import { lazyRoutes } from "./lazyRoutes";

export default function Routes() {
  return (
    <Switch>
      {lazyRoutes.map(({RouteComponent, path}) => (
        <Route
          element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <RouteComponent />
            </React.Suspense>
          }
          path={path}
          key={path}
        />
      ))}
    </Switch>
  )
}