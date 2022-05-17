<template>
  <div class="wrapper">
    <h1>{{ store.result}}</h1>
  </div>
</template>

<script setup>

import {useCounterStore} from "../stores/counter";

const store = useCounterStore()

</script>

<style scoped>

</style>