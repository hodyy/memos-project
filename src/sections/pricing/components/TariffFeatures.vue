<script setup lang="ts">
import { defineProps } from 'vue';
import { features, type Tariff } from '@/sections/pricing/data/pricingData.ts';
const props = defineProps<{ tariff: Tariff }>();
</script>

<template>
  <div class="features">
    <div
      class="feature-wrapper"
      v-for="(item, index) in features"
      :key="index"
    >
      <img
        v-if="props.tariff.activeFeatures.includes(item.id)"
        src="@/assets/images/icons/check-icon.svg"
        alt="check-icon"
      />
      <div
        class="empty-space"
        v-else
      />
      <div
        class="feature-name"
        :style="{ opacity: props.tariff.activeFeatures.includes(item.id) ? 1 : 0.7 }"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.feature-wrapper {
  display: flex;
  gap: 15px;
}
.empty-space {
  width: 12px;
}

.features {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 45px;
}
h2 {
  margin: 0;
  font-weight: 500;
  font-size: 22px;
  line-height: 32px;
  letter-spacing: 0;
}
.feature-name {
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0;
}
</style>
