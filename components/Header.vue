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
              <a href="#service" class="header-menu__link">Услуги</a>
              <a href="#about" class="header-menu__link">О нас</a>
              <a href="#keys" class="header-menu__link">Кейсы</a>
              <a href="#consulting" class="header-menu__link">Как мы работаем</a>
              <a href="#contact" class="header-menu__link">Контакты</a>
            </div>
            <div v-if="lang === 'en'">
              <a href="#service" class="header-menu__link">Services</a>
              <a href="#about" class="header-menu__link">About us</a>
              <a href="#keys" class="header-menu__link">Рrojects</a>
              <a href="#consulting" class="header-menu__link">How We Work</a>
              <a href="#contact" class="header-menu__link">Contact us</a>
            </div>
            <div v-if="lang === 'port'">
              <a href="#service" class="header-menu__link">Serviços</a>
              <a href="#about" class="header-menu__link">Sobre nós</a>
              <a href="#keys" class="header-menu__link">Casos</a>
              <a href="#consulting" class="header-menu__link">Como trabalhamos</a>
              <a href="#contact" class="header-menu__link">Contatos</a>
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
