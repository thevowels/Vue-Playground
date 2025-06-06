<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import Counter from '../Components/Counter.vue'
import DataTable from '@/Components/exercise/DataTable.vue';
import UserTable from '@/Components/exercise/UserTable.vue';
</script>

<template>
  <main>
    <div class="flex flex-col items-center pt-8">
      <div class="max-w-2xl">
        <UserTable/>
      </div>
    </div>
  </main>
</template>
