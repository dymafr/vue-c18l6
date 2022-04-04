import { RouteRecordRaw } from 'vue-router';
import PageA from './PageA.vue';
import PageB from './PageB.vue';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: PageA,
  },
  {
    path: '/a/:userId?',
    component: PageA,
    props: (to) => ({
      id: to.params.userId,
    }),
  },
  {
    path: '/b',
    alias: ['/c', '/d'],
    meta: {
      title: 'Page de profil',
    },
    component: PageB,
  },
];
