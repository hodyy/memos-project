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
    <p>
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
  width: 100%;
  max-width: 736px;
  height: 100%;
  max-height: 257px;

  color: #fff;
}

.slider-item h2 {
  all: unset;
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: -0.29px;
  text-align: center;
  margin-bottom: 29px;
  align-items: center;
}

.slider-item h3 {
  all: unset;
  font-weight: 700;
  font-size: 72px;
  line-height: 86px;
  letter-spacing: -1px;
  align-items: center;
  margin-bottom: 27px;
}

.slider-item p {
  all: unset;
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 22px;
  line-height: 32px;
  letter-spacing: 0;
  text-align: center;
}
</style>
