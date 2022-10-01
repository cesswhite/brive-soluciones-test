<template>
  <div class="w-full relative">
    <div
      class="rounded-lg bg-gray-200 w-full py-2 px-2 top-0 z-1 gap-2 grid-cols-12 hidden sticky md:grid dark:bg-dark-200">
      <div class="font-semibold text-base text-gray-800 col-span-1 dark:text-gray-50">
        Photo
      </div>
      <div class="font-semibold text-base text-gray-800 col-span-3 dark:text-gray-50">
        Name
      </div>
      <div class="font-semibold text-base text-gray-800 col-span-2 dark:text-gray-50">
        Phone
      </div>
      <div class="font-semibold text-base text-gray-800 col-span-3 dark:text-gray-50">
        Email
      </div>
      <div class="font-semibold text-base text-gray-800 col-span-3 dark:text-gray-50">
        Actions
      </div>
    </div>
    <div v-if="getAllEmployees.length > 0">
      <template v-for="(employee, index) in getAllEmployees" :key="index">
        <div
          class="border-gray-200 border-b-2 mb-2 py-2 gap-2 grid-cols-12 hidden items-center md:grid dark:border-dark-200">
          <div class="col-span-1">
            <img v-if="employee.photo.includes('https')" :src="employee.photo" width="32" height="32"
              class="rounded-full mx-auto h-12 w-12">
            <div v-else
              class="rounded-full flex font-semibold mx-auto bg-blue-300 h-12 text-lg text-gray-800 w-12 uppercase items-center justify-center">
              {{ employee.name.charAt(0) }}
            </div>
          </div>
          <div class="font-medium text-lg text-gray-800 col-span-3 truncate capitalize dark:text-gray-50">
            {{employee.name}}
          </div>
          <div class="font-medium text-lg text-gray-800 col-span-2 dark:text-gray-50">
            {{employee.phone}}
          </div>
          <div class="font-medium text-lg text-gray-800 col-span-3 truncate dark:text-gray-50">
            {{employee.email}}
          </div>
          <div class="flex gap-2 col-span-3">
            <button
              class="rounded-md flex bg-gray-200 p-1 text-dark-900 gap-1 items-center dark:bg-dark-200 dark:text-gray-50 hover:bg-gray-300 active:bg-gray-400 dark:hover:bg-dark-300 dark:active:bg-dark-400"
              @click="openEditModal(employee)">
              <div class="i-heroicons-solid-pencil-square" />
              <span class="inline">
                Edit
              </span>
            </button>
            <button
              class="rounded-md flex bg-red-200 p-1 text-red-800 gap-1 items-center hover:bg-red-300 active:bg-red-400"
              @click="removeEmployee(index)">
              <div class="i-heroicons-solid-trash" />
              <span class="inline">
                Remove
              </span>
            </button>
          </div>
        </div>
        <div class="flex mb-4 px-2 md:hidden">
          <div class="rounded-lg border-2 border-gray-200 w-full p-2 dark:border-dark-200">
            <div>
              <img v-if="employee.photo.includes('https')" :src="employee.photo" width="32" height="32"
                class="rounded-full mx-auto h-14 w-14">
              <div v-else
                class="rounded-full flex font-semibold mx-auto bg-blue-300 h-12 text-lg text-gray-800 w-12 uppercase items-center justify-center">
                {{ employee.name.charAt(0) }}
              </div>
            </div>
            <div class="flex border-b-2 border-gray-200 py-2 items-center justify-between dark:border-dark-200">
              <div class="font-medium text-dark-800 inline dark:text-gray-50">Name</div>
              <div class="text-dark-800 inline dark:text-gray-50">{{ employee.name }}</div>
            </div>
            <div class="flex border-b-2 border-gray-200 py-2 items-center justify-between dark:border-dark-200">
              <div class="font-medium text-dark-800 inline dark:text-gray-50">Phone</div>
              <div class="text-dark-800 inline dark:text-gray-50">{{ employee.phone }}</div>
            </div>
            <div class="flex border-b-2 border-gray-200 py-2 items-center justify-between dark:border-dark-200">
              <div class="font-medium text-dark-800 inline dark:text-gray-50">Email</div>
              <div class="text-dark-800 inline dark:text-gray-50">{{ employee.email }}</div>
            </div>
            <div class="mt-2">
              <button
                class="rounded-md flex bg-gray-200 w-full p-1 text-dark-900 gap-1 justify-center items-center dark:bg-dark-200 dark:text-gray-50 hover:bg-gray-300 active:bg-gray-400 dark:hover:bg-dark-300 dark:active:bg-dark-400"
                @click="openEditModal(employee)">
                <div class="i-heroicons-solid-pencil-square" />
                <span class="inline">
                  Edit
                </span>
              </button>
              <button
                class="rounded-md flex bg-red-200 mt-2 w-full p-1 text-red-800 gap-1 justify-center items-center hover:bg-red-300 active:bg-red-400"
                @click="removeEmployee(index)">
                <div class="i-heroicons-solid-trash" />
                <span class="inline">
                  Remove
                </span>
              </button>
            </div>
          </div>
        </div>
      </template>
    </div>
    <div v-else class="flex h-screen items-center justify-center">
      <Title>
        NO DATA
      </Title>
    </div>
    <Modal v-if="isEditModal" mode="edit" @close="isEditModal = false" />
  </div>
</template>

<script setup lang='ts'>
import type { Employee } from '~~/types/employees';
import { storeToRefs } from 'pinia'

const { removeEmployee, setEditEmployee } = useEmployeeStore()
const { getAllEmployees } = storeToRefs(useEmployeeStore())
const isEditModal = ref(false)

function openEditModal(employee: Employee) {
  isEditModal.value = true
  setEditEmployee(employee)
}
</script>
