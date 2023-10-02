<script setup>
import { ref, computed } from 'vue';
import { defineProps } from 'vue';

const props = defineProps({
  user: {
    type: Object,
    // required: true,
    default() {
      return {
        id: 1,
        firstname: 'Denis',
        lastname: 'Rozhkov',
        role_id: 1,
        role: {
          id: 1,
          title: 'Admin'
        }
      }
    }
  },
  defaultBorder: { type: Boolean, default: false }
});

const shortcutFullname = computed(() => {
  return props.user.firstname[0] + props.user.lastname[0]
});
</script>

<template>
  <div class="inline-flex items-center justify-center w-40 h-40 overflow-hidden bg-red-600 rounded-full"
    :class="{ 'border-2 border-gray-800': props.defaultBorder }">
    <span class="font-medium text-gray-100">
      {{ shortcutFullname }}
    </span>
  </div>
</template>