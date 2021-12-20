<template>
  <div class="modal-mob-nav" :class="{active : isActive}">
    <div :class="{active : isActive}" class="mob-nav">
      <div class="mob-nav__list">
        <div class="mob-nav__item_modified">
          <div key="Main" :class="{active : $route.name === 'Main'}" class="mob-nav__wrapper_modified"
               @click="pushMain">
            <img :src="homeIcon" alt="" class="first_modified">
            <span class="second_modified" v-html="logoHomeIcon">
                            {{ logoHomeIcon }}
                        </span>
            <p class="modified-text">
              Главная
            </p>
          </div>
          <div :class="{active : $route.name === 'residences' || $route.name === 'residence' || $route.name === 'PlansInfo'}" class="mob-nav__wrapper_modified"
               @click="pushNewbuildings">
            <img :src="buildingIcon" alt="" class="first_modified">
            <img :src="buildingIconActive" alt="" class="second_modified">
            <p class="modified-text">
              Новостройки
            </p>
          </div>
          <div :class="{active : $route.name === 'developers' || $route.name === 'SingleDeveloper'}" class="mob-nav__wrapper_modified"
               @click="pushDevelopers">
            <img :src="constructionIcon" alt="" class="first_modified">
            <img :src="constructionIconActive" alt="" class="second_modified">
            <p class="modified-text">
              Застройщики
            </p>
          </div>
          <!-- <div id="search" class="mob-nav__wrapper_modified" @click="searchBtn()" :class="{active : currLinkPage === 'search'}">
              <img :src="searchIcon" class="first_modified"  alt="">
              <img :src="searchIconActive" class="second_modified"  alt="">
              <p class="modified-text">
                  Поиск
              </p>
          </div> -->
          <div id="search" :class="{active : $route.name === 'map'}" class="mob-nav__wrapper_modified"
               @click="mapBtn">

                      <span class="first_modified" v-html="mapIcon">
                        {{ mapIcon }}
                      </span>
            <span class="second_modified" v-html="mapIconHover">
                        {{ mapIconHover }}
                      </span>
            <p class="modified-text">
              Карта
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import {mapGetters} from 'vuex'

var config = require('../../../config/prod.env')

export default ({
  name: 'Mobile-navbar',
  data() {
    return {
      mapIcon: '<svg width="24px" version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 29 29" xml:space="preserve"> <style type="text/css"> .mobile_map{fill:#CFCFCF;} </style> <path class="mobile_map" d="M10,28.5c-0.4,0-0.8-0.1-1.2-0.2l-6-2C2.1,26.1,1.5,25.6,1,25c-0.5-0.6-0.7-1.4-0.7-2.2V5.2 c0-0.6,0.1-1.2,0.4-1.7C1,3,1.4,2.5,1.8,2.2c0.5-0.3,1-0.6,1.6-0.7c0.6-0.1,1.2,0,1.7,0.1L9.2,3c0,0,0,0,0,0c0.5,0.2,1,0.2,1.5,0 l7.1-2.4c0.8-0.3,1.6-0.3,2.3,0l6,2C26.9,2.9,27.5,3.4,28,4c0.5,0.6,0.7,1.4,0.7,2.2v17.7c0,0.6-0.1,1.2-0.4,1.7 c-0.3,0.5-0.7,1-1.1,1.3c-0.5,0.3-1,0.6-1.6,0.7c-0.6,0.1-1.2,0-1.7-0.1L19.7,26c-0.5-0.2-1-0.2-1.5,0l-7.1,2.4 C10.8,28.5,10.4,28.5,10,28.5z M4,2.9c-0.1,0-0.2,0-0.3,0c-0.4,0.1-0.7,0.2-1,0.4C2.4,3.5,2.1,3.8,2,4.1c-0.2,0.3-0.3,0.7-0.3,1 v17.7c0,0.5,0.1,1,0.4,1.3c0.3,0.4,0.7,0.7,1.1,0.8l6,2c0.5,0.2,1,0.2,1.5,0l7.1-2.4c0.8-0.3,1.6-0.3,2.3,0l4.1,1.4 c0.3,0.1,0.7,0.1,1.1,0.1c0.4-0.1,0.7-0.2,1-0.4c0.3-0.2,0.5-0.5,0.7-0.8c0.2-0.3,0.3-0.7,0.3-1V6.2c0-0.5-0.1-1-0.4-1.3 c-0.3-0.4-0.7-0.7-1.1-0.8l-6-2c-0.5-0.2-1-0.2-1.5,0l-7.1,2.4c-0.7,0.2-1.6,0.3-2.3,0c0,0,0,0,0,0L4.7,3C4.5,2.9,4.2,2.9,4,2.9z"/> <rect x="9.3" y="4" class="mobile_map" width="1.4" height="24"/> <rect x="18.3" y="1" class="mobile_map" width="1.4" height="24"/> </svg>',
      mapIconHover: '<svg width="24px" version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 29 29" xml:space="preserve"> <style type="text/css"> .mobile_map_active{fill:#E52621;} </style> <path class="mobile_map_active" d="M10,28.5c-0.4,0-0.8-0.1-1.2-0.2l-6-2C2.1,26.1,1.5,25.6,1,25c-0.5-0.6-0.7-1.4-0.7-2.2V5.2 c0-0.6,0.1-1.2,0.4-1.7C1,3,1.4,2.5,1.8,2.2c0.5-0.3,1-0.6,1.6-0.7c0.6-0.1,1.2,0,1.7,0.1L9.2,3c0,0,0,0,0,0c0.5,0.2,1,0.2,1.5,0 l7.1-2.4c0.8-0.3,1.6-0.3,2.3,0l6,2C26.9,2.9,27.5,3.4,28,4c0.5,0.6,0.7,1.4,0.7,2.2v17.7c0,0.6-0.1,1.2-0.4,1.7 c-0.3,0.5-0.7,1-1.1,1.3c-0.5,0.3-1,0.6-1.6,0.7c-0.6,0.1-1.2,0-1.7-0.1L19.7,26c-0.5-0.2-1-0.2-1.5,0l-7.1,2.4 C10.8,28.5,10.4,28.5,10,28.5z M4,2.9c-0.1,0-0.2,0-0.3,0c-0.4,0.1-0.7,0.2-1,0.4C2.4,3.5,2.1,3.8,2,4.1c-0.2,0.3-0.3,0.7-0.3,1 v17.7c0,0.5,0.1,1,0.4,1.3c0.3,0.4,0.7,0.7,1.1,0.8l6,2c0.5,0.2,1,0.2,1.5,0l7.1-2.4c0.8-0.3,1.6-0.3,2.3,0l4.1,1.4 c0.3,0.1,0.7,0.1,1.1,0.1c0.4-0.1,0.7-0.2,1-0.4c0.3-0.2,0.5-0.5,0.7-0.8c0.2-0.3,0.3-0.7,0.3-1V6.2c0-0.5-0.1-1-0.4-1.3 c-0.3-0.4-0.7-0.7-1.1-0.8l-6-2c-0.5-0.2-1-0.2-1.5,0l-7.1,2.4c-0.7,0.2-1.6,0.3-2.3,0c0,0,0,0,0,0L4.7,3C4.5,2.9,4.2,2.9,4,2.9z"/> <rect x="9.3" y="4" class="mobile_map_active" width="1.4" height="24"/> <rect x="18.3" y="1" class="mobile_map_active" width="1.4" height="24"/> </svg>',
      searchResidence: '',
      isActive: false,
      activeBtn: false,
      homeIcon: require('../../assets/img/mob-version/home.svg'),
      logoHomeIcon: '<svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.776 10.1068H17.7614L12.2374 5.27404L15.2447 2.64752L23.776 10.1068ZM12.2374 5.27404L15.2447 2.64752L12.2374 0.0210102L0.69873 10.1278H6.71332L12.2374 5.27404ZM20.8327 0H17.2069V3.02574L20.8327 6.05149V0Z" fill="#E52621"/><path d="M21.1108 25.971H3.32293C1.85128 25.971 0.678223 24.7943 0.678223 23.3655V10.1068L12.2168 5.29504L23.7555 10.1068V23.3655C23.7768 24.8153 22.5824 25.971 21.1108 25.971Z" fill="#E52621"/><path d="M10.4042 17.2929C10.4042 16.1372 10.2549 15.3177 9.95626 14.8345C9.65766 14.3512 9.12446 14.099 8.3993 14.099C8.16468 14.099 7.93008 14.12 7.69546 14.1411C7.43952 14.1621 7.20491 14.1831 6.99162 14.2251V24.0378H3.34448V11.7457C3.66441 11.6616 4.02699 11.5776 4.43223 11.4935C4.85879 11.4095 5.28536 11.3254 5.75458 11.2414C6.22381 11.1783 6.69303 11.1153 7.18358 11.0733C7.67413 11.0313 8.16469 11.0103 8.63391 11.0103C9.57236 11.0103 10.3188 11.1363 10.8947 11.3675C11.4706 11.5986 11.9611 11.8717 12.3237 12.2079C12.8569 11.8297 13.4541 11.5566 14.1366 11.3464C14.8191 11.1363 15.4376 11.0313 16.0135 11.0313C17.0373 11.0313 17.8904 11.1783 18.5516 11.4515C19.2128 11.7247 19.746 12.1239 20.1299 12.6492C20.5138 13.1745 20.7911 13.7839 20.9404 14.4773C21.0896 15.1917 21.1536 15.9691 21.1536 16.8516V24.0378H17.5065V17.2929C17.5065 16.1372 17.3572 15.3177 17.0586 14.8345C16.76 14.3512 16.2268 14.099 15.5016 14.099C15.3097 14.099 15.0324 14.1411 14.6698 14.2461C14.3072 14.3512 14.03 14.4562 13.7954 14.6033C13.902 14.9815 13.9873 15.3598 14.0086 15.78C14.0513 16.2002 14.0513 16.6205 14.0513 17.1038V24.0378H10.4042V17.2929Z" fill="white"/></svg>',
      buildingIcon: require('../../assets/img/mob-version/build.svg'),
      constructionIcon: require('../../assets/img/mob-version/construction.svg'),
      searchIcon: require('../../assets/img/mob-version/zoom.svg'),
      buildingIconActive: require('../../assets/img/mob-version/build2.svg'),
      constructionIconActive: require('../../assets/img/mob-version/construction2.svg'),
      searchIconActive: require('../../assets/img/mob-version/zoom2.svg'),
      filtredSearchArray: [],
      testLink: false
    }
  },
  computed: {
    ...mapGetters(['TO_MAIN_GETTER']),
  },
  created() {
    this.$root.$on('mylogouthandler', this.logoutEventHandler)


    let startPosition = 0
    if(startPosition >= window.pageYOffset || startPosition >= window.pageYOffset){
        this.isActive = true
        let position = window.scrollY
        window.addEventListener('scroll', ()=> {
            let scrolled = window.scrollY
            this.isActive = scrolled <= position;
            position = scrolled
        })
    }
    window.addEventListener('scroll', ()=>{
        let scrollable = document.documentElement.scrollHeight - window.innerHeight
        let scrolled = window.scrollY
//  console.log('scrolled', (scrolled - 200), scrollable, (scrolled + 200));
        if((scrolled - 80) >= scrollable || (scrolled + 200) >= scrollable){
          this.isActive = true
        }


        let windowposition = window.pageYOffset
        if(50 >= windowposition || windowposition <= -150){
            this.isActive = true
        }else{

        }
    })
  },
  methods: {
    mapBtn() {
      this.$router.push({name: 'map'})
    },
    logoutEventHandler() {
      this.pushMain()
    },
    pushMain() {
      this.$router.push({name: "Main",})
    },
    pushNewbuildings() {
      this.$router.push({name: "residences"})
    },
    pushDevelopers() {
      this.$router.push({name: "developers"})
    },
    filtredSearch() {
      axios.get(config.BASE_URL + `residence/filter?searchResidence=${this.searchResidence}`)
        .then((res) => {
          this.filtredSearchArray = res.data.data
          this.$router.push({path: '/residences', query: {searchResidence: this.filtredSearchArray}})
        })
    },
    searchBtn() {
      this.activeBtn = true
      this.$root.$emit('searchMobile')
    },
  },

  mounted() {

  },
})
</script>
<style>

</style>
