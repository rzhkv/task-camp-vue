<script setup>
import { TextHeading } from '@/components/TextHeading'
import { InputText } from '@/components/InputText'
import { Button } from '@/components/Button'

import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '@/stores/auth'

import intus from 'intus'
import { isRequired, isMin, isEmail, isRequiredWith, isSame } from 'intus/rules'

const email = ref('')
const password = ref('')

const errors = ref({})

const auth = useAuth()
const router = useRouter()

const login = async () => {
  let validation = intus.validate(
    {
      email: email.value,
      password: password.value,
    },
    {
      email: [isRequired(), isEmail()],
      password: [isRequired(), isMin(8)],
    },
    {
      'email.isRequired': 'Введите электронную почту',
      'email.isEmail': 'Введите электронную почту',
      'password.isRequired': 'Введите пароль',
      'password.isMin': 'Пароль должен быть длинее 8 символов',
    }
  )

  if (!validation.passes()) {
    return (errors.value = validation.errors())
  }

  console.log(1234)
}
</script>

<template>
  <form @submit.prevent="login">
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
