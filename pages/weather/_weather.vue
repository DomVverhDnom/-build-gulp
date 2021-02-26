<template>
  <div class="container">
    <div class="weather">
      <div class="weather__events">
        <div class="weather">News</div>
        <div class="news">Weather</div>
      </div>
      <div class="weather__main">
        <div class="weather__titleblock">
          <div class="weather__info">{{ returnTime }}</div>
          <h1 class="weather__temperature">{{ tempCalc }}°</h1>
          <div class="weather__city">{{ weather.name }}</div>
        </div>
        <div class="weather__descblock">
          <div class="weather__item">
            <span class="weather__time">
              {{ returnTime }}
            </span>
            <div class="weather__timperature-item">
              <span>{{ tempCalc }}°</span>
            </div>
          </div>
          <div class="weather__item">
            <span class="weather__time">
              {{ returnTime }}
            </span>
            <div class="weather__timperature-item">
              <span>{{ tempCalc }}° </span>
            </div>
          </div>
          <div class="weather__item">
            <span class="weather__time">
              {{ returnTime }}
            </span>
            <div class="weather__timperature-item">
              <span>{{ tempCalc }}°</span>
            </div>
          </div>
        </div>
      </div>
    </div>
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
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "WeatherDetailed",
  async fetch({ store, route }) {
    const city = route.params.weather;
    const data = store.dispatch("weather/fetchWeathers", city);
  },
  mounted() {
    console.log(this.$route.params.weather);
  },
  computed: {
    ...mapState("weather", ["weather"]),
    tempCalc: function() {
      return this.weather.main && Math.round(this.weather.main.temp - 273.15);
    },
    returnTime() {
      let date = new Date(this.weather.dt * 1000);
      let hours = date.getHours(date);
      let minutes = date.getMinutes(date);
      return hours + ":" + minutes;
    }
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
.weather
  &__events
    display flex
    justify-content space-around
    align-items center
    margin 50px 0 150px 0
  &__main
    display flex
    justify-content space-around
  &__titleblock
    position: relative;
    border 2px solid black
    padding 70px 200px 110px 70px

  &__info
    display: flex;
    position absolute
    font-size: 30px;
    top 5px
    left 0
  &__temperature
    font-size 100px
    text-align center
  &__city
    font-size 50px
    font-weight: bold;
    position absolute
    bottom 20px
  &__item
    padding 1px 100px
    border 2px solid black



.city
  width 1000px
  height 50px
  display: flex;
  margin 0 auto
  justify-content space-around
  border 2px solid black
  border-radius 30px
  margin-top 100px
  &__item
    text-decoration none
    color black
    cursor pointer
</style>
