<template>
  <div class="container">
    <div class="card">
      <div class="card__title">Скидка 10% на страхование ипотеки Сбербанка</div>
      <div class="card__wrapper">
        <div class="card__hashtag">#Двойная выгода</div>
        <div class="card__stories">
          <div class="card__storie"></div>
          <div class="card__storie"></div>
          <div class="card__storie"></div>
          <div class="card__storie"></div>
        </div>
      </div>
      <div class="card__img">
        <img src="../../assets/images/sber.jpg" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="stylus" scoped>
.container
  margin-top 100px
  display: flex;
  justify-content center
  align-items center

.card
  height 620px
  width 490px
  background #20304A
  border-radius 16px
  &__title
    margin 40px 70px 25px 40px
    font-weight 600
    font-size: 28px;
    color #fff
  &__wrapper
    margin 0 40px 40 40px
    display: flex;
    justify-content space-between
  &__hashtag
    margin-left 40px
    text-transform uppercase
    color rgba(#A6B2C8, 0.3);
    font-size 14px
    font-weight 500
  &__stories
    display: flex;
  &__storie
    width 8px
    height 8px
    border-radius 100%
    margin-right 14px
    background-color rgba(#fff, 0.2)
  &__img
    display: flex;
    justify-content center
    margin 40px 10px 10px 10px
    img
      border-radius 14px
      width: 470px;
      height: 398px;
</style>
