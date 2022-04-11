import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Contact from '../components/Contact.vue'

const routes = [
  { path: '/',
    name:HomeView,
   component: HomeView 
  },
   { path: '/Contact',
    name:Contact,
   component: Contact
   },
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
