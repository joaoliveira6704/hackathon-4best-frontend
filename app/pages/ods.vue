<template>
  <UContainer class="py-10 h-full flex flex-col">
    <UPageHeader
      title="Objetivos de Desenvolvimento Sustentável"
      description="Os 17 objetivos globais para transformar o nosso mundo até 2030."
      icon="i-lucide-globe"
    />

    <UPageBody class="flex-1 w-full h-0 overflow-y-auto px-3 custom-scrollbar">
      <section class="mb-12">
        <UCard variant="soft" color="primary">
          <p class="text-lg leading-relaxed">
            Os ODS são um apelo global à ação para acabar com a pobreza,
            proteger o meio ambiente e o clima e garantir que as pessoas...
          </p>
        </UCard>
      </section>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <UCard
          v-for="item in odsList"
          :key="item.id"
          class="hover:ring-2 hover:ring-primary transition-all overflow-hidden flex flex-col"
        >
          <template #header>
            <div class="flex items-center gap-3">
              <img
                :src="`/ODS-${item.id}.svg`"
                :alt="item.title"
                class="w-16 h-16 shrink-0 rounded-md object-cover"
              >
              <h3 class="font-bold text-default line-clamp-3">
                {{ item.title }}
              </h3>
            </div>
          </template>

          <p
            class="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-3"
          >
            {{ item.description }}
          </p>

          <template #footer>
            <!-- Ação de clique adicionada aqui -->
            <UButton
              label="Ver Atividades"
              variant="ghost"
              color="neutral"
              icon="i-lucide-eye"
              trailing
              size="sm"
              block
              @click="openOdsDetails(item)"
            />
          </template>
        </UCard>
      </div>

      <!-- Modal de Detalhes -->
      <!-- Modal de Detalhes -->
      <UModal v-model:open="isModalOpen">
        <template #content>
          <UCard v-if="selectedOds">
            <template #header>
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <UBadge
                    :style="{ backgroundColor: selectedOds.color }"
                    size="lg"
                  >
                    {{ selectedOds.id }}
                  </UBadge>
                  <h3 class="text-base font-semibold leading-6">
                    {{ selectedOds.title }}
                  </h3>
                </div>
                <UButton
                  color="gray"
                  variant="ghost"
                  icon="i-lucide-x"
                  @click="isModalOpen = false"
                />
              </div>
            </template>

            <div class="space-y-4">
              <p class="text-sm text-neutral-500">
                {{ selectedOds.description }}
              </p>

              <div class="mt-4">
                <h4 class="font-bold mb-2 flex items-center gap-2">
                  <UIcon name="i-lucide-clipboard-list" />
                  Atividades Sugeridas:
                </h4>
                <ul class="space-y-2">
                  <li
                    v-for="(task, index) in selectedOds.tasks"
                    :key="index"
                    class="flex gap-2 p-2 rounded-lg bg-neutral-50 dark:bg-neutral-800 text-sm"
                  >
                    <UIcon
                      name="i-lucide-check-circle-2"
                      class="text-primary shrink-0 mt-0.5"
                    />
                    {{ task }}
                  </li>
                </ul>
              </div>
            </div>

            <template #footer>
              <UButton
                label="Adicionar à Bucket List"
                color="primary"
                block
                icon="i-lucide-plus"
              />
            </template>
          </UCard>
        </template>
      </UModal>

      <!-- Seção de Perfil Omitida para brevidade... -->
    </UPageBody>
  </UContainer>
</template>

<script setup lang="ts">
import { useAppData } from '~/composables/useAppData'

// Importe o ref se o seu Nuxt não estiver configurado com auto-import
// import { ref } from 'vue'

const { odsList } = useAppData()

const isModalOpen = ref(false)
const selectedOds = ref<any>(null) // Use <any> ou defina uma Interface para evitar erros de tipagem

// Renomeado para coincidir com o template
const openOdsDetails = (ods: any) => {
  selectedOds.value = ods
  isModalOpen.value = true
}
</script>

<style scoped>
/* Opcional: Personalização da scrollbar para ficar mais elegante */
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #e2e8f0;
  border-radius: 10px;
}
.dark .custom-scrollbar::-webkit-scrollbar-thumb {
  background: #334155;
}
</style>
