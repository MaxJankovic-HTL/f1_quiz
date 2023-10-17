import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/quiz',
      name: 'quiz',
      component: () => import('../views/QuizView.vue'),
    },
    {
      path: '/quiz-easy',
      name: 'quizeasy',
      component: () => import('../views/QuizEasyView.vue'),
    },
    {
      path: '/quiz-medium',
      name: 'quizmedium',
      component: () => import('../views/QuizMediumView.vue'),
    },
    {
      path: '/quiz-hard',
      name: 'quizhard',
      component: () => import('../views/QuizHardView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
  ],
});

export default router;
