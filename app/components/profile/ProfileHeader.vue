<template>
  <div class="flex flex-col md:flex-row gap-6 items-center mb-8">
    <UAvatar
      :src="avatar"
      size="3xl"
      :alt="name"
      class="ring-4 ring-primary"
    />
    <div class="flex-1 text-center md:text-left">
      <h1 class="text-3xl font-bold text-default">
        {{ name }}
      </h1>
      <p class="text-neutral-500">
        {{ handle }}
      </p>
      <p class="mt-2 max-w-xl text-neutral-600 dark:text-neutral-400">
        {{ bio }}
      </p>
    </div>
    <div class="flex gap-2">
      <UButton label="Editar Perfil" variant="outline" icon="i-lucide-pencil" />
      <UButton icon="i-lucide-share-2" variant="ghost" color="neutral" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  handle: string
  bio: string
  avatar: string
}>()
</script>
