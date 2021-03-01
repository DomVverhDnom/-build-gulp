<template>
  <div class="slider">
    <div
      v-for="(item, index) in sliderItems"
      :key="item.id"
      class="slider__menu"
    >
      <div
        class="slider__item "
        :class="{ active: activeSlide === index }"
        ref="active"
        :id="item.id"
        @click="circleClicked(index)"
      ></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "circleSlider",
  props: ["activeSlide", "sliderItems"],

  methods: {
    circleClicked(index) {
      this.$emit("circleClicked", index);
    }
  }
};
</script>
<style lang="stylus" scoped>
.slider
  display flex
  justify-content center
  margin-top 10px

  &__item
    width 20px
    height 20px
    border 2px solid black
    border-radius 100%
    margin-right 10px
    cursor pointer
.active
  background-color yellow
</style>
