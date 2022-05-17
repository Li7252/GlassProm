<template>
  <header>
    <div id="navbar">
      <div class="logoname">
        <img src="image/logo.png" alt="logo" class="logo">
        <p class="name"><b>Glass Prom</b></p>
      </div>
      <div>
        <router-link class="nav-link" to="/"> Главная </router-link>
        <router-link class="nav-link" to="/about">О нас</router-link>
        <router-link class="nav-link" to="/services">Услуги</router-link>
        <router-link class="nav-link" to="/gallery">Галерея</router-link>
        <router-link class="nav-link" to="/contacts">Контакты</router-link>
      </div>
      <div class="nav-icon">
        <a href="tel:+79045022303"><img src="image/icon-call.png" alt="call" width="20px"></a>
        <a href=""><img src="image/icon-cart.png" alt="cart" width="20px"></a>
      </div>
    </div>
  </header>
</template>

<script setup>
</script>