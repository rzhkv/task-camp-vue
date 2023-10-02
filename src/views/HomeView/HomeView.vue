<script setup>
import { computed, onMounted } from 'vue'
import { RouterLink } from 'vue-router'

import { TextHeading } from '@/components/TextHeading'
import { Button } from '@/components/Button'

import { TaskPriority } from '@/components/TaskPriority'

import { ProjectsCard } from '@/components/ProjectsCard'
import { ModalWindow } from '@/components/ModalWindow'
import AddProject from '@/components/forms/AddProject.vue'

import { PlusIcon } from '@heroicons/vue/24/solid'

// Store
import { useProjectStore } from '@/stores/projects.js';
const projects = useProjectStore();

const getData = async () => {
  await projects.getProjects();
}

onMounted(async () => {
  await getData();
})
</script>

<template>
  <div class="flex flex-col items-center space-y-24 mb-40">
    <div class="text-center">
      Понедельник, 17 августа
    </div>
    <TextHeading tag="h1" class="text-center">
      Приветствуем, Денис!
    </TextHeading>
    <div class="flex justify-center">
      <div class="h-52 px-32 bg-gray-100 rounded-full flex items-center justify-center">
        <div class="text-gray-500">
          <span class="text-xl font-semibold">0</span> открытых задач
        </div>
        <div class="h-24 border border-r-gray-300 mx-32"></div>
        <div class="text-gray-500">
          <span class="text-xl font-semibold">2</span> проекта
        </div>
      </div>
    </div>
    <Button as="button" :left-icon="PlusIcon" intent="primary" size="small">
      Добавить проект
    </Button>
  </div>

  <div class="border border-gray-200 rounded-8 mb-40">

    <div class="px-16 py-24 flex items-center justify-between">
      <TextHeading tag="h3">
        Ваши задачи:
      </TextHeading>
      <Button intent="text" size="small">
        Открыть все задачи
      </Button>
    </div>

    <div class="flex flex-col">
      <div class="border-b border-gray-200">
        <div class="flex  px-16">
          <div class="w-3/5 h-32 flex items-center border-r border-gray-200">
            <div class="text-gray-400 font-bold uppercase text-[12px]">Задачи</div>
          </div>
          <div class="w-1/5 h-32 flex items-center border-r border-gray-200">
            <div class="pl-16 text-gray-400 font-bold uppercase text-[12px]">Статус</div>
          </div>
          <div class="w-1/5 h-32 flex items-center">
            <div class="pl-16 text-gray-400 font-bold uppercase text-[12px]">Дедлайн</div>
          </div>
        </div>
      </div>

      <RouterLink to="auth">
        <div class="py-16 border-b border-gray-200 last:border-none hover:bg-gray-100">
          <div class="flex px-16">
            <div class="pr-16 w-3/5 flex items-center">
              <div class="font-bold truncate">
                Название задачи длинное, а если что, то его нужно
                за троеточие скрыть, а не то, будет как говно выглядеть
              </div>
            </div>
            <div class="pl-16 w-1/5 flex items-center">
              <TaskPriority>
                Высший
              </TaskPriority>
            </div>
            <div class="pl-16 w-1/5 flex items-center">
              <div class="">
                до 03.12
              </div>
            </div>
          </div>
        </div>
      </RouterLink>
    </div>

  </div>

  <div class="grid grid-cols-3 gap-16">
    <RouterLink to="auth">
      <ProjectsCard></ProjectsCard>
    </RouterLink>
    <RouterLink to="auth">
      <ProjectsCard></ProjectsCard>
    </RouterLink>
  </div>

  {{ projects }}

  <!-- <ModalWindow>
    <template v-slot:body>
      <AddProject></AddProject>
    </template>
  </ModalWindow> -->
</template>
