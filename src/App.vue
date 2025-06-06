<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import AppSidebar from '@/Components/AppSidebar.vue'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

import { Button } from '@/components/ui/button'

</script>

<template>
      <main class="w-full">
          <header>
            <div class="flex justify-end items-center bg-slate-800  text-white p-4">
              <NavigationMenu class="text-xl font-bold " >
                <NavigationMenuList class="flex items-center gap-8">
                  <NavigationMenuItem>
                          <RouterLink to="/" class="block p-2">Home</RouterLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                            <RouterLink to="/about">About</RouterLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                            <RouterLink to="/components">Comopnents</RouterLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                            <RouterLink to="/temp">Temp</RouterLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </header>
      <RouterView />
    </main>

</template>