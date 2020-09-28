<template>
    <div class="keys-logo">
        <div v-if="CheckDevice === false" v-swiper:mySwiper="swiperOptions" class="keys-logo__slider swiper-container">
            <div class="swiper-wrapper">
                <div class="logo-slide swiper-slide"><img src="~/assets/img/logo/logo-1.png" alt="" /></div>
                <div class="logo-slide swiper-slide"><img src="~/assets/img/logo/logo-2.png" alt="" /></div>
                <div class="logo-slide swiper-slide"><img src="~/assets/img/logo/logo-3.png" alt="" /></div>
                <div class="logo-slide swiper-slide"><img src="~/assets/img/logo/logo-4.png" alt="" /></div>
                <div class="logo-slide swiper-slide"><img src="~/assets/img/logo/logo-5.png" alt="" /></div>
                <div class="logo-slide swiper-slide"><img src="~/assets/img/logo/logo-6.png" alt="" /></div>
                <div class="logo-slide swiper-slide"><img src="~/assets/img/logo/logo-7.png" alt="" /></div>
                <div class="logo-slide swiper-slide"><img src="~/assets/img/logo/logo-1.png" alt="" /></div>
                <div class="logo-slide swiper-slide"><img src="~/assets/img/logo/logo-2.png" alt="" /></div>
                <div class="logo-slide swiper-slide"><img src="~/assets/img/logo/logo-3.png" alt="" /></div>
                <div class="logo-slide swiper-slide"><img src="~/assets/img/logo/logo-4.png" alt="" /></div>
                <div class="logo-slide swiper-slide"><img src="~/assets/img/logo/logo-5.png" alt="" /></div>
                <div class="logo-slide swiper-slide"><img src="~/assets/img/logo/logo-6.png" alt="" /></div>
                <div class="logo-slide swiper-slide"><img src="~/assets/img/logo/logo-7.png" alt="" /></div>
            </div>
        </div>
      <div v-else v-swiper:mySwiper2="swiperMobile" class="keys-logo__slider swiper-container">
        <div class="swiper-wrapper">
          <div class="logo-slide swiper-slide"><img src="~/assets/img/logo/logo-1.png" alt="" /></div>
          <div class="logo-slide swiper-slide"><img src="~/assets/img/logo/logo-2.png" alt="" /></div>
          <div class="logo-slide swiper-slide"><img src="~/assets/img/logo/logo-3.png" alt="" /></div>
          <div class="logo-slide swiper-slide"><img src="~/assets/img/logo/logo-4.png" alt="" /></div>
          <div class="logo-slide swiper-slide"><img src="~/assets/img/logo/logo-5.png" alt="" /></div>
          <div class="logo-slide swiper-slide"><img src="~/assets/img/logo/logo-6.png" alt="" /></div>
          <div class="logo-slide swiper-slide"><img src="~/assets/img/logo/logo-7.png" alt="" /></div>
          <div class="logo-slide swiper-slide"><img src="~/assets/img/logo/logo-1.png" alt="" /></div>
          <div class="logo-slide swiper-slide"><img src="~/assets/img/logo/logo-2.png" alt="" /></div>
          <div class="logo-slide swiper-slide"><img src="~/assets/img/logo/logo-3.png" alt="" /></div>
          <div class="logo-slide swiper-slide"><img src="~/assets/img/logo/logo-4.png" alt="" /></div>
          <div class="logo-slide swiper-slide"><img src="~/assets/img/logo/logo-5.png" alt="" /></div>
          <div class="logo-slide swiper-slide"><img src="~/assets/img/logo/logo-6.png" alt="" /></div>
          <div class="logo-slide swiper-slide"><img src="~/assets/img/logo/logo-7.png" alt="" /></div>
        </div>
      </div>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

    export default {
        name: "Logo",
        components: {
            Swiper,
            SwiperSlide
        },
        data() {
            return{
                swiperMobile: {
                  slidesPerView: 3,
                  direction: 'horizontal',
                  spaceBetween: 35,
                  slidesOffsetBefore: 15
                },
                swiperOptions:{
                    direction: 'vertical',
                    slidesPerView: 7,
                    breakpoints: {
                        1300:{
                          direction: 'vertical',
                          slidesPerView: 5,
                          spaceBetween: 0,
                        }
                    }
                }
            }
        },
        methods: {
          CheckDevice(){
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
          }
        },
        mounted() {
          if (this.CheckDevice === false){
            this.$refs['mySwiper'].swiper.update()
          }
        }
    }
</script>

<style scoped>
    .keys-logo__slider{
        height: 100vh;
        overflow: hidden;
    }
    .keys-logo__slider .logo-slide{
        margin-bottom: 0;
    }
</style>
