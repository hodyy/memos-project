<script setup lang="ts">
import { contactData } from '@/sections/contact/data/data.ts';
const { header, text, phone, email, address } = contactData;
</script>

<template>
  <div class="left-content">
    <h3>{{ header }}</h3>
    <p>
      {{ text }}
    </p>
    <ul class="contact-list">
      <li>
        <img
          src="@/assets/images/icons/fa-phone.svg"
          alt="phone-icon"
        />{{ phone }}
      </li>
      <li>
        <img
          src="@/assets/images/icons/fa-envelope.svg"
          alt="email-icon"
        />{{ email }}
      </li>
      <li>
        <img
          src="@/assets/images/icons/fa-building-o.svg"
          alt="address-icon"
        />{{ address }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.left-content {
  width: 410px;
}
h3 {
  all: unset;
  font-weight: 700;
  font-size: 42px;
  line-height: 52px;
  letter-spacing: -0.4px;
  text-align: center;
}
p {
  margin: 28px 0 0 0;
  font-weight: 500;
  font-size: 22px;
  line-height: 32px;
  letter-spacing: 0;
}
.contact-list {
  display: flex;
  flex-direction: column;
  gap: 44px;
  list-style: none;
  padding: 0;
  margin: 53px 0 0;
}

li {
  display: flex;
  gap: 15px;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0px;
  margin-bottom: 10px;
}
</style>
