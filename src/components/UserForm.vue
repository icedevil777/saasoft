<script setup lang="ts">
// import { ref } from 'vue'
</script>

<template>
  <div class="flex flex-col border border-solid max-w-[1240px] mx-auto space-y-10">
    <div class="flex flex-row gap-x-3 w-full">
      <p class="text-3xl">Учетные записи</p>
      <svg class="size-10 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    </div>

    <div class="flex flex-row gap-x-3 w-full">
      <svg class="size-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
        />
      </svg>
      <p class="self-center">Для указания нескольких меток для одной пары логин/пароль используйте разделитель;</p>
    </div>

    <div class="flex border border-solid">
      <div class="basis-1/4 border border-solid">
        <span>Метки</span>
      </div>
      <div class="basis-1/4">
        <span>Тип записи</span>
      </div>
      <div class="basis-1/4">
        <span>Логин</span>
      </div>
      <div class="basis-1/4">
        <span>Пароль</span>
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
