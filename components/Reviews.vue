<template>
  <div class="reviews">
    <div class="reviews-title">
      <p class="reviews-title__text" v-if="lang === 'ru'">ОТЗЫВЫ</p>
      <p class="reviews-title__text" v-if="lang === 'en'">Feedback</p>
      <p class="reviews-title__text" v-if="lang === 'port'">Comentários dos clientes</p>
    </div>
    <div class="reviews-had" v-if="this.phone === false">
      <lottie :options="defaultOptions" :height="519" :width="597"  />
    </div>
    <div class="reviews-had" v-else>
      <lottie :options="defaultOptions" :height="190" :width="320"  />
    </div>
    <div class="reviews-list">
      <div class="reviews-row">
        <div class="reviews-item" v-for="item in reviews" :key="item.id">
          <div class="item-img"><img :src="item.img " alt="" /></div>
          <div class="item-text">
            <span>
              {{  item.small }}
            </span>
            <br>
            <span @click="getReviews(item.id)">Читать подробнее</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Lottie from 'vue-lottie/src/lottie.vue';
import animationData from '@/static/lf20_1jfbv90j.json';
import Axios from 'axios';

export default {
  name: "Reviews",
  props: ['lang'],
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
      animationSpeed: 1,
      reviews: null
    }
  },
  methods: {
    getReviews(id){
      const url = 'http://freedom.sitecriy.beget.tech/api/getreviews?id=' + id;
      console.log(url);
      const res = Axios.get(url, {
        headers: {
          lang: 'ru'
        }
      })
      console.log(res);
    }
  },
  async mounted() {
    const url = 'http://freedom.sitecriy.beget.tech/api/getreviews';
    const { data } = await Axios.get(url, {
      headers: {
        lang: 'ru'
      }
    })
    console.log(data);
    this.reviews = data;
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
