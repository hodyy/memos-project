<script setup lang="ts">
import { ref } from 'vue';
import type { NavItems } from '@/sections/home/components/navigation/navTypes.ts';
import { navigationItems } from '@/sections/home/components/navigation/data.ts';

const activeItem = ref<NavItems>('Home');

const setActiveItem = (item: NavItems) => {
  activeItem.value = item;
};

const isActive = (item: NavItems) => {
  return activeItem.value === item;
};
</script>

<template>
  <nav>
    <ul>
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
    </ul>
  </nav>
</template>

<style scoped>
ul {
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
.active {
  opacity: 0.3;
}
@media (max-width: 550px) {
  ul {
    font-size: 15px;
    width: 100%;
    gap: 25px;
  }
}
@media (max-width: 400px) {
  ul {
    gap: 15px;
  }
}
</style>
