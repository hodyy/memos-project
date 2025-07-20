<script setup lang="ts">
import { computed, ref } from 'vue';
import Dots from '@/global/components/Dots.vue';
import ContentBox from '@/sections/features/components/ContentBoxes/ContentBox.vue';
import { featuresData } from '@/sections/features/components/ContentBoxes/featuresData.ts';
import { useWindowResize } from '@/global/composable/useWindowResize.ts';

const activeBox = ref<number>(1);
const itemsRef = ref<HTMLElement | null>(null);
const contentHeight = ref(0);

const translateValue = computed(() => activeBox.value * contentHeight.value - contentHeight.value);

const getSize = () => {
  if (itemsRef.value) {
    const { height } = itemsRef.value.getBoundingClientRect();
    contentHeight.value = height / featuresData.length;
  }
};

useWindowResize(getSize);
</script>

<template>
  <div class="slider-wrapper">
    <div class="slider-viewport">
      <div
        ref="itemsRef"
        class="items-wrapper"
        :style="{ transform: `translateY(-${translateValue}px)` }"
      >
        <ContentBox
          :data="item"
          v-for="(item, index) in featuresData"
          :key="index"
        />
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
.slider-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 58px;
  gap: 159px;
}
.slider-viewport {
  display: flex;
  width: 600px;
  height: 420px;
  overflow: hidden;
}
.items-wrapper {
  display: flex;
  flex-direction: column;
  transition: transform 0.5s;
  height: fit-content;
}
@media (max-width: 1350px) {
  .slider-wrapper {
    gap: 50px;
  }
}
@media (max-width: 800px) {
  .slider-viewport {
    width: 500px;
  }
}
@media (max-width: 600px) {
  .slider-viewport {
    width: 250px;
  }
}
@media (max-width: 600px) {
  .slider-wrapper {
    gap: 50px;
    padding: 0 15px;
  }
}
</style>
