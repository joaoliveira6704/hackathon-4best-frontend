<template>
  <div class="space-y-4">
    <!-- Check if activities exist to avoid empty states -->
    <template v-if="activities && activities.length > 0">
      <UCard
        v-for="act in activities"
        :key="act.label"
        class="hover:border-primary transition-colors"
      >
        <div class="flex justify-between items-center">
          <div>
            <h4 class="font-medium text-default">{{ act.label }}</h4>
            <UBadge size="xs" variant="subtle" color="primary" class="mt-1">
              {{ act.ods }}
            </UBadge>
          </div>
          <UButton
            label="Concluir"
            size="sm"
            color="neutral"
            variant="soft"
            @click="$emit('complete', act)"
          />
        </div>
      </UCard>
    </template>

    <!-- Empty State (Optional) -->
    <p v-else class="text-sm text-gray-500 text-center">
      Nenhuma atividade encontrada.
    </p>

    <UButton
      label="Adicionar Nova Atividade"
      block
      variant="dashed"
      icon="i-lucide-plus"
      class="py-4"
      @click="$emit('add')"
    />
  </div>
</template>

<script setup lang="ts">
// Define props once
defineProps<{
  activities: Array<{ label: string; ods: string; status: string }>;
}>();

// Define emits so the parent can handle actions
defineEmits(["complete", "add"]);
</script>
