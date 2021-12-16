<template>
    <div class="error-page">
        <Header class="descTop-version"/>
            <div class="wrapper-error-page">
                <img :src="imgError" alt="">
                <h1>
                    Opps.. Page is under construction
                </h1>
                <button>
                    Перейти на главную
                </button>
            </div>
        <Footer />
    </div>
</template>
<script>
import Header from '../subcomponents/Header.vue'
import Footer from '../subcomponents/Footer.vue'

export default({
    components:{
        Header,
        Footer
    },
    data() {
        return{
            imgError: require('../../assets/img/error/1.png')
        }
    },
})
</script>

<style>
.error-page{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
.wrapper-error-page{
    height: 730px;
    background: linear-gradient(to top, rgb(255 255 255), rgb(255 255 255 / 85%), rgb(255 255 255 / 85%)), url('../../assets/img/error/bg.svg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 50px;
}
.wrapper-error-page h1{
    margin: 50px 0 36px;
    text-align: center;
    color: #000;
}
.wrapper-error-page button{
    font-weight: bold;
    font-size: 18px;
    padding: 0 28px;
    border-radius: 16px;
    border: none;
    outline: none;
    height: 40px;
    background: #E52621;
    color: #fff;
}
@media (max-width: 992px){
    .error-page .footer{
        display: none;
    }
}
@media (max-width: 428px){
    .wrapper-error-page{
        padding: 0 22px;
    }
}

</style>
