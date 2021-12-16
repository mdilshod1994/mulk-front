import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main'
import NewBuildings from '../components/pages/NewBuildings.vue'
import Developers from '../components/pages/Developers.vue'
import SingleDeveloper from '../components/pages/single-page-developers/SingleDeveloper.vue'
import PlansInfo from '../components/pages/Layouts.vue'
import ResidencesOnMap from '../components/pages/ResidencesOnMap.vue'
import PageNotFound from '../components/pages/errorPage.vue'
import Residence from "../components/pages/Residence";

Vue.use(Router)


export default new Router({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    let position = {};
      if (savedPosition) {
        position = savedPosition;
      } else if (to.hash) {
        if (document.querySelector(to.hash)) {
          position.selector = to.hash;
      if(to.hash === '#stepsOfConstruction') {
            position.offset = { y: 140 };
          }
        }
      } else position = {  x: 0, y: 0 };
      return new Promise(resolve => {
      setTimeout(() => {
      resolve(position);
      }, 530);
    });
  },
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/residence/:id',
      name: 'residence',
      component: Residence,
      props: true
    },
    {
      path: '/residences',
      name: 'residences',
      component: NewBuildings,
      props: true
    },
    {
      path: '/developers',
      name: 'developers',
      component: Developers
    },
    {
      path: '/developer/:id',
      name: 'SingleDeveloper',
      component: SingleDeveloper
    },
    {
      path:'/layouts',
      name: 'PlansInfo',
      component: PlansInfo,
      props: true,
    },
    {
      path:'/map',
      name: 'map',
      component: ResidencesOnMap
    },
    {
      path: "*",
      component: PageNotFound
    }
  ]
})
