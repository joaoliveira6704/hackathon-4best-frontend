<script setup lang="ts">
import PostCard from '~/components/posts/PostCard.vue'

import { sub } from 'date-fns'
import type { DropdownMenuItem } from '@nuxt/ui'
import type { Period, Range } from '~/types'

const { globalFeed, communities } = useAppData()

const { isNotificationsSlideoverOpen } = useDashboard()

const range = shallowRef<Range>({
  start: sub(new Date(), { days: 14 }),
  end: new Date()
})
const period = ref<Period>('daily')
const isRefreshing = ref(false)
const isPostModalOpen = ref(false)
async function handleRefresh() {
  isRefreshing.value = true
  await new Promise(resolve => setTimeout(resolve, 1500))
  isRefreshing.value = false

  useToast().add({
    title: 'Feed atualizado',
    icon: 'i-lucide-refresh-cw',
    color: 'primary'
  })
}

const suggestedUsers = [
  {
    name: 'Sofia Rocha',
    avatar: 'https://i.pravatar.cc/150?u=sofia',
    handle: '@sofia_eco'
  },
  {
    name: 'João Pires',
    avatar: 'https://i.pravatar.cc/150?u=joaop',
    handle: '@jpires_ods'
  },
  {
    name: 'Beatriz Luz',
    avatar: 'https://i.pravatar.cc/150?u=bea',
    handle: '@bealuz'
  }
]

// Pegamos as primeiras 3 comunidades como sugestão
const suggestedCommunities = computed(() => communities.value.slice(0, 3))
</script>

<template>
  <UDashboardPanel id="home">
    <template #header>
      <UDashboardNavbar title="Feed Comunitário">
        <template #left>
          <UDashboardNavbarToggle />
        </template>
        <template #right>
          <UButton
            icon="i-lucide-refresh-cw"
            color="neutral"
            variant="ghost"
            :loading="isRefreshing"
            @click="handleRefresh"
          />
          <UButton
            icon="i-lucide-plus"
            color="primary"
            class="rounded-full"
            @click="isPostModalOpen = true"
          />
        </template>
      </UDashboardNavbar>
    </template>

    <template #body>
      <!-- Layout Principal: Grid com 12 colunas -->
      <div class="grid grid-cols-12 gap-8 p-6 overflow-y-auto">
        <!-- Coluna Esquerda/Centro: Feed (Ocupa 8 colunas em desktop, 12 em mobile) -->
        <div class="col-span-12 lg:col-span-8 flex flex-col gap-6">
          <div v-if="isRefreshing" class="flex justify-center py-4">
            <UIcon
              name="i-lucide-loader-2"
              class="animate-spin size-6 text-primary"
            />
          </div>

          <HomeStats :period="period" :range="range" />

          <PostCard
            v-for="post in globalFeed"
            :key="post.id"
            v-bind="post"
            :username="post.user.name"
            :avatar="post.user.avatar"
            :time="post.createdAt"
            :content="post.text"
            :post-image="post.image"
            :ods="post.odsInfo"
          />
        </div>

        <!-- Coluna Direita: Sugestões (Ocupa 4 colunas, visível apenas em LG+) -->
        <aside
          class="hidden lg:flex lg:col-span-4 flex-col gap-8 sticky top-0 h-fit"
        >
          <!-- Seção de Utilizadores Sugeridos -->
          <section>
            <h3
              class="text-sm font-semibold text-gray-500 mb-4 px-2 uppercase tracking-wider"
            >
              Utilizadores Sugeridos
            </h3>
            <div class="flex flex-col gap-4 p-4 rounded-xl">
              <div
                v-for="user in suggestedUsers"
                :key="user.handle"
                class="flex items-center justify-between gap-3"
              >
                <div class="flex items-center gap-3">
                  <UAvatar :src="user.avatar" :alt="user.name" size="sm" />
                  <div class="flex flex-col">
                    <span class="text-sm font-medium leading-none">{{
                      user.name
                    }}</span>
                    <span class="text-xs text-gray-500">{{ user.handle }}</span>
                  </div>
                </div>
                <UButton
                  label="Seguir"
                  variant="subtle"
                  size="xs"
                  color="primary"
                />
              </div>
              <UButton
                label="Ver todos"
                variant="link"
                size="xs"
                color="neutral"
                class="px-0 h-auto"
              />
            </div>
          </section>

          <!-- Seção de Comunidades Sugeridas -->
          <section>
            <h3
              class="text-sm font-semibold text-gray-500 mb-4 px-2 uppercase tracking-wider"
            >
              Comunidades para aderir
            </h3>
            <div class="flex flex-col gap-4 p-4 rounded-xl">
              <div
                v-for="community in suggestedCommunities"
                :key="community.id"
                class="flex items-center justify-between gap-3"
              >
                <div class="flex items-center gap-3">
                  <UAvatar
                    :src="community.image"
                    :alt="community.name"
                    size="sm"
                    icon="i-lucide-users"
                  />
                  <div class="flex flex-col">
                    <span class="text-sm font-medium leading-none">{{
                      community.name
                    }}</span>
                    <span class="text-xs text-gray-500">{{ community.membersCount }} membros</span>
                  </div>
                </div>
                <UButton
                  icon="i-lucide-plus"
                  variant="ghost"
                  size="xs"
                  color="neutral"
                />
              </div>
              <UButton
                label="Explorar mais"
                variant="link"
                size="xs"
                color="neutral"
                class="px-0 h-auto"
                @click="$router.push('/communities')"
              />
            </div>
          </section>
        </aside>
      </div>
    </template>
  </UDashboardPanel>
  <UModal v-model:open="isPostModalOpen">
    <template #content>
      <UCard>
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold">
              Nova publicação
            </h3>
            <UButton
              color="gray"
              variant="ghost"
              icon="i-lucide-x"
              @click="isPostModalOpen = false"
            />
          </div>
        </template>

        <div class="space-y-4">
          <!-- Autor -->
          <div class="flex items-center gap-2">
            <UAvatar src="https://i.pravatar.cc/150?u=ana" size="sm" />
            <span class="text-sm font-medium">Ana Silva</span>
          </div>

          <!-- ODS pré-selecionado -->
          <div>
            <label class="text-sm font-medium mb-1 block">ODS relacionado</label>
            <UBadge
              style="background: #3f7e44; color: #d1f0d4"
              icon="i-lucide-leaf"
            >
              ODS 13 – Ação climática
            </UBadge>
          </div>

          <!-- Imagem mockada -->
          <div>
            <label class="text-sm font-medium mb-1 block">Imagem</label>
            <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800"
              class="w-full h-40 object-cover rounded-lg"
            >
          </div>

          <!-- Descrição mockada -->
          <div class="w-full">
            <label class="text-sm font-medium mb-1 block">Descrição</label>
            <UTextarea
              class="w-full"
              model-value="Plantámos hoje 30 árvores autóctones numa área ardida da Serra da Estrela. Pequena ação, grande impacto!"
              :rows="3"
              readonly
            />
          </div>
        </div>

        <template #footer>
          <div class="flex gap-2 justify-end">
            <UButton
              label="Cancelar"
              color="neutral"
              variant="ghost"
              @click="isPostModalOpen = false"
            />
            <UButton
              label="Publicar"
              color="primary"
              icon="i-lucide-send"
              @click="isPostModalOpen = false"
            />
          </div>
        </template>
      </UCard>
    </template>
  </UModal>
</template>
