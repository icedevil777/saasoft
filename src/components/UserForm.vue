<script setup lang="ts">
import IconPlus from './icons/IconPlus.vue'
import IconSign from './icons/IconSign.vue'
import FormRow from './FormRow.vue'
import { useAccountStore } from '@/stores/accountStore'
import { storeToRefs } from 'pinia'

const accountStore = useAccountStore()
const { data } = storeToRefs(accountStore)
const addData = () => accountStore.addData()
</script>

<template>
  <div class="flex flex-col border border-solid rounded-2xl h-fit sm:m-auto gap-y-1 sm:gap-y-3 p-3 sm:p-10 text-[#8ab5c6]">
    <div class="flex flex-row gap-x-3 w-full">
      <div class="flex flex-1">
        <p class="sm:text-3xl">Учетные записи</p>
        <IconPlus class="" @click="addData" />
      </div>
    </div>

    <div class="flex flex-row gap-x-1 w-full text-xs sm:text-sm">
      <IconSign />
      <p class="self-center">Для указания нескольких меток для одной пары логин/пароль используйте разделитель ;</p>
    </div>
    <div class="space-y-3 text-xs sm:text-sm border-solid border p-3 rounded-xl">
      <div class="flex px-1">
        <div class="basis-1/4">
          <div>Метки</div>
        </div>
        <div class="basis-1/4">
          <div class="hidden sm:block">Тип записи</div>
          <div class="sm:hidden">Тип</div>
        </div>
        <div class="basis-1/4">
          <div>Логин</div>
        </div>
        <div class="basis-1/4">
          <div>Пароль</div>
        </div>
        <div class="flex basis-1 sm:justify-start justify-end">
          <div class="w-2 sm:w-4"></div>
        </div>
      </div>
      <FormRow v-for="(obj, key) in data" :key="obj.id" v-model="data[key]" />
    </div>
    <span v-if="data[0]" class="text-xs sm:text-sm"> {{ data[0].tags }} </span>
  </div>
</template>

<style scoped>
.error-color {
  border-color: red;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
