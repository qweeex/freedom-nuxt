<template>
  <section class="contact" id="contact">
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
            <form @submit="checkForm" method="post" action="#" class="form-wrapper" v-if="lang === 'ru'">
              <div class="form-input"><input name="name" v-model="name" type="text" placeholder="имя" /></div>
              <div class="form-input"><input name="phone" v-model="phone" type="text" placeholder="телефон" /></div>
              <div class="form-input"><input name="email" v-model="email" type="text" placeholder="e-mail" /></div>
              <div class="form-submit">
                <button type="submit">Отправить</button>
              </div>
            </form>
            <form @submit="checkForm" method="post" action="#" class="form-wrapper" v-if="lang === 'en'">
              <div class="form-input"><input name="name" v-model="name" type="text" placeholder="name" /></div>
              <div class="form-input"><input name="phone" v-model="phone" type="text" placeholder="phone" /></div>
              <div class="form-input"><input name="email" v-model="email" type="text" placeholder="e-mail" /></div>
              <div class="form-submit">
                <button type="submit">Send</button>
              </div>
            </form>
            <form @submit="checkForm" method="post" action="#" class="form-wrapper" v-if="lang === 'port'">
              <div class="form-input"><input name="name" v-model="name" placeholder="nome" /></div>
              <div class="form-input"><input name="phone" v-model="phone" placeholder="telefone" /></div>
              <div class="form-input"><input name="email" v-model="email" placeholder="e-mail" /></div>
              <div class="form-submit">
                <button type="submit">Enviar</button>
              </div>
            </form>
            <div class="form-policy">
              <p class="form-policy__text" v-if="lang === 'ru'">
                Нажав кнопку “Отправить” вы даете согласие<br />на обработку Ваших <span class="policy-link" @click="$store.commit('policy/showPopup')">персональных данных</span>
              </p>
              <p class="form-policy__text" v-if="lang === 'en'">
                By pressing the Send button, you agree to your <br> <span class="policy-link" @click="$store.commit('policy/showPopup')">personal data</span> processing
              </p>
              <p class="form-policy__text" v-if="lang === 'port'">
                Apertando “Enviar”, você aceita processamento dos <br> <span class="policy-link" @click="$store.commit('policy/showPopup')">seus dados</span> pessoais
              </p>
            </div>
          </div>
        </div>
        <ContactBlock :lang="this.$props.lang"/>
      </div>
      <div class="contact-row">
        <div class="contact-privat">
          <p class="contact-privat__text">© 2020 “FREEDOM PR”. All rights reserved.<br /> <span class="policy-link" @click="$store.commit('policy/showPopup')">Privacy policy</span></p>
        </div>
      </div>
    </div>
    <notifications group="contact" />
  </section>
</template>

<script>
import ContactBlock from '@/components/Contact/ContactBlock'
import Axios from 'axios'
export default {
  name: "Contact",
  props: ['lang'],
  data(){
    return{
      name: null,
      email: null,
      phone: null
    }
  },
  components: {
    ContactBlock
  },
  methods: {
    checkForm(e){
      e.preventDefault();
      if (this.name === null){
        this.$notify({
          group: 'contact',
          title: 'Ошибка',
          text: 'Незаполнено поле: <b>Ваше ФИО</b>',
          type: 'warn'
        });
        return
      }
      if (this.email === null){
        this.$notify({
          group: 'contact',
          title: 'Ошибка',
          text: 'Незаполнено поле: <b>E-mail</b>',
          type: 'warn'
        });
        return
      }
      if (this.phone === null){
        this.$notify({
          group: 'contact',
          title: 'Ошибка',
          text: 'Незаполнено поле: <b>Телефон</b>',
          type: 'warn'
        });
        return
      }

      const data = {
        name: this.name,
        email: this.email,
        phone: this.phone
      };

      Axios({
          method: 'post',
          url: 'http://freedom.sitecriy.beget.tech/api/message',
          data: data,
          headers: {'Content-Type': 'multipart/form-data' }
        })
        .then((res) => {
          this.$notify({
            group: 'contact',
            title: 'Сообщение отправлено',
            text: 'Сообщение отправлено, с вами свяжется менеджер',
            type: 'success'
          })
          this.name = null
          this.phone = null
          this.email = null
        })
    }
  }
}
</script>

<style scoped>

</style>
