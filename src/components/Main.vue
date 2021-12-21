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
    <Loader v-if="dataLoaded"/>
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
import Loader from '../components/loader/project-loader.vue'
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
    Loader
    // SoonPage,
  },
  data () {
    return {
      isActive: false,
      dataLoaded: true,
    }
  },
  created(){
    this.$root.$on('mylogouthandler', this.logoutEventHandler)
    this.$root.$on('searchMobile', this.searchBtn)
    let vm = this
    window.setTimeout(() => {
      vm.dataLoaded = false
    }, 600);
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
  mounted(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
