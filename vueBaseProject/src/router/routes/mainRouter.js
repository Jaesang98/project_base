const mainRoutes = [
    {
        path: '/JMAIN_1000',
        name: 'JMAIN_1000',
        props: true,
        component: () => import(/* webpackChunkName: "MAIN" */ '@/views/MAIN/JMAIN_1000.vue')
    },
    {
        path: '/JMAIN_1100',
        name: 'JMAIN_1100',
        props: true,
        component: () => import(/* webpackChunkName: "MAIN" */ '@/views/MAIN/JMAIN_1100.vue')
    },
];
export default mainRoutes;
