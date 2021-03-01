<template>
  <div class="wrapper">
    <div v-for="item in countClone" :key="item" ref="first" class="first_img">
      <img src="../../static/img/3000x200.jpg" />
    </div>
    <!-- <div class="second_img">
      <img src="../../static/img/3000x200.jpg" />
    </div> -->
  </div>
</template>
<script>
export default {
  name: "weather",
  data() {
    return {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      countClone: 2
    };
  },
  methods: {
    countFunc() {
      const imageEl = this.$refs.first[0];
      const imageElWidth = imageEl.getBoundingClientRect();

      // this.countClone = Math.floor(this.windowWidth / imageElWidth) + 1;
    }
  },
  mounted() {
    // window.onresize = () => {
    //   (this.windowWidth = window.innerWidth),
    //     (this.windowHeight = window.innerHeight);
    // };
    // const imagePreload = new Promise((resolve, reject) => {
    //   const image = new Image();
    //   image.src = "/img/3000x200.jpg";
    //   console.log(image.src);
    //   image.onload = () => resolve();
    // }).then(() => {
    this.countFunc();
    // });
  }
};
</script>
<style lang="stylus" scoped>
.wrapper
  display: flex;
.first_img
  // overflow hidden
  animation: marquee 3s linear infinite;

@keyframes marquee
    100%
      transform translate3d(-100%, 0, 0);
</style>
