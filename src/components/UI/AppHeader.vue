<template>
    <header>
        <div id="navbar">
            <div class="logoname">
                <img src="image/logo.png" alt="logo" class="logo" />
                <p class="name"><b>Glass Prom</b></p>
            </div>
            <div class="link-container">
                <router-link class="nav-link" to="/"> Главная </router-link>
                <router-link class="nav-link" to="/about">О нас</router-link>
                <router-link class="nav-link" to="/services"
                    >Услуги</router-link
                >
                <router-link class="nav-link" to="/calculator"
                    >Калькулятор</router-link
                >
                <router-link class="nav-link" to="/gallery"
                    >Галерея</router-link
                >
                <router-link class="nav-link" to="/contacts"
                    >Контакты</router-link
                >
            </div>
            <div class="nav-icon">
                <a href="tel:+79045022303"
                    ><img
                        class="nav-icon-item"
                        src="image/icon-call.png"
                        alt="call"
                /></a>
                <router-link to="/size"
                    ><img
                        class="nav-icon-item"
                        src="image/icon-cart.png"
                        alt="cart"
                /></router-link>
            </div>
        </div>
    </header>
</template>

<style scoped>
.nav-icon-item {
    width: 20px;
}
</style>
