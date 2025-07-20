<script setup lang="ts">
const props = defineProps<{ shouldSendCopy: boolean }>();
const emit = defineEmits(['update:shouldSendCopy']);

const toggleCheckbox = () => {
  emit('update:shouldSendCopy', !props.shouldSendCopy);
};
</script>

<template>
  <div class="checkbox-group-wrapper">
    <div class="checkbox-group">
      <button
        id="checkbox"
        @click="toggleCheckbox"
        type="button"
      >
        <img
          v-if="props.shouldSendCopy"
          src="@/assets/images/icons/checkbox.svg"
          alt="checked-icon"
        />
        <img
          v-else
          src="@/assets/images/icons/Rectangle.svg"
          alt="unchecked-icon"
        />
      </button>
      <span class="checkbox-label">Send me a copy</span>
    </div>
    <button
      class="submit-btn"
      type="submit"
    >
      Send
    </button>
  </div>
</template>

<style scoped>
#checkbox {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 20px;
  height: 20px;
  border: none;
}
.checkbox-label {
  max-width: 130px;
  width: 100%;
  color: #15143966;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 1;
}
.checkbox-group {
  display: flex;
  gap: 12px;
  align-items: center;
}
.checkbox-group-wrapper {
  display: flex;
  max-width: 370px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
.submit-btn {
  max-width: 120px;
  width: 100%;
  height: 50px;
  border-radius: 100px;
  background-color: #25dac5;
  color: white;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 0;
  border: none;
  text-align: center;
}
</style>
