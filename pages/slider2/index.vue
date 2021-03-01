<template>
  <div>
    <div
      class="wrapper"
      @mousedown="trueDown"
      @mousemove="activeDrag"
      @mouseup="falseDown"
    >
      <button @click="swipeRight" ref="swipeRight" class="slider__arrow-right">
        П
      </button>
      <div
        class="slider"
        ref="slides"
        :style="
          `transform: translate3d(-${resultDragPrev + resultDrag}px, 0,0)`
        "
      >
        <div v-for="item in sliderItems" :key="item.id" class="slides">
          <div :class="item.class"></div>
        </div>
      </div>

      <button @click="swipeLeft" ref="swipeLeft" class="slider__arrow-left">
        Л
      </button>
    </div>
    {{ firstRes }}

    {{ resultDrag }}
    <CircleSlider
      :activeSlide="activeSlide"
      :sliderItems="sliderItems"
      @circleClicked="chooseSlide"
    />
  </div>
</template>

<script>
export default {
  name: "SliderIndex",
  data() {
    return {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      activeSlide: 0,
      sliderItems: [
        { id: 0, name: "image1", class: "slide image1" },
        { id: 1, name: "image2", class: "slide image2" },
        { id: 2, name: "image3", class: "slide image3" },
        { id: 3, name: "image4", class: "slide image4" }
      ],
      firstRes: 0,
      clickDown: false,
      resultDragPrev: 0,
      resultDrag: 0
    };
  },
  props: {},
  computed: {},
  methods: {
    trueDown(evt) {
      this.clickDown = true;
      this.firstRes = evt.screenX;
    },
    activeDrag(evt) {
      if (this.clickDown === true) {
        this.resultDrag = this.firstRes - evt.screenX;
      }
    },
    falseDown(evt) {
      this.clickDown = false;
      this.resultDragPrev += this.resultDrag;
      this.resultDrag = 0;
    },
    swipeLeft: function(event) {
      if (this.activeSlide >= 0 && this.activeSlide <= 2) {
        this.activeSlide += 1;
      }
    },
    swipeRight: function(event) {
      if (this.activeSlide >= 1 && this.activeSlide <= 3) {
        this.activeSlide -= 1;
      }
      // $refs.swipeLeft.classList.setAttribute(disabled, disabled);
    },
    chooseSlide(index) {
      this.activeSlide = index;
    }
  },
  mounted() {}
};
</script>

<style lang="stylus" scoped>
.wrapper
    height 50vh
    margin 100px auto 0
    position relative
    overflow hidden
    width 50vw
    box-shadow 0 0 20px rgba(0, 0, 0, 0.5)

.slider
    height inherit
    display inline-flex
    // transition all 0.5s
    &__arrow-right
    &__arrow-left
      display: none;
      position absolute
      color white
      z-index 5
      bottom 50%
    &__arrow-right
      right 0

.slides
  height inherit
  overflow hidden
  width 50vw
.slide
  background-repeat no-repeat
  background-position center center
  background-size cover
  width 100%
  height 100%

.image1
  background-image url("../../assets/images/image1.png")
.image2
  background-image url("../../assets/images/image2.jpg")
.image3
  background-image url("../../assets/images/image3.jpeg")
.image4
  background-image url("../../assets/images/image4.jpg")

@keyframes swipeLeft
    100%
      transform translate3d(-100%, 0, 0)
@keyframes swipeRight
    100%
      transform translate3d(100%, 0, 0)
</style>
