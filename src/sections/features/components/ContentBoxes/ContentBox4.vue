<script setup lang="ts">
import { contentBox4Data } from '@/sections/features/components/ContentBoxes/featuresData.ts';
const { header, text } = contentBox4Data;
</script>

<template>
  <div class="wrapper">
    <h3>{{ header }}</h3>
    <p>
      {{ text }}
    </p>
    <h3>{{ header }}</h3>
    <p>
      {{ text }}
    </p>
    <h3>{{ header }}</h3>
    <p>
      {{ text }}
    </p>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  width: 600px;
  height: 430px;
  flex-direction: column;
  align-items: center;
  flex: 0 0 auto;
}
h3 {
  all: unset;
  font-weight: 700;
  font-size: 42px;
  line-height: 52px;
  letter-spacing: -0.4px;
}
p {
  all: unset;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0;
  margin-bottom: 10px;
  text-align: center;
}
</style>
