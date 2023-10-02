<script setup>
// import { ref } from 'vue';

import IconClose from '../icons/IconClose.vue';
import { TextHeading } from '../TextHeading'

// const show = ref(false);
</script>

<template>
  <div class="bg-black/25 fixed w-full h-full top-0 left-0 right-0 bottom-0 flex items-center justify-center">
    <div class="max-w-[545px] w-full bg-white rounded-4 overflow-hidden py-24 px-16">
      <div class="border-b border-gray-200 pb-16 mb-16 flex justify-between items-center">
        <TextHeading tag="h3">Добавьте новый проект</TextHeading>
        <IconClose width="24" height="24"></IconClose>
      </div>

      <div class="">
        <slot name="body"></slot>
      </div>
    </div>
  </div>
</template>