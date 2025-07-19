<script setup lang="ts">
import { ref } from 'vue';
import Dots from '@/global/components/Dots.vue';
import ContentBox1 from '@/sections/features/components/ContentBoxes/ContentBox1.vue';
import ContentBox4 from '@/sections/features/components/ContentBoxes/ContentBox4.vue';
import ContentBox2 from '@/sections/features/components/ContentBoxes/ContentBox2.vue';
import ContentBox3 from '@/sections/features/components/ContentBoxes/ContentBox3.vue';
import ContentBox5 from '@/sections/features/components/ContentBoxes/ContentBox5.vue';
const activeBox = ref<number>(1);
const contentHeight = 430;
const calculateTranslate = () => {
  return activeBox.value * contentHeight - contentHeight;
};
</script>

<template>
  <div class="features-slider-wrapper">
    <div class="features-slider">
      <div
        class="movable-features-slider-wrapper"
        :style="{ transform: `translateY(-${calculateTranslate()}px)` }"
      >
        <ContentBox1 />
        <ContentBox2 />
        <ContentBox3 />
        <ContentBox4 />
        <ContentBox5 />
      </div>
    </div>
    <Dots
      :dot-count="5"
      v-model:active-index="activeBox"
      :styles="{ flexDirection: 'column' }"
    />
  </div>
</template>

<style scoped>
.features-slider-wrapper {
  display: flex;
  height: 430px;
  justify-content: center;
  align-items: center;
  margin-top: 58px;
  gap: 159px;
}
.features-slider {
  display: flex;
  width: 600px;
  height: 430px;
  overflow: hidden;
}

.movable-features-slider-wrapper {
  display: flex;
  flex-direction: column;
  transition: transform 0.5s;
}
</style>
