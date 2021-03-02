<template>
  <div class="container">
    <div class="card">
      <div class="card__bg"></div>
      <transition mode="out-in" name="fade">
        <div :key="`${activeSlide}_title`" class="card__title">
          {{ titleItems[activeSlide].value }}
        </div>
      </transition>
      <div class="card__wrapper">
        <div class="card__hashtag">
          #Двойная выгода
        </div>
        <div class="card__stories">
          <svg
            v-for="(item, index) in sliderItems"
            :key="`${item}_svg`"
            @click="chooseSlide(index)"
            width="10px"
            viewBox="0 0 52 52"
            class="donut"
          >
            <circle
              class="donut-hole"
              cx="26"
              cy="26"
              r="15.91549430918954"
              fill="#fff"
            ></circle>

            <circle
              :class="{ donutSegment: activeSlide === item.id }"
              cx="26"
              cy="26"
              r="25.91549430918954"
              fill="none"
              stroke-width="5"
            ></circle>
          </svg>
        </div>
      </div>
      <div class="card__images">
        <transition mode="out-in" name="fade">
          <div
            :key="`${activeSlide}_slide`"
            :class="[sliderItems[activeSlide].className]"
          />
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "sberBlock",
  data() {
    return {
      activeSlide: 0,
      sliderItems: [
        { id: 0, name: "image1", className: "slide card__image-item1" },
        { id: 1, name: "image2", className: "slide card__image-item2" },
        { id: 2, name: "image3", className: "slide card__image-item3" },
        { id: 3, name: "image4", className: "slide card__image-item4" }
      ],
      titleItems: [
        { id: 0, value: "Скидка 10% на страхование ипотеки Сбербанка" },
        { id: 1, value: "Скидка 11% на страхование ипотеки Сбербанка" },
        { id: 2, value: "Скидка 12% на страхование ипотеки Сбербанка" },
        { id: 3, value: "Скидка 13% на страхование ипотеки Сбербанка" }
      ],
      interval: null
    };
  },
  methods: {
    checkActiveSlide() {
      if (this.activeSlide < 3) {
        this.activeSlide += 1;
        console.log(this.activeSlide);
      } else if (this.activeSlide === 3) {
        this.activeSlide = 0;
      }
    },
    chooseSlide(index) {
      this.activeSlide = index;
      clearInterval(this.interval);
    }
  },
  mounted() {
    this.interval = setInterval(this.checkActiveSlide, 5000);
  }
};
</script>
<style lang="stylus" scoped>
.donut
  transform: rotate(270deg)
  margin-right 10px
  &:last-child
    margin-right 30px

.donutSegment
  stroke pink
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
  animation: dash 5s linear

@keyframes dash
  0%
    stroke-dashoffset: 100;

  100%
    stroke-dashoffset: 0;



.container
  margin-top 100px
  display flex
  justify-content center

.card
  max-height 620px
  max-width 490px
  background #20304A
  border-radius 16px
  position relative

  &__bg
    position absolute
    right 18px
    top -10px
    background-color rgba(#20304A, 0.7)
    width 460px
    height 50px
    border-radius 16px

  &__title
    margin 40px 70px 25px 40px
    font-weight 600
    font-size 28px
    color #fff

  &__wrapper
    margin 0 40px 40 40px
    display flex
    justify-content space-between

  &__hashtag
    margin-left 40px
    text-transform uppercase
    color rgba(#A6B2C8, 0.3)
    font-size 14px
    font-weight 500

  &__stories
    display flex
    align-items center

  &__svg
    width 30px
    height 30px
    margin-right 10px
    &:last-child
      margin-right 30px

  &__images
    display flex
    justify-content center
    position relative
    margin 40px 10px 10px 10px
    width 470px
    height 398px
    border-radius 14px

  &__image-item1
    background-image url('../../assets/images/sber.jpg')

  &__image-item2
    background-image url('../../assets/images/sber.jpg')

  &__image-item3
    background-image url('../../assets/images/sber.jpg')

  &__image-item4
    background-image url('../../assets/images/sber.jpg')

.slide
  position absolute
  background-repeat no-repeat
  background-position center center
  background-size cover
  border-radius 16px
  width 100%
  height 100%
  bottom 10px

.activeStorie
  border 2px solid white
  padding 4px

.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
