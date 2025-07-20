<script setup lang="ts">
import { ctaData } from '@/sections/callToAction/data/ctaData.ts';
const { header, buttonText, text } = ctaData;
</script>

<template>
  <section id="cta-section">
    <div class="content-wrapper">
      <h2>{{ header }}</h2>
      <p class="paragraphStyle500">
        {{ text }}
      </p>
      <div class="buttons-wrapper">
        <button class="circle-btn">
          <img
            src="@/assets/images/icons/play-icon.svg"
            alt="play-icon"
          />
        </button>
        <button class="get-started-btn">{{ buttonText }}</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
#cta-section {
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: 605px;
  height: 100%;
  background-image: url('@/assets/images/background/bg_call_to_action.png');
  background-color: #2f1893;
  background-position: center;
  background-size: cover;
}
.content-wrapper {
  max-width: 518px;
  width: 100%;
  min-height: 277px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  gap: 40px;
}
h2 {
  font-weight: 700;
  font-size: 58px;
  line-height: 70px;
  letter-spacing: -1px;
  text-align: center;
}
p {
  margin: 0;
  text-align: center;
}
.buttons-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
}
.circle-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  border-radius: 100px;
  background-color: #ea3223;
}
.get-started-btn {
  width: 213px;
  height: 70px;
  border-radius: 100px;
  background-color: #25dac5;
  text-align: center;
}
@media (max-width: 470px) {
  #cta-section {
    padding: 20px;
  }
}
</style>
