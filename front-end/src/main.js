import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import TarefasComponent from './pages/tarefas/TarefasComponent.vue'
import HomeComponent from './pages/home/HomeComponent.vue'


Vue.config.productionTip = false
Vue.use(VueRouter)


const routes = [
  { path: '/tarefas', name: 'tarefas', component: TarefasComponent },
  {path: '/', name: 'home', component: HomeComponent}
]
const router = new VueRouter({
  routes, 
})




new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')
