import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/folder/Inbox'
  },
  {
    path: '/folder/:id',
    component: () => import ('../views/FolderPage.vue')
  },
  {
    path: '/experiencia',
    component: () => import ('../views/ExperienciaPage.vue')
  },
  {
    path: '/sumadora',
    component: () => import ('../views/SumadoraPage.vue')
  },
  {
    path: '/traductor',
    component: () => import ('../views/TraductorPage.vue')
  },
  {
    path: '/tablas',
    component: () => import ('../views/TablasPage.vue')
  },
  {
    path: '/pagina-inicio',
    component: () => import ('../views/PaginaInicialPage.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
