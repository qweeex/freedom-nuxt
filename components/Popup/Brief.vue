<template>
  <div class="callback" :class="{ callbackShow: $store.state.brief.show }" >
    <div class="callback-bg" @click="$store.commit('brief/hiddenPopup')" ></div>
    <div v-if="!success" class="callback-wrapper">
      <div class="callback-top">
        <div class="top-title">
          <span v-if="lang === 'ru'">Хочу заполнить бриф</span>
          <span v-if="lang === 'en'">I want to fill a brief</span>
          <span v-if="lang === 'port'">Quero preencher o brief </span>
        </div>
        <div class="top-img">
          <img src="~/assets/img/brief-popup.png" alt="">
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
          <div class="form-textarea">
            <label>
              <textarea name="phone" v-model="question1" placeholder="Занимались ли вы продвижением бизнеса до этого?"></textarea>
            </label>
          </div>
          <div class="form-textarea">
            <label>
              <textarea name="phone" v-model="question2"  placeholder="Какие проблемы вы выделяете на данном этапе?"></textarea>
            </label>
          </div>
          <div class="form-checkbox">
            <div class="checkbox-title">
              <span>Какие услуги вас интересуют?</span>
            </div>
            <div class="checkbox-list">
              <div class="checkbox-item">
                <input type="checkbox" id="check1" v-model="checkbox" value="разработка Pr-стратегии и длительное абонентское обслуживание">
                <label for="check1">
                  <span class="checkbox-item__check">
                    <span></span>
                  </span>
                  <span class="checkbox-item__name">
                    <span>разработка Pr-стратегии и длительное абонентское обслуживание</span>
                  </span>
                </label>
              </div>
              <div class="checkbox-item">
                <input type="checkbox" id="check2" v-model="checkbox" value="мне необходим разовый проект">
                <label for="check2">
                  <span class="checkbox-item__check">
                    <span></span>
                  </span>
                  <span class="checkbox-item__name">
                    <span>мне необходим разовый проект</span>
                  </span>
                </label>
              </div>
              <div class="checkbox-item">
                <input type="checkbox" id="check3" v-model="checkbox" value="работа со СМИ">
                <label for="check3">
                  <span class="checkbox-item__check">
                    <span></span>
                  </span>
                  <span class="checkbox-item__name">
                    <span>работа со СМИ</span>
                  </span>
                </label>
              </div>
              <div class="checkbox-item">
                <input type="checkbox" id="check4" v-model="checkbox" value="SMM">
                <label for="check4">
                  <span class="checkbox-item__check">
                    <span></span>
                  </span>
                  <span class="checkbox-item__name">
                    <span>SMM</span>
                  </span>
                </label>
              </div>
              <div class="checkbox-item">
                <input type="checkbox" id="check5" v-model="checkbox" value="организация мероприятия">
                <label for="check5">
                  <span class="checkbox-item__check">
                    <span></span>
                  </span>
                  <span class="checkbox-item__name">
                    <span>организация мероприятия</span>
                  </span>
                </label>
              </div>
              <div class="checkbox-item">
                <input type="checkbox" id="check6" v-model="checkbox" value="разработка дизайна">
                <label for="check6">
                  <span class="checkbox-item__check">
                    <span></span>
                  </span>
                  <span class="checkbox-item__name">
                    <span>разработка дизайна</span>
                  </span>
                </label>
              </div>
              <div class="checkbox-item">
                <input type="checkbox" id="check7" v-model="checkbox" value="создание фото или видео контента">
                <label for="check7">
                  <span class="checkbox-item__check">
                    <span></span>
                  </span>
                  <span class="checkbox-item__name">
                    <span>создание фото или видео контента</span>
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div class="form-textarea">
            <label>
              <textarea name="phone" v-model="question3"  placeholder="Ваш комментарий, если необходимой услуги нет в списке"></textarea>
            </label>
          </div>
          <div class="form-textarea">
            <label>
              <textarea name="phone" v-model="question4"  placeholder="Общие комментарии и пожелания"></textarea>
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
          <div class="form-textarea">
            <label>
              <textarea name="phone" v-model="question1"  placeholder="Did you promote your business before?"></textarea>
            </label>
          </div>
          <div class="form-textarea">
            <label>
              <textarea name="phone" v-model="question2"  placeholder="What challenges do you face at this stage?"></textarea>
            </label>
          </div>
          <div class="form-checkbox">
            <div class="checkbox-title">
              <span>What services are you interest in?</span>
            </div>
            <div class="checkbox-list">
              <div class="checkbox-item">
                <input type="checkbox" id="check1" v-model="checkbox" value="PR strategy development and long-term services">
                <label for="check1">
                  <span class="checkbox-item__check">
                    <span></span>
                  </span>
                  <span class="checkbox-item__name">
                    <span>PR strategy development and long-term services</span>
                  </span>
                </label>
              </div>
              <div class="checkbox-item">
                <input type="checkbox" id="check2" v-model="checkbox" value="I want a one-time project">
                <label for="check2">
                  <span class="checkbox-item__check">
                    <span></span>
                  </span>
                  <span class="checkbox-item__name">
                    <span>I want a one-time project</span>
                  </span>
                </label>
              </div>
              <div class="checkbox-item">
                <input type="checkbox" id="check3" v-model="checkbox" value="Media communications">
                <label for="check3">
                  <span class="checkbox-item__check">
                    <span></span>
                  </span>
                  <span class="checkbox-item__name">
                    <span>Media communications</span>
                  </span>
                </label>
              </div>
              <div class="checkbox-item">
                <input type="checkbox" id="check4" v-model="checkbox" value="SMM">
                <label for="check4">
                  <span class="checkbox-item__check">
                    <span></span>
                  </span>
                  <span class="checkbox-item__name">
                    <span>SMM</span>
                  </span>
                </label>
              </div>
              <div class="checkbox-item">
                <input type="checkbox" id="check5" v-model="checkbox" value="Event organization">
                <label for="check5">
                  <span class="checkbox-item__check">
                    <span></span>
                  </span>
                  <span class="checkbox-item__name">
                    <span>Event organization</span>
                  </span>
                </label>
              </div>
              <div class="checkbox-item">
                <input type="checkbox" id="check6" v-model="checkbox" value="Design works">
                <label for="check6">
                  <span class="checkbox-item__check">
                    <span></span>
                  </span>
                  <span class="checkbox-item__name">
                    <span>Design works</span>
                  </span>
                </label>
              </div>
              <div class="checkbox-item">
                <input type="checkbox" id="check7" v-model="checkbox" value="Photo or video content">
                <label for="check7">
                  <span class="checkbox-item__check">
                    <span></span>
                  </span>
                  <span class="checkbox-item__name">
                    <span>Photo or video content</span>
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div class="form-textarea">
            <label>
              <textarea name="phone" v-model="question3"  placeholder="If you haven’t found what you are looking for in the list, please name it here:"></textarea>
            </label>
          </div>
          <div class="form-textarea">
            <label>
              <textarea name="phone" v-model="question4"  placeholder="General comments and wishes"></textarea>
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
              <input type="text" name="site" v-model="site" placeholder="Link para o site">
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
          <div class="form-textarea">
            <label>
              <textarea name="phone" v-model="question1"  placeholder="Você tem experiência em promoção do negócio?"></textarea>
            </label>
          </div>
          <div class="form-textarea">
            <label>
              <textarea name="phone" v-model="question2"  placeholder="Que problemas pode destacar nessa etapa?"></textarea>
            </label>
          </div>
          <div class="form-checkbox">
            <div class="checkbox-title">
              <span>Em que serviços está interessado?</span>
            </div>
            <div class="checkbox-list">
              <div class="checkbox-item">
                <input type="checkbox" id="check1" v-model="checkbox" value="Elaboração da estratégia PR  e acompanhamento duradouro.">
                <label for="check1">
                  <span class="checkbox-item__check">
                    <span></span>
                  </span>
                  <span class="checkbox-item__name">
                    <span>Elaboração da estratégia PR  e acompanhamento duradouro. </span>
                  </span>
                </label>
              </div>
              <div class="checkbox-item">
                <input type="checkbox" id="check2" v-model="checkbox" value="Preciso de um projeto de uma vez só ">
                <label for="check2">
                  <span class="checkbox-item__check">
                    <span></span>
                  </span>
                  <span class="checkbox-item__name">
                    <span>Preciso de um projeto de uma vez só </span>
                  </span>
                </label>
              </div>
              <div class="checkbox-item">
                <input type="checkbox" id="check3" v-model="checkbox" value="Trabalho com mídia">
                <label for="check3">
                  <span class="checkbox-item__check">
                    <span></span>
                  </span>
                  <span class="checkbox-item__name">
                    <span>Trabalho com mídia</span>
                  </span>
                </label>
              </div>
              <div class="checkbox-item">
                <input type="checkbox" id="check4" v-model="checkbox" value="SMM">
                <label for="check4">
                  <span class="checkbox-item__check">
                    <span></span>
                  </span>
                  <span class="checkbox-item__name">
                    <span>SMM</span>
                  </span>
                </label>
              </div>
              <div class="checkbox-item">
                <input type="checkbox" id="check5" v-model="checkbox" value="Organização de eventos">
                <label for="check5">
                  <span class="checkbox-item__check">
                    <span></span>
                  </span>
                  <span class="checkbox-item__name">
                    <span>Organização de eventos </span>
                  </span>
                </label>
              </div>
              <div class="checkbox-item">
                <input type="checkbox" id="check6" v-model="checkbox" value="Elaboração de design">
                <label for="check6">
                  <span class="checkbox-item__check">
                    <span></span>
                  </span>
                  <span class="checkbox-item__name">
                    <span>Elaboração de design</span>
                  </span>
                </label>
              </div>
              <div class="checkbox-item">
                <input type="checkbox" id="check7" v-model="checkbox" value="Criação de conteúdo foto e vídeo">
                <label for="check7">
                  <span class="checkbox-item__check">
                    <span></span>
                  </span>
                  <span class="checkbox-item__name">
                    <span>Criação de conteúdo foto e vídeo </span>
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div class="form-textarea">
            <label>
              <textarea name="phone" v-model="question3" placeholder="Comente aqui caso o seu serviço não esteja na lista:"></textarea>
            </label>
          </div>
          <div class="form-textarea">
            <label>
              <textarea name="phone" v-model="question4" placeholder="Comentários e observações gerais "></textarea>
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
        <span>Ваша заявка отправлена!</span>
      </div>
    </div>
  </div>
</template>

<script>

import Axios from 'axios';

export default {
  name: "Brief",
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
      checkbox: [],
      question1: null,
      question2: null,
      question3: null,
      question4: null,
      success: false
    }
  },
  methods: {
    checkForm: function (e) {
      if (!this.company){
        this.errors.push('Company is empty')
      }
      if (!this.name){
        this.errors.push('Name is empty')
      }
      if (!this.position){
        this.errors.push('Name is empty')
      }
      if (!this.email){
        this.errors.push('Name is empty')
      }
      if (!this.phone){
        this.errors.push('Name is empty')
      }

      const data = {
        company: this.company,
        name: this.name,
        position: this.position,
        email: this.email,
        phone: this.phone,
        question1: this.question1,
        question2: this.question2,
        question3: this.question3,
        question4: this.question4,
        checkbox: this.checkbox
      };

      Axios({
        method: 'post',
        url: 'http://freedom.sitecriy.beget.tech/api/message',
        data: data,
        headers: {'Content-Type': 'multipart/form-data' }
      })
      .then((res) => {
        console.log(res)
      })


      e.preventDefault();
      //this.success = true;

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
      padding-top: 25px;
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
    height: 90vh;
    overflow: hidden scroll;
    width: 100%;
    .callback-top{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 58px;
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
      .form-textarea{
        margin-bottom: 30px;
        textarea{
          width: 100%;
          font-size: 18px;
          line-height: 18px;
          color: #171717;
          height: 22px;
          border: 0;
          border-bottom: 1px solid #171717;
          font-family: 'Muller';
          &::placeholder{
            font-size: 18px;
            line-height:18px;
            color: #171717;
            font-family: 'Muller';
          }
        }
      }
      .form-checkbox{
        .checkbox-title{
          padding-bottom: 36px;
          span{
            font-size: 20px;
            line-height: 20px;
          }
        }
        .checkbox-item{
          margin-bottom: 25px;
          > label{
            display: flex;
            flex-direction: row;
            cursor: pointer;
          }
          input[type="checkbox"]{
            display: none;
          }
          input[type="checkbox"]:checked{
            + label{
              .checkbox-item__check{
                span{
                  &::before{
                    opacity: 1 !important;
                  }
                }
              }
            }
          }
          &__name{
            flex: 1;
            padding-left: 15px;
            span{
              font-size: 20px;
              line-height: 20px;
              color: #171717;
            }
          }
          &__check{
            flex-basis: 18px;
            span{
              width: 17px;
              height: 17px;
              display: flex;
              content: '';
              position: relative;
              justify-content: center;
              align-items: center;
              border: 1px solid #000000;
              &::before{
                width: 11px;
                height: 11px;
                display: block;
                content: '';
                background: #F37137;
                transition: all 0.4s;
                opacity: 0;
              }
            }
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
@media (max-width: 600px){
  .callback{
    max-width: 100%;
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
