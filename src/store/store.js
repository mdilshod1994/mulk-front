import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.use(Vuex)

var config = require('../../config/prod.env')

const store = new Vuex.Store({
    state:{
        districts:[],
        developers:[],
        newBuildings:[],
        videos:[]
    },
    mutations:{
        SET_DISTRICTS_TO_STATE:( state, districts) => {
            state.districts = districts
        },
        SET_DEVELOPERS_TO_STATE:(state, developers)=>{
            state.developers = developers
        },
        SET_NEW_BUILDING_TO_STATE:(state, newBuildings)=>{
            state.newBuildings = newBuildings
        },
        SET_VIDEO_TO_STATE:(state, videos)=>{
            state.videos = videos
        },
    },
    actions:{
        GET_DISTRICTS({commit}){
            return axios(config.BASE_URL + 'district', {
                method:"GET"
            })
            .then((districts)=>{
                commit('SET_DISTRICTS_TO_STATE', districts.data.data)
                return districts;
            })
            .catch((error)=>{
                console.log(error);
                return error
            })
        },
        GET_DEVELOPERS({commit}){
            return axios(config.BASE_URL + 'developer', {
                method: "GET"
            })
            .then((developers)=>{
                commit('SET_DEVELOPERS_TO_STATE', developers.data.data)
                return developers;
            })
            .catch((error)=>{
                console.log(error)
                return error;
            })
        },
        GET_NEW_BUILDING({commit}){
            return axios(config.BASE_URL + 'residence', {
                method: "GET"
            })
            .then((newBuildings)=> {
                commit('SET_NEW_BUILDING_TO_STATE', newBuildings.data.data)
                return newBuildings
            })
            .catch((error)=>{
                console.log(error);
                return error
            })
        },
        GET_VIDEO({commit}){
            return axios(config.BASE_URL + 'youtube', {
                method: "GET"
            })
            .then((videos) =>{
                commit('SET_VIDEO_TO_STATE', videos.data.data)
                return videos
            })
            .catch((error)=>{
                console.log(error);
                return error
            })
        }
    },
    getters:{
        DISTRICTS(state){
            return state.districts
        },
        DEVELOPERS(state){
            return state.developers
        },
        NEWBUILDINGS(state){
            return state.newBuildings
        },
        VIDEOS(state){
            return state.videos
        }
    }
})
export default store
