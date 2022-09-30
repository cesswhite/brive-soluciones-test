<template>
  <teleport to="body">
    <div class="flex h-screen bg-gray-900/80 w-full top-0 left-0 fixed items-center justify-center">
      <form class="rounded-lg flex flex-col bg-gray-50 w-full  p-4 gap-3 lg:w-1/3 dark:bg-dark-600">
        <div class="flex items-center justify-end">
          <button @click.prevent="closeModal"
            class="text-xl text-gray-800 i-heroicons-solid-x-mark dark:text-gray-50" />
        </div>
        <div class="flex flex-col gap-1">
          <label for="username" class="font-semibold text-lg text-gray-800 dark:text-gray-50">
            Profile Photo
          </label>
          <input placeholder="https://source.unsplash.com/random/?people" name="username" class="rounded-md border-2 border-gray-300 py-3 px-4 placeholder-gray-200 dark:bg-dark-200 dark:border-dark-400
dark:placeholder-dark-50 dark:text-gray-50" v-model="photo" type="text">
        </div>
        <div class="flex flex-col gap-1">
          <label for="username" class="font-semibold text-lg text-gray-800 dark:text-gray-50">
            Name *
          </label>
          <input required placeholder="Steve Jobs" name="username" class="rounded-md border-2 border-gray-300 py-3 px-4 placeholder-gray-200 dark:bg-dark-200 dark:border-dark-400
dark:placeholder-dark-50 dark:text-gray-50" v-model="name" type="text">
        </div>
        <div class="flex flex-col gap-1">
          <label for="username" class="font-semibold text-lg text-gray-800 dark:text-gray-50">
            Phone
          </label>
          <input placeholder="00-0000-0000" name="username" class="rounded-md border-2 border-gray-300 py-3 px-4 placeholder-gray-200 dark:bg-dark-200 dark:border-dark-400
dark:placeholder-dark-50 dark:text-gray-50" v-model="phone" type="number">
        </div>
        <div class="flex flex-col gap-1">
          <label for="username" class="font-semibold text-lg text-gray-800 dark:text-gray-50">
            Email
          </label>
          <input placeholder="stevejobs@apple.com" name="username" class="rounded-md border-2 border-gray-300 py-3 px-4 placeholder-gray-200 dark:bg-dark-200 dark:border-dark-400
dark:placeholder-dark-50 dark:text-gray-50" v-model="email" type="email">
        </div>
        <button
          class="rounded-md font-semibold bg-blue-600 mt-2 w-full py-3 px-4 text-gray-50 hover:bg-blue-700 active:bg-blue-800"
          @click.prevent="mode === 'edit' ? edit() : add()">
          {{props.mode === 'edit' ? 'Edit' : 'Add'}} employee
        </button>
        <button
          class="rounded-md font-semibold border-2 border-blue-600 mt-2 w-full py-3 px-4 text-blue-600 hover:bg-blue-200"
          @click.prevent="closeModal">
          Cancel
        </button>
      </form>
    </div>
  </teleport>
</template>


<script setup lang="ts">
const { addEmployee, employee_edit, editEmployee } = useEmployeeStore()

const props = defineProps({
  mode: {
    type: String,
    default: 'create'
  }
})

const emit = defineEmits(['close'])

const name = ref(props.mode === 'edit' ? employee_edit.name : '')
const phone = ref(props.mode === 'edit' ? employee_edit.phone : '')
const email = ref(props.mode === 'edit' ? employee_edit.email : '')
const photo = ref(props.mode === 'edit' ? employee_edit.photo : '')

function closeModal() {
  emit('close', false)
}
function add() {
  if (!name.value) {
    alert('Please, fill the name')
    return
  }
  const employee = {
    photo: photo.value,
    name: name.value,
    phone: phone.value,
    email: email.value
  }
  addEmployee(employee)
  emit('close', false)
}

function edit() {
  const employee = {
    photo: photo.value,
    name: name.value,
    phone: phone.value,
    email: email.value
  }
  editEmployee(employee)
  emit('close', false)
}

</script>

<!-- 
  let randomImageIndex = Math.floor(Math.random() * 10)
  image: `https://source.unsplash.com/random/?people?sig=${randomImageIndex}`, -->