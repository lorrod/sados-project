<template>
  <div class="modal-show-phone"
       :class="[showModal ? 'modal-show-phone--active' : '']"
  >
    <div class="modal-show-phone__wrapper">
      <div class="modal-show-phone__container">
        <div class="modal-show-phone__header">
          <p>
            Мы ждем вашего звонка!
          </p>
        </div>
        <div class="modal-show-phone__information">
          <img class="modal-show-phone__information--img" src="/mobile-phone/mobile-phone.svg" alt="mobile">
          <p>+7 (999) 888-55-33</p>
        </div>
        <div class="modal-show-phone__information">
          <img class="modal-show-phone__information--img" src="/phone/phone-light.svg" alt="phone">
          <p>+7 (495) 116-16-59</p>
        </div>
        <p>Ежедневно с 9:00 до 18:00 </p>
        <div class="modal-show-phone__footer">
            <div class="modal-show-phone__close-but" @click="closeModal" >Закрыть окно!</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "modal-show-phone",
  props: {
    showModal: {
      type: Boolean,
      default() {
        return true
      }
    },
  },
  watch: {
    showmodal(newValue, oldValue) {
      console.log(oldValue)
    }
  },
  methods: {
    closeModal() {
      this.$emit('closeModalPhone')
    }
  }
}
</script>

<style lang="scss">

.modal-show-phone {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
   display: flex;
  justify-content: center;
   align-items: center;
  //background: rgba(0, 0, 0, 0.7);
  transition: 0.5s;
  transform: translateY(-100%);
  &--active {
    transform: translateY(0%);
    //-webkit-animation: bounce-in-top 1.1s both;
    //        animation: bounce-in-top 1.1s both;
  }
  &__wrapper {
    //padding: 20px;
    // display: table-cell;
    // vertical-align: middle;
    //width: fit-content;
  }
  &__header {
    font-size: 18px;
    font-weight: 500;
    padding: 15px;
    padding-left: 0;
  }
  &__information {
    padding: 5px 0 25px 0;
    display: flex;
    align-items: center;
    //justify-content: space-around;
    &--img {
      margin-right: 20px;
    }
  }
  &__container {
    background: #fff;
    //width: 80%;
    //border-radius: 5px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    margin: 0 auto;
    padding: 20px 30px;
  }
  &__footer {
    margin: 25px auto 25px auto;
    display: flex;
    justify-content: center;
  }

  &__close-but {
    width: fit-content;
    margin: 30px auto 30px auto;
    background-color: rgb(235,233,224);
    //border-radius: 10px;
    padding: 18px 40px 18px 40px;
    font-weight: 600;
    margin: 10px 10px 10px 0;
  }
}


@-webkit-keyframes bounce-in-top {
  0% {
    -webkit-transform: translateY(-500px);
            transform: translateY(-500px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    -webkit-transform: translateY(-65px);
            transform: translateY(-65px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  72% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  81% {
    -webkit-transform: translateY(-28px);
            transform: translateY(-28px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  90% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  95% {
    -webkit-transform: translateY(-8px);
            transform: translateY(-8px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
}
@keyframes bounce-in-top {
  0% {
    -webkit-transform: translateY(-500px);
            transform: translateY(-500px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    -webkit-transform: translateY(-65px);
            transform: translateY(-65px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  72% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  81% {
    -webkit-transform: translateY(-28px);
            transform: translateY(-28px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  90% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  95% {
    -webkit-transform: translateY(-8px);
            transform: translateY(-8px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
}




</style>
