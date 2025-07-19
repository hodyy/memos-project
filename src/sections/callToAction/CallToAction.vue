<script setup lang="ts">
import { ctaData } from '@/sections/callToAction/data/ctaData.ts';
const { header, buttonText, text } = ctaData;
</script>
<template>
  <section id="call-to-action-section">
    <div class="cta-content">
      <h2>{{ header }}</h2>
      <p>
        {{ text }}
      </p>
    </div>
    <div class="cta-buttons">
      <button class="circle-btn">
        <img
          src="@/assets/images/icons/play-icon.svg"
          alt="play-icon"
        />
      </button>
      <button class="get-started-btn">{{ buttonText }}</button>
    </div>
  </section>
</template>

<style scoped>
#call-to-action-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 605px;
  background-image: url('@/assets/images/background/bg_call_to_action.png');
  background-color: #2f1893;
  background-position: center;
  background-size: cover;
}
.cta-content {
  width: 518px;
  height: 277px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  gap: 40px;
}
.cta-content h2 {
  all: unset;
  font-weight: 700;
  font-size: 58px;
  line-height: 70px;
  letter-spacing: -1px;
  text-align: center;
}
.cta-content p {
  all: unset;
  font-weight: 500;
  font-size: 22px;
  line-height: 32px;
  letter-spacing: 0;
  text-align: center;
}
.cta-buttons {
  display: flex;
  gap: 30px;
  margin-top: 58px;
}
.circle-btn {
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  border-radius: 100px;
  background-color: #ea3223;
}

.get-started-btn {
  all: unset;
  width: 213px;
  height: 70px;
  border-radius: 100px;
  background-color: #25dac5;
  text-align: center;
}
</style>
