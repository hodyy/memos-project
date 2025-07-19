<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps<{
  dotCount: number;
  activeIndex: number;
  styles?: Record<string, string>;
}>();
const emit = defineEmits<{
  (e: 'update:active-index', newIndex: number): void;
}>();

const onclick = (index: number) => {
  if (index === props.activeIndex) return;
  emit('update:active-index', index);
};
</script>

<template>
  <div
    class="wrapper"
    :style="props.styles"
  >
    <div
      v-for="index in dotCount"
      :key="index"
    >
      <button
        v-if="index === props.activeIndex"
        @click="onclick(index)"
      >
        <img
          src="@/assets/images/icons/fa-circle.svg"
          alt="circle-icon"
        />
      </button>
      <button
        @click="onclick(index)"
        v-else
      >
        <img
          src="@/assets/images/icons/fa-circle-o.svg"
          alt="active-circle-icon"
        />
      </button>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 9px;
}
button {
  all: unset;
}
</style>
