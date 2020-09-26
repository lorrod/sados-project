<template>
  <div class="menubar">
    <div class="menubar--style">
      <div class="menubar__labels">
        <div class="menubar__btn-with-name">
          <div class="menubar__btn" @click.stop.prevent="active = !active">
            <img class="menubar__btn--img" src="/menu/menu-btn.svg" alt="mail">
          </div>
          <div class="menubar__company">
            <p>ООО</p>
            <p class="menubar__company--brand">САДОС</p>
          </div>
        </div>
        <div class="menubar__contacts menubar__contacts--desktop">
          <img class="menubar__contacts--img" src="/mobile-phone/mobile-phone-menu.svg" alt="mobile">
          <img class="menubar__contacts--img" src="/phone/phone-menu.svg" alt="phone">
          <img class="menubar__contacts--img" src="/envelope/envelope-menu.svg" alt="mail">
        </div>
        <div class="menubar__contacts menubar__contacts--mobile" @click.stop.prevent="showModalPhone = !showModalPhone">
          <img class="menubar__contacts--img"
               src="/phone/phone-menu.svg"
               alt="phone">
        </div>
      </div>
    </div>
    <div class="menubar__content" :class="[active ? 'menubar__content-active' : '']"  v-click-outside="hideContent">
      <nav class="menubar__options" :class="[active ? 'menubar__options--active' : '']">
        <p class="menubar__options-href" @click="scrollTo(0)">Главная</p>
        <p class="menubar__options-href" @click="scrollTo(1)">Каталог техники</p>
        <p class="menubar__options-href" @click="scrollTo(2)">Контакты</p>
      </nav>
      <div class="menubar__information">
        <hr class="menubar__information--hr">
        <div class="menubar__information--contacts">
          <p class="menubar__information--email">info@ooosados.ru</p>
          <p class="menubar__information--phone">+7 (495) 116-16-59</p>
          <p class="menubar__information--phone">+7 (999) 888-55-33</p>
        </div>
      </div>
    </div>
    <modalPhones :show-modal="showModalPhone" @closeModalPhone="closeModalPhone"/>
  </div>
</template>

<script>
import modalPhones from '../modal/__show-phone'
export default {
  name: "menubar",
  data() {
    return {
      active: false,
      showModalPhone: false
    }
  },
  components: {
    modalPhones
  },
  methods: {
    hideContent() {
      if (this.active === true) {
        this.active = false
      } else if (this.showModalPhone) {
        this.showModalPhone = false
      }
    },
    closeModalPhone() {
      console.log('im not working')
      this.showModalPhone = false
    },
    check() {
      console.log('workin')
    },
    scrollTo(container) {
      this.active = false
      console.log('active to false')
      console.log(this.active)
      this.$emit("goToSection", container)
    }
  }
}
</script>

<style lang="scss">
.menubar {
  position: fixed;
  top: 0;
  left: 0;
  overflow-x: hidden;
  z-index: 10000;
  &--style {
    position: relative;
    z-index: 10001;
    background-color: #FFFFFF;
    width: $menuWidth;
    height: 100vh;
  }
  &__labels {
    height: 100%;
    display: flex;
    color: #1F1F1F;
    flex-direction: column;
    justify-content: space-between;
  }
  &__btn {
    position: relative;
    z-index: 20000;
    display: flex;
    width: $menuWidth;
    height: $menuWidth;
    background-color: #EEECE7;
    &--img {
      // display: block;
      // width: $menuWidth / 2;
      // height: $menuWidth / 2;
      margin: auto;
      // vertical-align:middle;
    }
  }
  &__content {//menubar__content--hr
    position: fixed;//bag not workng with safari!!!
    left: 0px;
    top: 0%; //[1] anchor
    width: 40%;
    min-width: 450px;
    height: 100vh;
    z-index: 99;
    background-color: rgb(31,31,31);
    transition: 0.5s;
    transform: translateX(-100%);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &-active {
      transform: translateX(0%);
    }
  }
  &__information {
    margin-bottom: 100px;
    &--hr {
      margin-left: $menuWidth + $menuWidth / 4;
      margin-right: $menuWidth / 4;
    }
    &--contacts {
      color: rgb(250,250,250);
      margin-left: $menuWidth + $menuWidth / 2;
      margin-right: $menuWidth / 2;
    }
    &--email {
      margin: 20px 0 20px 0;
    }
    &--phone {
      margin: 5px 0 5px 0;
    }
  }
  &__options {
    margin-top: 20px;
    margin-left: $menuWidth * 1.5;
    margin-right: $menuWidth / 4;
    display: flex;
    height: 50%;
    flex-direction: column;
    //transition: 1s;
    //opacity: 0;
    //transition: opacity 2s;
    //transform: translateX(-100%);
    &--active {
	    -webkit-animation: slide-right 1s cubic-bezier(0.680, -0.550, 0.265, 2.550) both;
	        animation: slide-right 1s cubic-bezier(0.680, -0.550, 0.265, 2.550) both;
    }
    &-href{
      margin-top: 20px;
      color: rgb(250,250,250);
      text-decoration: none;
      font-weight: 400;
      font-size: 32px;
      transition-property: transform;
      transition: 0.25s ease;
      width: max-content;
      &::after {
        content: '';
        border-top: 1px solid #fff;
        width: 100%;
        position: absolute;
        display: block;
        transform: rotateY(90deg);
        transition:transform 0.25s linear;
      }
      &:hover {
        transform: scale(1);
      }
      &:hover::after {
        transform: rotate(0deg);
      }
    }
  }
  &__company {
    color: #1F1F1F;
    transform: rotate(-90deg);
    display: flex;
    margin-top: 150px;
    font-size: 25px;
    &--brand {
      font-weight: 600;
      margin-left: 5px;
    }
  }
  &__contacts {
    display: flex;
    text-align: center;
    flex-direction: column;
    margin-bottom: 33px;
    &--img {
      margin: 5px auto 5px auto;
      // width: 24px;// strange auto fit width
    }
    &--mobile {
      display: none;
    }
  }
}

@-webkit-keyframes slide-right {
  0% {
    -webkit-transform: translateX(-30);
            transform: translateX(-30);
  }
  100% {
    -webkit-transform: translateX(30px);
            transform: translateX(30px);
  }
}

@-webkit-keyframes slide-bottom {
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(100px);
            transform: translateY(100px);
  }
}

@media (max-width: $mediumScreen) {
  .menubar {
    //min-width: 340px;
    z-index: 5000;
    &--style {
      background-color: rgb(238,236,231);
      width: 100vw;
      height: $menuMobileHeight;
    }
    &__btn-with-name {
      display: flex;
    }
    &__labels {
      flex-direction: row;
    }
    &__content {
      position: sticky;
      width: 100vw;
      height: 100vh;
      transition: 0.5s;
      transform: translateY(-100%);
      z-index: 5000;
      justify-content: normal;
      min-height: 618px;
    &-active {
      transform: translateY(0%);
      }
    }
    &__options {
    //margin-top: $menuMobileHeight * 1.5;
    //margin-left: $menuMobileHeight * 1.5;
    margin: 0 0 $menuMobileHeight / 2 $menuMobileHeight / 2;
    display: flex;
    flex-direction: column;
    &--active {
	    -webkit-animation: slide-bottom 1s cubic-bezier(0.680, -0.550, 0.265, 2.550) both;
	        animation: slide-bottom 1s cubic-bezier(0.680, -0.550, 0.265, 2.550) both;
    }
    &-href{
      margin-bottom: 20px;
      color: rgb(250,250,250);
      text-decoration: none;
      font-weight: 400;
      font-size: 38px;
      margin-left: $menuWidth;
      }
    }
    &__contacts {
      flex-direction: row;
      margin-bottom: 0;
      margin-right: 33px;
      &--mobile {
        display: flex;
        z-index: 30010;
      }
      &--img {
        margin: auto;
        width: 30px;// strange auto fit width
        height: 30px;
        }
      &--desktop {
        display: none;
      }
    }
    &__company {
      transform: rotate(0deg);
      display: flex;
      margin: auto 5px auto 35px;
    }
    &__information {
      &--hr {
        margin-left: $menuMobileHeight + $menuMobileHeight / 4;
        margin-right: $menuMobileHeight + $menuMobileHeight / 4;
      }
    }
  }
}

@media (max-width: $smallScreen) {
  .menubar {
    &__content {
    }
    &__company {
      margin: auto 3px auto 0px;
    }
    &__contacts {
      margin-right: 15px;
      z-index: 20000;
    &--img {
        margin: auto 0px auto 3px;
      }
    }
    &__options {
      margin: 0 0 0 $menuMobileHeight / 2;
      height: 50%;
      //margin-left: $menuMobileHeight / 2;
      &-href {
        font-size: 30px;
        margin-left: $menuWidth / 2;
      }
    }
    &__information {
      //padding-bottom: 50px;
      &--hr {
        margin-left: $menuMobileHeight / 2;
        margin-right: $menuMobileHeight * 2;
      }
      &--contacts {
        margin-left: $menuMobileHeight;
      }
    }
  }
}
</style>
