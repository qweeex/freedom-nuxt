<template>
  <div>
    <section class="document">
      <div class="document-title">
        <p class="document-title__text">ХОЧУ<br />ЗАПОЛНИТЬ БРИФ</p>
      </div>
      <div class="document-img"><img src="~/assets/img/brif.svg" alt="" /></div>
    </section>
    <section class="phone">
      <div class="phone-img"><img src="~/assets/img/phone.svg" alt="" /></div>
      <div class="phone-title">
        <p class="phone-title__text">ХОЧУ, чтобы<br />мне перезвонили</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HandsBlock",
  methods: {
    HandsAnimate(){
      window.addEventListener('scroll', function(){
        let HandsOneTopOffset = document.querySelector('.document').getBoundingClientRect().top + document.body.scrollTop;
        if (HandsOneTopOffset <= 50){
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
