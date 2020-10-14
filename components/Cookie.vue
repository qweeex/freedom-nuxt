<template>
  <div>
    <div class="cookie" :class="{ cookieHidden: showCookie }">
      <div class="cookie-title">
        <span v-if="lang === 'ru'">Cookie это наше все</span>
        <span v-if="lang === 'en'">Cookies are our everything</span>
        <span v-if="lang === 'port'">Cookie é o nosso tudo</span>
      </div>
      <div class="cookie-desc">
        <span v-if="lang === 'ru'">Данный сайт использует куки, хочешь ли ты того или нет, а он будет их использовать</span>
        <span v-if="lang === 'en'">This site uses cookies, whether you want it to or not, and it will use them</span>
        <span v-if="lang === 'port'">Este site usa cookies, quer você queira ou não, e ele os usará</span>
      </div>
      <div class="cookie-btn">
        <span v-if="lang === 'ru'" @click="showCookie = true">Понял, принял</span>
        <span v-if="lang === 'en'" @click="showCookie = true">Okay</span>
        <span v-if="lang === 'port'" @click="showCookie = true">Está bem.</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cookie",
  props: ['lang'],
  data(){
    return{
      showCookie: true
    }
  }
}
</script>

<style scoped lang="less">
  .cookieHidden{
    left: -100% !important;
  }
  .cookie{
    position: fixed;
    left: 25px;
    bottom: 25px;
    z-index: 100;
    max-width: 420px;
    width: 100%;
    background: #fff;
    border-radius: 10px;
    padding: 25px;
    box-shadow: 0px 0px 10px lightgray;
    transition: all 0.4s;
    &-title{
      padding-bottom: 15px;
      span{
        font-weight: bold;
        font-size: 27px;
        line-height: 116%;
        color: #000000;
      }
    }
    &-desc{
      span{
        font-size: 17px;
        line-height: 1.2;
        color: #000000;
      }
    }
    &-btn{
      padding-top: 25px;
      span{
        cursor: pointer;
        font-weight: bold;
        font-size: 20px;
        position: relative;
        padding-left: 10px;
        padding-right: 10px;
        &::after{
          border: 2px solid #000;
          display: block;
          width: calc(100% - 2px);
          position: absolute;
          left: 0;
          bottom: -7px;
          content: '';
          height: 0;
          transition: all 0.4s;
          background: transparent;
        }
        &:hover{
          color: #fff;
          &::after{
            background: #000;
            height: 33px;
            z-index: -1;
          }
        }
      }
    }
  }
  @media (max-width: 600px) {
    .cookie{
      max-width: 74%;
    }
  }
</style>
