<script setup>
import { TextHeading } from '@/components/TextHeading'
import { InputText } from '@/components/InputText'
import { Button } from '@/components/Button'

import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '@/stores/auth'

import intus from 'intus'
import { isRequired, isMin, isEmail } from 'intus/rules'

const email = ref('')
const password = ref('')

const errors = ref({});

const auth = useAuth()
const router = useRouter()

const login = async () => {
  let validation = intus.validate(
    {
      email: email.value,
      password: password.value
    },
    {
      email: [isRequired(), isEmail()],
      password: [isRequired(), isMin(8)]
    },
    {
      'email.isRequired': 'Заполните поле почта',
      'password.isRequired': 'Заполните поле пароль'
    }
  )

  errors.value = validation.errors();

  if (false) {
    // if (validation.passes()) {
    // await auth.resetAuth() // Need to change to loginWithCredentials
    // auth.token = '1'
    // router.push({ name: 'home' }) // Set Query
  }
}
</script>

<template>
  <form class="max-w-[320px] mx-auto" @submit.prevent="login">
    <TextHeading tag="h3" class="mb-32 text-center"> Войти в аккаунт </TextHeading>

    <div class="mb-16">
      <InputText type="text" label="Электронная почта" v-model="email" :error="errors.email">
      </InputText>
    </div>

    <div class="mb-16">
      <InputText type="password" label="Пароль" v-model="password" :error="errors.password">
      </InputText>
    </div>

    <div class="mt-32">
      <Button type="submit" intent="primary" size="medium" class="w-full"> Войти </Button>
    </div>
  </form>
</template>
