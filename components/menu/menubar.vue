<template>
  <div class="menubar">
    <div class="menubar--style">
      <div class="menubar__labels">
        <div class="menubar__btn-with-name">
          <div class="menubar__btn" @click.stop.prevent="toggleMenu">
             <div id="hamburger" :class="[active ? 'hamburglar is-open' : 'hamburglar is-closed']">
                <div class="burger-icon">
                  <div class="burger-container">
                    <span class="burger-bun-top"></span>
                    <span class="burger-filling"></span>
                    <span class="burger-bun-bot"></span>
                  </div>
                </div>
                <div class="path-burger">
                  <div class="animate-path" />
                </div>
              </div>
          </div>
          <div class="menubar__company">
            <p>ООО</p>
            <p class="menubar__company--brand">САДОС</p>
          </div>
        </div>
        <div class="menubar__contacts menubar__contacts--desktop">
          <div class="menubar__contacts--img menubar__tooltip" @click.stop.prevent="showToolTip('MOBILE')">
            <img class="menubar__tooltip-img--mobile" src="/mobile-phone/mobile-phone-menu.svg" alt="mobile">
            <p class="menubar__tooltip--text" :class="[showTooltipMobile ? 'menubar__tooltip--active' : 'menubar__tooltip--hidden']">+7 (999) 888-55-33</p>
          </div>
          <div class="menubar__contacts--img menubar__tooltip" @click.stop.prevent="showToolTip('PHONE')">
            <img src="/phone/phone-menu.svg" alt="phone">
            <p class="menubar__tooltip--text" :class="[showTooltipPhone ? 'menubar__tooltip--active' : 'menubar__tooltip--hidden']">+7 (495) 116-16-59</p>
          </div>
          <div class="menubar__contacts--img menubar__tooltip" @click.stop.prevent="showToolTip('MAIL')">
            <img src="/envelope/envelope-menu.svg" alt="mail">
            <p class="menubar__tooltip--text" :class="[showTooltipMail ? 'menubar__tooltip--active' : 'menubar__tooltip--hidden']">info@ooosados.ru</p>
          </div>
        </div>
        <div class="menubar__contacts menubar__contacts--mobile" @click.stop.prevent="showModalWindow()">
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
          <p class="menubar__information--email menubar__information--content">info@ooosados.ru</p>
          <p class="menubar__information--phone  menubar__information--content">+7 (495) 116-16-59</p>
          <p class="menubar__information--mob-phone  menubar__information--content">+7 (999) 888-55-33</p>
        </div>
      </div>
    </div>
    <modalPhones :show-modal="showModalPhone" @closeModalPhone="closeModalPhone"/>
  </div>
</template>

<script>
import modalPhones from '../modal/__show-phone'
import { TimelineLite } from 'gsap'

let tl = new TimelineLite()

export default {
  name: "menubar",
  data() {
    return {
      active: false,
      showModalPhone: false,
      timeline: tl,
      showTooltipMail: false,
      showTooltipPhone: false,
      showTooltipMobile: false,
    }
  },
  components: {
    modalPhones
  },
  watch: {
    /*
    showModalPhone: function () {
      if (this.showModalPhone) {
        document.documentElement.style.overflow = 'hidden'
        return
      }
      document.documentElement.style.overflowY: 'scroll'
    }

     */
  },
  methods: {
    hideContent() {
      if (this.active === true) {
        //this.active = false
      } else if (this.showModalPhone) {
        this.showModalPhone = false
      }
    },
    closeModalPhone() {
      this.showModalPhone = false
    },
    showModalWindow() {
      this.closeAll()
      this.showModalPhone = !this.showModalPhone
    },
    showToolTip(tip) {
      // do not close all for posibility to show several tooltips
      if (this.active) {
        this.toggleMenu()
      }
      switch(tip) {
        case "MOBILE":
          this.showTooltipMobile = !this.showTooltipMobile
          break
        case "PHONE":
          this.showTooltipPhone = !this.showTooltipPhone
          break
        case "MAIL":
          this.showTooltipMail = !this.showTooltipMail
          break
        default:
          console.log('mistake?')
      }
    },
    toggleMenu() {
      if (this.showTooltipMail || this.showTooltipPhone || this.showTooltipMobile) {
        this.showTooltipMail = false
        this.showTooltipPhone = false
        this.showTooltipMobile = false
      }
      if (!this.active) {
        this.active = true
        console.log('here')
        console.log(this.active)
       if (window.innerWidth > 830) {// to start animation at one time we need to set parameters, but after several clicks then animation brokes
        this.timeline
        .to('.menubar__content',  {x:430, opacity: 1, duration: 0.4, ease: "power4"})// parameters 'showFirst'
        .fromTo('.menubar__options-href', {x:-430, opacity: 0}, {x:0, duration: 0.2, opacity: 1, ease: "power4", stagger: {each: 0.1}})// parameters 'showFirst'
        .fromTo('menubar__information--hr', {opacity:0}, {opacity:1}, 'showSecond')
        .fromTo('.menubar__information--content', {y:500, opacity: 0}, {y:0, duration: 0.2, opacity: 1 , stagger: {each: 0.1}})// parameters 'showSecond'
        } else {
        this.timeline
        .to('.menubar__content', {y:window.innerHeight+70, opacity: 1, duration: 1, ease: "power4"})// parameters 'showFirst'
        .fromTo('.menubar__options-href', {y:"-50%", opacity: 0}, {y:0, duration: 0.2, opacity: 1, ease: "power4", stagger: {each: 0.1}})// parameters 'showFirst'
        .fromTo('.menubar__information--hr', {opacity:0}, {opacity:1})// parameters 'showSecond'
        .fromTo('.menubar__information--content', {y:500, opacity: 0}, {y:0, duration: 0.2, opacity: 1 , stagger: {each: 0.1}})// parameters 'showSecond'
        }
      } else {
        this.active = false
        console.log('should be here')
       if (window.innerWidth > 830) {
        this.timeline
        .to('.menubar__content',  {x:0, duration: 0.7})
        } else {
        this.timeline
        .to('.menubar__content', {y:0, duration: 0.7})
        }
      }
    },
    scrollTo(container) {
      this.active = false
      console.log('active to false')
      console.log(this.active)
      this.$emit("goToSection", container)
    },
    closeAll() {
      if (this.active) {
        this.toggleMenu()
      } else if (this.showModalPhone) {
        this.closeModalPhone()
      } else if (this.showTooltipMail || this.showTooltipPhone || this.showTooltipMobile) {
        this.showTooltipMail = false
        this.showTooltipPhone = false
        this.showTooltipMobile = false
      }
    }
  }
}
</script>

<style lang="scss">
.menubar {
  position: fixed;
  top: 0;
  left: 0;
  //overflow-x: hidden;
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
    cursor: pointer;
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
    opacity: 0;
    left: -430px;
    top: 0; //[1] anchor
    width: 430px;
    min-width: 450px;
    height: 100vh;
    z-index: 99;
    background-color: rgb(31,31,31);
    //transition: 0.5s;
    //transform: translateX(-100%);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &-active {
      //transform: translateX(0%);
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
      font-weight: 600;
      margin: 20px 0 20px 0;
    }
    &--phone {
      font-weight: 500;
      margin: 5px 0 5px 0;
    }
    &--mob-phone {
      font-weight: 500;
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
	    //-webkit-animation: slide-right 1s cubic-bezier(0.680, -0.550, 0.265, 2.550) both;
	    //    animation: slide-right 1s cubic-bezier(0.680, -0.550, 0.265, 2.550) both;
    }
    &-href{
      margin-top: 20px;
      color: rgb(250,250,250);
      text-decoration: none;
      font-weight: 600;
      font-size: 32px;
      transition-property: transform;
      transition: 0.25s ease;
      width: max-content;
      cursor: pointer;
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
      font-weight: bold;
      margin-left: 5px;
    }
  }
  &__contacts {
    display: flex;
    text-align: center;
    flex-direction: column;
    margin-bottom: 33px;
    &--img {
      margin: 7px auto 7px auto;
      // width: 24px;// strange auto fit width
    }
    &--mobile {
      display: none;
    }
  }
  &__tooltip {
    cursor: pointer;
    position: relative;
    &--hidden {
      visibility: hidden;
      opacity: 0;
      transform: translateX(10px);
    }
    &--active {
      visibility: visible;
      opacity: 1;
      transform: translateX(10px);
    }
  }
  &__tooltip--text {
    position: absolute;
    display: inline-block;
    z-index: 6000;
    top: -7px;
    left: 40px;
    right: 100%;
    white-space: nowrap;
    background-color: rgba(17,17,17,0.8);
    color: white;
    padding: 10px 20px 10px 20px;
    //border-radius: 10px;
    font-size: 20px;
    transition: 0.5s;
    width: 250px;
    height: 40px;
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
      position: fixed; //sticky [anchor mobile?]
      left: 0;
      top: -100%;
      width: 100vw;
      height: 100vh;
      //transition: 0.5s;
      //transform: translateY(-100%);
      z-index: 5000;
      justify-content: normal;
      min-height: 618px;
    &-active {
      //transform: translateY(0%);
      }
    }
    &__options {
    // margin-top: 100px;
    //margin-left: $menuMobileHeight * 1.5;
    margin: $menuMobileHeight 0 $menuMobileHeight / 2 $menuMobileHeight / 2;
    display: flex;
    flex-direction: column;
    &--active {
	    //-webkit-animation: slide-bottom 1s cubic-bezier(0.680, -0.550, 0.265, 2.550) both;
	     //   animation: slide-bottom 1s cubic-bezier(0.680, -0.550, 0.265, 2.550) both;
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


$color: #000;		  // icon color
$blue: #158fef;	  // background color
$animation: 0.6s;	// animation speed
$scale: 0.8;			  // icon scale 68/68 default

*, *:before, *:after {
  box-sizing: border-box;
 }


h4 {
  font-family: arial,helvetica,serif;
  //color: $color;
  //font-size: 18px;
  text-align: center;
  margin: 40px 0 0;

}

.hamburglar {
  transform: scale($scale);
  margin: auto;
  position: fixed;
  display: block;
  width: 68px;
  height: 68px;
  background: rgb(238,236,242);
  -webkit-touch-callout: none;
	user-select: none;
}


.animate-path {
  position: absolute;
  top: 0;
  left: 0;
  width: 68px;
  height: 68px;
}

// what this does is create a small square that I then rotate behind an svg mask, giving the apparence of the line animating
.path-rotation {
  height: 34px;
  width: 34px;
  margin: 34px 34px 0 0;
  transform: rotate(0deg);
  transform-origin: 100% 0;
  &:before {
    content: '';
    display: block;
    width: 30px;
    height: 34px;
    margin: 0 4px 0 0;
    background: #1F1F1F;
  }
}

// box rotation animation
@keyframes rotate-out {
  0% {
    transform: rotate(0deg);
  }
  40% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes rotate-in {
  0% {
    transform: rotate(360deg);
  }
  40% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

// offset moves
// dasharray is the dash size
// need to be able to control dash space size.

.hamburglar.is-open {
  .path {
    animation: dash-in $animation linear normal;
    animation-fill-mode:forwards;
  }
  .animate-path {
    animation: rotate-in $animation linear normal;
    animation-fill-mode:forwards;
  }
}

.hamburglar.is-closed {
  .path {
    animation: dash-out $animation linear normal;
    animation-fill-mode:forwards;
  }
  .animate-path {
    animation: rotate-out $animation linear normal;
    animation-fill-mode:forwards;
  }
}

.path {
  stroke-dasharray: 240;
  stroke-dashoffset: 240;
  stroke-linejoin: round;
}

@keyframes dash-in {
  0% {
    stroke-dashoffset: 240;
  }
  40% {
    stroke-dashoffset: 240;
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes dash-out {
  0% {
    stroke-dashoffset: 0;
  }
  40% {
    stroke-dashoffset: 240;
  }
  100% {
    stroke-dashoffset: 240;
  }
}



// All good burgers need filling!

.burger-icon {
  position: absolute;
  padding: 20px 16px;
  height: 68px;
  width: 68px;
}

.burger-container {
  position: relative;
  height: 28px;
  width: 36px;
}

.burger-bun-top,
.burger-bun-bot,
.burger-filling {
  position: absolute;
  display: block;
  height: 4px;
  width: 36px;
  border-radius: 2px;
  background: $color;
}

.burger-bun-top {
  top: 0;
  transform-origin: 34px 2px;
}

.burger-bun-bot {
  bottom: 0;
  transform-origin: 34px 2px;
}
//.burger-filling {
//  @include transition(all,($animation/2.5),ease-in-//out);
//}
// relative parent is the button
.burger-filling {
  top: 12px;
}


// bun animations
.hamburglar.is-open {
  .burger-bun-top {
    animation: bun-top-out $animation linear normal;
    animation-fill-mode:forwards;
  }
  .burger-bun-bot {
    animation: bun-bot-out $animation linear normal;
    animation-fill-mode:forwards;
  }
}
.hamburglar.is-closed {
  .burger-bun-top {
    animation: bun-top-in $animation linear normal;
    animation-fill-mode:forwards;
  }
  .burger-bun-bot {
    animation: bun-bot-in $animation linear normal;
    animation-fill-mode:forwards;
  }
}

@keyframes bun-top-out {
  0% {
    left: 0;
    top: 0;
    transform: rotate(0deg);
  }
  20% {
    left: 0;
    top: 0;
    transform: rotate(15deg);
  }
  80% {
    left: -5px;
    top: 0;
    transform: rotate(-60deg);
  }
  100% {
    left: -5px;
    top: 1px;
    transform: rotate(-45deg);
  }
}

@keyframes bun-bot-out {
  0% {
    left: 0;
    transform: rotate(0deg);
  }
  20% {
    left: 0;
    transform: rotate(-15deg);
  }
  80% {
    left: -5px;
    transform: rotate(60deg);
  }
  100% {
    left: -5px;
    transform: rotate(45deg);
  }
}


@keyframes bun-top-in {
  0% {
    left: -5px;
    bot: 0;
    transform: rotate(-45deg);
  }
  20% {
    left: -5px;
    bot: 0;
    transform: rotate(-60deg);
  }
  80% {
    left: 0;
    bot: 0;
    transform: rotate(15deg);
  }
  100% {
    left: 0;
    bot: 1px;
    transform: rotate(0deg);
  }
}

@keyframes bun-bot-in {
  0% {
    left: -5px;
    transform: rotate(45deg);
  }
  20% {
    left: -5px;
    bot: 0;
    transform: rotate(60deg);
  }
  80% {
    left: 0;
    bot: 0;
    transform: rotate(-15deg);
  }
  100% {
    left: 0;
    transform: rotate(0deg);
  }
}


// burger filling
.hamburglar.is-open {
  .burger-filling {
    animation: burger-fill-out $animation linear normal;
    animation-fill-mode:forwards;
  }
}

.hamburglar.is-closed {
  .burger-filling {
    animation: burger-fill-in $animation linear normal;
    animation-fill-mode:forwards;
  }
}

@keyframes burger-fill-in {
  0% {
    width: 0;
    left: 36px;
  }
  40% {
    width: 0;
    left: 40px;
  }
  80% {
    width: 36px;
    left: -6px;
  }
  100% {
    width: 36px;
    left: 0px;
  }
}

@keyframes burger-fill-out {
  0% {
    width: 36px;
    left: 0px;
  }
  20% {
    width: 42px;
    left: -6px;
  }

  40% {
    width: 0;
    left: 40px;
  }

  100% {
    width: 0;
    left: 36px;
  }
}


</style>
