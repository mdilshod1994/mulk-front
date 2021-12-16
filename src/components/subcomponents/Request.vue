<template>
    <div class="request" @click="openRequestForm">
        <div class="container container_padding" >
            <div class="wrapper-request">
                <div class="wrapper__content">
                    <h1>
                        Хотите добавить свой ЖК?
                    </h1>
                    <p>
                        Заполните заявку и мы с вами свяжемся
                    </p>
                </div>
                <img :src="man" alt="">
            </div>
        </div>
        <div class="request-form-modal" :class="{active : isActive}">
            <div class="request-form-modal__body">2
                <img class="request-form-modal__btn_close" :src="clsBtn" alt="">
                <div class="request-form-modal__content" @click.prevent="openRequestForm">
                    <h2 class="request-form-modal__title">
                        Заполните заявку и мы свяжемся с вами в ближайшее время
                    </h2>
                    <form class="form-send-req">
                        <input type="name" placeholder="Имя и Фамилия">
                        <input type="tel" class="form-control" id="telephone">
                        <input type="submit" class="form-send-req__btn form-send-req__btn_main" value="отправить">
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import 'intl-tel-input/build/css/intlTelInput.css';
import 'intl-tel-input/build/js/intlTelInput.js';
import intlTelInput from 'intl-tel-input';

export default {
    data(){
        return{
            clsBtn: require('../../assets/img/channel/close.svg'),
            man: require('../../assets/img/request/1.png'),
            isActive: false
        }
    },
    methods:{
        openRequestForm(){
            this.isActive = !this.isActive
        }
    },
    mounted(){
        const input = document.querySelector("#telephone");
        intlTelInput(input, {
            // any initialisation options go here
            preferredCountries: ["tj", "us", "ru"],
        })
    }
}
</script>