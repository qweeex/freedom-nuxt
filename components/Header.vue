<template>
    <div>
      <section class="header video-elem " >
        <div class="header-container">
          <div class="header-logo">
            <a href="/"><img src="~/assets/img/logo.svg" alt="" /></a>
          </div>
          <div class="header-menu">
            <nav v-if="lang === 'ru'">
              <a href="#service" class="header-menu__link">Услуги</a>
              <a href="#about" class="header-menu__link">О нас</a>
              <a href="#keys" class="header-menu__link">Кейсы</a>
              <a href="#consulting" class="header-menu__link">Как мы работаем</a>
              <a href="#contact" class="header-menu__link">Контакты</a>
            </nav>
            <nav v-if="lang === 'en'">
              <a href="#service" class="header-menu__link">Services</a>
              <a href="#about" class="header-menu__link">About us</a>
              <a href="#keys" class="header-menu__link">Рrojects</a>
              <a href="#consulting" class="header-menu__link">How We Work</a>
              <a href="#contact" class="header-menu__link">Contact us</a>
            </nav>
            <nav v-if="lang === 'port'">
              <a href="#service" class="header-menu__link">Serviços</a>
              <a href="#about" class="header-menu__link">Sobre nós</a>
              <a href="#keys" class="header-menu__link">Casos</a>
              <a href="#consulting" class="header-menu__link">Como trabalhamos</a>
              <a href="#contact" class="header-menu__link">Contatos</a>
            </nav>
          </div>
          <div class="header-promo">
            <img @click="Video('50yl206PyCI')" v-if="lang === 'ru'"
                 href="https://www.youtube.com/watch?v=50yl206PyCI"
                 src="~/assets/img/promoplay.svg" alt="" />
            <img @click="Video('vGg9lfAacsM')" v-if="lang === 'en'"
                 href="https://www.youtube.com/watch?v=vGg9lfAacsM"
                 src="~/assets/img/promoplay.svg"
                 alt="" />
            <img @click="Video('-cfFdQTDmmg')" v-if="lang === 'port'"
                 src="~/assets/img/promoplay.svg"
                 href="https://www.youtube.com/watch?v=-cfFdQTDmmg"
                 alt="" />
          </div>
          <div class="header-music">
            <img src="~/assets/img/music.svg" v-if="this.audioStatus === false" v-on:click="PlaySound" alt="">
            <img src="~/assets/img/pause.svg" v-if="this.audioStatus === true" v-on:click="PauseSound" alt="">
            <audio src="@/assets/audio/track.mp3" id="music"></audio>
          </div>
          <div class="header-lang">
            <div class="header-lang__list">
              <nuxt-link :class="{langActive: lang === 'ru'}" to="/" class="header-lang__link">Ru</nuxt-link>
              <nuxt-link :class="{langActive: lang === 'en'}" to="/en" class="header-lang__link">En</nuxt-link>
              <nuxt-link :class="{langActive: lang === 'port'}" to="/port" class="header-lang__link">Port</nuxt-link>
            </div>
          </div>
          <div class="header-site">
            <a href="">
              <span v-if="lang === 'ru'">Перейти на</span>
              <span v-if="lang === 'en'">Go to</span>
              <span v-if="lang === 'port'">Passar para</span>
              <img src="~/assets/img/site.svg" alt="" />
            </a>
          </div>
          <div class="header-mobileMenu">
            <img src="~/assets/img/menu.svg" @click="showMobiles()" alt="">
          </div>
        </div>
      </section>
      <div class="header-mobile" :class="{ showMob: showMobs}">
        <div class="mobile-top">
          <div class="mobile-logo">
            <img src="~/assets/img/logo.svg" alt="">
          </div>
          <div class="mobile-close" >
            <img src="~/assets/img/close.svg" @click="hiddenMobiles()"  alt="">
          </div>
        </div>
        <div class="mobile-middle">
          <div class="middle-menu">
            <div v-if="lang === 'ru'">
              <a href="#service" @click="hiddenMobiles()" class="header-menu__link">Услуги</a>
              <a href="#about" @click="hiddenMobiles()" class="header-menu__link">О нас</a>
              <a href="#keys" @click="hiddenMobiles()" class="header-menu__link">Кейсы</a>
              <a href="#consulting" @click="hiddenMobiles()" class="header-menu__link">Как мы работаем</a>
              <a href="#contact" @click="hiddenMobiles()" class="header-menu__link">Контакты</a>
            </div>
            <div v-if="lang === 'en'">
              <a href="#service" @click="hiddenMobiles()" class="header-menu__link">Services</a>
              <a href="#about" @click="hiddenMobiles()" class="header-menu__link">About us</a>
              <a href="#keys" @click="hiddenMobiles()" class="header-menu__link">Рrojects</a>
              <a href="#consulting" @click="hiddenMobiles()" class="header-menu__link">How We Work</a>
              <a href="#contact" @click="hiddenMobiles()" class="header-menu__link">Contact us</a>
            </div>
            <div v-if="lang === 'port'">
              <a href="#service" @click="hiddenMobiles()" class="header-menu__link">Serviços</a>
              <a href="#about" @click="hiddenMobiles()" class="header-menu__link">Sobre nós</a>
              <a href="#keys" @click="hiddenMobiles()" class="header-menu__link">Casos</a>
              <a href="#consulting" @click="hiddenMobiles()" class="header-menu__link">Como trabalhamos</a>
              <a href="#contact" @click="hiddenMobiles()" class="header-menu__link">Contatos</a>
            </div>
          </div>
          <div class="middle-site">
            <a href="">
              <span v-if="lang === 'ru'">Перейти на</span>
              <span v-if="lang === 'en'">Go to</span>
              <span v-if="lang === 'port'">Passar para</span>
              <img src="~/assets/img/site.svg" alt="" />
            </a>
          </div>
          <div class="middle-lang">
            <div class="middle-lang__list">
              <nuxt-link :class="{langActive: lang === 'ru'}" to="/" class="middle-lang__link">Ru</nuxt-link>
              <nuxt-link :class="{langActive: lang === 'en'}" to="/en" class="middle-lang__link">En</nuxt-link>
              <nuxt-link :class="{langActive: lang === 'port'}" to="/port" class="middle-lang__link">Port</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import Vue from "vue";

    export default {
      name: "Header",
      props: ['lang'],
      data() {
        return{
          audioStatus: false,
          showMobs: false
        }
      },
      methods: {
        PlaySound(){
          let audio = document.querySelector('#music');
          audio.play();
          this.audioStatus = true;
        },
        PauseSound(){
          let audio = document.querySelector('#music');
          audio.pause();
          this.audioStatus = false;
        },
        showMobiles(){
          this.showMobs = true;
        },
        hiddenMobiles(){
          this.showMobs = false;
        },
        Video(id){
          if (typeof(YT) == 'undefined' || typeof(YT.Player) == 'undefined') {
            // Load youtube api
            Vue.loadScript('https://www.youtube.com/player_api');

            window.onYouTubePlayerAPIReady = function () {
              onYouTubePlayer();
            };
          }
          let player;
          function onYouTubePlayer() {
            player = new YT.Player('tv', {
              videoId: id,
              height: '390',
              width: '640',
              playerVars: {autoplay: 0, autohide: 1, modestbranding: 0, rel: 0, showinfo: 0, controls: 0, disablekb: 1, iv_load_policy: 3},
              events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
              }
            });
          }
          function onPlayerReady(event) {
            event.target.playVideo();
          }
          function onPlayerStateChange(event) {
            if(event.data === 0 || event.data === 2 ){
              document.querySelector('#tv').style.visibility = 'hidden';
              document.querySelector('#tv').style.opacity = 0;
            }
          }
          document.querySelector('#tv').style.visibility = 'visible';
          document.querySelector('#tv').style.opacity = 1;
        }
      }
    }
</script>

<style lang="less" scoped>

    .header-container{
        position: relative;
    }
    .header{
      transition: all 0.4s;
    }
</style>
