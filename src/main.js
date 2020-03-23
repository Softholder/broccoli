import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { Container, Header, Main, Footer, Button, Row, Col } from "element-ui";

Vue.config.productionTip = false;

// 按需引入element-ui组件
Vue.use(Container);
Vue.use(Header);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Button);
Vue.use(Row);
Vue.use(Col);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
