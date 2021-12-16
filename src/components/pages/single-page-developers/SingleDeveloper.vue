<template>
    <div class="single-developer">
        <Header class="descTop-version"/>
        <div class="single-developer__wrap">
            <div class="container">
                <div class="single-dev__content">
                    <div class="single-dev__bordered">
                        <div class="single-dev__logo">
                            <img :src="this.devInfo.logo" alt="">
                        </div>
                    </div>
                    <div class="single-dev-wrapper">
                        <div class="single-dev__info" id="first_single-dev__info">
                            <div class="single-dev__info-text" :class="{active : contentShow}">
                                <p>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span>{{this.devInfo.name}}</span> {{ this.loremTest | truncate(this.lengthOfText, '...') }}
                                </p>
                            </div>
                            <button class="single-dev__info-btn" @click="toShowContent" :class="{active: contentShow}" v-show="!contentShow">
                                <p >
                                    показать ещё
                                </p>
                                <span v-html="arrowDown" :class="{active: contentShow}">
                                    {{ arrowDown }}
                                </span>
                            </button>
                            <button class="single-dev__info-btn" @click="toHideContent" :class="{active: contentShow}"  v-show="contentShow">
                                <p >
                                    скрыть
                                </p>
                                <span v-html="arrowDown" :class="{active: contentShow}">
                                    {{ arrowDown }}
                                </span>
                            </button>
                        </div>
                        <div class="single-dev__projects">
                            <div class="single-dev__project">
                                <span class="single-dev__project_icon" v-html="constr">
                                    {{ constr }}
                                </span>
                                <div class="single-dev__project-info">
                                    <p> <span>{{ this.devInfo.active_on_sale }}</span> объект </p>
                                    <p>
                                        Здан в эксплуатацию
                                    </p>
                                </div>
                            </div>
                            <div class="single-dev__project">
                                <span class="single-dev__project_icon" v-html="building">
                                    {{ building }}
                                </span>
                                <div class="single-dev__project-info">
                                    <p> <span>{{ 0 }}</span> объект </p>
                                    <p>
                                        В активной продаже
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="single-dev__info" id="second_single-dev__info">
                    <div class="single-dev__info-text" :class="{active : contentShow}">
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;<span>{{this.devInfo.name}}</span> {{ this.loremTest | truncate(this.lengthOfText, '...') }}
                        </p>
                    </div>
                    <button class="single-dev__info-btn" @click="toShowContent" :class="{active: contentShow}" v-show="!contentShow">
                        <p >
                            показать ещё
                        </p>
                        <span v-html="arrowDown" :class="{active: contentShow}">
                            {{ arrowDown }}
                        </span>
                    </button>
                    <button class="single-dev__info-btn" @click="toHideContent" :class="{active: contentShow}"  v-show="contentShow">
                        <p >
                            скрыть
                        </p>
                        <span v-html="arrowDown" :class="{active: contentShow}">
                            {{ arrowDown }}
                        </span>
                    </button>
                </div>
            </div>
            <div class="single-dev__residences">
                <div class="container">
                    <div class="single-dev__residences-title">
                        <div class="single-dev__title-wrapper">
                            <h2>
                                Новостройки застройщика
                            </h2>
                            <p>
                                Реализованные проеты
                            </p>
                        </div>
                        <div class="single-dev__buttons-filter">
                            <button>
                                Построеные проекты
                            </button>
                            <button>
                                Стадия строительства
                            </button>
                        </div>
                    </div>
                </div>
                 <div class="single-dev__residences-wrapper">
                    <div class="wrapper-recommendations__item single-dev__item" v-for="residence in this.residencesOfDev" :key="residence.id" @click="pushArrayToJkh(residence)">
                        <div class="wrapper-residences__status">
                            <div class="wrapper-residences__status-img">
                                <span v-html="built">
                                    {{ built }}
                                </span>
                                <div class="wrapper-residences__status-text">
                                    <p>
                                        Построено
                                    </p>
                                </div>
                            </div>
                        </div>
                        <img class="wrapper-recommendations__img" :src="residence.img" alt="">
                        <div class="wrapper-recommendations__content">
                            <h3 class="wrapper-recommendations__title">
                                {{ residence.name }}
                            </h3>
                            <p class="wrapper-recommendations__text wrapper-recommendations__text_mb">
                                {{residence.description }}
                            </p>
                            <p class="wrapper-recommendations__text">
                                44 - 108 м2     <span>2 ... 3 комнаты</span>
                            </p>
                            <a :href="`tel:${residence.phone_number}`" @click.stop="" class="wrapper-recommendations__content_tel">
                                <span v-html="residenceTel" >
                                    {{ residenceTel }}
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="single-dev__contacts">
                <div class="container">
                    <div class="single-dev__contact-wrap">
                        <div class="single-dev__contact-info">
                            <div class="single-dev__contact-title">
                                <h2>
                                    Котактная информация
                                </h2>
                                <p>
                                    Контактная информация застройщика
                                </p>
                            </div>
                            <div class="single-dev__contact-contact">
                                <router-link to="this.devInfo.site_url" target="_blank">
                                    <div class="border-single-dev-logo">
                                        <span v-html="globus">
                                            {{ globus }}
                                        </span>
                                        {{ this.devInfo.site_url }}
                                    </div>
                                </router-link>
                                <router-link to="">
                                    <div class="border-single-dev-logo">
                                        <span v-html="location">
                                            {{ location }}
                                        </span>
                                        {{ this.devInfo.address }}
                                    </div>
                                </router-link>
                                <a :href="`tel:${this.devInfo.phone_number}`">
                                    <div class="border-single-dev-logo">
                                        <span v-html="phoneIcon">
                                            {{ phoneIcon }}
                                        </span>
                                        {{ this.devInfo.phone_number }}
                                    </div>
                                </a>
                                <a :href="`https://api.whatsapp.com/send?phone=${this.devInfo.whatsapp}`" target="_blank">
                                    <div class="border-single-dev-logo">
                                        <span v-html="whatsAppIcon">
                                            {{ whatsAppIcon }}
                                        </span>
                                        WhatsApp
                                    </div>
                                </a>
                            </div>
                            <h2 class="single-dev__contact-info__title">
                                Оставьте заявку
                            </h2>
                            <p class="single-dev__contact-info__text">
                                на бесплатную консультацию от застройщика
                            </p>
                            <button class="single-dev__contact-info__btn">
                                Отпарвить заявку
                            </button>
                        </div>
                        <div class="single-dev__contact-location">
                            <div class="dev-map">
                                <l-map
                                    ref="myMap"
                                    :zoom="zoom"
                                    :center="latLng( this.numberLat,  this.numberLng)"
                                    style="height: 414px; width: 100%"
                                    >
                                    <l-tile-layer
                                        :url="url"
                                        :attribution="attribution"
                                    />
                                    <l-marker
                                        :lat-lng="latLng( this.numberLat,  this.numberLng)"
                                        :icon="icon"
                                    />
                                </l-map>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>
<script>
import Vue from 'vue'
import Header from '../../subcomponents/Header.vue'
import Footer from '../../subcomponents/Footer.vue'
import axios from 'axios'
import { LMap, LTileLayer, LMarker, LIcon } from "vue2-leaflet";
import { latLng, icon } from "leaflet";
import { Icon } from 'leaflet';

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('../../../assets/img/map/1.svg'),
  iconUrl: require('../../../assets/img/map/1.svg'),
  shadowUrl: require('../../../assets/img/map/1.svg'),
});

var config = require('../../../../config/prod.env')

export default {
    components:{
        Header,
        Footer,
        LMap,
        LTileLayer,
        LMarker,
        LIcon
    },
    data(){
        return{
            numberLat: 38.57420592623844,
            numberLng: 68.7916660308838,
            zoom: 13,
            center: latLng(38.57420592623844, 68.7916660308838),
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            icon: icon({
                iconUrl: require('../../../assets/img/map/1.svg'),
              iconSize: [40, 48],
              iconAnchor: [20, 48]
            }),
            lengthOfText: null,
            contentShow: false,
            loremTest: '- Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita temporibus enim dolorem eos quisquam esse soluta, quidem debitis vel a quod, tenetur, aliquam quis illum consequatur perspiciatis sint pariatur voluptate. Numquam molestias nostrum quia alias blanditiis. Fugit nemo enim explicabo, beatae voluptatum aperiam! Fuga ratione maxime nisi provident repellat unde! <br> <br> &nbsp;&nbsp;&nbsp;&nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita temporibus enim dolorem eos quisquam esse soluta, quidem debitis vel a quod, tenetur, aliquam quis illum consequatur perspiciatis sint pariatur voluptate. Numquam molestias nostrum quia alias blanditiis. Fugit nemo enim explicabo, beatae voluptatum aperiam! Fuga ratione maxime nisi provident repellat unde! <br><br> &nbsp;&nbsp;&nbsp;&nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita temporibus enim dolorem eos quisquam esse soluta, quidem debitis vel a quod, tenetur, aliquam quis illum consequatur perspiciatis sint pariatur voluptate. Numquam molestias nostrum quia alias blanditiis. Fugit nemo enim explicabo, beatae voluptatum aperiam! Fuga ratione maxime nisi provident repellat unde! <br><br> &nbsp;&nbsp;&nbsp;&nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita temporibus enim dolorem eos quisquam esse soluta, quidem debitis vel a quod, tenetur, aliquam quis illum consequatur perspiciatis sint pariatur voluptate. Numquam molestias nostrum quia alias blanditiis. Fugit nemo enim explicabo, beatae voluptatum aperiam! Fuga ratione maxime nisi provident repellat unde! <br><br> &nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita temporibus enim dolorem eos quisquam esse soluta, quidem debitis vel a quod, tenetur, aliquam quis illum consequatur perspiciatis sint pariatur voluptate. Numquam molestias nostrum quia alias blanditiis. Fugit nemo enim explicabo, beatae voluptatum aperiam! Fuga ratione maxime nisi provident repellat unde! <br><br> &nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita temporibus enim dolorem eos quisquam esse soluta, quidem debitis vel a quod, tenetur, aliquam quis illum consequatur perspiciatis sint pariatur voluptate. Numquam molestias nostrum quia alias blanditiis. Fugit nemo enim explicabo, beatae voluptatum aperiam! Fuga ratione maxime nisi provident repellat unde!<br> <br>&nbsp;&nbsp;&nbsp;&nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita temporibus enim dolorem eos quisquam esse soluta, quidem debitis vel a quod, tenetur, aliquam quis illum consequatur perspiciatis sint pariatur voluptate. Numquam molestias nostrum quia alias blanditiis. Fugit nemo enim explicabo, beatae voluptatum aperiam! Fuga ratione maxime nisi provident repellat unde!',
            arrowDown:'<svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M5 7C4.7873 6.999 4.5775 6.95381 4.38584 6.86771C4.19417 6.78161 4.02544 6.65676 3.89188 6.50222L0.384232 2.53556C0.179267 2.29675 0.0502851 2.009 0.0119851 1.7051C-0.0263148 1.40119 0.0276073 1.09336 0.167607 0.816667C0.281151 0.576198 0.466443 0.371322 0.701353 0.226506C0.936262 0.0816914 1.21086 0.00305904 1.49235 0H8.50765C8.78914 0.00305904 9.06374 0.0816914 9.29865 0.226506C9.53356 0.371322 9.71885 0.576198 9.83239 0.816667C9.97239 1.09336 10.0263 1.40119 9.98802 1.7051C9.94972 2.009 9.82073 2.29675 9.61577 2.53556L6.10812 6.50222C5.97456 6.65676 5.80583 6.78161 5.61416 6.86771C5.4225 6.95381 5.2127 6.999 5 7Z" fill="#4EA2DA"/> </svg>',
            whatsAppIcon:'<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M18.3451 15.2462C18.0287 15.0713 16.453 14.2401 16.1599 14.1276C15.8668 14.0088 15.652 13.9526 15.4402 14.3026C15.2254 14.6494 14.616 15.4212 14.4245 15.6556C14.2388 15.8868 14.0501 15.9149 13.7338 15.7431C11.8533 14.7307 10.62 13.937 9.38082 11.6465C9.05289 11.0372 9.70874 11.0809 10.3211 9.76537C10.4255 9.53413 10.3733 9.33727 10.292 9.16228C10.2108 8.9873 9.57235 7.29366 9.30537 6.60308C9.04709 5.93125 8.78011 6.025 8.58567 6.0125C8.39995 6 8.1881 6 7.97335 6C7.75861 6 7.41327 6.08749 7.12017 6.4281C6.82707 6.77495 6 7.60927 6 9.3029C6 10.9965 7.14629 12.637 7.30299 12.8683C7.4655 13.0995 9.55784 16.5743 12.7703 18.0711C14.8017 19.0147 15.5969 19.096 16.6126 18.9335C17.2307 18.8335 18.5047 18.1023 18.7688 17.293C19.0328 16.4868 19.0328 15.7962 18.9545 15.6525C18.8761 15.4994 18.6614 15.4119 18.3451 15.2462Z" fill="#4EA2DA"/> <path d="M24.0289 7.65625C23.3983 6.15792 22.4943 4.81306 21.342 3.65792C20.1896 2.50558 18.8448 1.59877 17.3437 0.970982C15.8091 0.326451 14.1797 0 12.5 0H12.4442C10.7534 0.00837054 9.11556 0.343192 7.5754 1.00167C6.08825 1.63783 4.75456 2.54185 3.61339 3.6942C2.47223 4.84654 1.57659 6.18583 0.957178 7.67857C0.315445 9.22433 -0.00821214 10.8677 0.000158292 12.5586C0.00852872 14.495 0.471693 16.4174 1.33943 18.1362V22.3772C1.33943 23.0859 1.9142 23.6607 2.62289 23.6607H6.8667C8.58543 24.5285 10.5078 24.9916 12.4442 25H12.5028C14.1741 25 15.7952 24.6763 17.3214 24.043C18.8141 23.4208 20.1562 22.5279 21.3057 21.3867C22.458 20.2455 23.3648 18.9118 23.9982 17.4247C24.6567 15.8845 24.9915 14.2467 24.9998 12.5558C25.0082 10.8566 24.679 9.20759 24.0289 7.65625ZM19.813 19.8772C17.8571 21.8136 15.2622 22.8795 12.5 22.8795H12.4526C10.7701 22.8711 9.09882 22.4526 7.62283 21.6657L7.38846 21.5402H3.45994V17.6116L3.33438 17.3772C2.54756 15.9012 2.12904 14.2299 2.12067 12.5474C2.10951 9.76562 3.17255 7.15402 5.12286 5.18694C7.07038 3.21987 9.67359 2.1317 12.4554 2.12054H12.5028C13.8979 2.12054 15.2511 2.39118 16.5262 2.9269C17.7706 3.44866 18.8866 4.19922 19.8464 5.15904C20.8035 6.11607 21.5568 7.23493 22.0786 8.47935C22.6199 9.76841 22.8905 11.1356 22.8849 12.5474C22.8682 15.3265 21.7772 17.9297 19.813 19.8772Z" fill="#4EA2DA"/> </svg>',
            phoneIcon:'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M19.4296 14.1327L15.0546 12.2577C14.8677 12.178 14.6599 12.1612 14.4627 12.2099C14.2654 12.2585 14.0893 12.3698 13.9608 12.5272L12.0233 14.8944C8.98248 13.4607 6.53535 11.0136 5.10165 7.97283L7.46888 6.0353C7.62657 5.90705 7.73818 5.73091 7.78681 5.53355C7.83545 5.3362 7.81846 5.12837 7.73842 4.94153L5.86338 0.566453C5.77554 0.365046 5.62016 0.200605 5.42406 0.101483C5.22796 0.00236143 5.00341 -0.0252272 4.78915 0.0234743L0.726575 0.960991C0.519997 1.00869 0.335688 1.12501 0.203728 1.29095C0.0717689 1.45689 -4.75872e-05 1.66266 2.36575e-08 1.87468C2.36575e-08 11.8944 8.12123 20 18.1253 20C18.3374 20.0001 18.5433 19.9284 18.7093 19.7964C18.8753 19.6644 18.9917 19.4801 19.0394 19.2734L19.9769 15.2109C20.0253 14.9955 19.9971 14.7701 19.8972 14.5733C19.7973 14.3765 19.632 14.2207 19.4296 14.1327Z" fill="#4EA2DA"/> </svg>',
            location:'<svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00073 0C3.58128 0 0 3.4755 0 7.76537C0 8.87341 0.243246 9.92696 0.671124 10.8791L8.00073 24L15.3274 10.8791C15.7703 9.90482 15.9999 8.84172 16 7.76537C16 3.47398 12.4187 0 8.00073 0ZM8.03444 13.6552C5.16677 13.6552 2.84422 11.2394 2.84422 8.25582C2.84422 5.27531 5.16677 2.85941 8.03444 2.85941C10.8977 2.85941 13.2203 5.27682 13.2203 8.25582C13.2203 11.2394 10.8977 13.6552 8.03444 13.6552Z" fill="#4EA2DA"/> </svg>',
            globus:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M20.4853 3.51478C18.2187 1.24819 15.2053 0 11.9999 0C8.79453 0 5.78116 1.24823 3.5147 3.51478C1.24824 5.78128 0 8.79474 0 12.0001C0 15.2055 1.24819 18.2189 3.5147 20.4854C5.78116 22.7518 8.79458 24 11.9999 24C15.2052 24 18.2187 22.7518 20.4853 20.4853C22.7518 18.2189 24 15.2054 24 12C24 8.79469 22.7518 5.78128 20.4853 3.51478ZM21.0969 8.37558C20.6598 8.40919 20.3174 8.2823 19.8839 8.12161C19.5862 8.01131 19.2488 7.88625 18.8532 7.80764C17.7872 7.59581 16.6938 8.17697 16.0675 9.28828C15.8851 9.61191 15.0129 11.2782 15.755 12.3005C16.0333 12.6837 16.4056 12.9069 16.7048 13.0861C17.1062 13.3267 17.5212 13.5755 17.9915 13.7653C18.0916 13.8057 18.1908 13.8423 18.2866 13.8776C18.5718 13.9829 18.8667 14.0918 18.9722 14.2362C19.0313 14.3171 19.093 14.4994 19.0509 14.9077C19.0227 15.1808 18.9134 15.4789 18.7977 15.7945C18.5126 16.572 18.1221 17.6369 19.0371 18.6824C19.2009 18.8694 19.3857 19.0279 19.5864 19.1568C17.6825 21.1738 14.9859 22.4348 11.9999 22.4348C6.24617 22.4348 1.56521 17.7538 1.56521 12.0001C1.56521 10.8915 1.73963 9.82289 2.06138 8.81972C2.22845 9.05878 2.41707 9.27131 2.59801 9.46177C3.17678 10.0711 3.81658 10.628 4.5025 11.1191C4.55336 11.1555 4.62578 11.2073 4.66352 11.2413C4.6893 11.3565 4.67894 11.5225 4.66727 11.7116C4.64242 12.1122 4.60835 12.6609 4.91093 13.2382C5.10804 13.6144 5.38399 13.9039 5.62746 14.1593C5.86455 14.4081 6.0693 14.6229 6.12654 14.8312C6.16732 14.9797 6.14998 15.1982 6.13156 15.4296C6.10624 15.7483 6.07751 16.1095 6.16943 16.4982C6.29299 17.0205 6.58788 17.4075 6.84804 17.749C7.01206 17.9643 7.16698 18.1677 7.2342 18.3539C7.286 18.4975 7.30695 18.6912 7.32903 18.8962C7.3512 19.1018 7.37637 19.3348 7.43778 19.5747C7.62181 20.2935 8.21849 20.9834 9.02361 20.9833C9.0665 20.9833 9.11014 20.9813 9.15421 20.9773C9.98793 20.9011 10.5604 20.1562 10.6482 19.0331C10.6624 18.8513 10.6998 18.3721 10.7925 18.2664C10.8212 18.255 10.8911 18.2378 10.9429 18.2252C11.1635 18.1712 11.4967 18.0895 11.772 17.8075C12.2792 17.2882 12.1394 16.637 12.0558 16.248C12.0307 16.1309 12.0021 15.998 12.0037 15.9288C12.0082 15.7434 12.3879 15.4191 12.5309 15.297L13.9614 14.0751C14.5183 13.6042 14.7266 12.7849 14.4797 12.0367C14.3035 11.5025 13.9134 11.0221 13.3515 10.6475C12.6583 10.1855 11.9088 10.067 11.2955 10.3225C11.087 10.4094 10.9184 10.5285 10.7828 10.6243C10.7418 10.6533 10.6878 10.6915 10.6438 10.7194C10.6236 10.6969 10.6003 10.6658 10.5787 10.6261C10.5271 10.5315 10.4808 10.4087 10.4317 10.2787C10.3672 10.1076 10.2939 9.91364 10.1856 9.71841C9.6059 8.6738 8.65892 8.55792 7.96752 8.47336C7.84934 8.45892 7.73769 8.44523 7.62636 8.42803C7.04431 8.33798 6.45218 8.08242 5.99763 7.73077C6.16423 7.67086 6.36785 7.62469 6.47745 7.62895C6.55676 7.63158 6.64971 7.64217 6.74825 7.65338C7.03057 7.68558 7.38181 7.72556 7.76037 7.61944C8.14255 7.51233 8.42431 7.29225 8.65067 7.11544C8.71527 7.065 8.77625 7.01733 8.8325 6.97786C8.93844 6.90352 9.14455 6.88631 9.36276 6.86808C9.90618 6.8227 11.0369 6.72834 11.197 5.15602C11.2762 4.37808 10.9921 3.68161 10.7638 3.12197C10.5739 2.65641 10.3896 2.19431 10.2288 1.71614C10.8047 1.61742 11.3963 1.56525 12 1.56525C13.2953 1.56525 14.536 1.80323 15.6815 2.2365C15.6472 2.27025 15.6128 2.30395 15.5785 2.33756C15.2306 2.67872 14.8709 3.03155 14.6234 3.35203C14.5187 3.48755 14.3436 3.71428 14.2919 4.04081C14.2044 4.59478 14.5357 5.02036 14.6771 5.20205C14.8873 5.47219 15.2393 5.92434 15.8206 6.06933C15.9504 6.10167 16.0758 6.11555 16.196 6.11555C16.634 6.11555 17.0066 5.93212 17.2954 5.78986C17.4618 5.70797 17.6337 5.62327 17.7365 5.61502C17.8344 5.607 18.0072 5.66395 18.1746 5.7188C18.419 5.79895 18.696 5.8897 19.0223 5.90156C19.4515 5.91694 19.8322 5.76145 20.1309 5.46788C20.8239 6.32869 21.3832 7.3012 21.7771 8.35402C21.7214 8.35547 21.6645 8.35627 21.6138 8.35687C21.4603 8.35884 21.2864 8.36105 21.0969 8.37558Z" fill="#4EA2DA"/> </svg>',
            built:'<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.8 3.66666H13.9333V5.13332H19.8V20.5333H13.9333V22H21.2667V5.13332C21.2667 4.74434 21.1122 4.37129 20.8371 4.09623C20.5621 3.82118 20.189 3.66666 19.8 3.66666Z" fill="white"/><path d="M11.6453 0H1.55467C1.14234 0 0.746908 0.163795 0.455351 0.455351C0.163795 0.746908 0 1.14234 0 1.55467V22H13.2V1.55467C13.2 1.14234 13.0362 0.746908 12.7446 0.455351C12.4531 0.163795 12.0577 0 11.6453 0ZM11.7333 20.5333H9.53333V18.3333H3.66667V20.5333H1.46667V1.55467C1.46667 1.54311 1.46894 1.53167 1.47337 1.52099C1.47779 1.51031 1.48427 1.50061 1.49244 1.49244C1.50061 1.48427 1.51031 1.47779 1.52099 1.47337C1.53167 1.46894 1.54311 1.46667 1.55467 1.46667H11.6453C11.6569 1.46667 11.6683 1.46894 11.679 1.47337C11.6897 1.47779 11.6994 1.48427 11.7076 1.49244C11.7157 1.50061 11.7222 1.51031 11.7266 1.52099C11.7311 1.53167 11.7333 1.54311 11.7333 1.55467V20.5333Z" fill="white"/><path d="M2.93335 3.66666H4.40002V5.13332H2.93335V3.66666Z" fill="white"/><path d="M5.86664 3.66666H7.3333V5.13332H5.86664V3.66666Z" fill="white"/><path d="M8.79999 3.66666H10.2667V5.13332H8.79999V3.66666Z" fill="white"/><path d="M2.93335 7.33334H4.40002V8.80001H2.93335V7.33334Z" fill="white"/><path d="M5.86664 7.33334H7.3333V8.80001H5.86664V7.33334Z" fill="white"/><path d="M8.79999 7.33334H10.2667V8.80001H8.79999V7.33334Z" fill="white"/><path d="M2.93335 11H4.40002V12.4667H2.93335V11Z" fill="white"/><path d="M5.86664 11H7.3333V12.4667H5.86664V11Z" fill="white"/><path d="M8.79999 11H10.2667V12.4667H8.79999V11Z" fill="white"/><path d="M2.93335 14.6667H4.40002V16.1333H2.93335V14.6667Z" fill="white"/><path d="M5.86664 14.6667H7.3333V16.1333H5.86664V14.6667Z" fill="white"/><path d="M8.79999 14.6667H10.2667V16.1333H8.79999V14.6667Z" fill="white"/><path d="M13.9333 7.33334H15.4V8.80001H13.9333V7.33334Z" fill="white"/><path d="M16.8666 7.33334H18.3333V8.80001H16.8666V7.33334Z" fill="white"/><path d="M13.9333 11H15.4V12.4667H13.9333V11Z" fill="white"/><path d="M16.8666 11H18.3333V12.4667H16.8666V11Z" fill="white"/><path d="M13.9333 14.6667H15.4V16.1333H13.9333V14.6667Z" fill="white"/><path d="M16.8666 14.6667H18.3333V16.1333H16.8666V14.6667Z" fill="white"/></svg>',
            residenceTel:'<svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="secondLine" d="M24 11.0001H21.6C21.599 10.2047 21.2195 9.44212 20.5445 8.87968C19.8696 8.31724 18.9545 8.00092 18 8.00012V6.00012C19.5907 6.00171 21.1157 6.529 22.2405 7.46634C23.3653 8.40368 23.9981 9.67453 24 11.0001Z" fill="#F8F8F8"/><path id="firstLine" d="M28 11.0001H25.7778C25.7754 8.93805 24.9552 6.96111 23.4971 5.503C22.039 4.04489 20.0621 3.2247 18 3.22234V1.00012C20.6513 1.00306 23.1931 2.05758 25.0678 3.9323C26.9425 5.80703 27.9971 8.34886 28 11.0001Z" fill="#F8F8F8"/><path id="mainPhone" d="M19.3326 20.6153L21.8312 18.1168C22.1656 17.7823 22.5909 17.5532 23.0542 17.4581C23.5176 17.3629 23.9987 17.4058 24.4379 17.5814L27.4808 18.7994C27.9293 18.9789 28.3137 19.2886 28.5845 19.6886C28.8553 20.0886 29 20.5606 29 21.0436V26.5772C29.0008 26.9061 28.9344 27.2317 28.805 27.5341C28.6756 27.8365 28.4858 28.1092 28.2473 28.3357C28.0089 28.5622 27.7267 28.7376 27.418 28.8513C27.1094 28.9649 26.7808 29.0144 26.4524 28.9966C5.1232 27.6692 0.815423 9.6039 0.015663 2.68606C-0.0230717 2.34786 0.010234 2.00529 0.11339 1.68089C0.216545 1.35648 0.387214 1.05759 0.614168 0.803877C0.841123 0.550161 1.11922 0.347369 1.43017 0.208839C1.74112 0.0703087 2.07788 -0.000819826 2.41829 0.000131488H7.85376C8.33681 0.000115977 8.8088 0.144837 9.20882 0.415625C9.60884 0.686413 9.91855 1.07085 10.098 1.51933L11.3149 4.5622C11.4905 5.00142 11.5334 5.48252 11.4383 5.94588C11.3431 6.40924 11.114 6.83449 10.7795 7.16894L8.28097 9.66748C8.28097 9.66748 9.66632 19.4073 19.3326 20.6153Z" fill="#F8F8F8"/></svg>',
            building:'<svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M37.5833 39.6333V36.095C38.8956 35.5417 39.7169 34.2217 39.6333 32.8C39.6333 30.916 38.4074 29.3833 36.9 29.3833C35.3926 29.3833 34.1667 30.916 34.1667 32.8C34.0831 34.2217 34.9044 35.5417 36.2167 36.095V39.6333H32.8V18.45C32.8001 18.191 32.6538 17.9542 32.4221 17.8384L27.3333 15.2944V11.6167C27.3335 11.3115 27.1313 11.0432 26.8379 10.9593L17.7667 8.36742V0.683333C17.7667 0.305962 17.4607 0 17.0833 0H3.41667C3.0393 0 2.73333 0.305962 2.73333 0.683333V39.6333H0V41H41V39.6333H37.5833ZM16.4 39.6333H4.1V38.2667H10.25V36.9H4.1V34.1667H10.25V32.8H4.1V30.0667H10.25V28.7H4.1V25.9667H10.25V24.6H4.1V21.8667H10.25V20.5H4.1V17.7667H10.25V16.4H4.1V13.6667H10.25V12.3H4.1V9.56667H10.25V8.2H4.1V5.46667H10.25V4.1H4.1V1.36667H16.4V39.6333ZM25.9667 39.6333H17.7667V38.2667H22.55V36.9H17.7667V34.1667H22.55V32.8H17.7667V30.0667H22.55V28.7H17.7667V25.9667H22.55V24.6H17.7667V21.8667H22.55V20.5H17.7667V17.7667H22.55V16.4H17.7667V13.6667H22.55V12.3H17.7667V9.78943L25.9667 12.1319V39.6333ZM31.4333 39.6333H27.3333V38.2667H29.3833V36.9H27.3333V34.1667H29.3833V32.8H27.3333V30.0667H29.3833V28.7H27.3333V25.9667H29.3833V24.6H27.3333V21.8667H29.3833V20.5H27.3333V16.8223L31.4333 18.8723V39.6333ZM36.2167 34.5562C35.7577 34.0892 35.5107 33.4543 35.5333 32.8C35.5333 31.6889 36.1593 30.75 36.9 30.75C37.6407 30.75 38.2667 31.6889 38.2667 32.8C38.2888 33.4542 38.0419 34.0889 37.5833 34.5562V33.4833H36.2167V34.5562Z" fill="black"/> </svg>',
            constr:'<svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_1917_9454)"> <path d="M13.6499 27.2993H15.2557V28.9052H13.6499V27.2993Z" fill="black"/> <path d="M16.8613 27.2993H18.4672V28.9052H16.8613V27.2993Z" fill="black"/> <path d="M20.0732 27.2993H21.6791V28.9052H20.0732V27.2993Z" fill="black"/> <path d="M13.6499 30.5112H15.2557V32.1171H13.6499V30.5112Z" fill="black"/> <path d="M16.8613 30.5112H18.4672V32.1171H16.8613V30.5112Z" fill="black"/> <path d="M20.0732 30.5112H21.6791V32.1171H20.0732V30.5112Z" fill="black"/> <path d="M23.2847 30.5112H24.8905V32.1171H23.2847V30.5112Z" fill="black"/> <path d="M26.4966 30.5112H28.1024V32.1171H26.4966V30.5112Z" fill="black"/> <path d="M13.6499 33.7227H15.2557V35.3285H13.6499V33.7227Z" fill="black"/> <path d="M16.8613 33.7227H18.4672V35.3285H16.8613V33.7227Z" fill="black"/> <path d="M20.0732 33.7227H21.6791V35.3285H20.0732V33.7227Z" fill="black"/> <path d="M23.2847 33.7227H24.8905V35.3285H23.2847V33.7227Z" fill="black"/> <path d="M26.4966 33.7227H28.1024V35.3285H26.4966V33.7227Z" fill="black"/> <path d="M13.6499 36.9346H15.2557V38.5404H13.6499V36.9346Z" fill="black"/> <path d="M16.8613 36.9341H18.4672V38.5399H16.8613V36.9341Z" fill="black"/> <path d="M20.0732 36.9341H21.6791V38.5399H20.0732V36.9341Z" fill="black"/> <path d="M23.2847 36.9341H24.8905V38.5399H23.2847V36.9341Z" fill="black"/> <path d="M26.4966 36.9341H28.1024V38.5399H26.4966V36.9341Z" fill="black"/> <path d="M13.6494 40.146H15.2553V41.7518H13.6494V40.146Z" fill="black"/> <path d="M16.8613 40.146H18.4672V41.7518H16.8613V40.146Z" fill="black"/> <path d="M20.0732 40.146H21.6791V41.7518H20.0732V40.146Z" fill="black"/> <path d="M23.2847 40.146H24.8905V41.7518H23.2847V40.146Z" fill="black"/> <path d="M26.4966 40.146H28.1024V41.7518H26.4966V40.146Z" fill="black"/> <path d="M13.6494 43.3574H15.2553V44.9633H13.6494V43.3574Z" fill="black"/> <path d="M16.8613 43.3574H18.4672V44.9633H16.8613V43.3574Z" fill="black"/> <path d="M20.0732 43.3574H21.6791V44.9633H20.0732V43.3574Z" fill="black"/> <path d="M23.2847 43.3574H24.8905V44.9633H23.2847V43.3574Z" fill="black"/> <path d="M26.4966 43.3574H28.1024V44.9633H26.4966V43.3574Z" fill="black"/> <path d="M47.372 2.40924H41.7516V0.803404C41.7516 0.359997 41.3921 0.000488281 40.9487 0.000488281H32.9195C32.4761 0.000488281 32.1166 0.359997 32.1166 0.803404V2.40924H0.802916C0.359509 2.40924 0 2.76874 0 3.21215V6.42382C0 6.86761 0.359509 7.22673 0.802916 7.22673H3.21166V22.4821C3.21166 22.9259 3.57117 23.2851 4.01458 23.2851C4.45798 23.2851 4.81749 23.6446 4.81749 24.088C4.81749 24.5318 4.45798 24.8909 4.01458 24.8909C3.57117 24.8909 3.21166 24.5318 3.21166 24.088H1.60583C1.60818 24.6756 1.82655 25.2422 2.22017 25.6789L0.16074 28.424L0.170933 28.4319C0.0635118 28.5667 0.00352843 28.7334 0 28.9055V32.1171C0 32.3304 0.0846825 32.5343 0.235229 32.6848L1.84106 34.2906C1.99161 34.4412 2.19586 34.5259 2.40875 34.5259H5.62041C5.83329 34.5259 6.03755 34.4412 6.1881 34.2906L7.79393 32.6848C7.94447 32.5343 8.02916 32.3304 8.02916 32.1171V28.9055C8.02563 28.7334 7.96564 28.5667 7.85822 28.4319L7.86842 28.424L5.80898 25.6789C6.34531 25.083 6.5476 24.2581 6.34805 23.4819C6.14889 22.7056 5.57415 22.0807 4.81749 21.8168V7.22673H32.1166V8.02965C32.1166 8.47345 32.4761 8.83256 32.9195 8.83256H34.5254V46.5696H31.3137V14.453H29.7079V17.6646H24.8904V16.0588H23.2846V17.6646H18.4671V16.8617H16.8612V17.6646H12.0437V15.2559H22.4816V13.6501H12.0437V10.4384H10.4379V46.5696H9.16453L5.38518 42.7907C5.07154 42.477 4.56345 42.477 4.24981 42.7907L0.470458 46.5696H0V48.1754H48.1749V46.5696H47.5488C48.1138 45.9529 48.3145 45.0849 48.0777 44.2824C47.8413 43.4803 47.2019 42.86 46.3923 42.6483C46.8004 41.642 46.4852 40.4874 45.6219 39.8283C44.759 39.1693 43.5617 39.1693 42.6988 39.8283C41.8355 40.4874 41.5203 41.642 41.9284 42.6483C41.1188 42.86 40.4794 43.4803 40.243 44.2824C40.0062 45.0849 40.2069 45.9529 40.7719 46.5696H39.3429V8.83256H40.9487C41.3921 8.83256 41.7516 8.47345 41.7516 8.02965V7.22673H47.372C47.8154 7.22673 48.1749 6.86761 48.1749 6.42382V3.21215C48.1749 2.76874 47.8154 2.40924 47.372 2.40924V2.40924ZM4.41604 26.4967L5.62041 28.1025H2.40875L3.61312 26.4967H4.41604ZM6.42332 31.7851L5.28795 32.92H2.7412L1.60583 31.7851V29.7084H6.42332V31.7851ZM43.9196 4.01507L41.7516 5.46055V4.01507H43.9196ZM33.7225 1.60632H36.9341V4.81798H33.7225V1.60632ZM12.0437 4.17581L14.2118 5.6209H9.8757L12.0437 4.17581ZM7.22624 5.46055L5.05821 4.01507H9.39427L7.22624 5.46055ZM14.6932 4.01507H19.0293L16.8612 5.46055L14.6932 4.01507ZM21.6787 4.17581L23.8467 5.6209H19.5107L21.6787 4.17581ZM24.3282 4.01507H28.6642L26.4962 5.46055L24.3282 4.01507ZM1.60583 4.01507H2.16803L4.57678 5.6209H1.60583V4.01507ZM29.1457 5.6209L31.5544 4.01507H32.1166V5.6209H29.1457ZM37.737 43.9201L36.2919 41.7521L37.737 39.5845V43.9201ZM37.737 24.6502L36.2919 22.4821L37.737 20.3145V24.6502ZM36.1312 25.132L37.5763 27.2996L36.1312 29.4677V25.132ZM36.1312 19.8327V15.497L37.5763 17.6646L36.1312 19.8327ZM36.1312 34.767L37.5763 36.9346L36.1312 39.1027V34.767ZM37.737 34.2805L36.2919 32.1171L37.737 29.9495V34.2805ZM36.2919 12.8471L37.737 10.6795V15.0152L36.2919 12.8471ZM36.1312 10.1977V8.83256H37.04L36.1312 10.1977ZM29.7079 19.2705V27.2996H24.8904V19.2705H29.7079ZM23.2846 19.2705V26.1756L21.438 24.3506C21.2882 24.2028 21.0863 24.1193 20.8758 24.1185H18.4671V19.2705H23.2846ZM16.8612 19.2705V20.6089H12.0437V19.2705H16.8612ZM4.81749 44.4933L6.89378 46.5696H2.7412L4.81749 44.4933ZM12.0437 46.5696V22.2148H16.8612V24.9246C16.8612 25.3684 17.2207 25.7275 17.6641 25.7275H20.5457L23.5253 28.6738C23.675 28.8216 23.8769 28.9051 24.0875 28.9055H29.7079V46.5696H12.0437ZM36.1312 44.402L37.5763 46.5696H36.1312V44.402ZM45.7662 45.7667C45.3228 45.7667 44.9633 45.4076 44.9633 44.9638C44.9633 44.5204 45.3228 44.1609 45.7662 44.1609C46.2096 44.1609 46.5691 44.5204 46.5691 44.9638C46.5691 45.4076 46.2096 45.7667 45.7662 45.7667ZM44.1604 40.9492C44.6038 40.9492 44.9633 41.3087 44.9633 41.7521C44.9633 42.1959 44.6038 42.555 44.1604 42.555C43.7169 42.555 43.3574 42.1959 43.3574 41.7521C43.3574 41.3087 43.7169 40.9492 44.1604 40.9492ZM42.5545 44.1609C42.9979 44.1609 43.3574 44.5204 43.3574 44.9638C43.3574 45.4076 42.9979 45.7667 42.5545 45.7667C42.1111 45.7667 41.7516 45.4076 41.7516 44.9638C41.7516 44.5204 42.1111 44.1609 42.5545 44.1609ZM40.1458 7.22673H33.7225V6.42382H37.737C38.1804 6.42382 38.5399 6.0647 38.5399 5.6209V1.60632H40.1458V7.22673ZM44.4011 5.6209L46.5691 4.17581V5.6209H44.4011Z" fill="black"/> </g> <defs> <clipPath id="clip0_1917_9454"> <rect width="48.1753" height="48.1753" fill="white"/> </clipPath> </defs> </svg>',
            idOfDev: this.$route.params.id,
            a: require('../../../assets/img/recomandations/1.png'),
            b: require('../../../assets/img/recomandations/2.png'),
            fb: require('../../../assets/img/single-page-dev/fb.svg'),
            youtube: require('../../../assets/img/single-page-dev/yb.svg'),
            insta: require('../../../assets/img/single-page-dev/insta.svg'),
            site: require('../../../assets/img/single-page-dev/site.svg'),
            phone: require('../../../assets/img/single-page-dev/phone.svg'),
            logoArmon: require('../../../assets/img/single-page-dev/logoArmon.png'),
            phoneNumber: '+992933333886',
            devInfo: [],
            residencesOfDev:[],
        }
    },
    methods:{
        zoomUpdate(zoom) {
            this.currentZoom = zoom;
        },
        centerUpdate(center) {
            this.currentCenter = center;
        },
        latLng:function(lat , lng){
            return latLng(lat , lng)
        },
        pushArrayToJkh(residence){
            this.$router.push({name:"jkh", query:{item: residence.id}})
        },
        toShowContent(){
            this.contentShow = true
            this.lengthOfText = 1000000000000
        },
        toHideContent(){
            this.contentShow = false
            this.lengthOfTextMethod()
        },
        lengthOfTextMethod(){
            let widthScreen = window.screen.width
            if(widthScreen >= 1153){
                this.lengthOfText = 400
            }else if(widthScreen <= 1152 && widthScreen >= 992){
                this.lengthOfText = 260
            }else if(widthScreen <= 991 && widthScreen >= 768){
                this.lengthOfText = 950
            }
            else if(widthScreen <= 767 && widthScreen >= 600){
                this.lengthOfText = 800
            }
            else if(widthScreen <= 599 && widthScreen >= 428){
                this.lengthOfText = 500
            }
            else if(widthScreen <= 428 && widthScreen >= 375){
                this.lengthOfText = 400
            }
        }
    },
    created(){
        this.lengthOfTextMethod()
    },
    filters:{
        truncate(value, length, suffix){
            let numberOf = 400
            if(value.length > numberOf){
                return value.substring(0, length) + suffix
            }else{
                return value
            }
        }
    },
    mounted(){
        sessionStorage.setItem('currIdDeveloper', this.idOfDev)
        let currDevId = sessionStorage.getItem('currIdDeveloper')
        let currentIdDev = parseInt(currDevId)
        axios.get(config.BASE_URL + 'developer/' + currentIdDev)
        .then(resp=>{
            this.devInfo = resp.data.data
        })
        axios.get(config.BASE_URL + 'residence')
        .then(resp=>{
            this.residencesOfDev =  resp.data.data
            let allResidences =  resp.data.data
            let justByDeveloper = allResidences.filter(idOfDeveloper => idOfDeveloper.developer_id === currentIdDev)
            this.residencesOfDev = justByDeveloper
        })
    },
    destroyed(){

    }

}
</script>
