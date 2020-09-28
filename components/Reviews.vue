<template>
  <div class="reviews">
    <div class="reviews-title"><p class="reviews-title__text">ОТЗЫВЫ</p></div>
    <div class="reviews-had" v-if="this.phone === false">
      <lottie :options="defaultOptions" :height="519" :width="597"  />
    </div>
    <div class="reviews-had" v-else>
      <lottie :options="defaultOptions" :height="190" :width="320"  />
    </div>
    <div class="reviews-list">
      <div class="reviews-row">
        <div class="reviews-item">
          <div class="item-img"><img src="~/assets/img/reviews.png" alt="" /></div>
          <div class="item-text">
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam diam penatibus vitae ac, eget.</span>
          </div>
        </div>
        <div class="reviews-item">
          <div class="item-img"><img src="~/assets/img/reviews.png" alt="" /></div>
          <div class="item-text">
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam diam penatibus vitae ac, eget.</span>
          </div>
        </div>
        <div class="reviews-item">
          <div class="item-img"><img src="~/assets/img/reviews.png" alt="" /></div>
          <div class="item-text">
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam diam penatibus vitae ac, eget.</span>
          </div>
        </div>
        <div class="reviews-item">
          <div class="item-img"><img src="~/assets/img/reviews.png" alt="" /></div>
          <div class="item-text">
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam diam penatibus vitae ac, eget.</span>
          </div>
        </div>
        <div class="reviews-item">
          <div class="item-img"><img src="~/assets/img/reviews.png" alt="" /></div>
          <div class="item-text">
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam diam penatibus vitae ac, eget.</span>
          </div>
        </div>
        <div class="reviews-item">
          <div class="item-img"><img src="~/assets/img/reviews.png" alt="" /></div>
          <div class="item-text">
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam diam penatibus vitae ac, eget.</span>
          </div>
        </div>
        <div class="reviews-item">
          <div class="item-img"><img src="~/assets/img/reviews.png" alt="" /></div>
          <div class="item-text">
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam diam penatibus vitae ac, eget.</span>
          </div>
        </div>
        <div class="reviews-item">
          <div class="item-img"><img src="~/assets/img/reviews.png" alt="" /></div>
          <div class="item-text">
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam diam penatibus vitae ac, eget.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Lottie from 'vue-lottie/src/lottie.vue';
import animationData from '@/static/lf20_1jfbv90j.json';

export default {
  name: "Reviews",
  components: {
    'lottie': Lottie
  },
  data(){
    return{
      phone: false,
      about: {
        start: false,
        played: false
      },
      defaultOptions: {
        animationData: animationData,
        autoplay: true
      },
      animationSpeed: 1
    }
  },
  created(){
    if (process.browser){
      this.phone =  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent);
    }
  }
}
</script>

<style scoped>

</style>
