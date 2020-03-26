import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import { Button, Dialog, Form, FormItem, Input } from "element-ui";

Vue.config.productionTip = false;

Vue.prototype.$axios = axios;

// import element-ui components on demand
Vue.use(Button);
Vue.use(Dialog);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);

new Vue({
  render: h => h(App)
}).$mount("#app");
