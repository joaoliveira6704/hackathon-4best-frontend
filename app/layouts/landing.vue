<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items = ref<NavigationMenuItem[]>([
  {
    label: "Home",
    icon: "i-lucide-house", // O módulo @nuxt/icon é automático no Nuxt UI
    to: "/",
  },
]);
</script>

<template>
  <header
    class="sticky top-0 z-50 w-full border-b border-default bg-default/80 backdrop-blur"
  >
    <UContainer>
      <nav
        class="flex h-(--ui-header-height) items-center justify-between gap-4"
      >
        <div class="flex items-center gap-2">
          <img src="/logo.svg" class="h-8 w-auto" alt="Logo" />
        </div>

        <UNavigationMenu :items="items" variant="pill" class="hidden md:flex" />

        <div class="flex items-center gap-2">
          <UColorModeButton />
          <UButton
            label="Começar"
            @click="$router.push('/feed')"
            color="primary"
            class="hidden sm:flex"
          />
        </div>
      </nav>
    </UContainer>
  </header>

  <UMain>
    <slot />
  </UMain>
</template>
