<template>
  <div>
      <section class="main">
        <div id="made-in-ny"></div>
        <div class="main-line video-elem"><img src="~/assets/img/scroll-line.svg" alt="" /></div>
        <div class="main-content video-elem">
          <div class="main-content__img">
            <img src="~/assets/img/master.svg" alt="">

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
  methods: {
    MainAnimate(){

      window.addEventListener('scroll', function () {
        let LineLeft = document.querySelector('.main-line__left');
        let LineRight = document.querySelector('.main-line__right');
        let img = document.querySelector('.main-content__img > img');
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
        LineRight.style.height = (lineService.offsetTop + offsetImg() + 4) + 'px';

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
        }, 1000)
      });

    }
  },
  mounted() {
    this.MainAnimate();
  }
}
</script>

<style scoped lang="less">

#made-in-ny{
  height: 100vh;
  overflow: hidden;
  transition: all 0.4s;
  visibility: visible;
  opacity: 1;
}
</style>
