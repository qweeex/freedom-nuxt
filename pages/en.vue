<template>
  <div class="wrapper">
    <Header lang="en"/>
    <MainScreen lang="en"/>
    <section class="big-bg">
      <Services lang="en"/>
      <About lang="en"/>
      <div class="cf"></div>
      <Keys lang="en"/>
    </section>
    <Reviews lang="en"/>
    <Work lang="en"/>
    <HandsBlock lang="en"/>
    <Contact lang="en"/>
    <Brief lang="en" />
    <Callback lang="en" />
    <Cookie lang="en"/>
    <Policy lang="en" />
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
// Popup Brief
import Brief from "@/components/Popup/Brief";
// Popup Callback
import Callback from "@/components/Popup/Callback";
// Cookie
import Cookie from "@/components/Cookie";
// Policy
import Policy from "@/components/Popup/Policy";

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
    Brief,
    Callback,
    Cookie,
    Policy
  },
  head: {
    title: 'Freedom PR Agency Moscow',
  }
}
</script>

<style scoped lang="less">

</style>
