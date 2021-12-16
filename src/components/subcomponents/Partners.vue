<template>
  <div class="partners">
    <div class="partners-wrapper-tt">
      <p class="partners__subtitle wrapper-recommendations_text">
        Строительные компании
      </p>
      <h1 class="partners__title title-of-sections wrapper-recommendations_title">
        Застройщики Таджикистана
      </h1>
    </div>
    <div class="slider-partners">
      <div class="wrapper-partners">
        <div v-for="developer in DEVELOPERS" :key="developer.id" class="wrapper-partners__block cursor-pointer" @click="toPushDeveloper(developer)">
          <div class="wrapper-partners__img">
            <img :src="developer.logo" alt="">
          </div>
          <div class="wrapper-partners__content">
            <h3>
              {{ developer.name }}
            </h3>
            <p>
              В активной продаже: 22 <br> Построено объектов: 4
            </p>
            <p>
              {{ developer.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {mapActions, mapGetters} from 'vuex'

Vue.use(VueAxios, axios)


export default {
  data() {
    return {
      partner1: require('../../assets/img/partners/1.png'),
      partner2: require('../../assets/img/partners/2.png'),
      developers: []
    }
  },
  computed: {
    ...mapGetters([
      'DEVELOPERS'
    ])
  },
  methods: {
    ...mapActions([
      'GET_DEVELOPERS'
    ]),
    toPushDeveloper(developer) {
      this.$router.push({path: '/developer/' + developer.id})
    },
  },
  mounted() {
    this.GET_DEVELOPERS()
  },
}
</script>
