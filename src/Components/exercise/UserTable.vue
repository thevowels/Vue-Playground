<script setup>

import {ref, watchEffect } from "vue";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import ColumnHeader from "./ColumnHeader.vue";
const users = ref([])
const sortKey = ref('firstName')
const sortDirection = ref('asc')

const fetchUsers = async () => {
  const res = await fetch(`https://dummyjson.com/users?sortBy=${sortKey.value}&order=${sortDirection.value}&limit=10`)
  const data = await res.json()
  users.value = data.users
}

const changeSort = (key, order) => {
            sortDirection.value = order
            sortKey.value = key
}

watchEffect(fetchUsers);


</script>

<template>
    
    <div class="p-4">
        <h2 class="text-xl font-bold mb-4">User List</h2>
        <table class="w-96 table-auto border border-gray-300">
        <thead>
            <tr class="bg-gray-100">
            <th class="p-2 cursor-pointer" >
                <ColumnHeader :change-sort="changeSort" :sort-direction="'asc'" value="firstName" name="firstName" :current="sortKey"/>
            </th>
            <th class="p-2 cursor-pointer">
                <ColumnHeader :change-sort="changeSort" :sort-direction="'asc'" value="lastName" name="lastName" :current="sortKey"/>

            </th>
            <th class="p-2 cursor-pointer">
               <ColumnHeader :change-sort="changeSort" :sort-direction="'asc'" value="age" name="Age" :current="sortKey"/>
            </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in users" :key="user.id" class="border-t">
                <td class="p-2">{{ user.firstName }}</td>
                <td class="p-2">{{ user.lastName }}</td>
                <td class="p-2">{{ user.age }}</td>
            </tr>
        </tbody>
        </table>
    </div>
    <div>
          <Table>
    <TableCaption>Users list fetched frmo dummyjson.</TableCaption>
    <TableHeader>
      <TableRow class="">
        <TableHead >
          First Name
        </TableHead>
        <TableHead>Last Name</TableHead>
        <TableHead >
          Age
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="user in users" :key="user.id">
        <TableCell >
          {{ user.firstName }}
        </TableCell>
        <TableCell >{{ user.lastName }}</TableCell>
        <TableCell >
          {{ user.age }}
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>

    </div>



</template>