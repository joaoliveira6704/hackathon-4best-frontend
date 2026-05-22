<script setup lang="ts">
import type { Period, Range, Stat } from '~/types'

const props = defineProps<{
  period: Period
  range: Range
}>()

function formatCurrency(value: number): string {
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  })
}

const stats = [
  {
    title: 'ODS Concluídos',
    icon: 'i-lucide-sprout',
    value: 10,
    max: 17,
    percentage: 80
  },
  {
    title: 'Atividades Concluídas',
    icon: 'i-lucide-check',
    value: 24,
    max: 100,
    percentage: 24
  },
  {
    title: 'Comunidades',
    icon: 'i-lucide-users',
    value: 2
  }
]
</script>

<template>
  <UPageGrid class="lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-px">
    <UPageCard
      v-for="(stat, index) in stats"
      :key="index"
      :icon="stat.icon"
      :title="stat.title"
      to="/customers"
      variant="subtle"
      :ui="{
        container: 'gap-y-1.5',
        wrapper: 'items-start',
        leading:
          'p-2.5 rounded-full bg-primary/10 ring ring-inset ring-primary/25 flex-col',
        title: 'font-normal text-muted text-xs uppercase'
      }"
      class="lg:rounded-none first:rounded-l-lg last:rounded-r-lg hover:z-1"
    >
      <div class="flex items-center gap-2">
        <span class="text-2xl font-semibold text-highlighted">
          {{ stat.value }}
          {{ stat.max ? `de ${stat.max}` : "" }}
        </span>

        <UBadge
          v-if="stat.percentage"
          :color="stat.percentage > 0 ? 'success' : 'error'"
          variant="subtle"
          class="text-xs"
        >
          {{ stat.percentage ? stat.percentage + "%" : "" }}
        </UBadge>
      </div>
    </UPageCard>
  </UPageGrid>
</template>
