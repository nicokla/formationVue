import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import { DatePicker, Button} from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css'; // or 'ant-design-vue/dist/antd.less'

const app = createApp(App)
// app.use(DatePicker);
// app.use(Button);
app.use(router)
app.mount('#app')