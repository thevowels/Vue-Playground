<script setup>
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarMenuSub
} from "@/components/ui/sidebar"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'



import { Calendar, Home, Inbox, Search, Settings, User2, ChevronUp, ChevronDown, Aperture, Component } from "lucide-vue-next"
import { RouterLink } from 'vue-router'

const items = [
  {
    title: "Counter",
    url: "/components/counter",
    icon: Aperture,
  },
  {
    title: "Inbox",
    url: "/comopnents/abcd",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

</script>

<template>
  <Sidebar>
    <SidebarHeader />
    <SidebarContent>
      <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
            <SidebarMenu>
            <Collapsible class="group/collapsible">
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <CollapsibleTrigger>
                    <Component/>
                        Components
                    <ChevronDown class="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                  </CollapsibleTrigger>
                </SidebarMenuButton>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuItem v-for="item in items" :key="item.title">
                          <SidebarMenuButton asChild>
                                <RouterLink :to="item.url" class="block p-2">
                                  <component :is="item.icon" />
                                  <span>{{item.title}}</span>
                                </RouterLink>
                          </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
            </SidebarMenu>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                        <RouterLink to="/temp" class="block p-2">
                          <component :is="Component" />
                          <span>Temp</span>
                        </RouterLink>
                  </SidebarMenuButton>

                </SidebarMenuItem>
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
      <SidebarGroup />
    </SidebarContent>
    <SidebarFooter />
  </Sidebar>
</template>
