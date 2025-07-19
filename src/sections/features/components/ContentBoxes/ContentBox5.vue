<script setup lang="ts">
import { contentBox5Data } from '@/sections/features/components/ContentBoxes/featuresData.ts';
const { header, text } = contentBox5Data;
</script>

<template>
  <div class="wrapper">
    <div class="article">
      <h3>{{ header }}</h3>
      <p>
        {{ text }}
      </p>
    </div>

    <div class="article">
      <h3>{{ header }}</h3>
      <p>
        {{ text }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  width: 600px;
  height: 430px;
  flex-direction: row;
  align-items: center;
  flex: 0 0 auto;
  gap: 40px;
}
.article {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
