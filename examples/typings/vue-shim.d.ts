declare module '*.vue' {
    import type { DefineComponent } from "vue";
//     const component:DefineComponent<{},{},any>
    import { defineComponent } from "vue";
    const Component: ReturnType<DefineComponent>
    export default Component
}