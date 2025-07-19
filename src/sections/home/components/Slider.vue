<script setup lang="ts">
import { ref } from 'vue';
import sliderData from '@/sections/home/components/slider/data.ts';
import SliderItem from '@/sections/home/components/slider/SliderItem.vue';
import Dots from '@/global/components/Dots.vue';
const activeBox = ref<number>(1);

const moveLeft = () => {
  if (isFirstItem()) return;
  activeBox.value -= 1;
};
const itemWidth = 736;
const moveRight = () => {
  if (activeBox.value >= sliderData.length) {
    return;
  }
  activeBox.value += 1;
};

const isFirstItem = () => {
  return activeBox.value === 1;
};

const isLastItem = () => {
  return activeBox.value === sliderData.length;
};

const calculateTranslate = () => {
  return activeBox.value * itemWidth - itemWidth;
};
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
    <div class="main-wrapper">
      <div
        class="movable-wrapper"
        :style="{ transform: `translateX(-${calculateTranslate()}px)` }"
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
    v-model:active-index="activeBox"
  />
  <button class="create-acc-btn">Create an Account</button>
</template>

<style scoped>
.slider-wrapper {
  display: flex;
  align-items: center;
  margin-top: 142px;
  gap: 206px;
  margin-bottom: 48px;
}

.main-wrapper {
  display: flex;
  width: 736px;
  height: 260px;
  overflow: hidden;
}

.movable-wrapper {
  display: flex;
  transition: transform 0.5s;
}

.slider-wrapper button {
  all: unset;
}

.disabled {
  opacity: 0.3;
}
.create-acc-btn {
  all: unset;
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
</style>
