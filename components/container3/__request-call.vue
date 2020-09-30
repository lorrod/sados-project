<template>
  <div class="request-call">
    <h3 class="request-call__title">Заказать звонок</h3>
    <br>
    <br>
    <div class="request-call__inputs">
      <div class="request-call__inputs--name-number">
        <input type='text' class="request-call__input request-call__input--name" v-model="username" placeholder="Как Вас зовут?">
        <input type='text' class="request-call__input request-call__input--phone" v-model="phone" placeholder="Ваш телефон">
      </div>
      <div class="request-call__note">
        <input type='text' class="request-call__input request-call__input--note" v-model="notetext" placeholder="Заметка">
      </div>
      <br>
      <br>
      <div class="request-call__hint">
        {{ hintText }}
      </div>
      <div class="request-call__btn-agreement" @click="sendMessage">
        <div class="request-call__btn" :class="btnDisabled">
          <p>{{ btn_message }}</p>
        </div>
        <div class="request-call__agreement">
          Нажимая на кнопку «Отправить» вы подтверждаете свое <a class="request-call__agreement--link" href="#">согласие</a> на обработку персональных данных
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "requestCall",
  data: function () {
    return {
      username: '',
      phone: '',
      notetext: '',
      btn_message: 'Отправить →',
      btnDisabled: '',
      hintText: '',
    }
  },
  methods: {
    sendMessage() {
      if (this.username === '') {
        this.hintText = 'Пожалуйста, напишите как к Вам обращаться.'
        return
      } else if (this.phone === '' || this.phone.length < 5) {
        this.hintText = 'Пожалуйста, укажите действующий телефонный номер.'
        return
      }
      this.hintText = ''
      this.btnDisabled = "request-call__btn--disabled"
      this.btn_message = "Отправлено!"
    }
  }
}
</script>

<style lang="scss">

  .request-call {
    max-width: 1000px;
    &__title {
      margin-bottom: 20px;
      font-size: 70px;
      font-weight: 600;
    }
    &__input {
      border: none;
      border-bottom: 1px solid #888;
      height: 40px;
      margin-bottom: 15px;
      outline: none;
      font-size: 19px;
      background-color: #FCFBF9;
      //width: 100%;
      &--name {
        width: 45%;
        font-weight: 500;
        &::placeholder {
          color: #1F1F1F;
        }
      }
      &--phone {
        width: 45%;
        font-weight: 500;
        &::placeholder {
          color: #1F1F1F;
        }
      }
      &--note {
        width: 100%;
        font-weight: 500;
        &::placeholder {
          color: #1F1F1F;
        }
      }
    }
    &__inputs{
      &--name-number {
        display: flex;
        justify-content: space-between;
      }
    }
    &__btn-agreement {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
    &__btn {
      //display: flex;
      //align-items: center;
      white-space: nowrap;
      width: fit-content;
      //margin: 30px auto 30px auto;
      background-color: rgb(235,233,224);
      border-radius: 10px;
      padding: 18px 40px 18px 40px;
      font-weight: 500;
      margin: 10px 10px 10px 0;
      cursor: pointer;
      &--disabled {
        cursor: not-allowed;
        color: #c0c0c0;
        background-color: #ffffff;
      }
      &:hover {
        background-color: #999999;
      }
    }
    &__agreement {
      color: rgb(184,183,182);
      font-size: 19px;
      &--link {
        color: rgb(184,183,182);
      }
    }
    &__hint {
      color: darkred;
      font-size: 19px;
    }
  }

  @media (max-width: $extraLargeScreen) {
      .request-call {
        &__title {
          font-size: 60px;
        }
        &__input {
          font-size: 14px;
        }
        &__agreement {
          font-size: 14px;
        }
        &__hint {
          font-size: 14px;
        }
      }
  }

  @media (max-width: $mediumScreen) {
    .request-call {
      &__title {
        font-size: 40px;
      }
      &__btn {
        margin: 5px 10px 5px 0;
      }
    }
  }

</style>
