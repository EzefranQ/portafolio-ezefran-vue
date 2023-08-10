import { createRouter, createWebHistory } from 'vue-router'
import AboutSection from './../views/AboutSection.vue';
import ResumeExp from './../views/ResumeExp.vue';
import GitHubSection from './../views/GitHubSection.vue';
import PortfolioSection from './../views/PortfolioSection.vue';
const routes = [
  {
    path: '/',
    name: 'about',
    component: AboutSection
  },
  {
    path: '/github',
    name: 'github',
    component: GitHubSection
  },
  {
    path: '/resume',
    name: 'resume',
    component: ResumeExp
  }, 
  {
    path: '/portfolio',
    name: 'portfolio',
    component: PortfolioSection
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
