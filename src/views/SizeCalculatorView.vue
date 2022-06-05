<template>
  <div class="wrapper">
    <div class="result-item">Форма изделия: {{ resultCalc.checkedItems }}</div>
    <div class="result-item" v-if="resultCalc.checkedItemsTwo != ''">
      Тип дверей: {{ resultCalc.checkedItemsTwo }}
    </div>
    <div class="calculator-size">
      <div v-if="resultCalc.checkedItems != 'Душевое угловое ограждение'">
        <div class="calculator-size-item">
          <div class="calculator-size-item-img">
            <img src="@/assets/image/calcSIze/left-section-width.svg" alt="" />
          </div>
          <div class="calculator-size-title">Ширина, см:</div>
          <div class="calculator-size-input">
            <input
              v-model="fpwl"
              type="number"
              data-letter="H"
              name="width_left"
              min="20"
              max="50"
              class="calculator-size-input-item"
            />
            см.
          </div>
        </div>
        <div class="calculator-size-item">
          <div class="calculator-size-item-img">
            <img src="@/assets/image/calcSIze/cab-height.svg" alt="" />
          </div>
          <div class="calculator-size-title">Высота изделия, см:</div>
          <div class="calculator-size-input">
            <input
              v-model="pl"
              type="number"
              data-letter="H"
              name="width_left"
              min="180"
              max="250"
              class="calculator-size-input-item"
            />
            см.
          </div>
        </div>
      </div>
      <div v-else>
        <div class="calculator-size-item">
          <div class="calculator-size-item-img">
            <img src="@/assets/image/calcSIze/left-section-width.svg" alt="" />
          </div>
          <div class="calculator-size-title">Ширина неподвижной части, см:</div>
          <div class="calculator-size-input">
            <input
              v-model="fpwl"
              type="number"
              data-letter="H"
              name="width_left"
              min="20"
              max="50"
              class="calculator-size-input-item"
            />
            см.
          </div>
        </div>
        <div class="calculator-size-item">
          <div class="calculator-size-item-img">
            <img src="@/assets/image/calcSIze/cab-height.svg" alt="" />
          </div>
          <div class="calculator-size-title">Высота изделия, см:</div>
          <div class="calculator-size-input">
            <input
              v-model="pl"
              type="number"
              data-letter="H"
              name="width_left"
              min="180"
              max="250"
              class="calculator-size-input-item"
            />
            см.
          </div>
        </div>
        <div class="calculator-size-item">
          <div class="calculator-size-item-img">
            <img src="@/assets/image/calcSIze/left-section-width.svg" alt="" />
          </div>
          <div class="calculator-size-title">Ширина дверей, см:</div>
          <div class="calculator-size-input">
            <input
              v-model="hp"
              type="number"
              data-letter="H"
              name="width_left"
              min="70"
              max="120"
              class="calculator-size-input-item"
            />
            см.
          </div>
        </div>
        <div class="calculator-size-item">
          <div class="calculator-size-item-img">
            <img src="@/assets/image/calcSIze/right-section-width.svg" alt="" />
          </div>
          <div class="calculator-size-title">
            Ширина неподвижной части со стороны дверей, см:
          </div>
          <div class="calculator-size-input">
            <input
              v-model="npj"
              type="number"
              data-letter="H"
              name="width_left"
              min="50"
              max="150"
              class="calculator-size-input-item"
            />
            см.
          </div>
        </div>
      </div>
      <div class="select-steclo">
        <div class="select-steclo-item" @click="steclo = 3980">
          <div><img src="@/assets/image/calcSIze/glass-transparent.png" /></div>
          <div>
            <input type="radio" id="one" value="3980" v-model="steclo" />
            <label for="one">Прозрачное стекло</label>
          </div>
        </div>
        <div class="select-steclo-item" @click="steclo = 5525">
          <div>
            <img src="@/assets/image/calcSIze/glass-matte.png" />
          </div>
          <div>
            <input type="radio" id="two" value="5525" v-model="steclo" />
            <label for="one">Матовое стекло</label>
          </div>
        </div>
        <div class="select-steclo-item" @click="steclo = 6665">
          <div>
            <img src="@/assets/image/calcSIze/glass-tinted.png" />
          </div>
          <div>
            <input type="radio" id="thre" value="6665" v-model="steclo" />
            <label for="one">Тонированное стекло</label>
          </div>
        </div>
      </div>
      <div class="select-profil">
        <div class="select-steclo-item" @click="profil = 7148">
          <div>
            <img src="@/assets/image/calcSIze/profile-chrome-matte.png" />
          </div>
          <div>
            <input type="radio" id="profilone" value="7148" v-model="profil" />
            <label for="one">Хромированный</label>
          </div>
        </div>
        <div class="select-steclo-item" @click="profil = 12120">
          <div>
            <img src="@/assets/image/calcSIze/profile-bronze.png" />
          </div>
          <div>
            <input type="radio" id="profiltwo" value="12120" v-model="profil" />
            <label for="one">Бронзовый</label>
          </div>
        </div>
        <div class="select-steclo-item" @click="profil = 13404">
          <div>
            <img src="@/assets/image/calcSIze/profile-gold.png" />
          </div>
          <div>
            <input
              type="radio"
              id="profilthre"
              value="13404"
              v-model="profil"
            />
            <label for="one">Золотой</label>
          </div>
        </div>
        <div class="select-steclo-item" @click="profil = 12180">
          <div>
            <img src="@/assets/image/calcSIze/profile-chrome.png" />
          </div>
          <div>
            <input type="radio" id="profilfor" value="12180" v-model="profil" />
            <label for="one">Черный</label>
          </div>
        </div>
      </div>
      <div class="result-sum">
        <h1>{{ calcResult }}</h1>
      </div>
      <div
        class="button-call"
        v-if="calcResult != 'Выберите тип стекла и профиля'"
      >
        <a class="silka" @click="addOrder" id="btn">
          Следующий шаг <b> > </b>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { useCounterStore } from "../stores/counter";

export default {
  setup() {
    const store = useCounterStore();
    return { store };
  },
  // Тут записаны переменные которые отвечают за input
  data() {
    return {
      resultCalc: {},
      fpwl: 50,
      pl: 250,
      hp: 70,
      npj: 50,
      result: 0,
      steclo: "",
      profil: "",
    };
  },
  mounted() {
    this.resultCalc = JSON.parse(localStorage.getItem("resultItem"));
  },
  computed: {
    calcResult() {
      const sum = ((this.fpwl * this.pl) / 10000) * this.steclo + this.profil;
      if (sum != 0 && this.profil != 0) {
        this.result = sum.toFixed(2);
        return sum.toFixed(2) + " руб.";
      } else {
        return "Выберите тип стекла и профиля";
      }
    },
  },
  methods: {
    addOrder() {
      const { result } = this;
      const order = {
        result,
        form: this.resultCalc.checkedItems,
        type: this.resultCalc.checkedItemsTwo,
      };
      localStorage.setItem("order", JSON.stringify(order));
      alert("Успешный заказ!");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.button-call {
  /* display: flex; */
  position: relative;
  margin-left: 0;
  margin-bottom: 0px;
  margin-top: 0;
}
.select-steclo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 700px;
  margin: 20px 0;
}
.select-profil {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 900px;
  margin: 20px 0;
}

.result-item {
  padding: 20px 0;
  font-size: 24px;
  font-weight: 600;
}

.calculator-size-input-item {
  -moz-appearance: textfield;
  border: 1px solid #5b5b5b;
  background: #1e1e20;
  text-align: center;
  position: relative;
  line-height: 35px;
  color: #ffffff;
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

.result-sum {
  padding: 0 0 100px 0;
}
</style>
