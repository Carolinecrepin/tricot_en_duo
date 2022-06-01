import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PatternView from '../views/PatternView.vue'
import DetailPatternView from '../views/DetailPatternView.vue'
import MaterialView from '../views/MaterialView.vue'
import DetailWoolView from '../views/DetailWoolView.vue'
import TutorialView from '../views/TutorialView.vue'
import CgvView from '../views/CgvView.vue'
import TermsOfUseView from '../views/TermsOfUseView.vue'
import PersonalDataView from '../views/PersonalDataView.vue'
import LoginView from '../views/LoginView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/patterns',
    name: 'patterns',
    component:PatternView
  },
  {
    path: '/detailPattern',
    name: 'detailPattern',
    component:DetailPatternView
  },
  {
    path: '/materials',
    name: 'materials',
    component:MaterialView
  },
  {
    path: '/detailWool',
    name: 'detailWool',
    component:DetailWoolView
  },
  {
    path: '/tutorials',
    name: 'tutorials',
    component:TutorialView
  },
  {
    path: '/CGV',
    name: 'CGV',
    component:CgvView
  },
  {
    path: '/terms-of-use',
    name: 'terms-of-use',
    component:TermsOfUseView
  },
  {
    path: '/personal-data',
    name: 'personal-data',
    component:PersonalDataView
  },
  {
    path: '/connexion',
    name: 'login',
    component:LoginView
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
