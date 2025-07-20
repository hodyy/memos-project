<script setup lang="ts">
import Navigation from '@/sections/home/components/navigation/Navigation.vue';
import HorizontalSlider from '@/sections/home/components/slider/HorizontalSlider.vue';
</script>

<template>
  <section id="home-section">
    <Navigation />
    <HorizontalSlider />
  </section>
</template>

<style scoped>
#home-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 850px;
  background-image: url('@/assets/images/background/bg_home.png');
  background-color: #2f1893;
  background-position: center;
  background-size: cover;
}
</style>
