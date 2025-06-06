<script setup>
const props = defineProps(['name', 'value', 'sortDirection', 'changeSort']);
</script>

<template>
    <div class="font-bold text-blue-800" @click="changeSort(value, sortDirection ?? 'asc')">
        {{ name }}
    </div>
</template>