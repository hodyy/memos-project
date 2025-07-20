<script setup lang="ts">
import { computed, ref } from 'vue';
import sliderData from '@/sections/home/components/slider/data.ts';
import SliderItem from '@/sections/home/components/slider/SliderItem.vue';
import Dots from '@/global/components/Dots.vue';
import { useWindowResize } from '@/global/composable/useWindowResize.ts';

const activeItem = ref<number>(1);
const itemsRef = ref<HTMLElement | null>(null);
const itemWidth = ref(0);

const moveLeft = () => {
  if (isFirstItem()) return;
  activeItem.value -= 1;
};

const moveRight = () => {
  if (activeItem.value >= sliderData.length) {
    return;
  }
  activeItem.value += 1;
};

const isFirstItem = () => {
  return activeItem.value === 1;
};

const isLastItem = () => {
  return activeItem.value === sliderData.length;
};

const translateValue = computed(() => activeItem.value * itemWidth.value - itemWidth.value);

const getSize = () => {
  if (itemsRef.value) {
    const { width } = itemsRef.value.getBoundingClientRect();
    itemWidth.value = width / sliderData.length;
  }
};

useWindowResize(getSize);
</script>

<template>
  <div class="slider-wrapper">
    <button @click="moveLeft">
      <img
        :class="{ disabled: isFirstItem() }"
        src="@/assets/images/icons/fa-angle-left.svg"
        alt="left-arrow"
      />
    </button>
    <div class="slider-viewport">
      <div
        class="items-wrapper"
        ref="itemsRef"
        :style="{ transform: `translateX(-${translateValue}px` }"
      >
        <SliderItem
          v-for="(item, index) in sliderData"
          :slider-content="item"
          :key="index"
        />
      </div>
    </div>
    <button @click="moveRight">
      <img
        :class="{ disabled: isLastItem() }"
        src="@/assets/images/icons/fa-angle-right.svg"
        alt="right-arrow"
      />
    </button>
  </div>
  <Dots
    :dot-count="sliderData.length"
    v-model:active-index="activeItem"
  />
  <button class="create-acc-btn">Create an Account</button>
</template>

<style scoped>
.slider-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 142px;
  gap: 206px;
  margin-bottom: 48px;
  width: 100%;
}
.slider-viewport {
  display: flex;
  width: 736px;
  height: 260px;
  overflow: hidden;
}
.items-wrapper {
  display: flex;
  transition: transform 0.5s;
}
.disabled {
  opacity: 0.3;
}
.create-acc-btn {
  width: 230px;
  height: 60px;
  background-color: #482be7;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0;
  text-align: center;
  border-radius: 100px;
  margin-top: 58px;
}
@media (max-width: 1200px) {
  .slider-wrapper {
    gap: 20px;
  }
}
@media (max-width: 800px) {
  .slider-wrapper button {
    display: none;
  }
  .slider-viewport {
    width: 400px;
  }
}
@media (max-width: 470px) {
  .slider-viewport {
    width: 300px;
  }
  .create-acc-btn {
    width: 200px;
  }
}
</style>
