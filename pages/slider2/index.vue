<template>
  <div class="wrapper">
    <div class="slider">
      <button class="slider__arrow-right">П</button>
      <div
        v-for="item in countClone"
        :key="item"
        ref="slide"
        class="slides slide1"
      >
        <img
          class="img slider__animation"
          v-for="item in sliderItems"
          :key="item.id"
          :src="require('../../assets/images/' + item.img)"
          alt=""
        />
      </div>
      <button class="slider__arrow-left">Л</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SliderIndex",
  data() {
    return {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      countClone: 1,
      sliderItems: [
        { id: 1, name: "image1", img: "image1.png" },
        { id: 2, name: "image2", img: "image2.jpg" },
        { id: 3, name: "image3", img: "image3.jpeg" },
        { id: 4, name: "image4", img: "image3.jpeg" }
      ]
    };
  },
  methods: {
    countFunc() {
      const imageEl = this.$refs.slide[0];
      const imageElWidth = imageEl.getBoundingClientRect();

      //   this.countClone = Math.floor(this.windowWidth / imageElWidth) + 1;
    }
  },
  mounted() {
    this.countFunc();
  }
};
</script>

<style lang="stylus" scoped>
.wrapper
    height: 50vh;
    margin: 100px auto 0;
    position: relative;
    width: 50vw;
    .slider
        height: inherit;
        overflow: hidden;
        position: relative;
        width: inherit;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
        .slides
            height: inherit;
            position: absolute;
            width: inherit;
            z-index: 0;
            overflow: hidden;
            display: flex;

            background-repeat: no-repeat;
            background-position: center center;
            background-size: cover;
            width: 100%
            .slider__animation
                animation: swipeLeft 3s linear infinite alternate;


    .slider__arrow-right,
    .slider__arrow-left{
        position: absolute;
        color: white;
        z-index: 5;
        bottom: 50%;
    }
    .slider__arrow-right
        right: 0;


@keyframes swipeLeft
    100%
        transform: translate3d(-100%, 0, 0);





// @media screen and (max-width: 80em) {
//   * {
//     body {
//       .wrapper {
//         width: 70vw;
//         height: 40vh;

//         .slider {
//           .slides {
//             min-height: 40vh;
//           }
//         }
//       }
//     }
//   }
// }
// @media screen and (max-width: 40em) {
//   * {
//     body {
//       .wrapper {
//         width: 100vw;
//         height: 35vh;

//         .slider {
//           .slides {
//             min-height: 35vh;
//           }
//         }
//       }
//     }
//   }
// }

// @media screen and (max-width: 20em) {
//   * {
//     body {
//       .wrapper {
//         width: 100vw;
//         height: 140px;

//         .slider {
//           .slides {
//             min-height: 140px;
//           }
//         }
//       }
//     }
//   }
// }
</style>
