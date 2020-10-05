<template>
  <div>
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
              <span class="full-reviews" v-if="lang === 'ru'" @click="getReviews(item.id)">Читать полностью</span>
              <span class="full-reviews" v-if="lang === 'en'" @click="getReviews(item.id)">Read more</span>
              <span class="full-reviews" v-if="lang === 'port'" @click="getReviews(item.id)">Leia na íntegra</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="reviews-popup" :class="{ showReview: PopupShow }">
      <div class="popup-bg" @click="PopupShow = false"></div>
      <div class="popup-wrapper">
        <div class="wrap-top">
          <div class="top-img">
            <img :src="PopupImg" alt="">
          </div>
          <div class="top-name">
            <span>
              {{ PopupName }}
            </span>
          </div>
        </div>
        <div class="wrap-content">
          <div class="content">
            {{ PopupContent }}
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
      reviews: null,
      PopupImg: '',
      PopupName: '',
      PopupContent: '',
      PopupShow: false
    }
  },
  methods: {
    getReviews: function (id) {
      const url = 'http://freedom.sitecriy.beget.tech/api/getreviews?id=' + id;
      Axios.get(url, {
        headers: {
          lang: 'ru'
        }
      })
        .then((res) => {
          let data = res.data;
          this.PopupImg = data[0].img;
          this.PopupName = data[0].name;
          this.PopupContent = data[0].content;
        })
        .finally(() => {
          this.PopupShow = true;
        });
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

<style lang="less" scoped>
.showReview{
  opacity: 1 !important;
  visibility: visible !important;
}
.reviews-popup{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.4s;
  opacity: 0;
  visibility: hidden;
  .popup-bg{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
  }
  .popup-wrapper{
    max-width: 600px;
    width: 100%;
    background: #fff;
    border-radius: 40px;
    position: relative;
    z-index: 102;
    .wrap-top{
      display: flex;
      padding: 15px 30px;
      align-items: center;
      .top-img{
        flex-basis: 90px;
      }
      .top-name{
        flex: 1;
        font-size: 20px;
        font-weight: 700;
      }
    }
    .wrap-content{
      padding: 30px 30px;
    }
  }
}
</style>
