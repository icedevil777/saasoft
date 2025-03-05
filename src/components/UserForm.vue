<script setup lang="ts">
import { ref } from 'vue'
import IconDelete from './icons/IconDelete.vue'
import IconPlus from './icons/IconPlus.vue'
import IconSign from './icons/IconSign.vue'
import { useAccountStore } from '@/stores/accountStore'
import { storeToRefs } from 'pinia'

const accountStore = useAccountStore();
const { data, options } = storeToRefs(accountStore);

const addData = () => accountStore.addData();
const deleteData = (id: number) => accountStore.deleteData(id);
const setNullPass = (type: string, id: number) => accountStore.setNullPass(type, id)

const message = ref('');
const selectTarget = ref('')

const handleBlur = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (!input.value.trim()) {
    message.value = 'Поле не может быть пустым!';
    input.classList.add('error-color');
  } else {
    message.value = '';
    input.classList.remove('error-color'); 
  }
};

const hadlerSelect = (event: Event) => {
  const target = event.target as HTMLElement;
  if (target.nodeName === 'SELECT') {
    selectTarget.value = target;
    selectTarget.value.classList.remove('error-color');
  } else {
    if (event.target.value === '') {
      message.value = 'Необходимо сделать выбор!';
      selectTarget.value.classList.add('error-color');
    } else {
      message.value = '';
      selectTarget.value.classList.remove('error-color');
    }
  }
};

</script>

<template>
  <div class="flex flex-col border border-solid rounded-2xl h-fit sm:m-auto gap-y-1 sm:gap-y-3 p-3 sm:p-10 text-[#8ab5c6]">

    <div class="flex flex-row gap-x-3 w-full ">
      <div  class="flex flex-1">
        <p class="sm:text-3xl ">Учетные записи</p>
        <IconPlus class="" @click="addData"/>
      </div>
      <p class="sm:flex hidden self-center text-red-600 text-xs sm:text-sm"> {{ message }} </p>
    </div>  

    <div class="flex flex-row gap-x-1 w-full text-xs sm:text-sm">
      <IconSign />
      <p class="self-center">Для указания нескольких меток для одной пары логин/пароль используйте разделитель ;</p>
    </div>
    <p class="flex sm:hidden text-red-600 text-xs sm:text-sm mb-1"> {{ message }} </p>
    <div class="space-y-3 text-xs sm:text-sm border-solid border p-3 rounded-xl">
      <div class="flex  px-1">
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
      <div v-for="obj in data" :key="obj.id" class="flex px-1 gap-3 text-xs sm:text-sm">
        <div class="basis-1/4">
          <input v-model="obj.tags" @blur="handleBlur" maxlength="50" class="w-full h-full border border-solid rounded-lg px-2" />
        </div>
        <div class="basis-1/4">
          <select @click="hadlerSelect($event)" v-model="obj.type" class="w-full h-full border border-solid rounded-lg px-2 cursor-pointer" >
            <option value="" >Выберите опцию</option>
            <option @click="setNullPass(obj.type, obj.id)" v-for="option in options" :key=option.text :value="option.text"> {{ option.text }} </option>
          </select>
        </div>
        <div class="basis-1/4">
          <input v-model="obj.login" @blur="handleBlur" maxlength="100" class="w-full h-full border border-solid rounded-lg px-2" />
        </div>
        <div class="basis-1/4">
          <input v-show="obj.type != 'Local'" @blur="handleBlur" v-model="obj.pass" type="password" maxlength="50" class="w-full h-full border border-solid rounded-lg px-2" />
        </div>
        <div class="flex basis-1 sm:justify-start justify-end">
          <IconDelete @click="deleteData(obj.id)" class="size-3 sm:size-5 cursor-pointer mt-1"/>
        </div>
      </div>
    </div>
    {{ data }}
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
