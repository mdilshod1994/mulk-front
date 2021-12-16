<template>
    <div class="districts">
        <div class="container">
            <div class="wrapper-districts">
                <router-link :to="'/newbuildings'" class="wrapper-districts-block" v-for="district in reverseDistricts" :key="district.id">
                    <div class="wrapper-districts-content">
                        <p>
                            Район
                        </p>
                        <h2 class="title-of-sections">
                            {{ district.name }}
                        </h2>
                    </div>
                    <div class="wrapped-img" v-html="district.img">
                        <img :src="district.img" alt="">
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>

import {mapActions, mapGetters} from 'vuex'

export default {
    data(){
        return{

        }
    },
    computed:{
        ...mapGetters([
            'DISTRICTS'
        ]),
        reverseDistricts(){
            return this.DISTRICTS.slice().reverse()
        }
    },
    methods:{
        ...mapActions([
            'GET_DISTRICTS'
        ])
    },
    mounted(){
       this.GET_DISTRICTS()
    }
}
</script>

<style>

</style>
