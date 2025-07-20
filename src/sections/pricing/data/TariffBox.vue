<script setup lang="ts">
import { defineProps } from 'vue';
import { type Tariff } from '@/sections/pricing/data/pricingData.ts';
import TariffFeatures from '@/sections/pricing/components/TariffFeatures.vue';
const props = defineProps<{ tariff: Tariff }>();
</script>

<template>
  <div class="box-wrapper">
    <div class="title-price-wrapper">
      <h2>{{ props.tariff.name }}</h2>
      <div class="price">{{ props.tariff.price }}<span class="dollar">$</span></div>
    </div>
    <TariffFeatures :tariff="tariff" />
    <div class="button-wrapper">
      <button
        class="start-button"
        :style="{
          backgroundColor: props.tariff.buttonColor ? props.tariff.buttonColor : 'transaprent',
        }"
      >
        Get Started
      </button>
    </div>
  </div>
</template>

<style scoped>
.box-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  max-width: 370px;
  width: 100%;
  height: 730px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
}
.start-button {
  width: 230px;
  height: 60px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 100px;
  background-color: inherit;
  color: white;
  margin-top: 30px;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0;
  text-align: center;
}
h2 {
  margin: 0;
  font-weight: 500;
  font-size: 22px;
  line-height: 32px;
  letter-spacing: 0;
}
.price {
  position: relative;
  align-self: flex-start;
  display: flex;
  font-weight: 700;
  font-size: 58px;
  line-height: 70px;
  letter-spacing: -1px;
}
.title-price-wrapper {
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  gap: 27px;
}
.button-wrapper {
  display: flex;
  width: 100%;
  justify-content: center;
}
.dollar {
  position: absolute;
  top: 12px;
  right: -15px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1;
}
</style>
