<script setup lang="ts">
import LeftContent from '@/sections/contact/components/LeftContent.vue';
import RightContent from '@/sections/contact/components/RightContent.vue';
</script>

<template>
  <section id="contact-section">
    <LeftContent />
    <RightContent />
  </section>
</template>

<style scoped>
#contact-section {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 770px;
  background-image: url('@/assets/images/background/bg_contact.png');
  background-color: #2f1893;
  background-position: center;
  background-size: cover;
  gap: 89px;
}
</style>
