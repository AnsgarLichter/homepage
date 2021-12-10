import { createRouter, createWebHistory } from 'vue-router';
import AppComponent from '@/App.vue';

const routes = [
    {
        path: '/',
        name: 'Homepage',
        component: AppComponent
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;