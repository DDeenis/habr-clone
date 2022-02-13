import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

const PRESERVED = import.meta.globEager("/src/pages/(_app|404).tsx");
const ROUTES = import.meta.globEager("/src/pages/**/[a-z[]*.tsx");

const preserve: Record<string, React.ElementType | undefined> = Object.keys(
  PRESERVED
).reduce((p, file) => {
  const key = file.replace(/\/src\/pages\/|\.tsx$/g, "");
  return { ...p, [key]: PRESERVED[file].default };
}, {});

const routes = Object.keys(ROUTES).map((route) => {
  const path = route
    .replace(/\/src\/pages|index|\.tsx$/g, "")
    .replace(/\[\.{3}.+\]/, "*")
    .replace(/\[(.+)\]/, ":$1");

  return { path, component: ROUTES[route].default };
});

export default function FileRoutes() {
  const App = preserve?._app || Fragment;
  const NotFound = preserve?.["404"] || Fragment;

  return (
    <App>
      <Routes>
        {routes.map(({ path, component: Component = Fragment }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </App>
  );
}
