<template>
    <div class="keys-logo">
      <div v-if="this.phone === false" v-swiper:mySwiper="swiperOptions" class="keys-logo__slider swiper-container">
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
                phone: false,
                swiperMobile: {
                  slidesPerView: 3,
                  direction: 'horizontal',
                  spaceBetween: 35,
                  slidesOffsetBefore: 15,
                  autoplay: {
                    delay: 2000
                  },
                  loop: true
                },
                swiperOptions:{
                    direction: 'vertical',
                    slidesPerView: 7,
                    autoplay: {
                      delay: 2000
                    },
                    loop: true,
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
        created(){
          if (process.browser){
            if(screen.width < 1050) {
              this.phone =  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent);
            }
          }
        },
        mounted() {
          window.addEventListener('resize', () => {
            if(screen.width < 1050) {
              this.phone =  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent);
              this.mySwiper2.update();
            } else {
              this.phone = false;
              this.mySwiper.update();
            }
          })
          window.addEventListener('scroll', () => {
            if(this.phone) {
              this.mySwiper2.update();
            } else {
              this.mySwiper.update();
            }
          })
        }
    }
</script>

<style scoped>
    .keys-logo__slider{
        overflow: hidden;
    }
    .keys-logo__slider .logo-slide{
        margin-bottom: 0;
    }
</style>
