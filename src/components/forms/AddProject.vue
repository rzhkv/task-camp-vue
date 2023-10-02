<script setup>
import { ref } from 'vue'

import { InputText } from '@/components/InputText'
import { Button } from '@/components/Button'

import intus from 'intus'
import { isRequired, isMin } from 'intus/rules'

import { useRouter } from 'vue-router'
import { useAuth } from '@/stores/auth'

const name = ref('')
const description = ref('')

const errors = ref({});

const auth = useAuth()
const router = useRouter()

const login = async () => {
  let validation = intus.validate(
    {
      name: name.value,
      description: description.value
    },
    {
      name: [isRequired(), isMin(4)],
      description: [isRequired(), isMin(8)]
    },
    {
      'name.isRequired': 'Заполните поле название',
      'description.isRequired': 'Заполните поле описание'
    }
  )

  errors.value = validation.errors();


  if (validation.passes()) {
    await auth.resetAuth() // Need to change to loginWithCredentials
    auth.token = '1'
    router.push({ name: 'home' }) // Set Query
  }

}
</script>

<template>
  <form @submit.prevent="login">

    <div class="mb-16">
      <InputText type="text" label="Название проекта" v-model="name" :error="errors.name">
      </InputText>
    </div>

    <div class="mb-16">
      <InputText type="password" label="Описание проекта" v-model="description" :error="errors.description">
      </InputText>
    </div>

    <div class="mt-32">
      <Button type="submit" intent="primary" size="medium" class="w-full"> Войти </Button>
    </div>
  </form>
</template>