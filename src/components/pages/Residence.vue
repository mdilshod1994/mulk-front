<template>
  <div class="jkh">
    <Header class="descTop-version"/>
    <div class="container">
      <div class="wrapper-jkh">
        <slick ref="slick" :options="slickOptions">
          <div v-for="img in this.jkhInfo.images" :key="img.id" class="wrapper-silder">
            <img :src="urlLink + img.img" alt="" class="wrapper-silde">
          </div>
        </slick>
        <div class="callback-jkh">
          <div class="callback-jkh-content">
            <div class="wrapper-jkh-contact">
              <h1>
                {{ this.jkhInfo.name }}
              </h1>
              <p>
                {{ this.jkhInfo.address }}
              </p>
              <div class="wrapper-jkh-contact__site">
                <a :href="this.jkhInfo.site_url" class="site_url" target="_blank">
                  <span>Официальный сайт</span>
                  <h5>{{ this.residenceSite }}</h5>
                </a>
                <a class="cursor-pointer" @click="showFullNumber()">
                  <div class="wrapper-jkh-contact__links">
                    <span class="wrapper-jkh-contact__links_text">
                        Отдел продаж
                    </span>
                    <h5>
                      {{ this.phoneNumber }}
                    </h5>
                  </div>
                </a>
              </div>
            </div>
            <form class="form-send-req">
              <input placeholder="Имя и Фамилия" type="text">
              <input placeholder="дд\мм\гг" type="date">
              <input id="telephone" class="form-control" type="tel">
              <input class="form-send-req__btn" type="submit" value="Записаться на визит">
            </form>
          </div>
        </div>
      </div>
      <div class="tabs-nav-menu">
        <router-link to="#about">
          <div v-html="infoIcon"> {{ infoIcon }}</div>
          <span>
                         О комплексе
                    </span>
        </router-link>
        <router-link to="#features">
          <div v-html="charakIcaon">{{ charakIcaon }}</div>
          <span>
                        Характеристики
                    </span>
        </router-link>
        <router-link to="#layouts">
          <div v-html="planIcon">{{ planIcon }}</div>
          <span>
                        Планировки
                    </span>
        </router-link>
        <router-link to="#location">
          <div v-html="locationIcon">{{ locationIcon }}</div>
          <span>
                        Расположение ЖК
                    </span>
        </router-link>
        <router-link to="#construction-stages">
          <div v-html="construcIcon">{{ construcIcon }}</div>
          <span>
                        Ход строительства
                    </span>
        </router-link>
      </div>
      <div class="jkh-descr">
        <div class="jkh-descr-wrapper">
          <div class="jkh-descr-wrapper__left">
            <h3 id="about" class="jkh-descr-wrapper__left_title">
              О комплексе
            </h3>
            <p class="jkh-desc-wrapper__left_address">
              {{ this.jkhInfo.address }}
            </p>
            <h2>
              {{ this.jkhInfo.name }}

            </h2>
            <p v-html="this.jkhInfo.content">
              {{ this.jkhInfo.content }}
            </p>
          </div>
          <div class="jkh-descr-wrapper__right">
            <div class="jkh-descr-wrapper__right_modified">
              <img :src="logoBrand" alt="">
              <div class="brand-info">
                <h4 class="brand-info__title">
                  Застройщик: <br> Armon Development
                </h4>
                <p>
                  В активной продаже: <span>1 объекта</span> <br> Построено объектов: <span>2 объекта</span>
                </p>
                <p>
                  один из крупных застройщиков в городе Душанбе
                </p>
              </div>
            </div>
            <div class="callback-jkh-second">
              <div class="callback-jkh-content">
                <div class="wrapper-jkh-contact">
                  <div class="wrapper-jkh-contact__site">
                    <a :href="this.jkhInfo.site_url" target="_blank">
                                            <span>
                                                Официальный сайт
                                            </span>
                    </a>
                    <a :href="`tel:${this.jkhInfo.phone_number}`">
                      <div class="wrapper-jkh-contact__links">
                                                <span>
                                                    Отдел продаж
                                                </span>
                        <h5>
                          {{ this.jkhInfo.phone_number }}
                        </h5>
                      </div>
                    </a>
                  </div>
                </div>
                <form class="form-send-req">
                  <input placeholder="Имя и Фамилия" type="text">
                  <input placeholder="дд\мм\гг" type="date">
                  <input id="telephone3" class="form-control" type="tel">
                  <input class="form-send-req__btn" type="submit" value="Записаться на визит">
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="features" class="characteristic">
      <div class="container">
        <div class="characteristic-title-btn">
          <div class="characteristic-title-wrapper">
            <h1 class="characteristic__title">
              Характеристика ЖК
            </h1>
            <p class="characteristic__subtitle">
              основные характеристики жк “{{ this.jkhInfo.name }}”
            </p>
          </div>
          <button v-show="!toChangeBtnFeatures" class="characteristic-btn characteristic-title-btn__btn"
                  @click="toShowAllFeatures">
            Посмотреть всё
          </button>
          <button v-show="toChangeBtnFeatures" class="characteristic-btn characteristic-title-btn__btn"
                  @click="toHideAllFeatures">
            Скрыть
          </button>
        </div>
        <div id="first-characteristic" class="characteristic-wrapper__block">
          <div class="characteristic-wrapper">
            <div v-for="item in this.desktopFeatures" :key="item.id" class="characteristic-wrapper-info">
              <div class="characteristic-wrapper-info__img">
                <img :src="urlLink + item.img" alt="">
              </div>
              <div class="characteristic-wrapper-info__cont">
                <span>
                    {{ item.name }}
                </span>
                <h5>
                  {{ item.value }}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="second-characteristic" class="characteristic-wrapper__block">
        <div class="characteristic-wrapper">
          <div v-for="item in this.jkhInfo.features" :key="item.id" class="characteristic-wrapper-info">
            <div class="characteristic-wrapper-info__img">
              <img :src="urlLink + item.feature.img" alt="">
            </div>
            <div class="characteristic-wrapper-info__cont">
                            <span>
                                {{ item.feature.name }}
                            </span>
              <h5>
                {{ item.value }}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="layouts" class="plans">
      <div class="container">
        <div class="characteristic-title-btn">
          <div class="characteristic-title-btn__title">
            <h1 class="characteristic__title">
              Все планировки
            </h1>
            <p class="characteristic__subtitle">
              Просмотреть все доступные планировки
            </p>
          </div>
          <button class="characteristic-title-btn__btn" @click="toPlans">
            Посмотреть всё
          </button>
        </div>
      </div>
      <div class="plans-wrapper">
        <div v-for="layout in this.arrayLayouts" :key="layout.id" class="plan-wrapper jk-plan-wrapper">
          <div class="plan-wrapper__img cursor-pointer" @click="toShowLayout(layout)">
            <img :src="textUrl + layout.image" alt="">
          </div>
          <div class="plan-wrapper__info">
            <div class="plan-wrapper__info-qnty">
              <p>
                 <span v-html="iconSqd">
                      {{ iconSqd }}
                  </span>
                {{ layout.room_count }}-ком. кв.
              </p>
              <p>
                <span v-html="iconQntty">
                    {{ iconQntty }}
                </span>
                {{ layout.area }} м2
              </p>
            </div>
            <div class="plan-wrapper__info-price">
              <div v-html="iconPrice">
                  {{ iconPrice }}
              </div>
              <span>
                {{ layout.price }} с.
              </span>
            </div>
            <button @click="toShowLayout(layout)">
              <div v-html="iconBtn">
                  {{ iconBtn }}
              </div>
              Оставить заявку
            </button>
          </div>
        </div>
      </div>
      <button class="characteristic-title-btn__btn characteristic-title-btn__btn_mob" @click="toPlans">
        Посмотреть всё
      </button>
    </div>
    <div id="location" class="residence-map">
      <div class="wrapper-map">
        <div class="jk-wrapper-map">
          <l-map
            ref="myMap"
            :center="latLng( this.numberLat,  this.numberLng - 0.0524999)"
            :zoom="zoom"
            style="height: 373px; width: 100%"
          >
            <l-tile-layer
              :attribution="attribution"
              :url="url"
            />
            <l-marker
              :icon="icon"
              :lat-lng="latLng( this.numberLat,  this.numberLng)"
            />
          </l-map>
          <div class="callBack-form">
            <form>
              <h1>
                Расположение ЖК на карте
              </h1>
              <p>
                Душанбе, ул. Дружбы Народов
              </p>
              <input placeholder="Имя и Фамилия" type="text">
              <input type="date">
              <input id="telephone2" class="" type="tel">
              <input class="callBack-map__btn" type="submit" value="Записаться на визит">
            </form>
          </div>
        </div>
      </div>
    </div>
    <div id="construction-stages" class="steps">
      <div class="container">
        <div class="characteristic-title-btn characteristic-title-btn_steps">
          <div class="characteristic-title-btn__title">
            <h1 class="characteristic__title">
              Ход строительства
            </h1>
            <p class="characteristic__subtitle">
              Следите за обновлениями строительства ЖК
            </p>
          </div>
        </div>
        <div class="slider-steps">
          <div class="wrapper-steps">
            <div v-for="item in this.jkhInfo.photo_reports" :key="item.id" class="wrapper-steps__block">
              <div class="wrapper-steps__img">
                <img :src="item.img" alt="" @click="magnificImages(item)">
              </div>
              <div class="wrapper-steps__date">
                <p>
                  <img :src="calander" alt="">
                  {{ item.name }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    <div :class="{active : modalPopup}" class="magnific-modal" @click="closePopupReport">
      <div class="modal-images-body">
        <img :src="closePopupModal" alt="" class="modal-video-body__btn">
        <div class="wrapper-magnif-popup" @click.stop="">
          <SliderItems
            :slidersImages_data="this.photoReport"
          />
        </div>
      </div>
    </div>
    <div :class="{active: layOut}" class="modal-layout" @click="closeLayout">
      <div class="modal-layout-body">
        <div class="modal-layout-content" @click.stop="">
          <img :src="closeIconLayout" alt="" class="modal-layout-content-close-btn" @click="closeLayout">
          <div class="modal-layout-img-layout">
            <img v-show="!toChangeBtn" id="panzoom-element" :src="textUrl + this.layoutInfo.image"
                 alt="" class="modal-layout-img-layout__img">
            <img v-show="toChangeBtn" id="panzoom-element-two" :src="textUrl + this.mainLayoutImg"
                 alt="" class="modal-layout-img-layout__img">
            <div v-show="!toChangeBtn" class="modal-layout-img-zoom">
              <span @click="zoomed(1)">  <img :src="zoomin" alt=""> </span>
              <span @click="zoomed(-1)"> <img :src="zoomout" alt=""> </span>
            </div>
            <div v-show="toChangeBtn" class="modal-layout-img-zoom">
              <span @click="zoomedTwo(1)"> <img :src="zoomin" alt=""> </span>
              <span @click="zoomedTwo(-1)"> <img :src="zoomout" alt=""> </span>
            </div>
            <button v-show="!toChangeBtn" @click="toMainLayout(layoutInfo)">
              <div v-html="iconSqd">
                    {{ iconSqd}}
                </div>
              <span>
                    общая планировка
              </span>
            </button>
            <button v-show="toChangeBtn" @click="toMainLayout(layoutInfo)">
              <div v-html="iconSqd">
                                {{ iconSqd}}
                            </div>
              <span>
                планировка квартиры
              </span>
            </button>
          </div>
          <div class="modal-layout-info">
            <p>
              Планировка
            </p>
            <h1>
              {{ this.jkhInfo.name }}
            </h1>
            <div class="modal-layout-info-content">
              <div class="modal-layout-content__text">
                <p>
                 <span v-html="iconSqd">
                              {{ iconSqd }}
                          </span>
                  {{ this.layoutInfo.room_count }} комнатная квартира
                </p>
                <p>
                  <span v-html="iconQntty">
                                        {{ iconQntty }}
                                    </span>
                  {{ this.layoutInfo.area }} м2
                </p>
              </div>
              <div class="modal-layout-info-price">
                <div v-html="iconPrice">
                                        {{ iconPrice }}
                                    </div>
                <span> {{ this.layoutInfo.price }} с. </span>
              </div>
            </div>
            <div class="form-layout">
              <p>
                Оставьте заявку на приобретение квартиры и с вами свяжутся в ближайшее время.
              </p>
              <form>
                <input placeholder="Имя и Фамилия" type="text">
                <input id="telephone4" class="form-control" type="tel">
                <input class="btn-layout" type="submit" value="Отправить">
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import Header from '../subcomponents/Header.vue'
import Footer from '../subcomponents/Footer.vue'
import Slick from 'vue-slick';
import 'slick-carousel/slick/slick.css';
import 'intl-tel-input/build/css/intlTelInput.css';
import 'intl-tel-input/build/js/intlTelInput.js';
import intlTelInput from 'intl-tel-input';
import axios from 'axios'
import VueAxios from 'vue-axios'
import SliderItems from './slider-for-jkh/Slider-component.vue'
import {LIcon, LMap, LMarker, LTileLayer} from "vue2-leaflet";
import {icon, Icon, latLng} from "leaflet";
import Panzoom from '@panzoom/panzoom'

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('../../assets/img/map/1.svg'),
  iconUrl: require('../../assets/img/map/1.svg'),
  shadowUrl: require('../../assets/img/map/1.svg'),
});


Vue.use(VueAxios, axios)

const config = require('../../../config/prod.env')

export default {
  components: {
    Header,
    Footer,
    Slick,
    SliderItems,
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
  },
  props: {
    options: {
      type: Object, default: () => {
      }
    },
  },
  data() {
    return {
      toChangeBtnFeatures: false,
      mainLayoutImg: {},
      toChangeBtn: false,
      closeIconLayout: require('../../assets/img/JKH/Close-icon.svg'),
      zoomout: require('../../assets/img/JKH/minus.svg'),
      zoomin: require('../../assets/img/JKH/plus.svg'),
      layoutInfo: [],
      layOut: false,
      textUrl: 'http://dashboard.mulk.tj/uploads/',
      arrayLayouts: [],
      calander: require('../../assets/img/JKH/calendar.png'),
      iconQntty: '<svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M8.64917 3.27271C8.52518 3.27271 8.40626 3.32196 8.31858 3.40964C8.2309 3.49732 8.18164 3.61624 8.18164 3.74024C8.18164 3.86423 8.2309 3.98315 8.31858 4.07083C8.40626 4.15851 8.52518 4.20777 8.64917 4.20777H13.1328L8.80813 8.53245C8.75919 8.57436 8.71944 8.62594 8.69138 8.68394C8.66332 8.74194 8.64755 8.80512 8.64506 8.86951C8.64257 8.9339 8.65342 8.99811 8.67693 9.0581C8.70043 9.1181 8.73609 9.17259 8.78165 9.21815C8.82721 9.26371 8.8817 9.29937 8.9417 9.32287C9.00169 9.34638 9.0659 9.35723 9.13029 9.35474C9.19468 9.35225 9.25786 9.33648 9.31586 9.30842C9.37386 9.28036 9.42544 9.24061 9.46735 9.19167L13.792 4.86699V9.35063C13.792 9.47462 13.8413 9.59354 13.929 9.68122C14.0166 9.7689 14.1356 9.81816 14.2596 9.81816C14.3836 9.81816 14.5025 9.7689 14.5902 9.68122C14.6778 9.59354 14.7271 9.47462 14.7271 9.35063V3.27271H8.64917Z" fill="#4EA2DA"/> <path d="M18 9.81818H16.3636V11.4545H18V9.81818ZM18 6.54545H16.3636V8.18182H18V6.54545ZM18 13.0909H16.3636V14.7273C17.1818 14.7273 18 13.9091 18 13.0909ZM11.4545 0H9.81818V1.63636H11.4545V0ZM18 3.27273H16.3636V4.90909H18V3.27273ZM16.3636 0V1.63636H18C18 0.818182 17.1818 0 16.3636 0ZM1.63636 14.7273H8.18182V9.81818H0V13.0909C0 13.9909 0.736364 14.7273 1.63636 14.7273ZM1.63636 3.27273H0V4.90909H1.63636V3.27273ZM11.4545 13.0909H9.81818V14.7273H11.4545V13.0909ZM14.7273 0H13.0909V1.63636H14.7273V0ZM14.7273 13.0909H13.0909V14.7273H14.7273V13.0909ZM1.63636 0C0.818182 0 0 0.818182 0 1.63636H1.63636V0ZM1.63636 6.54545H0V8.18182H1.63636V6.54545ZM8.18182 0H6.54545V1.63636H8.18182V0ZM4.90909 0H3.27273V1.63636H4.90909V0Z" fill="#4EA2DA"/> </svg>',
      iconSqd: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M1.84615 1.23077C1.50629 1.23077 1.23077 1.50629 1.23077 1.84615V14.1538C1.23077 14.4937 1.50629 14.7692 1.84615 14.7692H14.1538C14.4937 14.7692 14.7692 14.4937 14.7692 14.1538V1.84615C14.7692 1.50629 14.4937 1.23077 14.1538 1.23077H1.84615ZM0 1.84615C0 0.826551 0.826551 0 1.84615 0H14.1538C15.1734 0 16 0.826551 16 1.84615V14.1538C16 15.1734 15.1734 16 14.1538 16H1.84615C0.826551 16 0 15.1734 0 14.1538V1.84615Z" fill="#4EA2DA"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M0 7.60001C0 7.3791 0.275517 7.20001 0.615385 7.20001H15.3846C15.7245 7.20001 16 7.3791 16 7.60001C16 7.82093 15.7245 8.00001 15.3846 8.00001H0.615385C0.275517 8.00001 0 7.82093 0 7.60001Z" fill="#4EA2DA"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M9.5998 0C10.0416 0 10.3998 0.282768 10.3998 0.631579V7.36842C10.3998 7.71723 10.0416 8 9.5998 8C9.15798 8 8.7998 7.71723 8.7998 7.36842V0.631579C8.7998 0.282768 9.15798 0 9.5998 0Z" fill="#4EA2DA"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0.4C8 0.179086 8.23878 0 8.53333 0H10.6667C10.9612 0 11.2 0.179086 11.2 0.4C11.2 0.620914 10.9612 0.8 10.6667 0.8H8.53333C8.23878 0.8 8 0.620914 8 0.4Z" fill="#4EA2DA"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M0.4 5.59998C0.620914 5.59998 0.8 5.83876 0.8 6.13331V8.26664C0.8 8.56119 0.620914 8.79998 0.4 8.79998C0.179086 8.79998 0 8.56119 0 8.26664V6.13331C0 5.83876 0.179086 5.59998 0.4 5.59998Z" fill="#4EA2DA"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6002 5.59998C15.8211 5.59998 16.0002 5.83876 16.0002 6.13331V8.26664C16.0002 8.56119 15.8211 8.79998 15.6002 8.79998C15.3793 8.79998 15.2002 8.56119 15.2002 8.26664V6.13331C15.2002 5.83876 15.3793 5.59998 15.6002 5.59998Z" fill="#4EA2DA"/> <rect x="0.799805" y="8.79999" width="1.6" height="14.4" transform="rotate(-90 0.799805 8.79999)" fill="#4EA2DA"/> </svg>',
      iconPrice: '<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M9.48579 0L19.3848 1.415L20.7988 11.315L11.6068 20.507C11.4193 20.6945 11.165 20.7998 10.8998 20.7998C10.6346 20.7998 10.3803 20.6945 10.1928 20.507L0.292786 10.607C0.105315 10.4195 0 10.1652 0 9.9C0 9.63484 0.105315 9.38053 0.292786 9.193L9.48579 0ZM10.1928 2.122L2.41379 9.9L10.8998 18.385L18.6778 10.607L17.6178 3.182L10.1928 2.122ZM12.3128 8.486C11.9376 8.11072 11.7269 7.60178 11.727 7.07115C11.7271 6.8084 11.7789 6.54824 11.8795 6.30552C11.9801 6.06279 12.1275 5.84225 12.3133 5.6565C12.4991 5.47075 12.7197 5.32341 12.9625 5.2229C13.2052 5.1224 13.4654 5.0707 13.7281 5.07074C14.2588 5.07084 14.7676 5.28172 15.1428 5.657C15.5179 6.03228 15.7286 6.54122 15.7285 7.07185C15.7285 7.60249 15.5176 8.11135 15.1423 8.4865C14.767 8.86165 14.2581 9.07235 13.7274 9.07226C13.1968 9.07216 12.6879 8.86128 12.3128 8.486Z" fill="#4EA2DA"/> </svg>',
      iconBtn: '<svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M9.03555 1.20889L9.29901 0.813231L9.17917 0.733337H9.03555V1.20889ZM11.8889 3.11111H12.3644V2.85622L12.1523 2.71545L11.8889 3.11111ZM10.9378 12.1467H3.32889V13.0978H10.9378V12.1467ZM2.85333 11.6711V2.16H1.90222V11.6711H2.85333ZM3.32889 1.68445H9.03555V0.733337H3.32889V1.68445ZM11.4133 3.11111V11.6711H12.3644V3.11111H11.4133ZM8.7721 1.60456L11.6254 3.50678L12.1523 2.71545L9.29901 0.813231L8.7721 1.60456ZM3.32889 12.1467C3.20276 12.1467 3.0818 12.0966 2.99262 12.0074C2.90344 11.9182 2.85333 11.7972 2.85333 11.6711H1.90222C1.90222 12.0495 2.05253 12.4124 2.32008 12.6799C2.58764 12.9475 2.95051 13.0978 3.32889 13.0978V12.1467ZM10.9378 13.0978C11.3162 13.0978 11.679 12.9475 11.9466 12.6799C12.2141 12.4124 12.3644 12.0495 12.3644 11.6711H11.4133C11.4133 11.7972 11.3632 11.9182 11.274 12.0074C11.1849 12.0966 11.0639 12.1467 10.9378 12.1467V13.0978ZM2.85333 2.16C2.85333 2.03388 2.90344 1.91292 2.99262 1.82374C3.0818 1.73455 3.20276 1.68445 3.32889 1.68445V0.733337C2.95051 0.733337 2.58764 0.883646 2.32008 1.1512C2.05253 1.41875 1.90222 1.78163 1.90222 2.16H2.85333ZM0 4.06223V13.5733H0.951111V4.06223H0ZM1.42667 15H9.03555V14.0489H1.42667V15ZM1.42667 3.58667H2.37778V2.63556H1.42667V3.58667ZM10.4622 13.5733V12.6222H9.51111V13.5733H10.4622ZM9.03555 15C9.41393 15 9.77681 14.8497 10.0444 14.5821C10.3119 14.3146 10.4622 13.9517 10.4622 13.5733H9.51111C9.51111 13.6995 9.46101 13.8204 9.37182 13.9096C9.28264 13.9988 9.16168 14.0489 9.03555 14.0489V15ZM0 13.5733C0 13.9517 0.150309 14.3146 0.417861 14.5821C0.685413 14.8497 1.04829 15 1.42667 15V14.0489C1.30054 14.0489 1.17958 13.9988 1.0904 13.9096C1.00121 13.8204 0.951111 13.6995 0.951111 13.5733H0ZM0.951111 4.06223C0.951111 3.9361 1.00121 3.81514 1.0904 3.72596C1.17958 3.63677 1.30054 3.58667 1.42667 3.58667V2.63556C1.04829 2.63556 0.685413 2.78587 0.417861 3.05342C0.150309 3.32097 0 3.68385 0 4.06223H0.951111Z" fill="white"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M9.97044 4.95715C10.2299 5.18233 10.2649 5.58394 10.0487 5.85416L6.99159 9.67558C6.88162 9.81305 6.7212 9.89598 6.54959 9.90409C6.37798 9.9122 6.21101 9.84474 6.08954 9.7182L4.25525 7.80749C4.01648 7.55877 4.01648 7.1555 4.25525 6.90678C4.49403 6.65805 4.88117 6.65805 5.11994 6.90678L6.48079 8.32433L9.1093 5.03869C9.32548 4.76847 9.71103 4.73196 9.97044 4.95715Z" fill="white"/> </svg>',
      planImg: require('../../assets/img/JKH/planImg.png'),
      infoIcon: '<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z" stroke="#4EA2DA" stroke-width="2"/><path d="M11 6H11.01" stroke="#4EA2DA" stroke-width="2" stroke-linecap="round"/><path d="M9 10H11V15" stroke="#4EA2DA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 15H13" stroke="#4EA2DA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      charakIcaon: '<svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.5386 2.76924C17.5386 2.25944 17.9518 1.84616 18.4617 1.84616H23.077C23.5868 1.84616 24.0001 2.25944 24.0001 2.76924C24.0001 3.27904 23.5868 3.69231 23.077 3.69231H18.4617C17.9518 3.69231 17.5386 3.27904 17.5386 2.76924Z" fill="#4EA2DA"/><path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.76924C0 2.25944 0.413276 1.84616 0.923077 1.84616H14.7692C15.279 1.84616 15.6923 2.25944 15.6923 2.76924C15.6923 3.27904 15.279 3.69231 14.7692 3.69231H0.923077C0.413276 3.69231 0 3.27904 0 2.76924Z" fill="#4EA2DA"/><path fill-rule="evenodd" clip-rule="evenodd" d="M17.5386 17.5385C17.5386 17.0287 17.9518 16.6154 18.4617 16.6154H23.077C23.5868 16.6154 24.0001 17.0287 24.0001 17.5385C24.0001 18.0483 23.5868 18.4615 23.077 18.4615H18.4617C17.9518 18.4615 17.5386 18.0483 17.5386 17.5385Z" fill="#4EA2DA"/><path fill-rule="evenodd" clip-rule="evenodd" d="M0 17.5385C0 17.0287 0.413276 16.6154 0.923077 16.6154H14.7692C15.279 16.6154 15.6923 17.0287 15.6923 17.5385C15.6923 18.0483 15.279 18.4615 14.7692 18.4615H0.923077C0.413276 18.4615 0 18.0483 0 17.5385Z" fill="#4EA2DA"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8.30762 10.1539C8.30762 9.64405 8.72089 9.23077 9.23069 9.23077H23.0768C23.5866 9.23077 23.9999 9.64405 23.9999 10.1539C23.9999 10.6637 23.5866 11.0769 23.0768 11.0769H9.23069C8.72089 11.0769 8.30762 10.6637 8.30762 10.1539Z" fill="#4EA2DA"/><path fill-rule="evenodd" clip-rule="evenodd" d="M0 10.1539C0 9.64405 0.413276 9.23077 0.923077 9.23077H5.53846C6.04826 9.23077 6.46154 9.64405 6.46154 10.1539C6.46154 10.6637 6.04826 11.0769 5.53846 11.0769H0.923077C0.413276 11.0769 0 10.6637 0 10.1539Z" fill="#4EA2DA"/><path fill-rule="evenodd" clip-rule="evenodd" d="M16.6154 1.84615C16.1056 1.84615 15.6923 2.25943 15.6923 2.76923C15.6923 3.27903 16.1056 3.69231 16.6154 3.69231C17.1252 3.69231 17.5385 3.27903 17.5385 2.76923C17.5385 2.25943 17.1252 1.84615 16.6154 1.84615ZM13.8462 2.76923C13.8462 1.23983 15.086 0 16.6154 0C18.1448 0 19.3847 1.23983 19.3847 2.76923C19.3847 4.29864 18.1448 5.53846 16.6154 5.53846C15.086 5.53846 13.8462 4.29864 13.8462 2.76923Z" fill="#4EA2DA"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7.38447 9.23077C6.87466 9.23077 6.46139 9.64404 6.46139 10.1538C6.46139 10.6636 6.87466 11.0769 7.38447 11.0769C7.89427 11.0769 8.30754 10.6636 8.30754 10.1538C8.30754 9.64404 7.89427 9.23077 7.38447 9.23077ZM4.61523 10.1538C4.61523 8.62444 5.85506 7.38461 7.38447 7.38461C8.91387 7.38461 10.1537 8.62444 10.1537 10.1538C10.1537 11.6832 8.91387 12.9231 7.38447 12.9231C5.85506 12.9231 4.61523 11.6832 4.61523 10.1538Z" fill="#4EA2DA"/><path fill-rule="evenodd" clip-rule="evenodd" d="M16.6154 16.6154C16.1056 16.6154 15.6923 17.0287 15.6923 17.5385C15.6923 18.0483 16.1056 18.4615 16.6154 18.4615C17.1252 18.4615 17.5385 18.0483 17.5385 17.5385C17.5385 17.0287 17.1252 16.6154 16.6154 16.6154ZM13.8462 17.5385C13.8462 16.0091 15.086 14.7692 16.6154 14.7692C18.1448 14.7692 19.3847 16.0091 19.3847 17.5385C19.3847 19.0679 18.1448 20.3077 16.6154 20.3077C15.086 20.3077 13.8462 19.0679 13.8462 17.5385Z" fill="#4EA2DA"/></svg>',
      planIcon: '<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.42308 1.61538C1.977 1.61538 1.61538 1.977 1.61538 2.42308V18.5769C1.61538 19.023 1.977 19.3846 2.42308 19.3846H18.5769C19.023 19.3846 19.3846 19.023 19.3846 18.5769V2.42308C19.3846 1.977 19.023 1.61538 18.5769 1.61538H2.42308ZM0 2.42308C0 1.08485 1.08485 0 2.42308 0H18.5769C19.9152 0 21 1.08485 21 2.42308V18.5769C21 19.9152 19.9152 21 18.5769 21H2.42308C1.08485 21 0 19.9152 0 18.5769V2.42308Z" fill="#4EA2DA"/><path fill-rule="evenodd" clip-rule="evenodd" d="M0 6.19231C0 5.74623 0.361616 5.38461 0.807692 5.38461H20.1923C20.6384 5.38461 21 5.74623 21 6.19231C21 6.63838 20.6384 7 20.1923 7H0.807692C0.361616 7 0 6.63838 0 6.19231Z" fill="#4EA2DA"/><path fill-rule="evenodd" clip-rule="evenodd" d="M0.807692 3.76923C1.25377 3.76923 1.61538 4.13084 1.61538 4.57692V7.80769C1.61538 8.25376 1.25377 8.61538 0.807692 8.61538C0.361616 8.61538 0 8.25376 0 7.80769V4.57692C0 4.13084 0.361616 3.76923 0.807692 3.76923Z" fill="#4EA2DA"/><path fill-rule="evenodd" clip-rule="evenodd" d="M20.1925 3.76923C20.6385 3.76923 21.0002 4.13084 21.0002 4.57692V7.80769C21.0002 8.25376 20.6385 8.61538 20.1925 8.61538C19.7464 8.61538 19.3848 8.25376 19.3848 7.80769V4.57692C19.3848 4.13084 19.7464 3.76923 20.1925 3.76923Z" fill="#4EA2DA"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.92285 13.7308C5.92285 13.2847 6.28447 12.9231 6.73054 12.9231H20.1921C20.6382 12.9231 20.9998 13.2847 20.9998 13.7308C20.9998 14.1768 20.6382 14.5385 20.1921 14.5385H6.73054C6.28447 14.5385 5.92285 14.1768 5.92285 13.7308Z" fill="#4EA2DA"/><path fill-rule="evenodd" clip-rule="evenodd" d="M6.73054 5.38461C7.17662 5.38461 7.53824 5.74623 7.53824 6.19231V20.1923C7.53824 20.6384 7.17662 21 6.73054 21C6.28447 21 5.92285 20.6384 5.92285 20.1923V6.19231C5.92285 5.74623 6.28447 5.38461 6.73054 5.38461Z" fill="#4EA2DA"/><path fill-rule="evenodd" clip-rule="evenodd" d="M4.30762 20.1923C4.30762 19.7462 4.66923 19.3846 5.11531 19.3846H8.34608C8.79215 19.3846 9.15377 19.7462 9.15377 20.1923C9.15377 20.6384 8.79215 21 8.34608 21H5.11531C4.66923 21 4.30762 20.6384 4.30762 20.1923Z" fill="#4EA2DA"/><path fill-rule="evenodd" clip-rule="evenodd" d="M20.1925 11.3077C20.6385 11.3077 21.0002 11.6693 21.0002 12.1154V15.3462C21.0002 15.7922 20.6385 16.1538 20.1925 16.1538C19.7464 16.1538 19.3848 15.7922 19.3848 15.3462V12.1154C19.3848 11.6693 19.7464 11.3077 20.1925 11.3077Z" fill="#4EA2DA"/></svg>',
      locationIcon: '<svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.75 0C15.135 0 19.5 4.365 19.5 9.75C19.5 13.87 16.605 18.36 10.89 23.268C10.5722 23.541 10.1671 23.6909 9.74813 23.6905C9.3292 23.6902 8.9243 23.5395 8.607 23.266L8.229 22.938C2.767 18.158 0 13.778 0 9.75C0 4.365 4.365 0 9.75 0ZM9.75 1.5C7.56196 1.5 5.46354 2.36919 3.91637 3.91637C2.36919 5.46354 1.5 7.56196 1.5 9.75C1.5 13.252 4.048 17.287 9.214 21.807L9.587 22.13C9.63235 22.169 9.69019 22.1904 9.75 22.1904C9.80981 22.1904 9.86765 22.169 9.913 22.13C15.329 17.478 18 13.335 18 9.75C18 8.66659 17.7866 7.5938 17.372 6.59286C16.9574 5.59193 16.3497 4.68245 15.5836 3.91637C14.8175 3.15029 13.9081 2.5426 12.9071 2.12799C11.9062 1.71339 10.8334 1.5 9.75 1.5V1.5ZM9.75 6C10.7446 6 11.6984 6.39509 12.4017 7.09835C13.1049 7.80161 13.5 8.75544 13.5 9.75C13.5 10.7446 13.1049 11.6984 12.4017 12.4017C11.6984 13.1049 10.7446 13.5 9.75 13.5C8.75544 13.5 7.80161 13.1049 7.09835 12.4017C6.39509 11.6984 6 10.7446 6 9.75C6 8.75544 6.39509 7.80161 7.09835 7.09835C7.80161 6.39509 8.75544 6 9.75 6V6ZM9.75 7.5C9.15326 7.5 8.58097 7.73705 8.15901 8.15901C7.73705 8.58097 7.5 9.15326 7.5 9.75C7.5 10.3467 7.73705 10.919 8.15901 11.341C8.58097 11.7629 9.15326 12 9.75 12C10.3467 12 10.919 11.7629 11.341 11.341C11.7629 10.919 12 10.3467 12 9.75C12 9.15326 11.7629 8.58097 11.341 8.15901C10.919 7.73705 10.3467 7.5 9.75 7.5V7.5Z" fill="#4EA2DA"/></svg>',
      construcIcon: '<svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25 7.69548L1 8.30435V4.65218L25 5.26105V7.69548Z" stroke="#4EA2DA" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.34776 25H4.13037L5.17385 1H8.30428L9.34776 25Z" stroke="#4EA2DA" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.65186 20.3044H8.82577" stroke="#4EA2DA" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.65186 15.6087H8.82577" stroke="#4EA2DA" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.91309 11.9565H8.56526" stroke="#4EA2DA" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.478 7.78262V5.17392" stroke="#4EA2DA" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.6519 7.78262V5.17392" stroke="#4EA2DA" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.8262 13.5217V5.17392" stroke="#4EA2DA" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M15.8696 13.5217H25.7827V15.6087H15.8696V13.5217Z" stroke="#4EA2DA" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M25 7.69548L1 8.30435V4.65218L25 5.26105V7.69548Z" stroke="#4EA2DA" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      zoom: 13,
      center: latLng(38.57420592623844, 68.7916660308838),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      icon: icon({
        iconUrl: require('../../assets/img/map/1.svg'),
        iconSize: [40, 48],
        iconAnchor: [20, 48]

      }),
      arrowRight: '',
      urlLink: 'http://dashboard.mulk.tj/uploads/',
      jkhInfo: [],
      residenceSite: '',
      phoneNumber: '',
      features: [],
      logoBrand: require('../../assets/img/JKH/logo.png'),
      imgPlan: require('../../assets/img/JKH/plan.png'),
      modalPopup: false,
      slickOptions: {
        dots: true,
        infinite: true,
        autoplay: true,
        arrows: false,
        speed: 300,
        swipe: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 3000
      },
      stepsImages: [],
      photoReport: [],
      closePopupModal: require('../../assets/img/channel/close.svg'),
      numberLat: 1,
      numberLng: 2,
      featuresNumber: 9,
      toShowFeatures: false
    }
  },
  computed: {
    desktopFeatures() {
      return this.features.slice(0, this.featuresNumber)
    }
  },
  beforeUpdate() {
    if (this.$refs.slick) {
      this.$refs.slick.destroy();
    }
  },
  updated() {
    this.$nextTick(function () {
      if (this.$refs.slick) {
        this.$refs.slick.create(this.slickOptions);
      }
    });

  },
  methods: {
    zoomedTwo(level) {
      level === -1 ? this.panzoomTwo.zoomOut() : this.panzoomTwo.zoomIn()
    },
    zoomed(level) {
      level === -1 ? this.panzoom.zoomOut() : this.panzoom.zoomIn()
    },
    toShowAllFeatures() {
      this.toChangeBtnFeatures = true
      this.featuresNumber = 100
    },
    toHideAllFeatures() {
      this.toChangeBtnFeatures = false
      this.featuresNumber = 9
    },
    toMainLayout(layoutInfo) {
      this.toChangeBtn = !this.toChangeBtn
      axios.get(config.BASE_URL + 'residence-blocks/' + layoutInfo.residence_block_id)
        .then(resp => {
          this.mainLayoutImg = resp.data.img
        })
    },
    closeLayout() {
      this.layOut = false
      this.toChangeBtn = false
      this.mainLayoutImg = {}
      this.panzoom = Panzoom(document.getElementById('panzoom-element'))
      this.panzoom.reset()
      this.panzoomTwo = Panzoom(document.getElementById('panzoom-element-two'))
      this.panzoomTwo.reset()
    },

    showFullNumber() {
      if (this.phoneNumber === this.jkhInfo.phone_number) {
        window.location.href = `tel:${this.jkhInfo.phone_number}`;
      } else {
        this.phoneNumber = this.jkhInfo.phone_number
      }

    },

    toShowLayout(layout) {
      this.layoutInfo = layout
      this.layOut = true
    },
    toPlans() {
      this.$router.push({name: 'PlansInfo', params: {data: [this.arrayLayouts, this.jkhInfo]}})
    },
    latLng: function (lat, lng) {
      return latLng(lat, lng)
    },
    reInit() {
      this.$nextTick(() => {
        this.$refs.slick.reSlick();
      });
    },
    magnificImages(item) {
      this.modalPopup = true
      this.photoReport = item.images
    },
    closePopupReport() {
      this.modalPopup = false
    },
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    }
  },
  mounted() {
    this.panzoomTwo = Panzoom(document.getElementById('panzoom-element-two'), {
      maxScale: 5,
      minScale: 0.5
    })
    this.panzoom = Panzoom(document.getElementById('panzoom-element'), {
      maxScale: 5,
      minScale: 0.5
    })
    // const input2 = document.querySelector("#telephone2")
    const input = document.querySelector("#telephone");
    const input3 = document.querySelector("#telephone3");
    const input4 = document.querySelector("#telephone4");
    intlTelInput(input, {
      // any initialisation options go here
      preferredCountries: ["tj", "us", "ru"],
    })
    // intlTelInput(input2,{
    //     // any initialisation options go here
    //     preferredCountries: ["tj", "us", "ru"],
    // })
    intlTelInput(input3, {
      // any initialisation options go here
      preferredCountries: ["tj", "us", "ru"],
    })
    intlTelInput(input4, {
      // any initialisation options go here
      preferredCountries: ["tj", "us", "ru"],
    })
    axios.get(config.BASE_URL + 'residence/' + this.$route.params.id)
      .then((res) => {
        this.jkhInfo = res.data.data;
        this.residenceSite = new URL(this.jkhInfo.site_url).host
        this.phoneNumber = this.jkhInfo.phone_number.substring(0, 7) + ' ...'
        // Flat function
        const flat = (array) => {
          return array.map((item) => {
            return {
              id: item.id,
              name: item.feature.name,
              value: item.value,
              img: item.feature.img,
              position: item.feature.position
            };
          });
        };

        // flat features and sort
        this.features = flat(this.jkhInfo.features).sort(function (a, b) {
          return a.position - b.position;
        });

        this.numberLat = parseFloat(res.data.data.lat)
        this.numberLng = parseFloat(res.data.data.lng)

        let blocks = res.data.data.blocks
        let newLayouts = blocks.map(layout => {
          return layout.layouts
        })
        let newArrayTest = []
        for (let i = 0; i < newLayouts.length; i++) {
          for (let j = 0; j < newLayouts[i].length; j++) {
            newArrayTest.push(newLayouts[i][j])
          }
        }
        this.arrayLayouts = newArrayTest
      })
    this.$nextTick(() => {
      this.$refs.myMap.mapObject.scrollWheelZoom.disable();
    });
  }
}
</script>
<style>

</style>
