<script setup lang="ts">
definePageMeta({
  layout: 'landing'
})

const router = useRouter()

const stats = [
  { value: '17', label: 'Objetivos Globais', icon: 'i-lucide-globe-2' },
  { value: '10k+', label: 'Utilizadores Ativos', icon: 'i-lucide-users' },
  { value: '50k+', label: 'Atividades Completadas', icon: 'i-lucide-check-circle-2' }
]

const steps = [
  {
    step: '01',
    title: 'Escolha os seus ODS',
    description: 'Explore os 17 Objetivos de Desenvolvimento Sustentável e encontre os que mais se alinham com os seus valores.',
    icon: 'i-lucide-target'
  },
  {
    step: '02',
    title: 'Crie a sua Bucket List',
    description: 'Adicione atividades concretas à sua lista pessoal e organize os seus compromissos com o mundo.',
    icon: 'i-lucide-list-checks'
  },
  {
    step: '03',
    title: 'Partilhe o seu impacto',
    description: 'Registe conquistas, inspire a comunidade e mostre que uma pessoa pode fazer a diferença.',
    icon: 'i-lucide-share-2'
  }
]

const odsList = [
  { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 },
  { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }, { id: 11 }, { id: 12 },
  { id: 13 }, { id: 14 }, { id: 15 }, { id: 16 }, { id: 17 }
]
</script>

<template>
  <UPage>
    <!-- ─── Hero ─── -->
    <section class="relative overflow-hidden py-16 sm:py-24">
      <!-- Background gradient -->
      <div
        class="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-green-50 via-transparent to-transparent dark:from-green-950/30"
      />
      <!-- Decorative blob -->
      <div
        class="pointer-events-none absolute -top-32 -right-32 -z-10 h-96 w-96 rounded-full bg-green-400/10 blur-3xl dark:bg-green-500/10"
      />

      <UContainer>
        <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <!-- Text side -->
          <div class="flex flex-col gap-6">
            <UBadge
              color="primary"
              variant="subtle"
              class="w-fit"
              icon="i-lucide-leaf"
            >
              Agenda 2030 · ODS
            </UBadge>

            <h1
              class="text-4xl font-extrabold leading-tight tracking-tight text-default sm:text-5xl"
            >
              Crie a sua
              <span class="text-primary"> Bucket List</span>
              para um Futuro Sustentável
            </h1>

            <p class="text-lg text-muted max-w-lg">
              Transforme as Metas Globais em ações concretas. Escolha
              atividades ligadas aos ODS e acompanhe o seu impacto no mundo.
            </p>

            <div class="flex flex-wrap gap-3">
              <UButton
                label="Começar Agora"
                color="primary"
                size="lg"
                icon="i-lucide-rocket"
                @click="router.push('/feed')"
              />
              <UButton
                label="Ver os 17 ODS"
                color="neutral"
                variant="ghost"
                size="lg"
                icon="i-lucide-globe-2"
                @click="router.push('/ods')"
              />
            </div>

            <!-- Mini trust bar -->
            <div class="flex items-center gap-3 pt-2">
              <div class="flex -space-x-2">
                <img
                  v-for="n in 4"
                  :key="n"
                  :src="`https://i.pravatar.cc/40?img=${n + 10}`"
                  class="h-8 w-8 rounded-full ring-2 ring-default object-cover"
                  alt="avatar"
                >
              </div>
              <p class="text-sm text-muted">
                <span class="font-semibold text-default">+10 000</span>
                pessoas já estão a agir
              </p>
            </div>
          </div>

          <!-- Visual side: ODS grid mosaic -->
          <div class="relative flex justify-center lg:justify-end">
            <div class="grid grid-cols-6 gap-2 max-w-xs sm:max-w-sm">
              <img
                v-for="ods in odsList"
                :key="ods.id"
                :src="`/ODS-${ods.id}.svg`"
                :alt="`ODS ${ods.id}`"
                class="aspect-square w-full rounded-lg shadow-sm hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer"
                @click="router.push('/ods')"
              >
              <!-- 18th cell: signo / brand -->
              <div
                class="aspect-square rounded-lg bg-primary/10 flex items-center justify-center p-1 cursor-pointer hover:bg-primary/20 transition-colors"
                @click="router.push('/ods')"
              >
                <img src="/signo.svg" alt="ODS signo" class="h-full w-full object-contain">
              </div>
            </div>

            <!-- Floating badge -->
            <div
              class="absolute -bottom-4 -left-4 hidden sm:flex items-center gap-2 bg-default rounded-xl shadow-lg border border-default px-3 py-2"
            >
              <UIcon name="i-lucide-trending-up" class="text-primary size-5" />
              <div class="flex flex-col leading-tight">
                <span class="text-xs font-bold text-default">+2 300</span>
                <span class="text-xs text-muted">esta semana</span>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- ─── Stats bar ─── -->
    <section class="border-y border-default bg-elevated/50">
      <UContainer>
        <div class="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-default">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="flex items-center justify-center gap-4 py-8 px-6"
          >
            <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <UIcon :name="stat.icon" class="size-6 text-primary" />
            </div>
            <div>
              <p class="text-3xl font-extrabold text-default">
                {{ stat.value }}
              </p>
              <p class="text-sm text-muted">
                {{ stat.label }}
              </p>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- ─── ODS Grid ─── -->
    <UPageSection
      id="ods"
      title="Os 17 Objetivos de Desenvolvimento Sustentável"
      description="Cada objetivo representa um compromisso global. Escolha os seus e comece a agir hoje."
    >
      <div class="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-9 gap-3 sm:gap-4">
        <div
          v-for="ods in odsList"
          :key="ods.id"
          class="group cursor-pointer"
          @click="router.push('/ods')"
        >
          <img
            :src="`/ODS-${ods.id}.svg`"
            :alt="`ODS ${ods.id}`"
            class="w-full aspect-square rounded-xl shadow-sm group-hover:shadow-lg group-hover:scale-105 transition-all duration-200"
          >
        </div>
      </div>

      <div class="mt-10 flex justify-center">
        <UButton
          label="Explorar todos os ODS"
          color="primary"
          variant="subtle"
          size="lg"
          icon="i-lucide-arrow-right"
          trailing
          @click="router.push('/ods')"
        />
      </div>
    </UPageSection>

    <!-- ─── How it works ─── -->
    <section class="bg-elevated/30 py-16 sm:py-24">
      <UContainer>
        <div class="text-center mb-12">
          <UBadge color="primary" variant="subtle" class="mb-3">
            Como funciona
          </UBadge>
          <h2 class="text-3xl font-bold text-default mb-3">
            Em 3 passos simples
          </h2>
          <p class="text-muted max-w-lg mx-auto">
            Começa a fazer a diferença sem complicações. A plataforma guia-te em cada passo.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="step in steps"
            :key="step.step"
            class="relative group bg-default rounded-2xl border border-default p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-200 overflow-hidden"
          >
            <!-- Large step number watermark -->
            <span
              class="absolute top-4 right-5 text-7xl font-black text-primary/8 select-none leading-none"
            >
              {{ step.step }}
            </span>

            <div class="relative flex flex-col gap-4">
              <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <UIcon :name="step.icon" class="size-6 text-primary" />
              </div>
              <div>
                <h3 class="text-lg font-bold text-default mb-1">
                  {{ step.title }}
                </h3>
                <p class="text-sm text-muted leading-relaxed">
                  {{ step.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- ─── Feature highlight ─── -->
    <UPageSection
      title="Tudo o que precisas numa só plataforma"
      description="Da descoberta à ação, acompanhamos cada passo da tua jornada sustentável."
    >
      <UPageGrid class="lg:grid-cols-3">
        <UPageCard
          title="Comunidade Ativa"
          description="Partilha conquistas, segue amigos e junta-te a comunidades que partilham os teus objetivos."
          icon="i-lucide-users-round"
        >
          <template #footer>
            <div class="flex -space-x-2 pt-1">
              <img
                v-for="n in 5"
                :key="n"
                :src="`https://i.pravatar.cc/40?img=${n + 20}`"
                class="h-7 w-7 rounded-full ring-2 ring-default object-cover"
                alt=""
              >
              <div class="h-7 w-7 rounded-full ring-2 ring-default bg-primary/10 flex items-center justify-center text-xs font-semibold text-primary">
                +k
              </div>
            </div>
          </template>
        </UPageCard>

        <UPageCard
          title="Progresso Visual"
          description="Acompanha o teu impacto com estatísticas detalhadas e vê o quanto já alcançaste."
          icon="i-lucide-bar-chart-3"
        >
          <template #footer>
            <div class="flex gap-1 items-end h-10 pt-1">
              <div
                v-for="(h, i) in [40, 65, 45, 80, 55, 90, 70]"
                :key="i"
                class="flex-1 rounded-sm bg-primary/60"
                :style="{ height: h + '%' }"
              />
            </div>
          </template>
        </UPageCard>

        <UPageCard
          title="17 ODS Cobertos"
          description="Atividades para todos os objetivos, desde erradicar a pobreza até proteger o clima."
          icon="i-lucide-globe-2"
        >
          <template #footer>
            <div class="grid grid-cols-9 gap-1 pt-1">
              <img
                v-for="ods in odsList.slice(0, 9)"
                :key="ods.id"
                :src="`/ODS-${ods.id}.svg`"
                :alt="`ODS ${ods.id}`"
                class="w-full aspect-square rounded-sm"
              >
            </div>
          </template>
        </UPageCard>
      </UPageGrid>
    </UPageSection>

    <!-- ─── FAQ ─── -->
    <UPageSection title="Perguntas Frequentes">
      <UAccordion
        :items="[
          {
            label: 'Como funciona o sistema de bucket list?',
            content: 'Pode selecionar atividades pré-definidas ou criar as suas próprias metas alinhadas com os ODS. Cada atividade completada conta para o seu progresso geral.'
          },
          {
            label: 'É possível partilhar o meu progresso?',
            content: 'Sim! Pode convidar amigos para desafios conjuntos, publicar as suas conquistas no feed comunitário e partilhar nas redes sociais.'
          },
          {
            label: 'A plataforma é gratuita?',
            content: 'Sim, o acesso básico é completamente gratuito. Crie a sua conta e comece a usar imediatamente, sem compromissos.'
          },
          {
            label: 'Posso criar os meus próprios desafios?',
            content: 'Absolutamente! Para além das atividades pré-definidas, pode criar desafios personalizados e convidar a sua comunidade a participar.'
          }
        ]"
      />
    </UPageSection>

    <!-- ─── CTA ─── -->
    <section class="relative overflow-hidden py-20 sm:py-28">
      <div
        class="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-green-500/10 via-primary/5 to-transparent"
      />
      <div
        class="pointer-events-none absolute -bottom-20 -left-20 -z-10 h-80 w-80 rounded-full bg-green-400/15 blur-3xl"
      />

      <UContainer>
        <div class="text-center max-w-2xl mx-auto flex flex-col items-center gap-6">
          <!-- ODS strip -->
          <div class="flex gap-2 flex-wrap justify-center">
            <img
              v-for="ods in odsList"
              :key="ods.id"
              :src="`/ODS-${ods.id}.svg`"
              :alt="`ODS ${ods.id}`"
              class="h-10 w-10 rounded-md shadow-sm opacity-90 hover:opacity-100 hover:scale-110 transition-all"
            >
          </div>

          <h2 class="text-3xl sm:text-4xl font-extrabold text-default">
            Pronto para fazer a diferença?
          </h2>
          <p class="text-lg text-muted">
            Junte-se a milhares de utilizadores que já estão a completar as suas listas e a mudar o mundo, uma ação de cada vez.
          </p>

          <div class="flex flex-wrap gap-3 justify-center">
            <UButton
              label="Criar conta gratuita"
              color="primary"
              size="xl"
              icon="i-lucide-rocket"
              @click="router.push('/feed')"
            />
            <UButton
              label="Ver comunidade"
              color="neutral"
              variant="outline"
              size="xl"
              icon="i-lucide-users"
              @click="router.push('/communities')"
            />
          </div>

          <p class="text-xs text-muted">
            Gratuito para sempre · Sem cartão de crédito · Começa em segundos
          </p>
        </div>
      </UContainer>
    </section>
  </UPage>
</template>
