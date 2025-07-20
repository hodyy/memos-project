<script setup lang="ts">
import VerticalSlider from '@/sections/features/components/VerticalSlider.vue';
</script>

<template>
  <section id="features-section">
    <img
      class="ntb-image"
      src="@/assets/images/others/notebook.png"
      alt="ntb-img"
    />
    <div class="content-wrapper">
      <vertical-slider />
    </div>
  </section>
</template>

<style scoped>
#features-section {
  position: relative;
  width: 100vw;
  height: 736px;
  background-image: url('@/assets/images/background/bg_features.png');
  background-color: #2f1893;
  background-size: cover;
  overflow: hidden;
}
.content-wrapper {
  padding-top: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  padding-left: 400px;
}
.ntb-image {
  position: absolute;
  top: 100px;
  max-width: 482px;
  width: 100%;
  height: auto;
}
@media (min-width: 1650px) {
  .content-wrapper {
    padding-top: 100px;
    display: flex;
    justify-content: normal;
    gap: 300px;
  }
}
@media (max-width: 1100px) {
  .ntb-image {
    display: none;
  }
  .content-wrapper {
    justify-content: center;
    padding-left: 0;
  }
}
</style>
