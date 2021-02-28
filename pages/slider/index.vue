<template>
  <div class="wrapper">
    <div class="slider">
      <button @click="swipeLeft" class="slider__arrow-left">
        left
      </button>
      <div class="slider__images" ref="slideImg">
        <img
          class="slider__animation"
          v-for="item in sliderItems"
          :key="item.id"
          :src="require('../../assets/images/' + item.img)"
          alt=""
        />
      </div>
      <button class="slider__arrow-right">
        right
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "SliderIndex",
  data() {
    return {
      sliderItems: [
        { id: 1, name: "image1", img: "image1.png" },
        { id: 2, name: "image2", img: "image2.jpg" },
        { id: 3, name: "image3", img: "image3.jpeg" }
      ]
    };
  },
  methods: {
    swipeLeft() {
      this.$refs.slideImg.classList.add("animation-left");
    }
  },
  mounted() {
    this.swipeLeft();
  }
};
</script>

<style lang="stylus" scoped>
.slider
    position: relative;
    display flex
    border-top 2px solid black
    border-bottom 2px solid black
    margin-top 50px
    justify-content center
    &__images
        width 500px
        height 500px
        display: flex;
        overflow hidden
    &__arrow-right &__arrow-left
        display flex
        align-items center
        cursor pointer

.animation-left
    animation swiperleft 1s linear
    @keyframes swiperleft
        100%
            transform translate3d(-100%, 0, 0);
</style>
