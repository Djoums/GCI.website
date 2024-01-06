import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/Accueil/Home.vue'
import Documentation from '../views/Accueil/Doc.vue'
import ContributeurView from '../views/Page/contributeur/contributeur.vue'
import EntrepriseView from '../views/Page/entreprise/entreprise.vue'
import TeamView from '@/views/Page/team/Team.vue'
import TeamMembers from '@/views/Page/team/TeamMembers.vue';
import TeamPartnerOrganizations from '@/views/Page/team/TeamPartnerOrganizations.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contributeur',
      name: 'contributeur',
      component: ContributeurView
    },
    {
      path: '/entreprise',
      name: 'entreprise',
      component: EntrepriseView
    },
    {
      path: '/collectif',
      name: 'collectif',
      component: TeamView,
      children: [
          { path: '', redirect: '/collectif/membres' },
          { path: 'membres', name: 'collectif-membres', component: TeamMembers },
          { path: 'organisations', name: 'collectif-organisations', component: TeamPartnerOrganizations },
      ]
    },
    {
      path: '/Documentation',
      name: 'Documentation',
      component: Documentation
    },
  ]
})

router.afterEach((to, from) => {
  if (to.hash) {
    const element = document.querySelector(to.hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});
export default router
