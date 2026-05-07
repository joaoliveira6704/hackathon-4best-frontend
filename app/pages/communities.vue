<script setup lang="ts">
const { communities } = useAppData();
const search = ref("");

const filteredCommunities = computed(() => {
  // Adiciona o .value aqui para aceder ao array dentro da Ref do useStorage
  if (!communities.value) return [];

  return communities.value.filter((c) =>
    c.name.toLowerCase().includes(search.value.toLowerCase()),
  );
});
</script>

<template>
  <UDashboardPanel id="communities">
    <template #header>
      <UDashboardNavbar title="Comunidades">
        <template #right>
          <UInput
            v-model="search"
            icon="i-lucide-search"
            placeholder="Procurar comunidade..."
            class="hidden md:block w-64"
          />
          <UButton
            label="Criar Comunidade"
            icon="i-lucide-plus"
            color="primary"
          />
        </template>
      </UDashboardNavbar>
    </template>

    <template #body>
      <UPageBody class="p-6">
        <section class="mb-10">
          <UCard
            class="bg-gradient-to-r from-primary/10 to-blue-500/10 border-none"
          >
            <div class="flex flex-col md:flex-row items-center gap-6">
              <div class="flex-1">
                <h2 class="text-2xl font-bold text-default italic">
                  Encontra a tua causa
                </h2>
                <p class="text-neutral-500 mt-2">
                  Junta-te a grupos locais e globais que estão a transformar as
                  metas dos ODS em ações reais.
                </p>
              </div>
              <UAvatarGroup size="sm" :max="3">
                <UAvatar src="https://i.pravatar.cc/150?u=1" />
                <UAvatar src="https://i.pravatar.cc/150?u=2" />
                <UAvatar src="https://i.pravatar.cc/150?u=3" />
                <UAvatar src="https://i.pravatar.cc/150?u=4" />
              </UAvatarGroup>
            </div>
          </UCard>
        </section>

        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <UCard
            v-for="community in filteredCommunities"
            :key="community.id"
            class="flex flex-col overflow-hidden hover:ring-2 hover:ring-primary transition-all group"
          >
            <div class="-mx-4 -mt-4 relative aspect-video overflow-hidden">
              <img
                :src="community.image"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div class="absolute top-2 right-2 flex gap-1">
                <UPopover
                  v-for="item in community.ods"
                  :key="item.id"
                  mode="hover"
                >
                  <UBadge
                    :style="{ backgroundColor: item.color }"
                    class="text-white font-bold"
                  >
                    {{ item.id }}
                  </UBadge>
                  <template #content>
                    <div class="p-2">
                      <img :src="`/ODS-${item.id}.svg`" class="w-16 h-16" />
                    </div>
                  </template>
                </UPopover>
              </div>
            </div>

            <div class="mt-4 flex-1">
              <h3 class="text-lg font-bold text-default">
                {{ community.name }}
              </h3>
              <div
                class="flex items-center gap-2 text-xs text-neutral-500 mt-1"
              >
                <UIcon name="i-lucide-users" />
                <span>{{ community.members }} membros ativos</span>
              </div>
              <p
                class="text-sm text-neutral-600 dark:text-neutral-400 mt-3 line-clamp-2"
              >
                {{ community.description }}
              </p>
            </div>

            <template #footer>
              <div class="flex items-center justify-between">
                <UButton
                  label="Ver Detalhes"
                  variant="ghost"
                  color="neutral"
                  size="sm"
                />
                <UButton
                  label="Aderir"
                  color="primary"
                  variant="solid"
                  size="sm"
                  icon="i-lucide-user-plus"
                />
              </div>
            </template>
          </UCard>
        </div>
      </UPageBody>
    </template>
  </UDashboardPanel>
</template>
