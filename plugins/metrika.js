import Vue from 'vue'
import VueYandexMetrika from 'vue-yandex-metrika'

Vue.use(VueYandexMetrika, {
  id: 68356234,
  debug: true,
  env: "production",
  scriptSrc: "https://mc.yandex.ru/metrika/tag.js",
  options: {
    clickmap:true,
    trackLinks:true,
    accurateTrackBounce:true,
    webvisor:true
  }
  // other options
})
