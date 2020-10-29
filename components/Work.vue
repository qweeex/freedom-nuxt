<template>
  <div class="work" id="consulting">
    <div class="block" style="position: fixed; width: 100%; height: 50px; background: #000; color: #fff; font-size: 20px; z-index: 10;left: 0;top: 0;">
      {{ tops }}
    </div>
    <div class="work-title">
      <p class="work-title__text" v-if="lang === 'ru'">Как мы работаем</p>
      <p class="work-title__text" v-if="lang === 'en'">How We Work</p>
      <p class="work-title__text" v-if="lang === 'port'">Como trabalhamos</p>
    </div>
    <div v-if="lang === 'ru'" class="work-list">
      <div class="work-wrapper">
        <div class="work-stop work-item item-1" data-id="1">
          <div class="work-item__img"><img src="~/assets/img/work/work-1.png" alt="" /></div>
          <div class="work-item__content">
            <div class="content-title">
              <span>ЗНАКОМСТВО<br />ДРУГ С ДРУГОМ</span>
            </div>
            <div class="content-desc">
              <span
              >Мы получаем от вас заполненный бриф и после встречаемся, либо организовываем конференц-колл. Изучаем
                специфику деятельности вашей компании и цели, которые вы хотите достигнуть.</span
              >
            </div>
          </div>
        </div>
        <div class="work-stop work-item item-2" data-id="2">
          <div class="work-item__img"><img src="~/assets/img/work/work-2.png" alt="" /></div>
          <div class="work-item__content">
            <div class="content-title">
              <span>Разработка<br />стратегии</span>
            </div>
            <div class="content-desc">
              <span
              >В срок до 2 недель разрабатываем стратегию продвижения и формируем предложение с четкими KPIs и
                сроками. Проводим презентацию очно или онлайн, обсуждаем детали и при необходимости
                корректируем.</span
              >
            </div>
          </div>
        </div>
        <div class="work-stop work-item item-3" data-id="3">
          <div class="work-item__img"><img src="~/assets/img/work/work-3.png" alt="" /></div>
          <div class="work-item__content">
            <div class="content-title">
              <span>Подписнание<br />договора</span>
            </div>
            <div class="content-desc">
              <span
              >Все утвержденные KPIs и сроки работ прописываются в контракте и после получения предоплаты мы
                начинаем работу .</span
              >
            </div>
          </div>
        </div>
        <div class="work-stop work-item item-4" data-id="4">
          <div class="work-item__img"><img src="~/assets/img/work/work-4.png" alt="" /></div>
          <div class="work-item__content">
            <div class="content-title">
              <span>Реализация<br />стратегии</span>
            </div>
            <div class="content-desc">
              <span
              >Команда агентства работает над проектом, а аккаунт-менеджер всегда с вами на связи. Он обсуждает и
                контролирует все текущие вопросы, передает информацию от вас команде и наоборот и является
                ответственным за исполнение всех договоренностей.</span
              >
            </div>
          </div>
        </div>
        <div class="work-stop work-item item-5" data-id="5">
          <div class="work-item__img"><img src="~/assets/img/work/work-5.png" alt="" /></div>
          <div class="work-item__content">
            <div class="content-title">
              <span>Предоставление<br />отчетности</span>
            </div>
            <div class="content-desc">
              <span>Каждый месяц мы присылаем подробный понятный отчет, в котором вы видите результаты работы.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="lang === 'en'" class="work-list">
      <div class="work-wrapper">
        <div class="work-stop work-item item-1" data-id="1">
          <div class="work-item__img"><img src="~/assets/img/work/work-1.png" alt="" /></div>
          <div class="work-item__content">
            <div class="content-title">
              <span>Getting <br/>acquainted</span>
            </div>
            <div class="content-desc">
              <span
              >We receive a brief filled by you and later, we meet or organize a conference call. We study specifics of your company’s business and the goals you want to reach</span
              >
            </div>
          </div>
        </div>
        <div class="work-stop work-item item-2" data-id="2">
          <div class="work-item__img"><img src="~/assets/img/work/work-2.png" alt="" /></div>
          <div class="work-item__content">
            <div class="content-title">
              <span>Strategy <br/>development</span>
            </div>
            <div class="content-desc">
              <span
              >It takes us up to 2 weeks to develop promotional strategy and make an offer with clear KPIs and schedule. We present our ideas at a personal meeting or online, we discuss details and make adjustments if necessary.</span
              >
            </div>
          </div>
        </div>
        <div class="work-stop work-item item-3" data-id="3">
          <div class="work-item__img"><img src="~/assets/img/work/work-3.png" alt="" /></div>
          <div class="work-item__content">
            <div class="content-title">
              <span>Signing of <br>a contract</span>
            </div>
            <div class="content-desc">
              <span
              >All approved KPIs and schedules are mentioned in the contract and, having received prepayment, we begin our work.</span
              >
            </div>
          </div>
        </div>
        <div class="work-stop work-item item-4" data-id="4">
          <div class="work-item__img"><img src="~/assets/img/work/work-4.png" alt="" /></div>
          <div class="work-item__content">
            <div class="content-title">
              <span>Strategy <br/>implementation</span>
            </div>
            <div class="content-desc">
              <span
              >The team of the agency works on a project, and the account manager is always in touch with you. The manager discusses and controls all current issues, conveys information from you to the team and vice versa, takes responsibility for performance of all obligations.</span
              >
            </div>
          </div>
        </div>
        <div class="work-stop work-item item-5" data-id="5">
          <div class="work-item__img"><img src="~/assets/img/work/work-5.png" alt="" /></div>
          <div class="work-item__content">
            <div class="content-title">
              <span>Reporting</span>
            </div>
            <div class="content-desc">
              <span>Every month, we send a detailed and clear report in which you see the results of our work.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="lang === 'port'" class="work-list">
      <div class="work-wrapper">
        <div class="work-stop work-item item-1" data-id="1">
          <div class="work-item__img"><img src="~/assets/img/work/work-1.png" alt="" /></div>
          <div class="work-item__content">
            <div class="content-title">
              <span>Conhecimento</span>
            </div>
            <div class="content-desc">
              <span>
                Recebemos de você um brief preenchido e depois nos encontramos pessoalmente, ou organizamos um conference-call. Estudamos a específica da atividade da sua companhia e os objetivos que pretende alcançar.
              </span>
            </div>
          </div>
        </div>
        <div class="work-stop work-item item-2" data-id="2">
          <div class="work-item__img"><img src="~/assets/img/work/work-2.png" alt="" /></div>
          <div class="work-item__content">
            <div class="content-title">
              <span>Elaboração da <br/>estratégia</span>
            </div>
            <div class="content-desc">
              <span>Dentro do prazo de até 2 semanas elaboramos a estratégia de promoção e fazemos a proposta com KPIs claros e prazos determinados. Realizamos a apresentação pessoalmente ou online, discutimos os detalhes e corrigimos o plano, caso for preciso.</span>
            </div>
          </div>
        </div>
        <div class="work-stop work-item item-3" data-id="3">
          <div class="work-item__img"><img src="~/assets/img/work/work-3.png" alt="" /></div>
          <div class="work-item__content">
            <div class="content-title">
              <span>Assinatura <br>do contrato</span>
            </div>
            <div class="content-desc">
              <span>Todos os KPIs confirmados e prazos dos trabalhos serão indicados no contrato e depois de receber o pré-pagamento começamos a trabalhar.</span>
            </div>
          </div>
        </div>
        <div class="work-stop work-item item-4" data-id="4">
          <div class="work-item__img"><img src="~/assets/img/work/work-4.png" alt="" /></div>
          <div class="work-item__content">
            <div class="content-title">
              <span>Realização da <br/>estratégia</span>
            </div>
            <div class="content-desc">
              <span>A equipe da agência trabalha no projeto e o account-manager sempre está em contato com você. Discute e controla todas as questões correntes, transmite as informações de você para a equipe e vice- versa e é responsável pelo cumprimento de todas as obrigações.</span>
            </div>
          </div>
        </div>
        <div class="work-stop work-item item-5" data-id="5">
          <div class="work-item__img"><img src="~/assets/img/work/work-5.png" alt="" /></div>
          <div class="work-item__content">
            <div class="content-title">
              <span>Apresentação de <br/>relatórios</span>
            </div>
            <div class="content-desc">
              <span>Cada mês enviamos o relatório detalhado e claro, onde verá os resultados do trabalho.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Work",
  props: ['lang'],
  data(){
    return{
      tops: 0
    }
  },
  methods:{
    WorkAnimate(){
      window.addEventListener('scroll', function(){
        let HandsOneTopOffset = document.querySelector('#consulting').getBoundingClientRect().top + document.body.scrollTop;
        this.tops = Number(document.querySelector('#consulting').offsetTop) - Number(document.querySelector('html').scrollTop);
        if (HandsOneTopOffset <= 200 || this.tops <= 200){
          document.querySelector('.item-5').classList.remove('work-stop');
          document.querySelector('.item-4').classList.remove('work-stop');
          document.querySelector('.item-3').classList.remove('work-stop');
          document.querySelector('.item-2').classList.remove('work-stop');
          document.querySelector('.item-1').classList.remove('work-stop');
        }
      })
    }
  },
  mounted() {
    $(window).scroll(() => {
      let HandsOneTopOffset = document.querySelector('#consulting').getBoundingClientRect().top + document.body.scrollTop;
      this.tops = Number(document.querySelector('#consulting').offsetTop) - Number(document.querySelector('html').scrollTop);
      if (HandsOneTopOffset <= 200 || this.tops <= 200){
        document.querySelector('.item-5').classList.remove('work-stop');
        document.querySelector('.item-4').classList.remove('work-stop');
        document.querySelector('.item-3').classList.remove('work-stop');
        document.querySelector('.item-2').classList.remove('work-stop');
        document.querySelector('.item-1').classList.remove('work-stop');
      }
    })
  }
}
</script>

<style scoped>

</style>
