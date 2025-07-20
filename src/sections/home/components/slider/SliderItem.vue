<script setup lang="ts">
import { defineProps } from 'vue';
import type { SliderContent } from '@/sections/home/components/slider/types.ts';
const props = defineProps<{ sliderContent: SliderContent }>();
const { h2, h3, text } = props.sliderContent;
</script>

<template>
  <div class="slider-item">
    <h2>
      {{ h2 }}
    </h2>
    <h3>
      {{ h3 }}
    </h3>
    <p class="paragraphStyle500">
      {{ text }}
    </p>
  </div>
</template>

<style scoped>
.slider-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0 0 auto;
  width: 736px;
  height: 100%;
  max-height: 257px;
  color: #fff;
}
.slider-item h2 {
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: -0.29px;
  text-align: center;
  margin-bottom: 29px;
  align-items: center;
}
.slider-item h3 {
  font-weight: 700;
  font-size: 72px;
  line-height: 86px;
  letter-spacing: -1px;
  align-items: center;
  margin-bottom: 27px;
}
.slider-item p {
  padding: 0;
  margin: 0;
  text-align: center;
}
@media (max-width: 800px) {
  .slider-item h2 {
    margin: 0;
  }
  .slider-item h3 {
    margin-top: 10px;
    font-size: 30px;
    line-height: 100%;
  }
  .slider-item p {
    font-size: 20px;
  }
  .slider-item {
    width: 400px;
  }
}
@media (max-width: 470px) {
  .slider-item h2 {
    margin: 0;
    font-size: 15px;
  }
  .slider-item h3 {
    margin-top: 10px;
  }
  .slider-item p {
    font-size: 18px;
    line-height: 25px;
  }
  .slider-item {
    width: 300px;
  }
}
</style>
