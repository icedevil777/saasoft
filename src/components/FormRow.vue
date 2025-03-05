<script setup lang="ts">
import { ref, computed } from 'vue'
import IconDelete from './icons/IconDelete.vue'
import { useAccountStore } from '@/stores/accountStore'
import { storeToRefs } from 'pinia'
const accountStore = useAccountStore()
const deleteData = (id: number) => accountStore.deleteData(id)
const setNullPass = (type: string, id: number) => accountStore.setNullPass(type, id)
const { options } = storeToRefs(accountStore)

const selectTarget = ref('')
const obj = defineModel({ type: Object })

const tags = computed({
  get() {
    if (Array.isArray(obj.value.tags)) return obj.value.tags.join(';')
    return null
  },
  set(value) {
    obj.value.tags = value.length > 0 ? value.split(';') : []
  },
})

const handleBlur = (event: Event) => {
  const input = event.target as HTMLInputElement
  if (!input.value.trim()) {
    input.classList.add('error-color')
  } else {
    input.classList.remove('error-color')
  }
}

const hadlerSelect = (event: Event) => {
  const target = event.target as HTMLElement
  if (target.nodeName === 'SELECT') {
    selectTarget.value = target
    selectTarget.value.classList.remove('error-color')
  } else {
    if (event.target.value === '') {
      selectTarget.value.classList.add('error-color')
    } else {
      selectTarget.value.classList.remove('error-color')
    }
  }
}
</script>
<template>
  <div class="flex px-1 gap-3 text-xs sm:text-sm">
    <div class="basis-1/4">
      <input v-model="tags" @blur="handleBlur" maxlength="50" class="w-full h-full border border-solid rounded-lg px-2" />
    </div>
    <div class="basis-1/4">
      <select @click="hadlerSelect($event)" v-model="obj.type" class="w-full h-full border border-solid rounded-lg px-2 cursor-pointer">
        <option value="">Выберите опцию</option>
        <option @click="setNullPass(obj.type, obj.id)" v-for="option in options" :key="option.text" :value="option.text">{{ option.text }}</option>
      </select>
    </div>
    <div class="basis-1/4">
      <input v-model="obj.login" @blur="handleBlur" maxlength="100" class="w-full h-full border border-solid rounded-lg px-2" />
    </div>
    <div class="basis-1/4">
      <input v-show="obj.type != 'Local'" @blur="handleBlur" v-model="obj.pass" type="password" maxlength="50" class="w-full h-full border border-solid rounded-lg px-2" />
    </div>
    <div class="flex basis-1 sm:justify-start justify-end">
      <IconDelete @click="deleteData(obj.id)" class="size-3 sm:size-5 cursor-pointer mt-1" />
    </div>
  </div>
</template>

<style scoped>
.error-color {
  border-color: red;
}
</style>
