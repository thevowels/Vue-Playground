<script setup>
import { ref } from "vue";
import { ArrowBigDown, ArrowDown, ArrowUp } from 'lucide-vue-next';
const props = defineProps(['name', 'value', 'sortDirection', 'changeSort', 'current']);

const sortDir = ref(props.sortDirection ?? 'asc');

const doSort = () => {
    sortDir.value = (sortDir.value == 'asc') ? 'desc': 'asc';
    props.changeSort(props.value, sortDir.value);
}

</script>

<template>
    <div class="font-bold text-blue-800 flex" 
    @click="doSort"
     >
        <h1>{{name}}</h1>
        <div v-if="current == value">
            <ArrowDown v-if="!sortDir || sortDir == 'asc'"/>
            <ArrowUp v-if="sortDir && sortDir == 'desc' "/>
        </div>
    </div>
</template>