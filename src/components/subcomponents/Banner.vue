<template>
    <div class="banner">
        <VueSlickCarousel v-bind="settings" :arrows="false" :dots="false">
            <div class="secondBanner">
                <div class="container">
                    <div class="wrapper-banner">
                        <div class="wrapper-banner__info">
                            <div class="wrapper-banner__content">
                                <h1>
                                    Лучшие предложения
                                </h1>
                                <p>
                                    от застройщиков в одном месте
                                </p>
                            </div>
                        </div>
                    </div>
                    <img class="imgBanner" :src="parvizImg" alt="">
                </div>
            </div>
            <div class="firstBanner">
                <div class="container">
                    <div class="wrapper-banner">
                        <div class="wrapper-banner__info">
                            <div class="wrapper-banner__content">
                                <h1>
                                    Лучшие предложения
                                </h1>
                                <p>
                                    от застройщиков в одном месте
                                </p>
                            </div>
                        </div>
                    </div>
                    <img class="imgBanner" :src="girlImg" alt="">
                </div>
            </div>
             
        </VueSlickCarousel>
        
    </div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
    components: { VueSlickCarousel   },
    data() {
        return {
            parvizImg: require('../../assets/img/banner/sukhrob.png'),
            girlImg: require('../../assets/img/banner/girls.png'),
            settings:{
                autoplay:true,
                autoplaySpeed: 3000
            }, 
            
        }
    },
    
}
</script>
<style >
    
</style>