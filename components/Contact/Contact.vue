<template>
  <section class="contact">
    <div class="contact-container">
      <div class="contact-row">
        <div class="contact-wrapper">
          <div class="contact-title"><p class="contact-title__text">Наши контакты</p></div>
          <div class="contact-block">
            <div class="block-title"><p class="block-title__text">Мы всегда на связи</p></div>
            <div class="block-wrap">
              <a href="">+7 (495) 150-32-16</a> <a href="">+7 (495) 150-32-16</a> <a href="">hello@freedom-pr.com</a>
            </div>
          </div>
          <div class="contact-form">
            <div class="form-title"><p class="form-title__text">Хотите работать у нас?</p></div>
            <div class="form-desc"><p class="form-desc__text">заполните форму и мы свяжемся с Вами</p></div>
            <div class="form-wrapper">
              <div class="form-input"><input name="" placeholder="имя" /></div>
              <div class="form-input"><input name="" placeholder="телефон" /></div>
              <div class="form-input"><input name="" placeholder="e-mail" /></div>
              <div class="form-submit"><button>Отправить</button></div>
            </div>
            <div class="form-policy">
              <p class="form-policy__text">
                Нажав кнопку “Отправить” вы даете согласие<br />на обработку Ваших <n-link to="/policy" no-prefetch>персональных данных</n-link>
              </p>
            </div>
          </div>
        </div>
        <ContactBlock/>
      </div>
      <div class="contact-row">
        <div class="contact-privat">
          <p class="contact-privat__text">© 2020 “FREEDOM PR”. All rights reserved.<br />Privacy policy</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ContactBlock from '@/components/Contact/ContactBlock'
export default {
  name: "Contact",
  components: {
    ContactBlock
  }
}
</script>

<style scoped>

</style>
