<script setup lang="ts">
import TariffBox from '@/sections/pricing/data/TariffBox.vue';
import { tariffs } from '@/sections/pricing/data/pricingData.ts';
import { pricingData } from '@/sections/pricing/data/pricingData.ts';
const { header, text } = pricingData;
</script>

<template>
  <section id="pricing-section">
    <div class="title-box">
      <h2>{{ header }}</h2>
      <p>
        {{ text }}
      </p>
    </div>
    <div class="boxes-wrapper">
      <TariffBox
        v-for="(item, index) in tariffs"
        :tariff="item"
        :key="index"
      />
    </div>
  </section>
</template>

<style scoped>
#pricing-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 1130px;
  overflow: hidden;
  gap: 54px;
}
.title-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 586px;
  height: 146px;
  gap: 30px;
}

h2 {
  margin: 0;
  font-weight: 700;
  font-size: 42px;
  line-height: 52px;
  letter-spacing: -0.4px;
}

p {
  margin: 0;
  font-weight: 500;
  font-size: 22px;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: center;
}
.boxes-wrapper {
  display: flex;
  gap: 30px;
}
</style>
