<script setup>
import { TextHeading } from '@/components/TextHeading'
import { InputText } from '@/components/InputText'
import { Button } from '@/components/Button'

import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '@/stores/auth'

import intus from 'intus'
import { isRequired, isMin, isEmail, isRequiredWith, isSame } from 'intus/rules'

const firstname = ref('')
const lastname = ref('')
const email = ref('')
const password = ref('')
const repeatPassword = ref('')

const errors = ref({})

const auth = useAuth()
const router = useRouter()

const login = async () => {
  let validation = intus.validate(
    {
      firstname: firstname.value,
      lastname: lastname.value,
      email: email.value,
      password: password.value,
      repeatPassword: repeatPassword.value
    },
    {
      firstname: [isRequired()],
      lastname: [isRequired()],
      email: [isRequired(), isEmail()],
      password: [isRequired(), isMin(8)],
      repeatPassword: [isSame('password')]
    },
    {
      'firstname.isRequired': 'Введите ваше имя',
      'lastname.isRequired': 'Введите вашу фамилию',
      'email.isRequired': 'Введите электронную почту',
      'email.isEmail': 'Введите электронную почту',
      'password.isRequired': 'Введите пароль',
      'password.isMin': 'Пароль должен быть длинее 8 символов',
      'repeatPassword.isSame': 'Пароли должны совпадать'
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
      <InputText type="text" label="Ваше имя" v-model="firstname" :error="errors.firstname">
      </InputText>
    </div>

    <div class="mb-16">
      <InputText type="text" label="Ваше фамилия" v-model="lastname" :error="errors.lastname">
      </InputText>
    </div>

    <div class="mb-16">
      <InputText type="text" label="Электронная почта" v-model="email" :error="errors.email">
      </InputText>
    </div>

    <div class="mb-16">
      <InputText type="password" label="Пароль" v-model="password" :error="errors.password">
      </InputText>
    </div>

    <div class="mb-16">
      <InputText type="password" label="Повторите пароль" v-model="repeatPassword" :error="errors.repeatPassword">
      </InputText>
    </div>

    <div class="mt-32">
      <Button type="submit" intent="primary" size="medium" class="w-full"> Зарегистрироваться </Button>
    </div>
  </form>
</template>
