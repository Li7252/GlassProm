<template>
  <div class="modal-backdrop" @click.self="$emit('closeModal')"></div>
  <div class="modal">
    <div v-if="order">
      <h1>Ваш заказ!</h1>
      <h2>Форма изделия: {{ order.form }}</h2>
      <h2 v-if="order.type != ''">Тип дверей: {{ order.type }}</h2>
      <h2>Сумма заказа: {{ order.result }} руб.</h2>
    </div>
    <div v-else>
      <center><h1>Ваша корзина пуста</h1></center>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      order: JSON.parse(localStorage.getItem("order")) || null,
    };
  },
};
</script>

<style scoped>
.modal {
  width: 1200px;
}
</style>
