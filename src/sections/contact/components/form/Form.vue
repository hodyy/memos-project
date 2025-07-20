<script setup lang="ts">
import { reactive, ref } from 'vue';
import SubmitSection from '@/sections/contact/components/form/components/SubmitSection.vue';
import InputFields from '@/sections/contact/components/form/components/InputFields.vue';
import ErrorMessage from '@/sections/contact/components/form/components/ErrorMessage.vue';

const defaultValues = {
  name: '',
  email: '',
  message: '',
  budget: '500',
  shouldSendCopy: true,
};

const form = reactive({ ...defaultValues });
const isError = ref(false);
let timeoutId: ReturnType<typeof setTimeout>;

const resetForm = () => {
  Object.assign(form, defaultValues);
  isError.value = false;
};

const handleSubmit = () => {
  if (!form.name || !form.email || !form.message) {
    clearTimeout(timeoutId);
    isError.value = true;

    timeoutId = setTimeout(() => {
      if (isError.value) {
        isError.value = false;
      }
    }, 5000);

    return;
  }

  alert('Odesláno! :)');
  resetForm();
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <InputFields :form="form" />
    <ErrorMessage v-if="isError" />
    <SubmitSection v-model:shouldSendCopy="form.shouldSendCopy" />
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 470px;
  background-color: #ffffff;
  border-radius: 10px;
  gap: 30px;
  padding: 50px;
  height: auto;
}
</style>
