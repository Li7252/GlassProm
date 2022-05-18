<template>
  <div class="wrapper">
    <div class="calculator">
      <div class="one">
        <h1>1. Выберите форму изделия</h1>
        <div class="calculator__calc">
          <div class="calculator__calc-item" v-for="(item, id) in calcOne" :key="id">
            <img :src="'image/calculator/' + item.image" alt="">
            <div class="calculator__calc-input">
              <input type="checkbox" :checked="checkId === id ? true : false" @change="handleChangeOne(item.value, id)" :id="id" :value="item.value" v-model="checkedItems">
              <span class="calculator__calc-input-text">{{item.value}}</span>
            </div>
          </div>
        </div>
      </div>
      <Transition>
      <div class="one" v-if="checkId !== null">
        <h1>2. Выберите тип дверей:</h1>
        <div class="calculator__calc">
          <div class="calculator__calc-item" v-for="(item, id) in calcTwo" :key="id">
            <img :src="'image/calculator/' + item.image" alt="">
            <div class="calculator__calc-input">
              <input type="checkbox" :checked="checkIdTwo === id ? true : false" @change="handleChangeTwo(item.value, id)" :id="id" :value="item.value" v-model="checkedItemsTwo">
              <span class="calculator__calc-input-text">{{item.value}}</span>
            </div>
          </div>
        </div>
      </div>
      </Transition>
      <Transition>
        <div class="one" >
          <div v-if="checkIdTwo !== null" class="button-call"><a @click="goTo" class="silka" id="btn">Следующий шаг <b> > </b></a></div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup>

import {ref} from "vue";
import {useCounterStore} from "../stores/counter";
import router from "../router";

const calcOne = ref([
    {
      image: 'sketch-img-1.svg',
      value: 'Душевая дверь в нишу'
    },
    {
      image: 'sketch-img-2.svg',
      value: 'Душевое угловое ограждение'
    },
    {
      image: 'sketch-img-3.svg',
      value: '3-х сторонняя душевая'
    },
    {
      image: 'sketch-img-4.svg',
      value: 'Неподвижное душевое ограждение'
    },
    {
      image: 'sketch-img-5.svg',
      value: 'Ограждение на ванну'
    }
  ])

const calcTwo = ref([
  {
    image: 'sketch-img-6.svg',
    value: 'Распашные двери'
  },
  {
    image: 'sketch-img-7.svg',
    value: 'Раздвижные двери'
  }
])
const store = useCounterStore()
const checkedItems = ref([])
const checkedItemsTwo = ref([])
const checkId = ref(null)
const checkIdTwo = ref(null)

const handleChangeOne = (value, id) => {
  checkedItems.value = value
  checkId.value = id
}
const handleChangeTwo = (value, id) => {
  checkedItemsTwo.value = value
  checkIdTwo.value = id
}

const goTo = () => {
  const resultItem = {checkedItems: checkedItems.value, checkedItemsTwo: checkedItemsTwo.value}
  const local = JSON.stringify(resultItem)
  localStorage.setItem('resultItem', local)
  router.push({path: '/size'})
}

</script>

<style scoped>
.calculator {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.one {
  width: 100%;
}
.calculator__calc {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px 0;
}
.calculator__calc:nth-child(2) {
  justify-content: flex-start;
}
.calculator__calc-item {
  padding: 55px 30px;
  margin: 0 5px;
  position: relative;
  cursor: pointer;
  display: block;
  height: 270px;
  color: #fff;
  background: #171719;
  border-radius: 15px;
  -webkit-box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);
}
.calculator__calc-item img {
  margin-bottom: 20px;
  display: block;
  width: 200px;
  height: 200px;
}
.calculator__calc-input {
  display: flex;
  flex-direction: row;
}
.calculator__calc-input-text {
  margin: 0 10px;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>