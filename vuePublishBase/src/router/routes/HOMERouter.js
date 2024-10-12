const mainRoutes = [
    {
        path: '/HOME0001',
        name: 'HOME0001',
        props: true,
        component: () => import(/* webpackChunkName: "MAIN" */ '@/views/HOME/HOME0001.vue')
    }
];
export default mainRoutes;
