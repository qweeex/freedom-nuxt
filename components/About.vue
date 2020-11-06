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
      <div class="about-title">
        <p class="about-title__text" v-if="lang === 'ru'">О нас</p>
        <p class="about-title__text" v-if="lang === 'en'">About us</p>
        <p class="about-title__text" v-if="lang === 'port'">Sobre nós</p>
      </div>
      <div class="about-content">
        <div class="about-content__title">
          <span v-if="lang === 'ru'">бутиковое агентство профессионалов<br />в сфере коммуникаций, которые обожают<br />свое дело</span>
          <span v-if="lang === 'en'">boutique agency uniting professionals<br> in the sphere of communications, crazy about what they do</span>
          <span v-if="lang === 'port'">uma agência-boutique dos profissionais <br>na área de comunicações, que adoram o <br>que fazem</span>
        </div>
        <div class="about-content__desc">
            <span v-if="lang === 'ru'">
              Freedom PR - бутиковое агентство профессионалов в сфере коммуникаций, которые обожают свое дело. Наша
              команда состоит из 7 сотрудников и 10 подрядчиков и вместе мы осуществляем интересные проекты разных
              масштабов Уже 5 лет мы придумываем полезные стратегии коммуникаций и продвижения, состоящие из идей и
              инструментов, которые помогают вашему бизнесу. Мы мастера кропотливой работы, всем сердцем любим своих
              клиентов и являемся для них надежным партнером, который всегда рядом.
            </span>
            <span v-if="lang === 'en'">
                Freedom PR is a boutique agency uniting professionals in the sphere of communications, crazy about what they do. Our team consists of 7 staff members and 10 contractors, and together we perform interesting projects of different scales.
                For 5 years in a row, we invent efficient communication and promotion strategies consisting of the ideas and tools helping your business.
                We are proficient in painstaking work, we love our clients with all our hearts, being their reliable partner who is always here for them.
              </span>
            <span v-if="lang === 'port'">
                Freedom PR – é uma agência-boutique dos profissionais na área de comunicações, que adoram o que fazem. A nossa equipe tem 7 funcionários e 10 contratados, juntos realizamos diferentes projetos interessantes.
                Há 5 anos elaboramos estratégias úteis de comunicação e promoção, que contêm ideias e instrumentos que ajudam o seu negócio.
                Somos profissionais do nosso trabalho, amamos os nossos clientes com todo o coração, para eles somos um bom parceiro que sempre está ao lado.
              </span>
        </div>
      </div>
      <div class="about-master">
        <div class="about-master__img">
          <img class="about-img__desktop" src="~/assets/img/julia.png" alt="" />
          <img class="about-img__mobile" src="~/assets/img/julia_mobile.png" alt="" />
        </div>
        <div class="about-master__title" v-if="lang === 'ru'">
          <p class="name">Юлиана Титаева</p>
          <p class="role">руководитель агентства</p>
        </div>
        <div class="about-master__title" v-if="lang === 'en'">
          <p class="name">Juliana Titaeva</p>
          <p class="role">Head of the Agency</p>
        </div>
        <div class="about-master__title" v-if="lang === 'port'">
          <p class="name">Juliana Titaeva</p>
          <p class="role">Chefe da Agência</p>
        </div>
        <div class="about-master__desc">
            <span v-if="lang === 'ru'">
              9 лет опыта работы, в том числе в крупнейших международных PR-агентствах на проектах с Samsung, Starbucks, Malaysia Tourism, HP, Coca-Cola HBC, STADA и пр.

              Полностью контролирует деятельность агентства и развитие бизнеса.

              Владеет английским и португальским.
            </span>
            <span v-if="lang === 'en'">
9 years in business, including work in the largest international PR agencies on projects with Samsung, Starbucks, Malaysia Tourism, HP, Coca-Cola HBC, STADA, etc.

Keeps overall control of the agency’s processes and business development. Knows English also Portuguese.            </span>
            <span v-if="lang === 'port'">
                9 anos de experiência de trabalho, inclusive nas maiores PR-agências internacionais nos projetos da Samsung, Starbucks, Malaysia Tourism, HP, coca-Cola, HBC, STADA, etc.
                Controla inteiramente a atividade da agência e o desenvolvimento do negócio.

                Domina inglês e português.
            </span>
        </div>
      </div>
      <div class="about-partners">
        <div class="about-partners__content">
          <div class="about-partners__title" v-if="lang === 'ru'">
            <p class="name">Антон Вербов</p>
            <p class="role">партнер</p>
          </div>
          <div class="about-partners__title" v-if="lang === 'en'">
            <p class="name">Anton Verbov</p>
            <p class="role">Partner</p>
          </div>
          <div class="about-partners__title" v-if="lang === 'port'">
            <p class="name">Anton Verbov</p>
            <p class="role">Sócio</p>
          </div>
          <div class="about-partners__desc">
              <span v-if="lang === 'ru'">
                Специалист в области связей с общественностью и органами государственной власти. 15 лет опыта работы.
                Прошел путь от помощника главного редактора до начальника Управления коммуникационных проектов РИА
                Новости. Отвечает за совместные проекты с государственными структурами и некоммерческим сектором.
                Владеет английским.
              </span>
              <span v-if="lang === 'en'">
                  Proficient in the field of public relations and governmental bodies. 15 years in business. Has built career from the Assistant to the Editor-in-Chief to the head of Communication Department in RIA Novosti. Responsible for joint projects with government bodies and the non-commercial sector. Knows English.
              </span>
              <span v-if="lang === 'port'">
                  Especialista na área de relações públicas e órgãos governamentais. 15 anos de experiência.Passou o caminho de ajudante do editor chefe até o chefe do Departamento dos projetos de comunicação da RIA Novosti. É responsável pelos projetos com instituições públicas e setor não comercial. Domina inglês.
              </span>
          </div>
        </div>
        <div class="about-partners__img"><img src="~/assets/img/anton.jpg" alt="" /></div>
      </div>
    </div>
  </div>
</template>

<script>
import anime from 'animejs';
export default {
  name: "About",
  props: ['lang'],
  methods: {
    AboutAnimate(){
      window.addEventListener('scroll', function(){
        let HandsOneTopOffset = document.querySelector('.about').getBoundingClientRect().top + document.body.scrollTop;
        let aboutLine = document.querySelector('.about-start__line');
        let heightLine = document.querySelector('.cf').clientHeight;

        if (HandsOneTopOffset <= 100){
            aboutLine.style.height = (heightLine + 60) + 'px';
        }
      })
    },
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
    height: 0;
    transition: all 2s;
    width: 15.6px;
    background: #171717;
    display: block;
    content: '';
  }
}
</style>
