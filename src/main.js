import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { Button, Row, Col, Dialog, Form, FormItem, Input } from "element-ui";

Vue.config.productionTip = false;

// 按需引入element-ui组件
Vue.use(Button);
Vue.use(Row);
Vue.use(Col);
Vue.use(Dialog);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
