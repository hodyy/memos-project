<script setup lang="ts">
import type { FormType } from '@/sections/contact/components/form/types/formTypes.ts';
defineProps<{ form: FormType }>();
</script>

<template>
  <div class="name-and-budget-wrapper">
    <div class="input-group">
      <label for="input-name">YOUR NAME</label>
      <input
        id="input-name"
        type="text"
        placeholder="First name"
        v-model="form.name"
      />
    </div>
    <div class="input-group">
      <label for="budget">Budget</label>
      <select
        id="budget"
        v-model="form.budget"
      >
        <option value="500">$500</option>
        <option value="1000">$1000</option>
        <option value="1500">$1500</option>
      </select>
    </div>
  </div>
  <div class="input-group">
    <label for="input-email">INPUT FIELD</label>
    <input
      id="input-email"
      type="email"
      placeholder="name@mail.com"
      v-model="form.email"
    />
  </div>
  <div class="input-group">
    <label for="message">YOUR MESSAGE</label>
    <textarea
      id="message"
      placeholder="Message"
      v-model="form.message"
    />
  </div>
</template>

<style scoped>
input {
  height: 50px;
  border-radius: 100px;
  border: 2px solid #ebeaed;
  padding: 12px 24px;
}
#input-name {
  max-width: 200px;
  width: 100%;
}
#input-email {
  max-width: 370px;
  width: 100%;
}
textarea {
  max-width: 370px;
  width: 100%;
  height: 110px;
  border-radius: 10px;
  border: 2px solid #ebeaed;
  padding: 13px 19px;
  resize: none;
}
select {
  width: 140px;
  height: 50px;
  border-radius: 100px;
  border: 2px solid #ebeaed;
  padding: 12px 24px;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 0;
  color: #1e0e62;
}
input::placeholder,
textarea::placeholder {
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 0;
  color: #15143966;
}
label {
  font-weight: 700;
  font-size: 14px;
  line-height: 26px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #1e0e62;
}
.input-group {
  max-width: 370px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.name-and-budget-wrapper {
  display: flex;
  flex-direction: row;
  max-width: 370px;
  width: 100%;
  gap: 30px;
}
@media (max-width: 450px) {
  .name-and-budget-wrapper {
    flex-direction: column;
  }
}
</style>
