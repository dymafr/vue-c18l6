import { RouteRecordRaw } from 'vue-router';
import PageA from './PageA.vue';
import PageB from './PageB.vue';
import NavA from './NavA.vue';
import NavB from './NavB.vue';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    components: {
      sidenav: NavB,
      main: PageA,
    },
  },
  {
    path: '/a',
    components: {
      sidenav: NavA,
      main: PageA,
    },
  },
  {
    path: '/b',
    components: {
      sidenav: NavB,
      main: PageB,
    },
  },
];
