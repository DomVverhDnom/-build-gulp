<template>
  <div class="workspace">
    <div>Ширина:{{ windowWidth }}</div>
    <div>Ширина:{{ windowHeight }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    };
  },
  mounted() {
    window.onresize = () => {
      (this.windowWidth = window.innerWidth),
        (this.windowHeight = window.innerHeight);
    };
  }
};
</script>
<style lang="stylus" scoped>
.workspace
  display: flex;
  height 100vh
  align-items center
  justify-content center
  flex-direction column
</style>
