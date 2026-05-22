<script setup lang="ts">
const { userData } = useAppData()
console.log('Badges:', userData.value.badges)
const tabs = [
  { key: 'list', label: 'Bucket List', icon: 'i-lucide-list-checks' },
  { key: 'feed', label: 'O meu Feed', icon: 'i-lucide-layout-grid' }
]

const statsData = [
  { label: 'Atividades', value: '24', icon: 'i-lucide-check-circle' },
  { label: 'Impacto ODS', value: '7/17', icon: 'i-lucide-globe' }
]

const badges = [
  { title: 'Guardião', icon: 'i-lucide-shield', color: 'blue' as const },
  { title: 'Eco-Hero', icon: 'i-lucide-leaf', color: 'green' as const }
]

const activities = ref([
  { label: 'Reflorestamento', ods: 'ODS 15', status: 'pending' },
  { label: 'Limpeza de Praia', ods: 'ODS 14', status: 'pending' }
])
</script>

<template>
  <UContainer class="py-8 overflow-y-auto">
    <UPage>
      <UPageBody class="flex flex-col gap-2">
        <ProfileHeader v-bind="userData" />

        <div class="flex flex-col gap-4">
          <ProfileStats />
          <ProfileBadges :badges="badges" />
        </div>

        <ProfileCommunities orientation="horizontal" />

        <UCard class="w-full">
          <ProfileActivityList />
        </UCard>
        <UCard class="w-full">
          <FeedPost
            v-for="i in 3"
            :key="i"
            :author-avatar="userData.avatar"
            content="A trabalhar no ODS 12: Consumo Responsável! ♻️"
            time="Há 2 horas"
          />
        </UCard>
      </UPageBody>
    </UPage>
  </UContainer>
</template>
