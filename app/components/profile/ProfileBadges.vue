<!-- ProfileBadges.vue -->
<script setup lang="ts">
// Certifica-te que o tipo aceita o que estás a enviar
defineProps<{
  badges: Array<{ title: string; icon: string; color?: string }>;
}>();
</script>

<template>
  <UCard v-if="badges && badges.length">
    <template #header>
      <h3 class="font-semibold text-sm">Conquistas & Badges</h3>
    </template>
    <div class="flex flex-wrap gap-2">
      <UBadge
        v-for="b in badges"
        :key="b.title"
        class="border"
        size="md"
        variant="outline"
        :color="(b.color as any) || 'primary'"
      >
        <UIcon :name="b.icon" class="mr-1 w-4 h-4" />
        {{ b.title }}
      </UBadge>
    </div>
  </UCard>
  <!-- Feedback visual se estiver vazio -->
  <UCard v-else>
    <p class="text-sm text-gray-500 text-center italic">
      Ainda sem conquistas.
    </p>
  </UCard>
</template>
