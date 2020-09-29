<template>
    <section class="keys" id="keys">
        <div class="keys-container">
            <div class="keys-row">
                <Logo/>
                <div v-if="this.phone === false" :class="{ hiddenContent: showPopup }" class="keys-content keys-desktop">
                    <div v-swiper:KeysSwiper="swiperOptions" class="keys-content__slider swiper-container">
                        <div class="swiper-wrapper">
                            <div class="content-slide swiper-slide" v-for="keyt in keysInfo" :key="keyt.MIGX_id">
                                <div class="content-slide__wrapper">
                                    <div class="slider-img"><img :src="'http://freedom.sitecriy.beget.tech/assets/images/' + keyt.img" alt="" /></div>
                                    <div class="slider-content">
                                        <div class="content-title">
                                            <span>{{ keyt.title }}</span>
                                        </div>
                                        <div class="content-link"><a @click="PopupShow(keyt.MIGX_id)">Читать подробнее</a></div>
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
                    <div class="content-slide swiper-slide" v-for="keyt in keysInfo" :key="keyt.MIGX_id">
                      <div class="content-slide__wrapper">
                        <div class="slider-img"><img :src="'http://freedom.sitecriy.beget.tech/assets/images/' + keyt.img" alt="" /></div>
                        <div class="slider-content">
                          <div class="content-title">
                            <span>{{ keyt.title }}</span>
                          </div>
                          <div class="content-link"><a @click="PopupShow()">Читать подробнее</a></div>
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
                    <div class="PopupKeys-close__btn" @click="PopupHidden()"><span>Вернуться назад</span></div>
                </div>
                <div class="PopupKeys-content">
                    <div class="PopupKeys-content__top">
                        <div class="top-title">
                            <div class="top-title__title"><span>PR, SMM и event для сети винных баров Brix</span></div>
                            <div class="top-title__desc"><span>Полное сопровождение проекта:</span></div>
                        </div>
                        <div class="top-img"><img src="~/assets/img/popupImg.png" alt="" /></div>
                    </div>
                    <div class="PopupKeys-content__bottom">
                        <div class="bottom-list">
                            <ul>
                                <li>Создание пула релевантных СМИ.</li>
                                <li>Создание информационных поводов.</li>
                                <li>Организация временного двухнедельного моно-меню раз в 1,5 - 2 месяца.</li>
                                <li>Организация и проведение регулярных ужинов с бренд-шефом сети.</li>
                                <li>Фотоотчеты мероприятий.</li>
                                <li>Написание пресс-релизов.</li>
                                <li>Организация фотосессий сезонных и временных меню.</li>
                                <li>Организация и проведение дегустаций с ресторанными критиками и журналистами.</li>
                                <li>Ведение соц сетей (Facebook и Instagram).</li>
                                <li>Обработка входящих запросов журналистов.</li>
                            </ul>
                        </div>
                        <div class="bottom-result">
                            <div class="result-title"><p class="result-title__text">Результат</p></div>
                            <div class="result-desc">
                                <p>
                                    Создание пула из 50 релевантных журналистов, организация 3 моно-меню, проведение 5 ужинов с
                                    бренд-шефов, проведение 13 фотосессий, выход 11 пресс-релизов, обеспечение выхода 59 публикаций,
                                    прирост в соц сетях (Facebook 5007 подписчиков, Instagram 6383 подписчиков)
                                </p>
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
    import Keys from '@/static/keys.json';

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
        swiperMob: {
          slidesPerView: 'auto',
          direction: 'horizontal',
          spaceBetween: 5,
          slidesOffsetBefore: 15,
          scrollbar: {
            el: '.swiper-scrollbar1',
            draggable: true,
            dragSize: 39
          },
        },
        swiperOptions:{
          direction: 'vertical',
          slidesPerView: 2,
          spaceBetween: 40,
          scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
            dragSize: 39
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
              spaceBetween: 0,
            }
          }
        },
        keysInfo: []
      }),
      created(){
        if (process.browser){
          this.phone =  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent);
        }
      },
      methods: {
          PopupShow(el){
            console.log(el);
            this.showPopup = true;
          },
          PopupHidden(){
              this.showPopup = false;
          },
          InitKeys(){
            let Height = screen.height;
            document.querySelector('.keys-content__slider').style.height = 900 + 'px';
          },
          CheckDevice(){
            //return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent);
            return false
          }
      },
      async mounted() {
        const url = 'http://freedom.sitecriy.beget.tech/api/getkeys';
        const { data } = await axios.get(url, {
          headers: {
            lang: 'ru'
          }
        })
        this.keysInfo = data.data;
        this.InitKeys();
      }
    }
</script>

<style lang="less" >
    .PopupKeysActive{
        right: 0;
    }
    .hiddenContent{
        opacity: 0;
        transition: all 0.4s;
    }
</style>
