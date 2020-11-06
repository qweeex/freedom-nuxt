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
        <div v-swiper:rewiews="sliderConfig" class="swiper-container reviews-slider">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in reviews" :key="item.id">
                <div class="reviews-item" >
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
          <!-- If we need pagination -->
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>
    <div class="reviews-popup" :class="{ showReview: PopupShow }">
      <div class="popup-bg" @click="PopupShow = false"></div>
      <div class="popup-wrapper">
        <div class="wrap-top">
          <div class="top-close">
            <img src="~/assets/img/close.svg" @click="PopupShow = false"  alt="">
          </div>
          <div class="top-img">
            <img :src="PopupImg" alt="">
          </div>
          <div class="top-name">
            <span v-html="PopupName"></span>
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
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import Lottie from 'vue-lottie/src/lottie.vue';
import animationData from '@/static/lf20_1jfbv90j.json';
import Axios from 'axios';

export default {
  name: "Reviews",
  props: ['lang'],
  components: {
    'lottie': Lottie,
    Swiper,
    SwiperSlide
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
      PopupShow: false,
      sliderConfig: {
        slidesPerView: 1,
        slidesPerColumn: 2,
        spaceBetween: 30,
        direction: 'horizontal',
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
      },
    }
  },
  methods: {
    getReviews: function (id) {
      const url = this.$store.state.site.url + '/api/getreviews?id=' + id + '&lang=' + this.$props.lang;
      Axios.get(url)
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
    const url = this.$store.state.site.url + '/api/getreviews?lang=' + this.$props.lang;
    const { data } = await Axios.get(url);
    this.reviews = data;
    window.addEventListener('resize', () => {
      if(screen.width < 1050) {
        this.phone =  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent);
      } else {
        this.phone = false;
      }
    })
  },
  created(){
    if (process.browser){
      if(screen.width < 1050) {
        this.phone =  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent);
      }
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
      flex-flow: row wrap;
      .top-close{
        width: 100%;
        text-align: right;
        img{
          cursor: pointer;
        }
      }
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
