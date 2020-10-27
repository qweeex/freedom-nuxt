<template>
  <div>
      <section class="main">
        <div class="main-line video-elem">
          <img v-if="lang === 'ru'"
               data-fancybox="1"
               href="https://www.youtube.com/watch?v=50yl206PyCI"
               src="~/assets/img/scroll-line.svg" alt="" />
          <img v-if="lang === 'en'"
               data-fancybox="1"
               href="https://www.youtube.com/watch?v=vGg9lfAacsM"
               src="~/assets/img/scroll-line__en.svg"
               alt="" />
          <img v-if="lang === 'port'"
               src="~/assets/img/scroll-line__port.svg"
               data-fancybox="1"
               href="https://www.youtube.com/watch?v=-cfFdQTDmmg"
               alt="" />
        </div>
        <div class="main-content video-elem">
          <div class="main-content__img">
            <img src="~/assets/img/master.svg" class="main-master" alt="">
            <img src="~/assets/img/master_small.svg" class="main-small" alt="">
            <img src="~/assets/img/master__mobile.svg" class="main-mobile" alt="">
            <div class="main-line__left"></div>
            <div class="main-line__right"></div>
          </div>
        </div>
        <div class="main-bottom video-elem "></div>
      </section>
  </div>
</template>

<script>
export default {
  name: "MainScreen",
  props: ['lang'],
  data(){
    return{
      dataWidth: 0
    }
  },
  methods: {
    MainAnimate(){

      window.addEventListener('scroll', function () {
        let LineLeft = document.querySelector('.main-line__left');
        let LineRight = document.querySelector('.main-line__right');
        let img = null;

        if(document.body.offsetWidth > 1500){
          img = document.querySelector('.main-content__img > .main-master');
          console.log('big');
        }
        if(document.body.offsetWidth > 1050 && document.body.offsetWidth < 1499){
          img = document.querySelector('.main-content__img > .main-small');
          console.log('small');
        }
        if(document.body.offsetWidth > 320 && document.body.offsetWidth < 1000){
          img = document.querySelector('.main-content__img > .main-mobile');
          console.log('mobile');
        }



        let service = document.querySelector('.service');
        // Считаем отступ под картинкой
        const offsetImg = () => {
          // Картинка с отступом свернну
          let picHeight = document.querySelector('.main-content__img').offsetTop + img.height;
          let mainHeight = document.querySelector('.main').clientHeight;
          return mainHeight - picHeight;
        }

        // Left line
        LineLeft.style.top = (img.height - 4) + 'px';
        LineLeft.style.height =  (service.clientHeight + offsetImg() + 60) + 'px';

        // Right line
        let lineService = document.querySelector('.service-lines');

        LineRight.style.top = (img.height - 4) + 'px';
        LineRight.style.height = (lineService.offsetTop + offsetImg() + 5) + 'px';

        setTimeout(() => {
          let line = document.querySelector('.service-lines');
          let container = document.querySelector('.service-container').clientWidth;
          let logo = document.querySelector('.main-content__img').clientWidth;
          let MainLine = document.querySelector('.main-line__right').offsetLeft;
          let width = container - logo;
          //console.log((width / 2) - MainLine);
          line.style.left = ((width / 2) + MainLine) + 'px';
          let widthLine = container - (((width / 2) + MainLine) + document.querySelector('.service-title').clientWidth);
          line.style.width = (widthLine - 10) + 'px';
        }, 1900)
      });

    },
    StopVideo(){
      /*document.querySelectorAll('.video-elem').forEach((elem) => {
        elem.classList.remove('video-elem')
      })*/
    }
  },
  mounted() {
    this.MainAnimate();
  },
  created(){
    if(process.client){
      this.dataWidth = window.innerWidth;
    }
  }
}
</script>

<style lang="less">

</style>
