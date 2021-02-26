<template>
  <div class="container">
    <div class="events">
      <div class="events__news">
        <NuxtLink to="weather" class="title">Посмотреть погоду</NuxtLink>
      </div>
      <div class="events__weather">
        <NuxtLink to="windowWidth" class="title"
          >Посмотреть ширину экрана</NuxtLink
        >
      </div>
      <div class="events__weather">
        <NuxtLink to="marquee" class="title">Бегущая строка</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "default",
  computed: {
    ...mapState("weather", ["weather"])
  },
  async mounted() {
    this.$store.dispatch("weather/fetchWeathers");
    // console.log(this.$route.params.weather);
  }
};
</script>

<style lang="stylus" scoped>
$font-size = 12px
.container
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

.events
  display: flex;

.events__weather
  margin-left: 15px

.events__news,
.events__weather
  border: 3px solid black;
  padding: 30px;

.title
  font-size 25px
  text-decoration: none;
  color black
</style>
