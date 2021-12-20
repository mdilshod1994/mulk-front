<template>
    <div class="new-buildings">
        <Header class="descTop-version"/>
            <div class="container">
                <div class="search-form">
                    <form action="">
                        <input type="search" v-model="searchResidence" class="search-input" placeholder="Поиск" name="search" id="search">
                        <input @click="filtredSearch" class="search-btn" value="НАЙТИ">
                    </form>
                </div>
                <div class="result-search">
                    <div class="wrapper-result-search">
                        <div class="wrapper-result__list" :class="{active : fadeIn}">
                            <div v-for="building in this.nextPageResidence" :key="building.id" @click="pushArrayToJkh(building)" :class="{active : fadeIn}" class="wrapper-recommendations__item wrapper-recommendations__item_new_building" >
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
                                </div>
                            </div>
                        </div>
                    </div>
                    <paginate
                        v-model="currentPage"
                        :click-handler="clickCallback"
                        :container-class="'pagination'"
                        :margin-pages="2"
                        :next-text="'>'"
                        :page-class="'page-items'"
                        :page-count="totalPage"
                        :page-range="2"
                        :prev-text="'<'">
                    </paginate>
                </div>
            </div>
        <Footer />
        <MobileNavbar />
    </div>
</template>

<script>
import Vue from 'vue'
import Header from '../subcomponents/Header.vue'
import Footer from '../subcomponents/Footer.vue'
import MobileNavbar from '../subcomponents/Mob-navbar.vue'
import { mapActions, mapGetters } from 'vuex'
import axios from 'axios'
var config = require('../../../config/prod.env')
import Paginate from 'vuejs-paginate'
Vue.component('paginate', Paginate)

export default {
    components:{
        Header,
        Footer,
        MobileNavbar
    },
    data() {
        return{
            a: require('../../assets/img/recomandations/1.png'),
            b: require('../../assets/img/recomandations/2.png'),
            c: require('../../assets/img/recomandations/3.png'),
            d: require('../../assets/img/recomandations/4.png'),
            e: require('../../assets/img/recomandations/5.png'),
            f: require('../../assets/img/recomandations/6.png'),
            g: require('../../assets/img/recomandations/7.png'),
            h: require('../../assets/img/recomandations/8.png'),
            searchResidence: '',
            fadeIn: false,
            showButtonMore: false,
            residences:[],
            totalPage: 1,
            currentPage: 1,
            filtredSearchArray: [],
            serchArray: this.$route.query.searchResidence
        }
    },
    computed:{
        ...mapGetters(['NEWBUILDINGS']),

        nextPageResidence(){
            if(this.$route.query.searchResidence != undefined){
                 axios.get(config.BASE_URL + `residence/filter?searchResidence=${this.$route.query.searchResidence}`)
                .then((res)=>{
                    this.filtredSearchArray = res.data.data
                })
            }

            if(this.filtredSearchArray.length > 0){
                return this.filtredSearchArray
            }else if(this.filtredSearchArray.length === 0 ){
                return this.residences
            }else{
                return this.residences
            }
            // return this.filtredSearchArray.length > 0 ? this.filtredSearchArray : this.residences
        }
    },
    methods:{
        ...mapActions(['GET_NEW_BUILDING']),
        clickCallback(){
            // this.$router.push({name:"newbuildings?page=", params: { currentPage : this.currentPage }})
            sessionStorage.setItem('currPage', this.currentPage)
            let currentPageFromStorage = sessionStorage.getItem('currPage')
            let toNumber = parseInt(currentPageFromStorage, 10);
            this.currentPage = toNumber
            this.$router.push({ path: 'residences', query: { page: this.currentPage } })
            axios.get(config.BASE_URL + `residence?page=${this.currentPage}`)
            .then((res)=>{
                this.totalPage = res.data.meta.last_page
                this.residences = res.data.data
            })
        },
        navigate(location) {
            this.internalNavigation = true;
            this.$router.push(location, function () {
            this.internalNavigation = false;
            }.bind(this));
        },
        pushArrayToJkh(building){
            this.$router.push({name:"jkh", query:{item: building.id}})
        },
        filtredSearch(){

            this.$router.push({path: '/residences', query:{ searchResidence: this.searchResidence }})
            axios.get(config.BASE_URL + `residence/filter?searchResidence=${this.searchResidence}`)
            .then((res)=>{
                this.filtredSearchArray = res.data.data
            })


        }
    },
    created(){
        let currLink = this.$route.name
        if (currLink === "residences") {
            let currentPageFromStorage = sessionStorage.getItem('currPage')
            let toNumber = parseInt(currentPageFromStorage, 10);
            this.currentPage = toNumber
            this.$router.push({ path: 'residences', query: { page: this.currentPage,  searchResidence: this.$route.query.searchResidence} })
            axios.get(config.BASE_URL + `residence?page=${this.currentPage}`)
            .then((res)=>{
                this.totalPage = res.data.meta.last_page
                this.residences = res.data.data
            })
        } else {
        }
    },
    mounted(){
        this.GET_NEW_BUILDING()
        axios.get(config.BASE_URL + `residence?page=${this.$route.query.page}`)
        .then((res)=>{
            this.residences = res.data.data
            this.totalPage = res.data.meta.last_page
        })
        let currentPageFromStorage = sessionStorage.getItem('currPage')
        let toNumber = parseInt(currentPageFromStorage, 10);
        this.currentPage = toNumber
    }
}
</script>
