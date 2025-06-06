<script setup>
import AppSidebar from '@/Components/AppSidebar.vue'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'

</script>

<template>
    <SidebarProvider>
    <AppSidebar />
    <SidebarTrigger />
      <main class="w-full">
        <div class="flex items-center justify-center pt-4 text-lg font-semibold">
            Your selected component will be rendered below
        </div>
        <RouterView />

      </main>

    </SidebarProvider>
</template>