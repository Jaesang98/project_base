const mainRoutes = [
    //홈 화면
    {
        path: '/HOME0001',
        name: 'HOME0001',
        props: true,
        component: () => import(/* webpackChunkName: "HONE" */ '@/views/HOME/HOME0001.vue')
    },

    //헤더
    {
        path: '/headers',
        name: 'headers',
        props: true,
        component: () => import(/* webpackChunkName: "HONE" */ '@/views/Header/headers.vue')
    },
];
export default mainRoutes;
