<template>
  <div class="wrapper">
    <Header lang="port"/>
    <MainScreen lang="port"/>
    <section class="big-bg">
      <Services lang="port"/>
      <About lang="port"/>
      <div class="cf"></div>
      <Keys lang="port"/>
    </section>
    <Reviews lang="port"/>
    <Work lang="port"/>
    <HandsBlock lang="port"/>
    <Contact lang="port"/>
    <Brief lang="port" />
    <Callback lang="port" />
    <Cookie lang="port" />
    <Policy lang="port" />
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
    title: 'Freedom PR Agency Moscou',
  }
}
</script>

<style scoped lang="less">

</style>
