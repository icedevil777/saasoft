<script setup lang="ts">
import { reactive, ref } from 'vue'
import IconDelete from './icons/IconDelete.vue'
import IconPlus from './icons/IconPlus.vue'
import IconSign from './icons/IconSign.vue'

const data = reactive([
  {id: 1, tags: 'XXX', type: 'LDAP', login: 'icedevil', pass: '12321' },
  {id: 2, tags: 'YYY', type: 'DAP', login: 'gregory', pass: '42211' },
  {id: 3, tags: 'ZZZ', type: 'Local', login: 'user', pass: '12211' },
])

const opsions = ref([
  { text: 'LDAP', value: 'A' },
  { text: 'DAP', value: 'B' },
  { text: 'Local', value: 'C' }
])

const setNullPass = (type, id) => {
  console.log(type, id)
  if (type == 'Local'){
    data[id - 1].pass = null
  }
};

const addData = () => {
  const genId = data.length + 1;
  console.log('id', genId)
  data.push({id: genId, tags: '', type: '', login: '', pass: ''}); 
};

const deleteData = (id) => {
  const index = data.findIndex(item => item.id === id);
  if (index !== -1) {
    data.splice(index, 1);
  }

  data.forEach((item, index) => {
    item.id = index + 1;
  });
};

</script>

<template>
  <div class="flex flex-col border border-solid rounded-2xl h-fit sm:m-auto space-y-5 p-3 sm:p-10 text-[#8ab5c6]">
    <div class="flex flex-row gap-x-3 w-full ">
      <p class="sm:text-3xl ">Учетные записи</p>
      <IconPlus @click="addData"/>
    </div>

    <div class="flex flex-row gap-x-1 w-full text-sm sm:text-lg">
      <IconSign />
      <p class="self-center">Для указания нескольких меток для одной пары логин/пароль используйте разделитель ;</p>
    </div>
    <div class="space-y-3 text-sm sm:text-lg border-solid border p-3 rounded-xl">
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
      </div>
      <div v-for="obj in data" :key="obj.id" class="flex px-1 gap-3">
        <div class="basis-1/4">
          <input v-model="obj.tags" maxlength="50" class="w-full h-full border border-solid rounded-lg px-2" />
        </div>
        <div class="basis-1/4">
          <select v-model="obj.type" class="w-full h-full border border-solid rounded-lg px-2" >
            <option @click="setNullPass(obj.type, obj.id)" v-for="opsion in opsions" :key=opsion.text :value="opsion.text"> {{ opsion.text }} </option>
          </select>
        </div>
        <div class="basis-1/4">
          <input v-model="obj.login" maxlength="100" class="w-full h-full border border-solid rounded-lg px-2" />
        </div>
        <div class="basis-1/8">
          <input v-show="obj.type != 'Local'"  v-model="obj.pass" type="password" maxlength="50" class="w-full h-full border border-solid rounded-lg px-2" />
        </div>
        <div class="flex basis-1/8 sm:justify-start justify-end">
          <IconDelete @click="deleteData(obj.id)" class="size-3 sm:size-5 cursor-pointer mt-1"/>
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
