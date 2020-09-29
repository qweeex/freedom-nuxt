<template>
  <section class="contact">
    <div class="contact-container">
      <div class="contact-row">
        <div class="contact-wrapper">
          <div class="contact-title">
            <p class="contact-title__text" v-if="lang === 'ru'">Наши контакты</p>
            <p class="contact-title__text" v-if="lang === 'en'">Contact us</p>
            <p class="contact-title__text" v-if="lang === 'port'">Contatos</p>
          </div>
          <div class="contact-block">
            <div class="block-title">
              <p class="block-title__text" v-if="lang === 'ru'">Мы всегда на связи</p>
              <p class="block-title__text" v-if="lang === 'en'">We always stay in touch with you</p>
              <p class="block-title__text" v-if="lang === 'port'">Sempre estamos em contato </p>
            </div>
            <div class="block-wrap">
              <a href="">+7 (495) 150-32-16</a> <a href="">+7 (495) 150-32-16</a> <a href="">hello@freedom-pr.com</a>
            </div>
          </div>
          <div class="contact-form">
            <div class="form-title">
              <p class="form-title__text" v-if="lang === 'ru'">Хотите работать у нас?</p>
              <p class="form-title__text" v-if="lang === 'en'">Do you want to work with us?</p>
              <p class="form-title__text" v-if="lang === 'port'">Quer trabalhar com a gente?</p>
            </div>
            <div class="form-desc">
              <p class="form-desc__text" v-if="lang === 'ru'">заполните форму и мы свяжемся с Вами</p>
              <p class="form-desc__text" v-if="lang === 'en'">fill a form and we will contact you</p>
              <p class="form-desc__text" v-if="lang === 'port'">preencha o formulário e entraremos em contato </p>
            </div>
            <div class="form-wrapper" v-if="lang === 'ru'">
              <div class="form-input"><input name="" placeholder="имя" /></div>
              <div class="form-input"><input name="" placeholder="телефон" /></div>
              <div class="form-input"><input name="" placeholder="e-mail" /></div>
              <div class="form-submit">
                <button>Отправить</button>
              </div>
            </div>
            <div class="form-wrapper" v-if="lang === 'en'">
              <div class="form-input"><input name="" placeholder="name" /></div>
              <div class="form-input"><input name="" placeholder="phone" /></div>
              <div class="form-input"><input name="" placeholder="e-mail" /></div>
              <div class="form-submit">
                <button>Send</button>
              </div>
            </div>
            <div class="form-wrapper" v-if="lang === 'port'">
              <div class="form-input"><input name="" placeholder="nome" /></div>
              <div class="form-input"><input name="" placeholder="telefone" /></div>
              <div class="form-input"><input name="" placeholder="e-mail" /></div>
              <div class="form-submit">
                <button>Enviar</button>
              </div>
            </div>
            <div class="form-policy">
              <p class="form-policy__text" v-if="lang === 'ru'">
                Нажав кнопку “Отправить” вы даете согласие<br />на обработку Ваших <n-link to="/policy" no-prefetch>персональных данных</n-link>
              </p>
              <p class="form-policy__text" v-if="lang === 'en'">
                By pressing the Send button, you agree to your <br>personal data processing
              </p>
              <p class="form-policy__text" v-if="lang === 'port'">
                Apertando “Enviar”, você aceita processamento dos <br>seus dados pessoais
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
  props: ['lang'],
  components: {
    ContactBlock
  }
}
</script>

<style scoped>

</style>
