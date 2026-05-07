<script setup lang="ts">
const { globalFeed, communities } = useAppData();
import PostCard from "~/components/posts/PostCard.vue";

import { sub } from "date-fns";
import type { DropdownMenuItem } from "@nuxt/ui";
import type { Period, Range } from "~/types";

const { isNotificationsSlideoverOpen } = useDashboard();

const range = shallowRef<Range>({
  start: sub(new Date(), { days: 14 }),
  end: new Date(),
});
const period = ref<Period>("daily");
const isRefreshing = ref(false);

async function handleRefresh() {
  isRefreshing.value = true;
  await new Promise((resolve) => setTimeout(resolve, 1500));
  isRefreshing.value = false;

  useToast().add({
    title: "Feed atualizado",
    icon: "i-lucide-refresh-cw",
    color: "primary",
  });
}

const suggestedUsers = [
  {
    name: "Sofia Rocha",
    avatar: "https://i.pravatar.cc/150?u=sofia",
    handle: "@sofia_eco",
  },
  {
    name: "João Pires",
    avatar: "https://i.pravatar.cc/150?u=joaop",
    handle: "@jpires_ods",
  },
  {
    name: "Beatriz Luz",
    avatar: "https://i.pravatar.cc/150?u=bea",
    handle: "@bealuz",
  },
];

// Pegamos as primeiras 3 comunidades como sugestão
const suggestedCommunities = computed(() => communities.value.slice(0, 3));
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
          <UButton icon="i-lucide-plus" color="primary" class="rounded-full" />
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
                    <span class="text-xs text-gray-500"
                      >{{ community.membersCount }} membros</span
                    >
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
</template>
