<script setup>
import { TextHeading } from '@/components/TextHeading'
import { DocumentCheckIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <div class="border border-gray-100 hover:border-gray-300 rounded-8 overflow-hidden transition-all">
    <div class="px-16 py-24">
      <TextHeading tag="h3" class="mb-40">
        Название проекта
      </TextHeading>

      <div class="w-full flex justify-between">
        <div class="flex -space-x-8">
          <div class="inline-flex items-center justify-center w-28 h-28 overflow-hidden bg-yellow-500  rounded-full">
            <span class="text-[10px] text-gray-100">DR</span>
          </div>
          <a class="flex items-center justify-center w-28 h-28 text-[10px] text-white bg-gray-700 rounded-full" href="#">
            +99
          </a>
        </div>
        <div class="flex items-center gap-4">
          <DocumentCheckIcon class="w-20 h-20 text-gray-500"></DocumentCheckIcon>
          <div class="text-sm text-gray-500">
            0/20
          </div>
        </div>
      </div>
    </div>
  </div>
</template>