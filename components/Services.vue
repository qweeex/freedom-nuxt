<template>
  <div class="service" id="service">
    <div class="service-container">
      <div class="service-lines">
        <div class="line-service" @scroll="ScrollAnimate()"></div>
      </div>
      <div class="service-title">
        <p class="service-title__text" v-if="lang === 'ru'">наши услуги</p>
        <p class="service-title__text" v-if="lang === 'en'">Our services</p>
        <p class="service-title__text" v-if="lang === 'port'">Nossos serviços</p>
      </div>
      <div v-if="lang === 'ru'" class="service-list">
        <div class="service-card card-1">
          <div class="card-title">
            <p class="card-title__text">Связи с<br />общественностью</p>
          </div>
          <ul class="card-list">
            <li>формирование положительного имиджа компании</li>
            <li>подготовка и проведение PR-кампаний</li>
            <li>работа со СМИ</li>
            <li>подготовка пресс-релизов</li>
            <li>организация пресс-туров</li>
            <li>проведение мероприятий для прессы</li>
            <li>комментарийные программы</li>
            <li>антикризисный пиар</li>
            <li>мониторинг СМИ и аналитика</li>
            <li>написание текстовых материалов любой тематики и сложности</li>
            <li>письменные и устные переводы</li>
          </ul>
        </div>
        <div class="service-card card-2">
          <div class="card-title"><p class="card-title__text">Мероприятия</p></div>
          <ul class="card-list">
            <li>организация бизнес, культурных и спортивных мероприятий</li>
            <li>проведение форумов, конференций и экспертных мероприятий</li>
            <li>разработка партнерских пакетов и поиск информационных партнеров</li>
          </ul>
        </div>
        <div class="service-card card-3">
          <div class="card-title">
            <p class="card-title__text">Создание фото и<br />видео контента</p>
          </div>
          <ul class="card-list">
            <li>проведение предметных, интерьерных и репортажных фотосессий</li>
            <li>съемки видео роликов и постпродакшн</li>
            <li>создание рекламного и корпоративного контента</li>
          </ul>
        </div>
        <div class="service-card card-4">
          <div class="card-title"><p class="card-title__text">Digital & SMM</p></div>
          <ul class="card-list">
            <li>ведение аккаунтов в соц сетях</li>
            <li>работа с лидерами мнений</li>
            <li>настройка и ведение рекламных кампаний</li>
          </ul>
        </div>
        <div class="service-card card-5">
          <div class="card-title"><p class="card-title__text">Дизайн и брендинг</p></div>
          <ul class="card-list">
            <li>разработка логотипа и фирменного стиля</li>
            <li>создание инфографик</li>
            <li>оформление презентаций</li>
            <li>креатив и дизайн рекламных материалов</li>
            <li>дизайн упаковки</li>
          </ul>
        </div>
        <div class="service-card card-6">
          <div class="card-title"><p class="card-title__text">Работа с государственными структурами</p></div>
          <ul class="card-list">
            <li>разработка проектов совместно с органами государственной власти</li>
            <li>формирование положительного образа компании</li>
            <li>весь спектр информационной и it поддержки некоммерческого сектора</li>
            <li>grassroots технологии</li>
          </ul>
        </div>
        <div class="service-card card-7">
          <div class="card-title"><p class="card-title__text">Международные проекты</p></div>
          <ul class="card-list">
            <li>PR-сопровождение иностранных брендов на российском рынке</li>
          </ul>
        </div>
      </div>
      <div v-if="lang === 'en'" class="service-list">
        <div class="service-card card-1">
          <div class="card-title">
            <p class="card-title__text">Public <br/>Relations</p>
          </div>
          <ul class="card-list">
            <li>creating a positive image of the company</li>
            <li>preparing and running PR campaigns</li>
            <li>working with media</li>
            <li>preparing press releases</li>
            <li>organizing press tours</li>
            <li>running events for the press</li>
            <li>commentary programs</li>
            <li>anti-crisis public relations</li>
            <li>media monitoring and analytics</li>
            <li>writing texts on any subject, no matter how sophisticated</li>
            <li>translating and interpreting</li>
          </ul>
        </div>
        <div class="service-card card-2">
          <div class="card-title"><p class="card-title__text">Events</p></div>
          <ul class="card-list">
            <li>organizing business, cultural and sporting events</li>
            <li>holding forums, conferences and expert events</li>
            <li>development of partner packages and searching for information partners</li>
          </ul>
        </div>
        <div class="service-card card-3">
          <div class="card-title">
            <p class="card-title__text">Photo and Video <br/>Content</p>
          </div>
          <ul class="card-list">
            <li>object and interior photoshoots, photojournalism</li>
            <li>video production and postproduction</li>
            <li>creating advertising and corporate content</li>
          </ul>
        </div>
        <div class="service-card card-4">
          <div class="card-title"><p class="card-title__text">Digital & SMM</p></div>
          <ul class="card-list">
            <li>running social media accounts</li>
            <li>working with opinion leaders</li>
            <li>adjusting and conducting advertising campaigns</li>
          </ul>
        </div>
        <div class="service-card card-5">
          <div class="card-title"><p class="card-title__text">Design and Branding</p></div>
          <ul class="card-list">
            <li>logo design and corporate styling</li>
            <li>infographic making</li>
            <li>presentation making</li>
            <li>creative ideas and design of promotional materials</li>
            <li>package design</li>
          </ul>
        </div>
        <div class="service-card card-6">
          <div class="card-title"><p class="card-title__text">Cooperation with Government Bodies</p></div>
          <ul class="card-list">
            <li>project development together with public authorities</li>
            <li>creating a positive image of the company</li>
            <li>the whole range of information and IT support of the non-commercial sector</li>
            <li>grassroots technologies</li>
          </ul>
        </div>
        <div class="service-card card-7">
          <div class="card-title"><p class="card-title__text">International Projects</p></div>
          <ul class="card-list">
            <li>promoting foreign brands in the Russian market</li>
          </ul>
        </div>
      </div>
      <div v-if="lang === 'port'" class="service-list">
        <div class="service-card card-1">
          <div class="card-title">
            <p class="card-title__text">Relações<br/>públicas</p>
          </div>
          <ul class="card-list">
            <li>Criação de imagem positiva da empresa</li>
            <li>Preparação e realização das PR-campanhas</li>
            <li>Trabalho com a mídia</li>
            <li>Preparação de comunicados</li>
            <li>Organização de tours para imprensa</li>
            <li>Realização de eventos para imprensa</li>
            <li>Programas de comentários</li>
            <li>PR anti-crise</li>
            <li>Monitoramento e análise de mídia</li>
            <li>Elaboração de textos de qualquer tema e nível de dificuldade</li>
            <li>Tradução e interpretação</li>
          </ul>
        </div>
        <div class="service-card card-2">
          <div class="card-title"><p class="card-title__text">Eventos</p></div>
          <ul class="card-list">
            <li>Organização de eventos culturais, esportivos e de negócio</li>
            <li>Realização de fóruns, conferências e eventos periciais</li>
            <li>Criação de pacotes de parceria e busca de parceiros de informação</li>
          </ul>
        </div>
        <div class="service-card card-3">
          <div class="card-title">
            <p class="card-title__text">Criação do conteúdo de <br>foto e vídeo.</p>
          </div>
          <ul class="card-list">
            <li>Realização de ensaios fotográficos de objetos, interiores e reportagens</li>
            <li>Criação de vídeos e pós-produção</li>
            <li>Elaboração do conteúdo corporativo e de marketing</li>
          </ul>
        </div>
        <div class="service-card card-4">
          <div class="card-title"><p class="card-title__text">Digital & SMM</p></div>
          <ul class="card-list">
            <li>Manutenção de perfis nas redes sociais</li>
            <li>Trabalho com líderes de opiniões</li>
            <li>Configuração e realização de campanhas de marketing</li>
          </ul>
        </div>
        <div class="service-card card-5">
          <div class="card-title"><p class="card-title__text">Design e Branding </p></div>
          <ul class="card-list">
            <li>Criação de logotipo e estilo da marca</li>
            <li>Criação de infografias</li>
            <li>Design de apresentações</li>
            <li>Criatividade e design dos materiais de marketing</li>
            <li>Design da embalagem</li>
          </ul>
        </div>
        <div class="service-card card-6">
          <div class="card-title"><p class="card-title__text">Trabalho com instituições públicas </p></div>
          <ul class="card-list">
            <li>Elaboração dos projetos junto com os órgãos governamentais</li>
            <li>Criação da imagem positiva da companhia</li>
            <li>Todo a gama de apoio informacional e IT do setor comercial</li>
            <li>grassroots tecnológicos</li>
          </ul>
        </div>
        <div class="service-card card-7">
          <div class="card-title"><p class="card-title__text">Projetos internacionais</p></div>
          <ul class="card-list">
            <li>Promoção das marcas internacionais no mercado russo </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="service-line">
      <div class="service-line__wrapper">
        <div class="service-line__text">
          <div class="marquee marquee-black marquee-line">СВОБОДА КОММУНИКАЦИЯ ДЛЯ ВАШЕГО БИЗНЕСА СВОБОДА КОММУНИКАЦИЯ ДЛЯ ВАШЕГО БИЗНЕСА</div>
        </div>
        <div class="service-line__block">
          <div class="marquee marquee-white marquee-line">СВОБОДА КОММУНИКАЦИЯ ДЛЯ ВАШЕГО БИЗНЕСА СВОБОДА КОММУНИКАЦИЯ ДЛЯ ВАШЕГО БИЗНЕСА</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Services",
  props: ['lang'],
  mounted() {
    $('.marquee-white').marquee({
      duration: 5000,
      delayBeforeStart: 2500,
      direction: 'left',
      duplicated: true,
      speed: 90
    });
    $('.marquee-black').marquee({
      duration: 5000,
      delayBeforeStart: 0,
      direction: 'left',
      duplicated: true,
      speed: 100
    });
  },
  methods: {
    ScrollAnimate(e){
      if (window.scrollY > 50) {
        console.log('w')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.service{
  .marquee-line{
    width: 100%;
  }
  &-container{
    position: relative;
  }
  &-lines{
    position: absolute;
    top: 89px;
    width: 544px;
    background: #000000;
    height: 15px;
    left: 29%;
  }
}
</style>
