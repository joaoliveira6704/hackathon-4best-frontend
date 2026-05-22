<template>
  <UCard>
    <template #header>
      <h3 class="font-semibold text-sm text-neutral-900 dark:text-white">
        Minhas Comunidades
      </h3>
    </template>
    <ul class="space-y-3">
      <li
        v-for="com in communities"
        :key="com.name"
        class="flex items-center gap-3 bg-neutral-100 dark:bg-neutral-800 w-fit px-3 py-2 rounded-xl hover:bg-neutral-200 cursor-pointer"
      >
        <UAvatar :src="com.img" size="xs" />
        <span class="text-sm font-medium">{{ com.name }}</span>
      </li>
    </ul>
  </UCard>
</template>

<script setup lang="ts">
const communities = [
  {
    name: 'Eco-Escolas',
    img: 'https://www.dge.mec.pt/sites/default/files/pictures/logo_ee_s.png'
  },
  { name: 'ODS Local Porto', img: 'https://placehold.co/40x40' }
]
</script>
