<template>
  <div class="wrapper">
    <Header lang="ru"/>
    <MainScreen/>
    <section class="big-bg">
      <Services lang="ru"/>
      <About lang="ru"/>
      <div class="cf"></div>
      <Keys lang="ru"/>
    </section>
    <Reviews lang="ru"/>
    <Work lang="ru"/>
    <HandsBlock lang="ru"/>
    <Contact lang="ru"/>
    <Callback lang="ru"/>
    <Brief lang="ru" />
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
// Popup Callback
import Callback from "@/components/Popup/Callback";
// Popup Brief
import Brief from "@/components/Popup/Brief";


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
    About,
    Callback,
    Brief
  }
}
</script>

<style scoped lang="less">

</style>
