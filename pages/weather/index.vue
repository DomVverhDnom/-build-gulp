<template>
  <div class="container">
    <div class="weather">
      <div class="city">
        <nuxt-link
          v-for="item in city"
          :key="item.name"
          :to="`/weather/${item.link}`"
          class="city__item"
          >{{ item.name }}</nuxt-link
        >
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "WeatherIndex",

  computed: {
    ...mapState("weather", ["weather"])
  },
  created() {
    this.$store.dispatch("weather/fetchWeathers");
  },
  data: () => ({
    city: [
      { name: "Moscow", link: "Moscow" },
      { name: "London", link: "London" },
      { name: "Japan", link: "Japan" }
    ]
  })
};
</script>
<style lang="stylus" scoped>
.container {
  margin 0 auto
  width 1200px

}

.city
  width 1000px
  height 50px
  display: flex;
  margin 0 auto
  justify-content space-around
  border 2px solid black
  border-radius 30px
  margin-top 650px
  &__item
    text-decoration none
    color black
    cursor pointer
</style>
