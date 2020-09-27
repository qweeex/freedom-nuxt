<template>
    <section class="header video-elem" >
        <div class="header-container">
            <div class="header-logo">
                <a href="/"><img src="~/assets/img/logo.svg" alt="" /></a>
            </div>
            <div class="header-menu">
                <nav>
                    <a href="#service" class="header-menu__link">Услуги</a>
                    <a href="#about" class="header-menu__link">О нас</a>
                    <a href="#keys" class="header-menu__link">Кейсы</a>
                    <a href="#consulting" class="header-menu__link">Консультации</a>
                    <a href="#contact" class="header-menu__link">Контакты</a>
                </nav>
            </div>
            <div class="header-lang">
                <div class="header-lang__list">
                    <a href="" class="header-lang__link lang-active">Ru</a> <a href="" class="header-lang__link">En</a>
                    <a href="" class="header-lang__link">Port</a>
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
