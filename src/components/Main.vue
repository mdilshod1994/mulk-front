<template>
  <div class="main-to-scroll" >
    <!-- <SoonPage /> -->
    <Header class="descTop-version"/>
    <Banner />
    <Districts />
    <Recommendations />
    <Partners />
    <Channel />
    <Request />
    <Footer />
  </div>
</template>

<script>

import Header from './subcomponents/Header.vue'
import Banner from './subcomponents/Banner.vue'
import Districts from './subcomponents/Districts.vue'
import Recommendations from './subcomponents/Recommendations.vue'
import Partners from './subcomponents/Partners.vue'
import Channel from './subcomponents/Channel.vue'
import Request from './subcomponents/Request.vue'
import Footer from './subcomponents/Footer.vue'
// import SoonPage from './pages/soon-page/Soon-page.vue'

export default {
  name: 'Main',
  components:{
    Header,
    Banner,
    Districts,
    Recommendations,
    Partners,
    Channel,
    Request,
    Footer,
    // SoonPage,
  },
  data () {
    return {
      isActive: false
    }
  },
  created(){
    this.$root.$on('mylogouthandler', this.logoutEventHandler)
    this.$root.$on('searchMobile', this.searchBtn)
  },
  computed:{

  },
  methods:{
    logoutEventHandler() {
      //do your stuff here.
    },
    searchBtn(){

    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
