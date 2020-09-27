<template>
  <div class="service" id="service">
    <div class="service-container">
      <div class="service-lines"></div>
      <div class="service-title"><p class="service-title__text">наши услуги</p></div>
      <div class="service-list">
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
