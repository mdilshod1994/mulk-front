<template>
    <div class="wrapper-magnif-popup__content">
        <div class="slider-popup-jkh">
            <SliderItem 
                v-for="(item, index) in slidersImages_data"
                :key="item.id"
                :slidersImg_data="item"
                v-show="currIndexImg === index"
            />
        </div>
        <button @click="prevSliderJkh" class="wrapper-magnif-popup__prev" v-html="arrow">
            {{ arrow }}
        </button>
        <button @click="nextSliderJkh" class="wrapper-magnif-popup__next" v-html="arrow">
            {{ arrow }}
        </button>
        <div class="pagination-slider-jkh">
            <span v-for="(item, index) in slidersImages_data" :key="item.id" @click="currIndexToShow(index)"> 
                <img  :class="{active : currIndexImg === index}" :src="urlLink + item.image" alt="">    
            </span>
        </div>
    </div>
</template>

<script>
import SliderItem from './Slider-component-item.vue'

export default {
    props:{
        slidersImages_data:{
            typeof:Array,
            default: () => []
        }
    },
    components:{
        SliderItem
    },
    data(){
        return{
            arrow: '<svg width="29" height="46" viewBox="0 0 29 46" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M27.1821 18.5643L10.6089 1.83783C8.18095 -0.612608 4.24896 -0.612608 1.82098 1.83783C-0.606994 4.28408 -0.606994 8.26081 1.82098 10.7071L13.9981 23.001L1.82098 35.2909C-0.606994 37.7413 -0.606994 41.7096 1.82098 44.1601C3.03082 45.3895 4.62185 46 6.21288 46C7.80391 46 9.39493 45.3895 10.6089 44.1643L27.1821 27.4378C29.606 24.9873 29.606 21.0148 27.1821 18.5643Z" fill="#D1D1D1" fill-opacity="0.6"/> </svg>',
            urlLink: 'http://dashboard.mulk.tj/uploads/',
            currIndexImg: 0
        }
    },
    methods:{
        prevSliderJkh(){
            if(this.currIndexImg === 0){
                this.currIndexImg = this.slidersImages_data.length - 1
            }else{
                this.currIndexImg--
            }
        },
        nextSliderJkh(){
            if(this.currIndexImg >= this.slidersImages_data.length -1){
                this.currIndexImg = 0
            }else{
                this.currIndexImg++
            }
        },
        currIndexToShow(index){
            this.currIndexImg = index
        }
    }
}
</script>