<template>
  <UContainer class="py-8">
    <ProfileHeader v-bind="userData" />

    <UPageGrid>
      <div class="space-y-6">
        <ProfileStats :stats="statsData" />

        <UCard>
          <template #header>
            <h3 class="font-semibold">
              Badges
            </h3>
          </template>
          <div class="flex flex-wrap gap-2">
            <UBadge
              v-for="b in badges"
              :key="b.title"
              :color="b.color"
              variant="subtle"
            >
              <UIcon :name="b.icon" class="mr-1" /> {{ b.title }}
            </UBadge>
          </div>
        </UCard>
      </div>

      <div class="md:col-span-2">
        <UTabs :items="tabs">
          <template #item="{ item }">
            <div class="pt-6">
              <ActivityList
                v-if="item.key === 'list'"
                :activities="activitiesData"
              />
              <div v-else-if="item.key === 'feed'" class="space-y-4">
                <FeedPost
                  v-for="i in 3"
                  :key="i"
                  :author-avatar="userData.avatar"
                  content="Mais um passo para o ODS 13!"
                  time="Há 2 horas"
                />
              </div>
            </div>
          </template>
        </UTabs>
      </div>
    </UPageGrid>
  </UContainer>
</template>

<script setup lang="ts">
const tabs = [
  { key: 'list', label: 'Bucket List', icon: 'i-lucide-list-checks' },
  { key: 'feed', label: 'Feed Pessoal', icon: 'i-lucide-layout-grid' }
]

// Mock data (em produção viria de uma API/useFetch)
const userData = {
  name: 'Ana Silva',
  handle: '@ana_sustentavel',
  bio: '...',
  avatar: '...'
}
const statsData = [
  /* ... */
]
const activitiesData = [
  /* ... */
]
const badges = [
  /* ... */
]
</script>
