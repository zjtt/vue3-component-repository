const withInstall = (comp) => {
  comp.install = (app) => {
    const { name } = comp;
    console.log("name:", name);
    app.component(name, comp);
    app.component(`zh-${name}`, comp);
  };
  return comp;
};
export {
  withInstall
};
