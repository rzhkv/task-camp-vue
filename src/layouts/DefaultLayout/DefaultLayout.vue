<script setup>
import { RouterLink } from 'vue-router';
import { useLoading } from '@/stores/loading';

import LogoIcon from '@/components/icons/IconLogo.vue'
import { MenuProfile } from '@/components/MenuProfile';
import { Preloader } from '@/components/Preloader';

const loading = useLoading();

setTimeout(() => {
  loading.isLoading = false;
}, 0);
</script>

<template>
  <main class="px-32">
    <header class="py-16 flex flex-wrap justify-between items-center gap-32 mb-32">
      <RouterLink to="/">
        <LogoIcon></LogoIcon>
      </RouterLink>
      <MenuProfile></MenuProfile>
    </header>

    <div class="container mx-auto">
      <slot></slot>
    </div>
  </main>

  <Transition>
    <Preloader v-if="loading.isLoading"> </Preloader>
  </Transition>
</template>