import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
const Base64 = require('js-base64').Base64

import VueClipboard from 'vue-clipboard2'
 
Vue.use(VueClipboard)
Vue.config.productionTip = false

new Vue({
  vuetify,
  Base64,
  render: h => h(App)
  
}

).$mount('#app')




// {
//   name: 'huangbiao',
//   age: 33,
//   address: '长沙'
// }
