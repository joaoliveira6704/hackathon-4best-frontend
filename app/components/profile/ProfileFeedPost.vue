<template>
  <UCard>
    <div class="flex gap-3 mb-4">
      <UAvatar :src="authorAvatar" size="sm" />
      <div>
        <p class="text-sm font-bold text-default">
          {{ content }}
        </p>
        <p class="text-xs text-neutral-500">
          {{ time }}
        </p>
      </div>
    </div>
    <div
      class="aspect-video bg-neutral-100 dark:bg-neutral-800 rounded mb-4 flex items-center justify-center border border-neutral-200 dark:border-neutral-700"
    >
      <UIcon name="i-lucide-image" class="w-10 h-10 text-neutral-300" />
    </div>
    <div
      class="flex gap-4 border-t border-neutral-100 dark:border-neutral-800 pt-3"
    >
      <UButton
        icon="i-lucide-heart"
        variant="ghost"
        color="neutral"
        size="sm"
      >
        12
      </UButton>
      <UButton
        icon="i-lucide-message-circle"
        variant="ghost"
        color="neutral"
        size="sm"
      >
        4
      </UButton>
    </div>
  </UCard>
</template>

<script setup lang="ts">
defineProps<{
  authorAvatar: string
  content: string
  time: string
}>()
</script>
