<template>
    <section class="header video-elem" >
        <div class="header-container">
            <div class="header-logo">
                <a href="/"><img src="~/assets/img/logo.svg" alt="" /></a>
            </div>
            <div class="header-menu">
                <nav v-if="lang === 'ru'">
                    <a href="#service" class="header-menu__link">Услуги</a>
                    <a href="#about" class="header-menu__link">О нас</a>
                    <a href="#keys" class="header-menu__link">Кейсы</a>
                    <a href="#consulting" class="header-menu__link">Консультации</a>
                    <a href="#contact" class="header-menu__link">Контакты</a>
                </nav>
                <nav v-if="lang === 'en'">
                  <a href="#service" class="header-menu__link">Услуги</a>
                  <a href="#about" class="header-menu__link">О нас</a>
                  <a href="#keys" class="header-menu__link">Кейсы</a>
                  <a href="#consulting" class="header-menu__link">Консультации</a>
                  <a href="#contact" class="header-menu__link">Контакты</a>
                </nav>
              <nav v-if="lang === 'port'">
                <a href="#service" class="header-menu__link">Nossos serviços</a>
                <a href="#about" class="header-menu__link">Sobre nós</a>
                <a href="#keys" class="header-menu__link">Projetos realizados</a>
                <a href="#consulting" class="header-menu__link">Comentários dos clientes</a>
                <a href="#contact" class="header-menu__link">Contatos</a>
              </nav>
            </div>
            <div class="header-lang">
                <div class="header-lang__list">
                    <nuxt-link to="/" class="header-lang__link">Ru</nuxt-link>
                    <nuxt-link to="/en" class="header-lang__link">En</nuxt-link>
                    <nuxt-link to="/port" class="header-lang__link">Port</nuxt-link>
                </div>
            </div>
            <div class="header-site">
                <a href=""><span>Перейти на</span> <img src="~/assets/img/site.svg" alt="" /></a>
            </div>
            <div class="header-music">
                <img src="~/assets/img/music.svg" v-if="this.audioStatus === false" v-on:click="PlaySound" alt="">
                <img src="~/assets/img/pause.svg" v-if="this.audioStatus === true" v-on:click="PauseSound" alt="">
              <audio src="@/assets/audio/track.mp3" id="music"></audio>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
      name: "Header",
      props: ['lang'],
      data() {
        return{
          audioStatus: false
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
        }
      }
    }
</script>

<style scoped>
    .header-container{
        position: relative;
    }
    .header{
      transition: all 0.4s;
    }
</style>
