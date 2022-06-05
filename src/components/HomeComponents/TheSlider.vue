<template>
  <div class="slider">
    <div class="item" style="display: block">
      <img src="@/assets/image/slide.jpg" alt="" />
      <div class="text1">Изделия из стекла и зеркала</div>
    </div>
    <div class="item" style="display: none">
      <img src="@/assets/image/slide2.jpg" alt="" />
      <div class="text2">Самый большой ассортимент на Юге России</div>
    </div>
    <a class="prev" onclick="previousSlide()">&#10094;</a>
    <a class="next" onclick="nextSlide()">&#10095;</a>
    <div class="button-call">
      <a href="#" class="silka" id="btn">Заказать звонок</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
