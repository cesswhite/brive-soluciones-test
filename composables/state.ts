import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import { Employee } from '../types/employees'

export const useEmployeeStore = defineStore({
  id: 'storeEmployees',
  state: () => ({
    employees: useStorage('employees', []),
    employee_edit: {
      photo: '',
      name: '',
      phone: '',
      email: ''
    },
    index_edit: null,
    search: ''
  }),
  getters:{
    getAllEmployees(){
      return this.employees.filter((employee) =>
        employee.name
          .toLowerCase()
          .replace(/\s+/g, '')
          .includes(this.search.toLowerCase().replace(/\s+/g, ''))
      )
    },
  },
  actions: {
    addEmployee(employee: Employee){
      this.employees.push(employee)
    },
    removeEmployee(index: number) {
      this.employees.splice(index, 1)
    },
    setEditEmployee(employee: Employee) {
      const index = this.employees.findIndex((item: Employee)=> item.name === employee.name)
      this.index_edit = index
      this.employee_edit = { ...employee }
    },
    editEmployee(employee: Employee){
      this.employees[this.index_edit] = employee
    },
  }
})