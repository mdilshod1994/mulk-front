<template>
  <div id="app">
    <HeaderMobVersion class="mobVersion" :class="{ deActive : $route.name === 'map'}"/>
    <router-view />
    <MobileNavbar :class="{ deActiveMargin : $route.name === 'map'}"/>
    <MobileSearch />
  </div>
</template>

<script>
import HeaderMobVersion from './components/subcomponents/HeaderMobVersion.vue'
import MobileNavbar from './components/subcomponents/Mob-navbar.vue'
import MobileSearch from './components/subcomponents/MobileSearch.vue'

export default {
  name: 'App',
  components:{
    MobileNavbar,
    MobileSearch,
    HeaderMobVersion: HeaderMobVersion
  },
  created(){
    this.$root.$on('mylogouthandler', this.logoutEventHandler)
    this.$root.$on('searchMobile', this.searchBtn)
    this.$root.$on('appSidebarInlineButtonClick', this.test)

  },
  methods:{
    test(){

    },
    logoutEventHandler() {

      //do your stuff here.
    },
    searchBtn(){

    }
  }
}
</script>

<style>


</style>
