<script setup lang="ts">
import { reactive } from 'vue'
import IconDelete from './icons/IconDelete.vue'
import IconPlus from './icons/IconPlus.vue'
import IconSign from './icons/IconSign.vue'

const data = reactive([
  { tags: 'XXX', type: 'LDAP', login: 'icedevil', pass: '12321' },
  { tags: 'YYY', type: 'DAP', login: 'gregory', pass: '42211' },
  { tags: 'ZZZ', type: 'AD', login: 'user', pass: '12211' },
])

console.log(data)
</script>

<template>
  <div class="flex flex-col border border-solid rounded-2xl h-fit sm:m-auto space-y-5 p-3 sm:p-10 text-[#8ab5c6]">
    <div class="flex flex-row gap-x-3 w-full ">
      <p class="sm:text-3xl ">Учетные записи</p>
      <IconPlus class=""/>
    </div>

    <div class="flex flex-row gap-x-1 w-full text-sm sm:text-lg">
      <IconSign />
      <p class="self-center">Для указания нескольких меток для одной пары логин/пароль используйте разделитель!</p>
    </div>
    <div class="space-y-2 text-sm sm:text-lg">
      <div class="flex border border-solid px-1">
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
      </div>
      <div v-for="obj in data" :key="obj.tags" class="flex border border-solid px-1">
        <div class="basis-1/4">
          <div> {{ obj.tags }} </div>
        </div>
        <div class="basis-1/4">
          <div> {{ obj.type }} </div>
        </div>
        <div class="basis-1/4">
          <div> {{ obj.login }} </div>
        </div>
        <div class="basis-1/8">
          <div> {{ obj.pass }} </div>
        </div>
        <div class="flex basis-1/8 sm:justify-start justify-end">
          <IconDelete class="size-3 sm:size-5 cursor-pointer mt-1"/>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
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
