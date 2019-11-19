import Vue from 'vue'
import App from './App.vue'
import Form from './Form.vue'


Vue.component('app-form', Form )

let vue = new Vue({
  el: '#app',
  render: h => h(App)
})


var a={
  f:'444'
}