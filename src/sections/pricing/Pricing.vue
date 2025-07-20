<script setup lang="ts">
import TariffBox from '@/sections/pricing/data/TariffBox.vue';
import { tariffs } from '@/sections/pricing/data/pricingData.ts';
import { pricingData } from '@/sections/pricing/data/pricingData.ts';

const { header, text } = pricingData;
</script>

<template>
  <section id="pricing-section">
    <div class="wrapper"></div>
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
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 1130px;
  height: 100%;
  overflow: hidden;
  gap: 54px;
}
.title-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 586px;
  width: 100%;
  min-height: 146px;
  height: 100%;
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
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 30px;
}
</style>
