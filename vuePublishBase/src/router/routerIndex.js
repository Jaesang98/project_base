import { createWebHistory, createRouter } from "vue-router";

//라우터들 임포트
import AllRouter from '@/router/routes/AllRouter';

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        // Default Path 설정
        {
            path: '/',
            redirect: '/HOME0001',
        },

        // Sample
        ...AllRouter,

        // 404 Path 처리
        {
            path: '/:pathMatch(.*)*',
            redirect: '/', // 선언되지 않은 Path릂 지정된 경로로 리다이렉트
        },
    ]
});

export default router;
