<template>
    <section class="keys" id="keys">
        <div class="keys-container">
            <div class="keys-row">
                <Logo/>
                <div v-if="this.phone === false" :class="{ hiddenContent: showPopup }" class="keys-content keys-desktop">
                    <div ref="KeysSwiper" v-swiper:KeysSwiper="swiperOptions" class="keys-content__slider swiper-container">
                        <div class="swiper-wrapper">
                            <div class="content-slide swiper-slide" v-for="keyt in keysInfo" :key="keyt.id">
                                <div class="content-slide__wrapper">
                                    <div class="slider-img">
                                      <img @click="getKeys(keyt.id)" :src="$store.state.site.url + '/assets/images/' + keyt.gallary[0].image" alt="" />
                                      <div class="video-use" v-if="keyt.gallary[0].video !== ''">
                                        <img :data-fancybox="keyt.id" :href="keyt.gallary[0].video" src="~/assets/img/playVideo.svg" alt="">
                                      </div>
                                    </div>
                                    <div class="slider-content">
                                        <div class="content-title">
                                            <span>{{ keyt.title }}</span>
                                        </div>
                                        <div class="content-link">
                                          <a @click="getKeys(keyt.id)" v-if="lang === 'ru'">Читать подробнее</a>
                                          <a @click="getKeys(keyt.id)" v-if="lang === 'en'">Read more</a>
                                          <a @click="getKeys(keyt.id)" v-if="lang === 'port'">Leia na íntegra</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Add Scrollbar -->
                        <div class="swiper-scrollbar custom-scroll"></div>
                    </div>
                </div>
              <div v-if="this.phone === true" :class="{ hiddenContent: showPopup }" class="keys-content keys-mobile">
                <div v-swiper:KeysSwiper2="swiperMob" class="keys-content__slider swiper-container">
                  <div class="swiper-wrapper">
                    <div class="content-slide swiper-slide" v-for="keyt in keysInfo" :key="keyt.id">
                      <div class="content-slide__wrapper">
                        <div class="slider-img">
                          <img @click="getKeys(keyt.id)" :src="$store.state.site.url + '/assets/images/' + keyt.gallary[0].image" alt="" />
                          <div class="video-use" v-if="keyt.gallary[0].video !== ''">
                            <img :data-fancybox="keyt.id" :href="keyt.gallary[0].video" src="~/assets/img/playVideo.svg" alt="">
                          </div>
                        </div>
                        <div class="slider-content">
                          <div class="content-title">
                            <span>{{ keyt.title }}</span>
                          </div>
                          <div class="content-link">
                            <a @click="getKeys(keyt.id)" v-if="lang === 'ru'">Читать подробнее</a>
                            <a @click="getKeys(keyt.id)" v-if="lang === 'en'">Read more</a>
                            <a @click="getKeys(keyt.id)" v-if="lang === 'port'">Leia na íntegra</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Add Scrollbar -->
                  <div class="swiper-scrollbar custom-scroll swiper-scrollbar1"></div>
                </div>
              </div>
                <div :class="{ hiddenContent: showPopup }" class="keys-title">
                    <p class="keys-title__text" v-if="lang === 'ru'">наши<br />кейсы</p>
                    <p class="keys-title__text" v-if="lang === 'en'">Our <br/>Cases</p>
                    <p class="keys-title__text" v-if="lang === 'port'">Projetos <br/>realizados</p>
                </div>
            </div>
        </div>
        <div class="PopupKeys" :class="{ PopupKeysActive: showPopup }">
            <div class="PopupKeys-wrapper">
                <div class="PopupKeys-close">
                    <div class="PopupKeys-close__btn" @click="PopupHidden()">
                      <span v-if="lang === 'ru'">Вернуться назад</span>
                      <span v-if="lang === 'en'">Return back</span>
                      <span v-if="lang === 'port'">Voltar atrás</span>
                    </div>
                </div>
                <div class="PopupKeys-content">
                    <div class="PopupKeys-content__top">
                        <div class="top-title">
                            <div class="top-title__title">
                              <span>{{ popupTitle }}</span></div>
                            <div class="top-title__desc"><span>{{ popupType }}</span></div>
                        </div>
                        <div class="top-img">
                          <div v-swiper:popupSliders="popupSlider" class="keys-sli swiper-container">
                            <div class="keys-wrapper swiper-wrapper">
                              <div class="swiper-slide" v-for="photo in popupImg" :key="photo.id">
                                <img :src="$store.state.site.url + '/assets/images/' + photo.image" alt="" />
                                <div class="video-use" v-if="photo.video !== ''">
                                  <img :data-fancybox="photo.id" :href="photo.video" src="~/assets/img/playVideo.svg" alt="">
                                </div>
                              </div>
                              <div class="swiper-button-prev"></div>
                              <div class="swiper-button-next"></div>
                            </div>
                          </div>
                        </div>
                    </div>
                    <div class="PopupKeys-content__bottom">
                        <div class="bottom-list" v-html="popupContent"></div>
                        <div class="bottom-result">
                            <div class="result-title">
                              <p class="result-title__text" v-if="lang === 'ru'">Результат</p>
                              <p class="result-title__text" v-if="lang === 'en'">Result</p>
                              <p class="result-title__text" v-if="lang === 'port'">Resultado</p>
                            </div>
                            <div class="result-desc">
                                <p v-html="popupResult"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import Logo from "@/components/Keys/Logo";
    import axios from 'axios';

    export default {
      name: "Keys",
      props: ['lang'],
      components: {
          Logo,
          Swiper,
          SwiperSlide
      },
      data: () => ({
        showPopup: false,
        phone: false,
        popupSlider:{
          slidesPerView: 1,
          effect: 'fade',
          loop: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        },
        swiperMob: {
          slidesPerView: 'auto',
          direction: 'horizontal',
          spaceBetween: 5,
          slidesOffsetBefore: 15,
          scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
            snapOnRelease: false,
            hide: false,
            dragSize: 39
          },
        },
        swiperOptions:{
          direction: 'vertical',
          slidesPerView: 2,
          spaceBetween: 40,
          allowTouchMove: false,
          scrollbar: {
            el: '.swiper-scrollbar',
            dragSize: 38,
            draggable: true,
            snapOnRelease: false,
            hide: false
          },
          breakpoints: {
            // when window width is >= 320px
            320: {
              slidesPerView: 2,
              direction: 'horizontal',
              spaceBetween: 5,
            },
            600: {
              direction: 'vertical',
              slidesPerView: 2,
              spaceBetween: 40,
            }
          }
        },
        keysInfo: [],
        // Popup
        popupImg: [],
        popupTitle: null,
        popupContent: null,
        popupResult: null,
        popupVideo: null,
        popupType: null
      }),
      created(){
        if (process.browser){
          if(screen.width < 1050) {
            this.phone =  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent);
          }
        }
      },
      methods: {
          updates(){
            this.KeysSwiper.update()
          },
          PopupHidden(){
              this.showPopup = false;
          },
          CheckDevice(){
            //return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent);
            return false
          },
          async getKeys(id){
            const url = this.$store.state.site.url + '/api/getkeys?id=' + id + '&lang=' + this.$props.lang;
            await axios.get(url)
              .then((res) => {
                console.log(res.data.data[0])
                this.popupImg = res.data.data[0].gallary;
                this.popupTitle = res.data.data[0].title;
                this.popupType = res.data.data[0].type;
                this.popupResult = res.data.data[0].result;
                this.popupContent = res.data.data[0].content;
              })
              .finally(() => {
                this.showPopup = true;
                this.popupSliders.update();
              })
          },
          async getKey(){
            const url = this.$store.state.site.url + '/api/getkeys?lang=' + this.$props.lang;
            const { data } = await axios.get(url);
            this.keysInfo = data.data;
            if (this.phone === false){
              this.KeysSwiper.update();
            } else {
              this.KeysSwiper2.update();
            }
          }
      },
       mounted() {
        this.getKey();
        window.addEventListener('scroll', () => {
          if (this.phone === false){
            this.KeysSwiper.update();
          } else {
            this.KeysSwiper2.update();
          }
        })
         window.addEventListener('resize', () => {
           if(screen.width < 1050) {
             this.phone =  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent);
             this.KeysSwiper2.update();
           } else {
             this.phone = false;
             this.KeysSwiper.update();
           }
         })
      }
    }
</script>

<style lang="less" >
    .PopupKeysActive{
        right: 0;
      display: block !important;
    }
    .hiddenContent{
        opacity: 0;
        transition: all 0.4s;
    }
</style>
