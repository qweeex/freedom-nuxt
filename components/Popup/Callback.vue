<template>
    <div class="callback" :class="{ callbackShow: $store.state.callback.show }" >
      <div class="callback-bg" @click="$store.commit('callback/hiddenPopup')"></div>
      <div v-if="!success" class="callback-wrapper">
        <div class="callback-top">
          <div class="top-close">
            <img src="~/assets/img/close.svg" @click="$store.commit('callback/hiddenPopup')"  alt="">
          </div>
          <div class="top-title">
            <span v-if="lang === 'ru'">Хочу, чтобы мне перезвонили</span>
            <span v-if="lang === 'en'">Please call me back</span>
            <span v-if="lang === 'port'">Хочу, чтобы мне перезвонили</span>
          </div>
          <div class="top-img">
            <img src="~/assets/img/callback-popup.png" alt="">
          </div>
        </div>
        <div class="callback-form">
          <form v-if="lang === 'ru'" @submit="checkForm" method="post" action="#" class="form-wrapper">
            <div class="form-input">
              <label>
                <input type="text" name="company" v-model="company" placeholder="Название организации*">
              </label>
            </div>
            <div class="form-input">
              <label>
                <input type="text" name="site" v-model="site" placeholder="Ссылка на сайт">
              </label>
            </div>
            <div class="form-input">
              <label>
                <input type="text" name="name" v-model="name" placeholder="Ваше ФИО*">
              </label>
            </div>
            <div class="form-input">
              <label>
                <input type="text" name="position" v-model="position" placeholder="Должность*">
              </label>
            </div>
            <div class="form-input">
              <label>
                <input type="text" name="email" v-model="email" placeholder="Рабочий e-mail*">
              </label>
            </div>
            <div class="form-input">
              <label>
                <input type="text" name="phone" v-model="phone" placeholder="Номер телефона*">
              </label>
            </div>
            <div class="form-btn">
              <button type="submit">Отправить</button>
            </div>
            <div class="form-policy">
              <p class="form-policy__text">
                Нажав кнопку “Отправить” вы даете согласие на обработку Ваших <n-link to="/policy" no-prefetch>персональных данных</n-link>
              </p>
            </div>
          </form>
          <form v-if="lang === 'en'" @submit="checkForm" method="post" action="#" class="form-wrapper">
            <div class="form-input">
              <label>
                <input type="text" name="company" v-model="company" placeholder="Name of your organization *">
              </label>
            </div>
            <div class="form-input">
              <label>
                <input type="text" name="site" v-model="site" placeholder="Website link">
              </label>
            </div>
            <div class="form-input">
              <label>
                <input type="text" name="name" v-model="name" placeholder="Your full name *">
              </label>
            </div>
            <div class="form-input">
              <label>
                <input type="text" name="position" v-model="position" placeholder="Position *">
              </label>
            </div>
            <div class="form-input">
              <label>
                <input type="text" name="email" v-model="email" placeholder="Business e-mail *">
              </label>
            </div>
            <div class="form-input">
              <label>
                <input type="text" name="phone" v-model="phone" placeholder="Phone number *">
              </label>
            </div>
            <div class="form-btn">
              <button type="submit">Send</button>
            </div>
            <div class="form-policy">
              <p class="form-policy__text">
                By pressing the Send button, you agree to your <br>personal data processing
              </p>
            </div>
          </form>
          <form v-if="lang === 'port'" @submit="checkForm" method="post" action="#" class="form-wrapper">
            <div class="form-input">
              <label>
                <input type="text" name="company" v-model="company" placeholder="Nome da companhia *">
              </label>
            </div>
            <div class="form-input">
              <label>
                <input type="text" name="site" v-model="site" placeholder="Link para o site ">
              </label>
            </div>
            <div class="form-input">
              <label>
                <input type="text" name="name" v-model="name" placeholder="Seu nome e sobrenome *">
              </label>
            </div>
            <div class="form-input">
              <label>
                <input type="text" name="position" v-model="position" placeholder="Cargo *">
              </label>
            </div>
            <div class="form-input">
              <label>
                <input type="text" name="email" v-model="email" placeholder="E-mail *">
              </label>
            </div>
            <div class="form-input">
              <label>
                <input type="text" name="phone" v-model="phone" placeholder="Número de telefone *">
              </label>
            </div>
            <div class="form-btn">
              <button type="submit">Enviar</button>
            </div>
            <div class="form-policy">
              <p class="form-policy__text">
                Apertando “Enviar”, você aceita processamento dos <br>seus dados pessoais
              </p>
            </div>
          </form>
        </div>
      </div>
      <div v-if="success" class="callback-success">
        <div class="success-title">
          <span v-if="lang === 'ru'">Ваша заявка отправлена!</span>
          <span v-if="lang === 'en'">Your application has been sent!</span>
          <span v-if="lang === 'port'">Sua inscrição foi enviada!</span>
        </div>
      </div>
    </div>
</template>

<script>

import Axios from 'axios';

export default {
  name: "Callback",
  props: ['lang'],
  data() {
    return{
      errors: [],
      company: null,
      site: null,
      name: null,
      position: null,
      email: null,
      phone: null,
      success: false
    }
  },
  methods: {
    checkForm: function (e) {

      e.preventDefault();

      if (this.name === null){
        this.$notify({
          group: 'brief',
          title: 'Ошибка',
          text: 'Незаполнено поле: <b>Ваше ФИО</b>',
          type: 'warn'
        });
        return
      }
      if (this.company === null){
        this.$notify({
          group: 'brief',
          title: 'Ошибка',
          text: 'Незаполнено поле: <b>Название компании</b>',
          type: 'warn'
        });
        return
      }
      if (this.position === null){
        this.$notify({
          group: 'brief',
          title: 'Ошибка',
          text: 'Незаполнено поле: <b>Должность</b>',
          type: 'warn'
        });
        return
      }
      if (this.email === null){
        this.$notify({
          group: 'brief',
          title: 'Ошибка',
          text: 'Незаполнено поле: <b>E-mail</b>',
          type: 'warn'
        });
        return
      }
      if (this.phone === null){
        this.$notify({
          group: 'brief',
          title: 'Ошибка',
          text: 'Незаполнено поле: <b>Телефон</b>',
          type: 'warn'
        });
        return
      }

      Axios.post(this.$store.state.site.url + '/api/message', {
        data: {
          company: this.company,
          site: this.site,
          name: this.name,
          position: this.position,
          email: this.email,
          phone: this.phone,
        }
      })
      .then((res) => {
        this.company = null;
        this.site = null;
        this.name = null;
        this.position = null;
        this.email = null;
        this.phone = null;
        this.$notify({
          group: 'brief',
          title: 'Сообщение отправлено',
          text: 'Сообщение отправлено, с вами свяжется менеджер',
          type: 'success'
        })
        this.$store.commit('callback/hiddenPopup');
      });


    }
  }
}
</script>

<style lang="less" scoped>
    .callbackShow{
      visibility: visible !important;
      opacity: 1 !important;
    }
    .callback{
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 100;
      display: flex;
      align-items: center;
      visibility: hidden;
      opacity: 0;
      transition: all 0.4s;
      justify-content: center;
      &-success{
        background: #fff;
        position: relative;
        z-index: 200;
        max-width: 795px;
        width: 100%;
        padding-top: 50px;
        padding-bottom: 50px;
        .success-title{
          text-align: center;
          span{
            font-weight: 800;
            font-size: 25px;
            text-transform: uppercase;
            color: #000000;
            text-align: center;
          }
        }
      }
      &-wrapper{
        background: #fff;
        position: relative;
        z-index: 200;
        max-width: 795px;
        width: 100%;
        .callback-top{
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 58px;
          flex-flow: row wrap;
          .top-close{
            width: 100%;
            text-align: right;
            padding-bottom: 20px;
            img{
              cursor: pointer;
            }
          }
          .top-title{
            span{
              font-weight: 800;
              font-size: 25px;
              text-transform: uppercase;
              color: #000000;
            }
          }
        }
        .callback-form{
          padding: 0 58px 58px;
          .form-input{
            margin-bottom: 30px;
            input{
              width: 100%;
              font-size: 18px;
              line-height: 18px;
              color: #171717;
              border: 0;
              border-bottom: 1px solid #171717;
              padding-bottom:6px;
              padding-top: 9px;
              &::placeholder{
                font-size: 18px;
                line-height:18px;
                color: #171717;
              }
            }
          }
          .form-btn{
            margin-top: 42px;
            button{
              font-weight: 700;
              font-size: 16px;
              color: #171717;
              padding: 0;
              margin: 0;
              background: transparent;
              border: 0;
              position: relative;
              width: max-content;
              &:before{
                width: 0%;
                height: 5px;
                background: #171717;
                display: block;
                content: '';
                position: relative;
                top: -5px;
                transition: all 0.4s;
              }
              &:hover{
                &:before{
                  width: 100%;
                }
              }
            }
          }
          .form-policy{
            margin-top: 24px;
            &__text{
              font-weight: 300;
              font-size: 16px;
              line-height: 16px;
              color: #979797;
              a{
                color: inherit;
              }
            }
          }
        }
      }
      &-bg{
        background: rgba(0,0,0,.5);
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
    }
    @media (min-width: 1330px) and (max-width: 1470px) {
      .callback{
        &-wrapper{
          zoom: .8;
        }
      }
    }
    @media (max-width: 600px){
      .callback{
        max-width: 100%;
        &-success{
          width: 90%;
        }
        &-wrapper{
          max-width: 95%;
          .callback-top{
            padding: 15px;
            .top-title{
              width: 70%;
              span{
                font-size: 20px;
              }
            }
            .top-img{
              width: 30%;
              img{
                max-width: 100%;
              }
            }
          }
          .callback-form{
            padding: 0 15px 15px;
            .form-input{
              margin-bottom: 20px;
              input{
                width: calc(100% - 20px);
              }
            }
            .form-policy{
              &__text{
                font-size: 15px;
              }
            }
          }
        }
      }
    }
</style>
