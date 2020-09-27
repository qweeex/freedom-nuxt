<template>
  <div class="about" id="about">
    <div class="about-container">
      <div class="about-start">
        <svg class="about-start__svg" width="287" height="142" viewBox="0 0 287 142" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path class="svg-top" d="M-17 7.5H284.5" stroke="#171717" stroke-width="15"/>
          <path class="svg-right" d="M279 141.5L279 0" stroke="#171717" stroke-width="15"/>
        </svg>
        <div class="about-start__line"></div>
      </div>
      <div class="about-title"><p class="about-title__text">о нас</p></div>
      <div class="about-content">
        <div class="about-content__title">
          <span>бутиковое агентство профессионалов<br />в сфере коммуникаций, которые обожают<br />свое дело</span>
        </div>
        <div class="about-content__desc">
            <span
            >Freedom PR - бутиковое агентство профессионалов в сфере коммуникаций, которые обожают свое дело. Наша
              команда состоит из 7 сотрудников и 10 подрядчиков и вместе мы осуществляем интересные проекты разных
              масштабов Уже 5 лет мы придумываем полезные стратегии коммуникаций и продвижения, состоящие из идей и
              инструментов, которые помогают вашему бизнесу. Мы мастера кропотливой работы, всем сердцем любим своих
              клиентов и являемся для них надежным партнером, который всегда рядом.</span
            >
        </div>
      </div>
      <div class="about-master">
        <div class="about-master__img"><img src="~/assets/img/julia.png" alt="" /></div>
        <div class="about-master__title">
          <p class="name">Юлиана Титаева</p>
          <p class="role">руководитель агентства </p>
        </div>
        <div class="about-master__desc">
            <span
            >9 лет опыта работы, в том числе, в крупнейших международных PR-агентствах. Полностью контролирует
              деятельность агентства и развитие бизнеса. Владеет английским и португальским.</span
            >
        </div>
      </div>
      <div class="about-partners">
        <div class="about-partners__content">
          <div class="about-partners__title">
            <p class="name">Антон Вербов</p>
            <p class="role">партнер</p>
          </div>
          <div class="about-partners__desc">
              <span
              >Специалист в области связей с общественностью и органами государственной власти. 15 лет опыта работы.
                Прошел путь от помощника главного редактора до начальника Управления коммуникационных проектов РИА
                Новости. Отвечает за совместные проекты с государственными структурами и некоммерческим сектором.
                Владеет английским.</span
              >
          </div>
        </div>
        <div class="about-partners__img"><img src="~/assets/img/anton.jpg" alt="" /></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  methods: {
    AboutAnimate(){
      window.addEventListener('scroll', function () {
        let AboutTopOffset = document.querySelector('.about').getBoundingClientRect().top + document.body.scrollTop;

      });
    }
  },
  mounted() {
    this.AboutAnimate();
  }
}
</script>

<style scoped lang="less">
.about-start{
  position: absolute;
  left: -302px;
  top: 125px;
  &__line{
    position: absolute;
    right: 0;
    top: 0;
    width: 15.5px;
    background: #171717;
    display: block;
    content: '';
  }
}
</style>
