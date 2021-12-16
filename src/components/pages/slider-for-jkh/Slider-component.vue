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
            arrow: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 8v-4l8 8-8 8v-4h-5v-8h5zm-7 0h-2v8h2v-8zm-4.014 0h-1.986v8h1.986v-8zm-3.986 0h-1v8h1v-8z"/></svg>',
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