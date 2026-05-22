<template>
  <div class="space-y-4">
    <template v-if="activities && activities.length > 0">
      <UCard
        v-for="(act, index) in activities"
        :key="index"
        class="hover:border-primary transition-colors"
      >
        <div class="flex justify-between items-center">
          <div>
            <h4 class="font-medium text-default">
              {{ act.label }}
            </h4>
            <UBadge
              size="xs"
              variant="subtle"
              color="primary"
              class="mt-1"
            >
              ODS {{ act.ods }}
            </UBadge>
          </div>
          <UButton
            v-if="act.status !== 'Concluída'"
            label="Concluir"
            size="sm"
            color="neutral"
            variant="soft"
            @click="completeActivity(index)"
          />
          <UBadge v-else color="green" variant="subtle">
            Concluída
          </UBadge>
        </div>
      </UCard>
    </template>
    <div
      v-else
      class="p-8 text-center border-2 border-dashed border-gray-200 rounded-lg"
    >
      <p class="text-gray-500">
        Nenhuma atividade pendente.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activities = ref([
  { label: 'Plantar 5 árvores nativas', ods: '15', status: 'Em curso' },
  { label: 'Reduzir plástico descartável', ods: '12', status: 'Pendente' },
  { label: 'Apoiar uma horta comunitária', ods: '2', status: 'Concluída' },
  { label: 'Workshop de reciclagem', ods: '12', status: 'Concluída' },
  { label: 'Organizar limpeza de praia', ods: '14', status: 'Em curso' },
  { label: 'Reduzir consumo de água', ods: '6', status: 'Pendente' }
])

const completeActivity = (index: number) => {
  activities.value[index].status = 'Concluída'
}

defineEmits(['complete', 'add'])
</script>
