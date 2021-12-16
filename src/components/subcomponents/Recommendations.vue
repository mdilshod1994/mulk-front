<template>
    <div class="section-recommendation">
        <div class="recommendations">
            <div class="container container_slider">
                <div class="wrap-double">
                    <div class="wrapper-recomandations">
                        <p class="wrapper-recommendations_text">
                            Мы рекомендуем
                        </p>
                        <h2 class="wrapper-recommendations_title title-of-sections">
                            новостройки таджикистана
                        </h2>
                        <div class="wrapper-slider-recomandtaion">
                            <div class="wrapper-recommendations__list" >
                                <div v-for="building in this.newRecomandations" :key="building.id" @click="pushArrayToJkh(building)" :class="{active : fadeIn}" class="wrapper-recommendations__item" >
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
                                    <img class="wrapper-recommendations__img" :src="building.img" alt="">
                                    <div class="wrapper-recommendations__content">
                                        <h3 class="wrapper-recommendations__title">
                                            {{ building.name }}
                                        </h3>
                                        <p class="wrapper-recommendations__text wrapper-recommendations__text_mb">
                                            {{ building.description }}
                                        </p>
                                        <p class="wrapper-recommendations__text">
                                            44 - 108 м2     <span>2 ... 3 комнаты</span>
                                        </p>
                                        <a :href="`tel:${building.phone_number}`" @click.stop="" class="wrapper-recommendations__content_tel">
                                            <span v-html="residenceTel" >
                                                {{ residenceTel }}
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="wrapper-recomandations" id="wrapper-recommendations_second">
                        <h2 class="wrapper-recommendations_title title-of-sections">
                            популярные
                        </h2>
                        <div class="wrapper-slider-recomandtaion">
                            <div class="wrapper-recommendations__list" >
                                <div v-for="building in this.testNewRecomandations" :key="building.id" @click="pushArrayToJkh(building)" :class="{active : fadeIn}" class="wrapper-recommendations__item" >
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
                                    <img class="wrapper-recommendations__img" :src="building.img" alt="">
                                    <div class="wrapper-recommendations__content">
                                        <h3 class="wrapper-recommendations__title">
                                            {{ building.name }}
                                        </h3>
                                        <p class="wrapper-recommendations__text wrapper-recommendations__text_mb">
                                            {{ building.description }}
                                        </p>
                                        <p class="wrapper-recommendations__text">
                                            44 - 108 м2     <span>2 ... 3 комнаты</span>
                                        </p>
                                        <a :href="`tel:${building.phone_number}`" @click.stop="" class="wrapper-recommendations__content_tel">
                                            <span v-html="residenceTel" >
                                                {{ residenceTel }}
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         <router-link class="wrapper-slider-recommendation__link" id="second" to="/newbuildings">
            ещё
        </router-link>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    data() {
        return {
            residenceTel:'<svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="secondLine" d="M24 11.0001H21.6C21.599 10.2047 21.2195 9.44212 20.5445 8.87968C19.8696 8.31724 18.9545 8.00092 18 8.00012V6.00012C19.5907 6.00171 21.1157 6.529 22.2405 7.46634C23.3653 8.40368 23.9981 9.67453 24 11.0001Z" fill="#F8F8F8"/><path id="firstLine" d="M28 11.0001H25.7778C25.7754 8.93805 24.9552 6.96111 23.4971 5.503C22.039 4.04489 20.0621 3.2247 18 3.22234V1.00012C20.6513 1.00306 23.1931 2.05758 25.0678 3.9323C26.9425 5.80703 27.9971 8.34886 28 11.0001Z" fill="#F8F8F8"/><path id="mainPhone" d="M19.3326 20.6153L21.8312 18.1168C22.1656 17.7823 22.5909 17.5532 23.0542 17.4581C23.5176 17.3629 23.9987 17.4058 24.4379 17.5814L27.4808 18.7994C27.9293 18.9789 28.3137 19.2886 28.5845 19.6886C28.8553 20.0886 29 20.5606 29 21.0436V26.5772C29.0008 26.9061 28.9344 27.2317 28.805 27.5341C28.6756 27.8365 28.4858 28.1092 28.2473 28.3357C28.0089 28.5622 27.7267 28.7376 27.418 28.8513C27.1094 28.9649 26.7808 29.0144 26.4524 28.9966C5.1232 27.6692 0.815423 9.6039 0.015663 2.68606C-0.0230717 2.34786 0.010234 2.00529 0.11339 1.68089C0.216545 1.35648 0.387214 1.05759 0.614168 0.803877C0.841123 0.550161 1.11922 0.347369 1.43017 0.208839C1.74112 0.0703087 2.07788 -0.000819826 2.41829 0.000131488H7.85376C8.33681 0.000115977 8.8088 0.144837 9.20882 0.415625C9.60884 0.686413 9.91855 1.07085 10.098 1.51933L11.3149 4.5622C11.4905 5.00142 11.5334 5.48252 11.4383 5.94588C11.3431 6.40924 11.114 6.83449 10.7795 7.16894L8.28097 9.66748C8.28097 9.66748 9.66632 19.4073 19.3326 20.6153Z" fill="#F8F8F8"/></svg>',
            built:'<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.8 3.66666H13.9333V5.13332H19.8V20.5333H13.9333V22H21.2667V5.13332C21.2667 4.74434 21.1122 4.37129 20.8371 4.09623C20.5621 3.82118 20.189 3.66666 19.8 3.66666Z" fill="white"/><path d="M11.6453 0H1.55467C1.14234 0 0.746908 0.163795 0.455351 0.455351C0.163795 0.746908 0 1.14234 0 1.55467V22H13.2V1.55467C13.2 1.14234 13.0362 0.746908 12.7446 0.455351C12.4531 0.163795 12.0577 0 11.6453 0ZM11.7333 20.5333H9.53333V18.3333H3.66667V20.5333H1.46667V1.55467C1.46667 1.54311 1.46894 1.53167 1.47337 1.52099C1.47779 1.51031 1.48427 1.50061 1.49244 1.49244C1.50061 1.48427 1.51031 1.47779 1.52099 1.47337C1.53167 1.46894 1.54311 1.46667 1.55467 1.46667H11.6453C11.6569 1.46667 11.6683 1.46894 11.679 1.47337C11.6897 1.47779 11.6994 1.48427 11.7076 1.49244C11.7157 1.50061 11.7222 1.51031 11.7266 1.52099C11.7311 1.53167 11.7333 1.54311 11.7333 1.55467V20.5333Z" fill="white"/><path d="M2.93335 3.66666H4.40002V5.13332H2.93335V3.66666Z" fill="white"/><path d="M5.86664 3.66666H7.3333V5.13332H5.86664V3.66666Z" fill="white"/><path d="M8.79999 3.66666H10.2667V5.13332H8.79999V3.66666Z" fill="white"/><path d="M2.93335 7.33334H4.40002V8.80001H2.93335V7.33334Z" fill="white"/><path d="M5.86664 7.33334H7.3333V8.80001H5.86664V7.33334Z" fill="white"/><path d="M8.79999 7.33334H10.2667V8.80001H8.79999V7.33334Z" fill="white"/><path d="M2.93335 11H4.40002V12.4667H2.93335V11Z" fill="white"/><path d="M5.86664 11H7.3333V12.4667H5.86664V11Z" fill="white"/><path d="M8.79999 11H10.2667V12.4667H8.79999V11Z" fill="white"/><path d="M2.93335 14.6667H4.40002V16.1333H2.93335V14.6667Z" fill="white"/><path d="M5.86664 14.6667H7.3333V16.1333H5.86664V14.6667Z" fill="white"/><path d="M8.79999 14.6667H10.2667V16.1333H8.79999V14.6667Z" fill="white"/><path d="M13.9333 7.33334H15.4V8.80001H13.9333V7.33334Z" fill="white"/><path d="M16.8666 7.33334H18.3333V8.80001H16.8666V7.33334Z" fill="white"/><path d="M13.9333 11H15.4V12.4667H13.9333V11Z" fill="white"/><path d="M16.8666 11H18.3333V12.4667H16.8666V11Z" fill="white"/><path d="M13.9333 14.6667H15.4V16.1333H13.9333V14.6667Z" fill="white"/><path d="M16.8666 14.6667H18.3333V16.1333H16.8666V14.6667Z" fill="white"/></svg>',
            a: require('../../assets/img/recomandations/1.png'),
            b: require('../../assets/img/recomandations/2.png'),
            c: require('../../assets/img/recomandations/3.png'),
            d: require('../../assets/img/recomandations/4.png'),
            e: require('../../assets/img/recomandations/5.png'),
            f: require('../../assets/img/recomandations/6.png'),
            g: require('../../assets/img/recomandations/7.png'),
            h: require('../../assets/img/recomandations/8.png'),
            fadeIn: false,
        }
    },
    computed:{
        ...mapGetters(['NEWBUILDINGS']),
        testNewRecomandations(){
            const size = 8
            let testreversedArra = this.NEWBUILDINGS
            let reversArray = testreversedArra.reverse()
            return reversArray.slice(0, size)
        },
        newRecomandations(){
            const size = 8
            let reversedArra = this.NEWBUILDINGS
            return reversedArra.slice(0, size)
        }
    },
    methods:{
        ...mapActions(['GET_NEW_BUILDING']),
        pushArrayToJkh(building){
            this.$router.push({path:'/residence/' + building.id})
        },
    },
    mounted(){
        this.GET_NEW_BUILDING()
    }
}
</script>
