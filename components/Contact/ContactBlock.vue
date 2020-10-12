<template>
  <div class="contact-img">
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
  export default {
    name: "ContactBlock",
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
      }
    },
    mounted() {
      this.BlockAnimate();
    }
  }
</script>

<style scoped lang="less">

</style>
