<template>
  <div class="contact-img">
    <div class="contact-anime">
      <div :style="style" ref="lavContainer"></div>
    </div>
    <div class="contact-square">
      <div class="block-element animateBlock">
        <div class="elem-smile">
          <img src="~assets/img/smile.png" alt="">
        </div>
        <div class="elem-main"><img src="~assets/img/block/block1.png" alt=""></div>
      </div>
      <div class="block-element animateBlock">
        <div class="elem-smile">
          <img src="~assets/img/smile.png" alt="">
        </div>
        <div class="elem-main"><img src="~assets/img/block/block2.png" alt=""></div>
      </div>
      <div class="block-element animateBlock">
        <div class="elem-smile">
          <img src="~assets/img/smile.png" alt="">
        </div>
        <div class="elem-main"><img src="~assets/img/block/block3.png" alt=""></div>
      </div>
      <div class="block-element animateBlock">
        <div class="elem-smile">
          <img src="~assets/img/smile.png" alt="">
        </div>
        <div class="elem-main"><img src="~assets/img/block/block4.png" alt=""></div>
      </div>
      <div class="block-element animateBlock">
        <div class="elem-smile">
          <img src="~assets/img/smile.png" alt="">
        </div>
        <div class="elem-main"><img src="~assets/img/block/block5.png" alt=""></div>
      </div>
      <div class="block-element animateBlock">
        <div class="elem-smile">
          <img src="~assets/img/smile.png" alt="">
        </div>
        <div class="elem-main"><img src="~assets/img/block/block6.png" alt=""></div>
      </div>
      <div class="block-element animateBlock">
        <div class="elem-smile">
          <img src="~assets/img/smile.png" alt="">
        </div>
        <div class="elem-main"><img src="~assets/img/block/block7.png" alt=""></div>
      </div>
      <div class="block-element animateBlock">
        <div class="elem-smile">
          <img src="~assets/img/smile.png" alt="">
        </div>
        <div class="elem-main"><img src="~assets/img/block/block8.png" alt=""></div>
      </div>
      <div class="block-element animateBlock">
        <div class="elem-smile">
          <img src="~assets/img/smile.png" alt="">
        </div>
        <div class="elem-main"><img src="~assets/img/block/block9.png" alt=""></div>
      </div>
      <div class="block-element animateBlock">
        <div class="elem-smile">
          <img src="~assets/img/smile.png" alt="">
        </div>
        <div class="elem-main"><img src="~assets/img/block/block10.png" alt=""></div>
      </div>
      <div class="block-element animateBlock">
        <div class="elem-smile">
          <img src="~assets/img/smile.png" alt="">
        </div>
        <div class="elem-main"><img src="~assets/img/block/block11.png" alt=""></div>
      </div>
      <div class="block-element animateBlock">
        <div class="elem-smile">
          <img src="~assets/img/smile.png" alt="">
        </div>
        <div class="elem-main"><img src="~assets/img/block/block12.png" alt=""></div>
      </div>
      <div class="block-element animateBlock">
        <div class="elem-smile">
          <img src="~assets/img/smile.png" alt="">
        </div>
        <div class="elem-main"><img src="~assets/img/block/block13.png" alt=""></div>
      </div>
      <div class="block-element animateBlock">
        <div class="elem-smile">
          <img src="~assets/img/smile.png" alt="">
        </div>
        <div class="elem-main"><img src="~assets/img/block/block14.png" alt=""></div>
      </div>
      <div class="block-element animateBlock">
        <div class="elem-smile">
          <img src="~assets/img/smile.png" alt="">
        </div>
        <div class="elem-main"><img src="~assets/img/block/block15.png" alt=""></div>
      </div>
      <div class="block-element animateBlock">
        <div class="elem-smile">
          <img src="~assets/img/smile.png" alt="">
        </div>
        <div class="elem-main"><img src="~assets/img/block/block16.png" alt=""></div>
      </div>
    </div>
  </div>
</template>

<script>

  import lottie from 'lottie-web';
  import animationDataRus from '@/static/text_animation_rus.json';
  import animationDataEng from '@/static/text_animation_eng.json';
  import animationDataPort from '@/static/text_animation_port.json';

  export default {
    name: "ContactBlock",
    props: ['lang'],
    data(){
      return{
        style: {
          width: '708px',
          height: '682px',
          overflow: 'hidden',
          margin: '0 auto'
        },
        startAnimate: false
      }
    },
    methods: {
      BlockAnimate(){
        let blocks = document.querySelectorAll('.block-element');
        blocks.forEach(element => {
          element.addEventListener('mouseover', () => {
            element.classList.add('animeShow')
            setTimeout(() => {
              element.classList.remove('animateBlock');
              element.classList.remove('animeShow');
            }, 1000)
          })
          element.addEventListener('mouseout', () => {
            blocks.forEach((item) => {
              item.classList.add('animateBlock');
              item.classList.remove('animeShow');
            })
          })
        })
      },
      randomInteger(min, max) {
        // получить случайное число от (min-0.5) до (max+0.5)
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
      },
      TransformBox (elem, x, y){
        elem.style.transform = "translate(" + x + "px, " + y +"px)";
      },
      ChangeSizeAnimate(){
        if (screen.width < 600){
          this.style.width = screen.width + 'px';
          this.style.height = screen.width + 'px';
        }
      }
    },
    mounted() {
      //this.BlockAnimate();
      this.ChangeSizeAnimate();
      let anim;

      if (this.$props.lang === 'ru'){
        anim = lottie.loadAnimation({
            container: this.$refs.lavContainer,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            animationData: animationDataRus
          }
        );
      }
      if (this.$props.lang === 'en'){
        anim = lottie.loadAnimation({
            container: this.$refs.lavContainer,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            animationData: animationDataEng
          }
        );
      }
      if (this.$props.lang === 'port'){
        anim = lottie.loadAnimation({
            container: this.$refs.lavContainer,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            animationData: animationDataPort
          }
        );
      }
      window.addEventListener('scroll', function(){
        let HandsOneTopOffset = document.querySelector('.contact').getBoundingClientRect().top + document.body.scrollTop;
        if (HandsOneTopOffset <= 200){
          anim.play();
          if(!this.startAnimate){
            let blocks = document.querySelectorAll('.block-element');
            let element = blocks[6];
            element.classList.add('animeShow')
            setTimeout(() => {
              element.classList.remove('animateBlock');
              element.classList.remove('animeShow');
            }, 1000);

            this.startAnimate = true;
          }
        }
      })
    }
  }
</script>

<style scoped lang="less">
  .animateBlock{
    cursor: pointer;
    &:hover{
      .elem-main{
        opacity: 0 !important;
      }
      .elem-smile{
        opacity: 1 !important;
      }
    }
    .elem-main{
      opacity: 1 !important;
    }
    .elem-smile{
      opacity: 0 !important;
    }
  }
  .animeShow{
    -webkit-animation: 0.2s animateBlock ease-out infinite;
    animation: 0.2s animateBlock ease-out infinite;
  }
  @keyframes animateBlock {
    0%, 25% {
      left: -1px;
      transform: translateX(-2%) translateY(-2%);
    }
    50%, 100% {
      left: 1px;
      transform: translateX(2%) translateY(2%);
    }
  }
</style>
