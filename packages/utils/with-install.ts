import type {App,Plugin,Component, ComputedOptions, MethodOptions} from "vue"
type SFCWithInstall<T> = T & Plugin
type a = Component<any, any, any, ComputedOptions, MethodOptions> 
// type b = ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>
export const withInstall = <T extends a>(comp:T) => {
    (comp as SFCWithInstall<T>).install = (app:App)=>{
      // //注册组件
      const { name } = comp as unknown as { name: string };
      console.log('name:', name);
      app.component(name, comp);
      app.component(`zh-${name}`, comp);
    }
    return comp as SFCWithInstall<T>
}