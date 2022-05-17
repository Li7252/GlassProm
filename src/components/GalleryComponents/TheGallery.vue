<template>
  <div class="container-gallery">
    <h1 class="heading">Наши работы</h1>
    <div class="gallery">
      <div class="gallery-item" v-for="item in image">
        <img class="gallery-image"
             :src="'image/gallery/' + item.item"
             alt="person writing in a notebook beside by an iPad, laptop, printed photos, spectacles, and a cup of coffee on a saucer" />
      </div>
    </div>
  </div>
</template>

<script setup>

import {ref} from "vue";

const image = ref([
  {item: '9.jpg'},
  {item: '11.jpg'},
  {item: '22.jpg'},
  {item: '23.jpg'},
  {item: '25.jpg'},
  {item: '26.jpg'},
  {item: '27.jpg'},
  {item: '44.jpg'},
  {item: '66.jpg'},
  {item: '77.jpg'},
  {item: 'WhatsApp Image 2020-02-29 at 20.01.57.jpeg'},
  {item: 'WhatsApp Image 2020-03-26 at 17.58.52 (1).jpeg'},
  {item: 'WhatsApp Image 2020-03-26 at 17.58.53 (1) (1).jpeg'},
  {item: 'WhatsApp Image 2020-07-08 at 12.35.31.jpeg'},
  {item: 'zerkalo1.jpg'},
  {item: 'zerkalo2.jpg'},
  {item: 'zerkalo3.jpg'},
  {item: 'zerkalo4.jpg'},
  {item: 'zerkalo5.jpg'},
  {item: 'zerkalo6.jpg'},
  {item: 'zerkalo7.jpg'},
  {item: 'zerkalo8.jpg'},
  {item: 'zerkalo9.jpg'},
  {item: 'zerkalo10.jpg'},
  {item: 'zerkalo11.jpg'},
  {item: 'zerkalo12.jpg'},
  {item: 'zerkalo13.jpg'},
  {item: 'zerkalo14.jpg'},
  {item: 'zerkalo15.jpg'},
  {item: 'zerkalo16.jpg'},
  {item: 'zerkalo17.jpg'},
])

</script>

<style scoped>
:root {
  font-size: 10px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

.container {
  max-width: 100rem;
  margin: 0 auto;
  padding: 0 2rem 2rem;
}

.heading {
  font-family: "Montserrat", Arial, sans-serif;
  font-size: 4rem;
  font-weight: 500;
  line-height: 1.5;
  text-align: center;
  padding: 3.5rem 0;
  color: #1a1a1a;
}

.heading span {
  display: block;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  margin: -1rem -1rem;
}

.gallery-item {
  flex: 1 0 24rem;
  margin: 1rem;
  box-shadow: 0.3rem 0.4rem 0.4rem rgba(0, 0, 0, 0.4);
  overflow: hidden;
}

.gallery-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 400ms ease-out;
}

.gallery-image:hover {
  transform: scale(1.15);
}

@supports (display: grid) {
  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
    grid-gap: 2rem;
  }

  .gallery,
  .gallery-item {
    margin: 0 80px;
  }
}

</style>