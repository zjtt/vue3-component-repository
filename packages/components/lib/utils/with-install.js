"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const withInstall = (comp) => {
  comp.install = (app) => {
    const { name } = comp;
    console.log("name:", name);
    app.component(name, comp);
    app.component(`zh-${name}`, comp);
  };
  return comp;
};
exports.withInstall = withInstall;
