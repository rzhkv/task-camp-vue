<script setup>
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';

import { UserAvatar } from '@/components/UserAvatar'

const avatarMenu = ref(null)
const isOpen = ref(false)

onClickOutside(avatarMenu, () => (isOpen.value = false));
</script>

<template>
  <div class="relative" ref="avatarMenu">
    <button @click="isOpen = !isOpen">
      <UserAvatar></UserAvatar>
    </button>

    <Transition>
      <div
        class="absolute translate-y-8 right-0 overflow-hidden rounded-4 w-[240px] border border-gray-200 shadow-md shadow-gray-100"
        v-if="isOpen">
        <div class="px-16 py-16 text-sm text-gray-900">
          <div>Bonnie Green</div>
          <div class="font-medium truncate">name@flowbite.com</div>
        </div>
        <ul class="px-4 py-4 text-sm text-gray-900" aria-labelledby="dropdownUserAvatarButton">
          <li>
            <a href="#" class="block rounded-4 p-12 transition-all hover:bg-gray-100">Настройки</a>
          </li>
          <li>
            <a href="#" class="block rounded-4 p-12 transition-all hover:bg-gray-100">Выйти</a>
          </li>
        </ul>
      </div>
    </Transition>
  </div>
</template>