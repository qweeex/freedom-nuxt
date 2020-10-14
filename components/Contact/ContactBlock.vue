<template>
  <div class="contact-img">
    <div class="contact-anime">
      <div :style="style" ref="lavContainer"></div>
    </div>
    <div class="contact-square">
      <div class="block-element">
        <div class="elem-smile">
          <img src="~assets/img/smile.png" alt="">
        </div>
        <div class="elem-main"><img src="~assets/img/block/block1.png" alt=""></div>
      </div>
      <div class="block-element">
        <div class="elem-smile">
          <img src="~assets/img/smile.png" alt="">
        </div>
        <div class="elem-main"><img src="~assets/img/block/block2.png" alt=""></div>
      </div>
      <div class="block-element">
        <div class="elem-smile">
          <img src="~assets/img/smile.png" alt="">
        </div>
        <div class="elem-main"><img src="~assets/img/block/block3.png" alt=""></div>
      </div>
      <div class="block-element">
        <div class="elem-smile">
          <img src="~assets/img/smile.png" alt="">
        </div>
        <div class="elem-main"><img src="~assets/img/block/block4.png" alt=""></div>
      </div>
      <div class="block-element">
        <div class="elem-smile">
          <img src="~assets/img/smile.png" alt="">
        </div>
        <div class="elem-main"><img src="~assets/img/block/block5.png" alt=""></div>
      </div>
      <div class="block-element">
        <div class="elem-smile">
          <img src="~assets/img/smile.png" alt="">
        </div>
        <div class="elem-main"><img src="~assets/img/block/block6.png" alt=""></div>
      </div>
      <div class="block-element">
        <div class="elem-smile">
          <img src="~assets/img/smile.png" alt="">
        </div>
        <div class="elem-main"><img src="~assets/img/block/block7.png" alt=""></div>
      </div>
      <div class="block-element">
        <div class="elem-smile">
          <img src="~assets/img/smile.png" alt="">
        </div>
        <div class="elem-main"><img src="~assets/img/block/block8.png" alt=""></div>
      </div>
      <div class="block-element">
        <div class="elem-smile">
          <img src="~assets/img/smile.png" alt="">
        </div>
        <div class="elem-main"><img src="~assets/img/block/block9.png" alt=""></div>
      </div>
      <div class="block-element">
        <div class="elem-smile">
          <img src="~assets/img/smile.png" alt="">
        </div>
        <div class="elem-main"><img src="~assets/img/block/block10.png" alt=""></div>
      </div>
      <div class="block-element">
        <div class="elem-smile">
          <img src="~assets/img/smile.png" alt="">
        </div>
        <div class="elem-main"><img src="~assets/img/block/block11.png" alt=""></div>
      </div>
      <div class="block-element">
        <div class="elem-smile">
          <img src="~assets/img/smile.png" alt="">
        </div>
        <div class="elem-main"><img src="~assets/img/block/block12.png" alt=""></div>
      </div>
      <div class="block-element">
        <div class="elem-smile">
          <img src="~assets/img/smile.png" alt="">
        </div>
        <div class="elem-main"><img src="~assets/img/block/block13.png" alt=""></div>
      </div>
      <div class="block-element">
        <div class="elem-smile">
          <img src="~assets/img/smile.png" alt="">
        </div>
        <div class="elem-main"><img src="~assets/img/block/block14.png" alt=""></div>
      </div>
      <div class="block-element">
        <div class="elem-smile">
          <img src="~assets/img/smile.png" alt="">
        </div>
        <div class="elem-main"><img src="~assets/img/block/block15.png" alt=""></div>
      </div>
      <div class="block-element">
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
        }
      }
    },
    methods: {

      BlockAnimate(){
        let blocks = document.querySelectorAll('.block-element');
        blocks.forEach(element => {
          element.addEventListener('mouseover', () => {
            /*for (let i = 0; i < 10; i++){
              this.TransformBox(element, this.randomInteger(-5,5), this.randomInteger(-5, 5));
              //console.log(i)
            }*/
            element.classList.add('show-smile');
          })
          element.addEventListener('mouseout', () => {
            element.classList.remove('show-smile');
          })
        })
      },
      randomInteger(min, max) {
        // получить случайное число от (min-0.5) до (max+0.5)
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
      },
      TransformBox (elem, x, y){
        elem.style.transform = "skew(" + x + "deg, " + y +"deg)";
      },
      ChangeSizeAnimate(){
        if (screen.width < 600){
          this.style.width = screen.width + 'px';
          this.style.height = screen.width + 'px';
        }
      }
    },
    mounted() {
      this.BlockAnimate();
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
        }
      })
    }
  }
</script>

<style scoped lang="less">

</style>
