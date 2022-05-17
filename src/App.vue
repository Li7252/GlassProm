<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AppHeader from "./components/UI/AppHeader.vue";
import AppFooter from "./components/UI/AppFooter.vue";
</script>

<template>
  <AppHeader />
  <RouterView />
  <AppFooter />
</template>

<style>

</style>
