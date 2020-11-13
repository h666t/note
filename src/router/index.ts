import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '@/components/Login.vue';
import NoteBooks from '@/components/NoteBooks.vue';
import Note1 from '@/components/Note1.vue';
import TrashNote1 from '@/components/TrashNote1.vue';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/notebooks',
    component: NoteBooks
  },
  {
    path: '/note/:noteId',
    component: Note1
  },
  {
    path: '/trash/:trashNoteId',
    component:TrashNote1
  },

]

const router = new VueRouter({
  routes
})

export default router
