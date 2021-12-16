
<template>
    <div class="slider-popup-jkh__item" :style="{'background': 'url('+ urlLink + slidersImg_data.image +')'}">
        <!-- <img :src="urlLink + slidersImg_data.image" alt=""> -->
    </div>
</template>

<script>
export default {
    props:{
        slidersImg_data:{
            typeof:Object
        }
    },
    components:{

    },
    data(){
        return{
            urlLink: 'http://dashboard.mulk.tj/uploads/',
        }
    }
}
</script>