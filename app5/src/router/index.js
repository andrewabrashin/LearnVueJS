import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Posts from '@/views/Posts.vue'
import AddPostForm from '@/views/AddPostForm.vue'
import PostForm from '@/components/PostForm.vue'
import PostEdit from '@/components/PostEdit.vue'
import Authorization from '@/components/Authorization.vue'
import store from '@/store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/posts',
    name: 'news_posts',
    component: Posts,
    children: [
      {
        path: ':id',
        component: PostForm,
      },
    ],
  },
 
  {
    path: '/new_post',
    name: 'add_post',
    component: AddPostForm,
    beforeEnter (to, from, next) {
      if (store.getters['user/isAuth']) {
        next();
      } else {
        next('/');
      }
    }
  },
  {
    path: '/authorization',
    component: Authorization,
  },
  {
    path: '/post/:id',
    component: PostEdit,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
