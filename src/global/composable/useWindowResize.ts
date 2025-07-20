import { nextTick, onBeforeUnmount, onMounted } from 'vue';

export function useWindowResize(callback: () => void) {
  onMounted(async () => {
    await nextTick();
    callback();
    window.addEventListener('resize', callback);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', callback);
  });
}
