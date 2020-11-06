<template>
  <div>
    <notifications group="brief" />
    <section class="document">
      <div class="document-title">
        <p v-if="lang === 'ru'" class="document-title__text" @click="$store.commit('brief/showPopup')">
          ХОЧУ<br />ЗАПОЛНИТЬ БРИФ
        </p>
        <p v-if="lang === 'en'" class="document-title__text" @click="$store.commit('brief/showPopup')">
          I want <br>to fill a brief
        </p>
        <p v-if="lang === 'port'" class="document-title__text" @click="$store.commit('brief/showPopup')">
          Quero <br>preencher o brief
        </p>
      </div>
      <div class="document-img"><img @click="$store.commit('brief/showPopup')" src="~/assets/img/brif.svg" alt="" /></div>
    </section>
    <section class="phone">
      <div class="phone-img"><img @click="$store.commit('callback/showPopup')" src="~/assets/img/phone.svg" alt="" /></div>
      <div class="phone-title">
        <p v-if="lang === 'ru'" class="phone-title__text" @click="$store.commit('callback/showPopup')">
          ХОЧУ, чтобы<br />мне перезвонили
        </p>
        <p v-if="lang === 'en'" class="phone-title__text" @click="$store.commit('callback/showPopup')">
          Please <br>call me back
        </p>
        <p v-if="lang === 'port'" class="phone-title__text" @click="$store.commit('callback/showPopup')">
          Quero <br>receber ligação
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HandsBlock",
  props: ['lang'],
  methods: {
    HandsAnimate(){
      window.addEventListener('scroll', function(){
        //let HandsOneTopOffset = document.querySelector('.document').getBoundingClientRect().top + document.body.scrollTop;
        let HandsOneTopOffset = document.querySelector('.document').getBoundingClientRect().top;
        if (HandsOneTopOffset <= 200){
          document.querySelector('.document-img img').style.left = 0;
          document.querySelector('.phone-img img').style.left = 0;
        }
      })
    }
  },
  mounted() {
    this.HandsAnimate();
  }
}
</script>

<style scoped lang="less">
  .document-img{
    overflow: hidden;
    img{
      transition: all 0.7s;
      left: 100%;
      position: relative;
    }
  }
  .phone-img{
    overflow: hidden;
    img{
      left: -100%;
      position: relative;
      transition: all 0.7s;
    }
  }
</style>
