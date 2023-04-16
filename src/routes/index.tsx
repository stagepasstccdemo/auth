import React from "react";
import { Routes as Switch, Route } from "react-router-dom";
import { lazyRoutes } from "./lazyRoutes";
import { SplashScreen } from "../pages/Login/steps";

export default function Routes() {
  return (
    <Switch>
      {lazyRoutes.map(({ RouteComponent, path }) => (
        <Route
          element={
            <React.Suspense
              fallback={<SplashScreen page={0} setPage={() => {}} />}
            >
              <RouteComponent />
            </React.Suspense>
          }
          path={path}
          key={path}
        />
      ))}
    </Switch>
  );
}
