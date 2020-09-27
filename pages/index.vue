<template>
  <div class="wrapper">
    <MainScreen/>
    <section class="big-bg">
      <Services/>
      <About/>
      <div class="cf"></div>
      <Keys/>
    </section>
    <Reviews/>
    <Work/>
    <HandsBlock/>
    <Contact/>
  </div>
</template>

<script>

// Шапка
import Header from '@/components/Header';
// Контакты
import Contact from "~/components/Contact/Contact";
// Блок с руками и попапом
import HandsBlock from "~/components/HandsBlock";
// Первый экран
import MainScreen from '~/components/MainScreen'
// Отзывы
import Reviews from "~/components/Reviews";
// Как мы работаем
import Work from "~/components/Work";
// Работы
import Keys from '@/components/Keys';
// Услуги
import Services from "~/components/Services";
// О нас
import About from "~/components/About";



export default {
  name: "Home",
  components: {
    Header,
    Keys,
    Contact,
    HandsBlock,
    MainScreen,
    Reviews,
    Work,
    Services,
    About
  }
}
</script>

<style scoped lang="less">

</style>
