<script setup lang="ts">
import ContactBox from '@/sections/contact/components/ContactBox.vue';
import Form from '@/sections/contact/components/form/Form.vue';
</script>

<template>
  <section id="contact-section">
    <ContactBox />
    <Form />
  </section>
</template>

<style scoped>
#contact-section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 770px;
  background-image: url('@/assets/images/background/bg_contact.png');
  background-color: #2f1893;
  background-position: center;
  background-size: cover;
  gap: 89px;
  padding: 20px;
}
</style>
