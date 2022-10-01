<template>
  <div
    class="h-auto mx-auto bg-gray-50 border-l-2 border-r-2 border-gray-200 w-full px-4 pt-12 lg:max-w-screen-lg 2xl:max-w-screen-2xl dark:bg-dark-600 dark:border-dark-400">
    <div class="flex px-2 items-center justify-end md:px-0">
      <button aria-label="toogle-mode" class="text-gray-800 dark:text-gray-50" @click="toggleDark">
        <div class="text-xl i-heroicons-solid-moon dark:i-heroicons-solid-sun" />
      </button>
    </div>
    <div class="flex flex-col mt-4 px-2 gap-2 items-start justify-between md:flex-row md:px-0 md:items-center">
      <Title>
        Employees
      </Title>
      <div class="flex w-full gap-2 items-center justify-between md:w-auto">
        <div class="relative">
          <div class="rounded-md text-xl top-3 left-2 text-gray-400 absolute i-heroicons-solid-search" />
          <input v-model="search"
            class="rounded-lg font-medium bg-gray-50 border-2 border-gray-300 text-base py-2 px-8 text-gray-800 dark:bg-dark-200 dark:border-dark-400 dark:text-gray-50"
            placeholder="Search employee" type="text">
        </div>
        <button aria-label="new-employee" @click="isShowModal = true"
          class="rounded-lg flex font-semibold bg-blue-600 text-base w-full py-2 px-6 text-gray-50 gap-2 justify-center items-center md:w-auto hover:bg-blue-700 active:bg-blue-800">
          <div class="i-heroicons-solid-plus" />
          New Employee
        </button>
      </div>
    </div>
    <div class="mt-12">
      <Table />
    </div>
    <Modal mode="create" v-if="isShowModal" @close="isShowModal = false" />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
definePageMeta({
  title: 'Brivé Soluciones | Test'
})
const { search } = storeToRefs(useEmployeeStore())
const isShowModal = ref(false)
const color = useColorMode()

function toggleDark() {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}
</script>