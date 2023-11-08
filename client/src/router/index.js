import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'quiz',
      component: () => import('../views/QuizView.vue'),
    },
    {
      path: '/quiz-easy',
      name: 'quiz-easy',
      component: () => import('../views/EasyQuizView.vue'),
    },
    {
      path: '/quiz-medium',
      name: 'quiz-medium',
      component: () => import('../views/MediumQuizView.vue'),
    },
    {
      path: '/quiz-hard',
      name: 'quiz-hard',
      component: () => import('../views/HardQuizView.vue'),
    },
  ],
});

export default router;
