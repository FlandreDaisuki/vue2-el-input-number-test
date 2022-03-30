import Vue from 'vue'
import {
  Form,
  Button,
  FormItem,
  InputNumber,
} from 'element-ui';

import App from './App.vue'

Vue.use(Form);
Vue.use(Button);
Vue.use(FormItem);
Vue.use(InputNumber);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
