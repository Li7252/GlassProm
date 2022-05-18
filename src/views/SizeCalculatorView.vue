<template>
  <div class="wrapper">
    <div class="result-item"> Форма изделия: {{store.result[0]}} </div>
    <div class="result-item"> Тип дверей: {{store.result[1]}} </div>
    <div class="calculator-size">
      <div class="calculator-size-item">
        <div class="calculator-size-item-img">
          <img src="image/calcSIze/left-section-width.svg" alt="">
        </div>
        <div class="calculator-size-title">
          Ширина неподвижной части слева, см:
        </div>
        <div class="calculator-size-input">
          <input v-model="fpwl" type="number" data-letter="H" name="width_left" min="20" max="50" class="calculator-size-input-item" /> см.
        </div>
      </div>
      <div class="calculator-size-item">
        <div class="calculator-size-item-img">
          <img src="image/calcSIze/left-section-width.svg" alt="">
        </div>
        <div class="calculator-size-title">
          Ширина подвижной части слева, см:
        </div>
        <div class="calculator-size-input">
          <input v-model="mpwl" type="number" data-letter="H" name="width_left" min="50" max="100" class="calculator-size-input-item" /> см.
        </div>
      </div>
      <div class="calculator-size-item">
        <div class="calculator-size-item-img">
          <img src="image/calcSIze/cab-height.svg" alt="">
        </div>
        <div class="calculator-size-title">
          Высота изделия, см:
        </div>
        <div class="calculator-size-input">
          <input v-model="pl" type="number" data-letter="H" name="width_left" min="170" max="220" class="calculator-size-input-item" /> см.
        </div>
      </div>
      <div class="calculator-size-item">
        <div class="calculator-size-item-img">
          <img src="image/calcSIze/right-section-width.svg" alt="">
        </div>
        <div class="calculator-size-title">
          Ширина неподвижной части справа, см:
        </div>
        <div class="calculator-size-input">
          <input v-model="fpwr" type="number" data-letter="H" name="width_left" min="20" max="50" class="calculator-size-input-item" /> см.
        </div>
      </div>
      <div class="calculator-size-item">
        <div class="calculator-size-item-img">
          <img src="image/calcSIze/right-section-width.svg" alt="">
        </div>
        <div class="calculator-size-title">
          Ширина подвижной части справа, см:
        </div>
        <div class="calculator-size-input">
          <input v-model="wmpt" type="number" data-letter="H" name="width_left" min="50" max="100" class="calculator-size-input-item" />
        </div>
      </div>
      <div class="result-sum">
        <h1>{{ calcResult }} руб.</h1>
      </div>
    </div>
  </div>
</template>

<script>

import {useCounterStore} from "../stores/counter";

export default {
  setup() {
    const store = useCounterStore()
    return {store}
  },
  // Тут записаны переменные которые отвечают за input
  data() {
    return {
      fpwl: 50, //Ширина неподвижной части слева
      mpwl: 50, //Ширина подвижной части слева
      pl: 190, //Высота изделия
      fpwr: 30, //Ширина неподвижной части справа
      wmpt: 50, //Ширина подвижной части справа
      result: 0,
    }
  },
  computed: {
    calcResult() {
      return this.result = this.fpwl + this.mpwl + this.pl + this.fpwr + this.wmpt //Расчеты размеров
    }
  }
}


</script>

<style scoped>
.result-item {
  padding: 20px 0;
  font-size: 24px;
  font-weight: 600;
}
.calculator-size-input-item {
  -moz-appearance: textfield;
  border: 1px solid #5B5B5B;
  background: #1E1E20;
  text-align: center;
  position: relative;
  line-height: 35px;
  color: #FFFFFF;
  height: 40px;
  width: 75px;
  margin: 0 15px;
}
.calculator-size-item {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.calculator-size-item-img img {
  margin: 15px;
  display: flex;
  align-items: center;
}
.calculator-size {
  display: flex;
  flex-direction: column;
}
</style>