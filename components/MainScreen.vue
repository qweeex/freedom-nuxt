<template>
  <div>
      <section class="main">
        <div id="made-in-ny"></div>
        <div class="main-line video-elem hide-elem"><img src="~/assets/img/scroll-line.svg" alt="" /></div>
        <div class="main-content video-elem hide-elem">
          <div class="main-content__img">
            <img src="~/assets/img/master.png" alt="">

            <div class="main-line__left"></div>
            <div class="main-line__right"></div>
          </div>
        </div>
        <div class="main-bottom video-elem hide-elem"></div>
      </section>
  </div>
</template>

<script>
export default {
  name: "MainScreen",
  methods: {
    MainAnimate(){

      let LineLeft = document.querySelector('.main-line__left');
      let LineRight = document.querySelector('.main-line__right');

      window.addEventListener('scroll', function () {
        let second = document.querySelector('.service-lines');
        let first = document.querySelector('.main-content__img');
        let service = document.querySelector('.service');

        let calcRight = () => {
          return second.offsetTop + first.offsetTop + 16;
        }
        let calcLeft = () => {
          return service.clientHeight + first.offsetTop + 62;
        }

        LineLeft.style.height = calcLeft() + 'px';
        LineRight.style.height = calcRight() + 'px';

        // Service line
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


    },
    VimeoVideo(){
      /*let player = new Player('made-in-ny', {
        id: 461358249,
        width: window.innerWidth,
        byline: false,
        controls: false,
        autoplay: true,
        title: false
      });


      player.play()
          .then(function() {
            console.log('Play')
          });

      player.on('ended', function(data) {
        console.log('end');
        document.querySelector('#made-in-ny').style.opacity = 0;
        document.querySelectorAll('.video-elem').forEach(function (item){
          item.classList.remove('hide-elem');
        })
      });*/
      document.querySelector('#made-in-ny').style.opacity = 0;
      document.querySelectorAll('.video-elem').forEach(function (item){
        item.classList.remove('hide-elem');
      })
    },
  },
  mounted() {
    this.MainAnimate();
    this.VimeoVideo();
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
