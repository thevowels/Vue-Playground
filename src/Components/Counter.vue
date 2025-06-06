<script setup>
import {ref} from "vue";
import { Button } from "@/components/ui/button"
const counter = ref(0);

</script>

<template>
    <div class="flex items-center justify-center">
        <div class="w-96 py-24 bg-green-300 text-center">
            <div>
             {{ counter }}
            </div>
            <div>
                <Button @click="counter++" >
                    Tick
                </Button>
            </div>

        </div>
    </div>
    
</template>