<script setup lang="ts">
import { ref } from 'vue';
import type { NavItems } from '@/sections/home/components/navigation/navTypes.ts';
import { navigationItems } from '@/sections/home/components/navigation/data.ts';

const activeItem = ref<string>('home');
const setActiveItem = (item: NavItems) => {
  activeItem.value = item;
};
const isActive = (item: NavItems) => {
  return activeItem.value === item;
};
</script>
<template>
  <nav>
    <li
      v-for="(item, index) in navigationItems"
      :key="index"
    >
      <a
        :class="{ active: isActive(item.name) }"
        :href="`#${item.name.toLowerCase()}-section`"
        @click="setActiveItem(item.name)"
      >
        <template v-if="item.icon">
          <img
            :src="item.icon"
            :alt="`#${item.name}-icon`"
          />
        </template>
        <template v-else>
          {{ item.name }}
        </template>
      </a>
    </li>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 469px;
  height: 26px;
  margin-top: 85px;
  gap: 43px;
  color: white;
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 0;
}
li,
a {
  all: unset;
}
.active {
  opacity: 0.3;
}
</style>
