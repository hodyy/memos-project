<script setup lang="ts">
import FeaturesSlider from '@/sections/features/components/FeaturesSlider.vue';
</script>

<template>
  <section id="features-section">
    <div class="features-content-wrapper">
      <img
        class="ntb-image"
        src="../../assets/images/notebook.png"
        alt="ntb-img"
      />
      <features-slider />
    </div>
  </section>
</template>

<style scoped>
#features-section {
  width: 100vw;
  height: 736px;
  background-image: url('@/assets/images/background/bg_features.png');
  background-color: #2f1893;
  background-size: cover;
  overflow: hidden;
}
.features-content-wrapper {
  padding-top: 100px;
  display: flex;
  width: 100%;
  height: 100%;
}
.ntb-image {
  height: 536px;
  width: auto;
  margin-right: 34px;
}
</style>
