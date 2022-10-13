import {createApp} from 'vue'
import App from './app.vue'
// 接引入.vue文件 TS会找不到对应的类型声明；所以需要新建typings（命名没有明确规定，TS会自动寻找.d.ts文件）文件夹来专门放这些声明文件
import { Button } from 'zh-ui'

const app = createApp(App)
app.use(Button)

app.mount('#app')