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
            proteger o meio ambiente e o clima e garantir que as pessoas, em
            todos os lugares, possam desfrutar de paz e de prosperidade.
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
              />
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
            <UButton
              label="Ver Metas"
              variant="ghost"
              color="neutral"
              icon="i-lucide-arrow-right"
              trailing
              size="sm"
              block
            />
          </template>
        </UCard>
      </div>

      <section
        class="mt-16 mb-8 text-center bg-neutral-50 dark:bg-neutral-900 p-10 rounded-2xl border border-dashed border-neutral-300"
      >
        <h2 class="text-2xl font-bold mb-4 text-default italic">
          Queres fazer a diferença?
        </h2>
        <p class="mb-6 text-neutral-500">
          Adiciona atividades relacionadas com estes ODS à tua Bucket List
          pessoal.
        </p>
        <UButton
          label="Ir para o meu Perfil"
          to="/profile"
          size="xl"
          icon="i-lucide-user"
        />
      </section>
    </UPageBody>
  </UContainer>
</template>

<script setup lang="ts">
const odsList = [
  {
    id: 1,
    title: "Erradicar a Pobreza",
    color: "#E5243B",
    image:
      "https://ods.pt/wp-content/uploads/elementor/thumbs/01-pxk2r7jy3r7d74vw9o4xo50kciqa916qci5l4lg8o8.png",
    description:
      "Acabar com a pobreza em todas as suas formas, em todos os lugares.",
  },
  {
    id: 2,
    title: "Fome Zero e Agricultura Sustentável",
    color: "#DDA63A",
    image:
      "https://ods.pt/wp-content/uploads/elementor/thumbs/02-pxk2qeey7w3h7827ztji0ud9xkpwmez1whxj90ng14.png",
    description:
      "Erradicar a fome, alcançar a segurança alimentar, melhorar a nutrição e promover a agricultura sustentável.",
  },
  {
    id: 3,
    title: "Saúde e Bem-Estar",
    color: "#4C9F38",
    image:
      "https://ods.pt/wp-content/uploads/elementor/thumbs/03-pxk2r7jy3r7d74vw9o4xo50kciqa916qci5l4lg8o8.png",
    description:
      "Garantir o acesso à saúde de qualidade e promover o bem-estar para todos, em todas as idades.",
  },
  {
    id: 4,
    title: "Educação de Qualidade",
    color: "#C5192D",
    image:
      "https://ods.pt/wp-content/uploads/elementor/thumbs/04-pxk2r9fmhf9xuct5yoy6t4jhjah0ofe70rgk35dgbs.png",
    description:
      "Garantir a educação inclusiva, equitativa e de qualidade, e promover oportunidades de aprendizagem ao longo da vida para todos.",
  },
  {
    id: 5,
    title: "Igualdade de Género",
    color: "#FF3A21",
    image:
      "https://ods.pt/wp-content/uploads/elementor/thumbs/05-pxk2r8hsal8niquj46jk8ms0xwlngqagomt2lveui0.png",
    description:
      "Alcançar a igualdade de género e empoderar todas as mulheres e meninas.",
  },
  {
    id: 6,
    title: "Água Potável e Saneamento",
    color: "#26BDE2",
    image:
      "https://ods.pt/wp-content/uploads/elementor/thumbs/06-pxk2r8hsal8niquj46jk8ms0xwlngqagomt2lveui0.png",
    description:
      "Garantir a disponibilidade e a gestão sustentável da água potável e do saneamento para todos.",
  },
  {
    id: 7,
    title: "Energia Limpa e Acessível",
    color: "#FCC30B",
    image:
      "https://ods.pt/wp-content/uploads/elementor/thumbs/07-pxk2r8hsal8niquj46jk8ms0xwlngqagomt2lveui0.png",
    description:
      "Garantir o acesso a fontes de energia fiáveis, sustentáveis e modernas para todos.",
  },
  {
    id: 8,
    title: "Trabalho Decente e Crescimento Económico",
    color: "#A21942",
    image:
      "https://ods.pt/wp-content/uploads/elementor/thumbs/08-pxk2radgo9b85yrst7ctdmay4ocdw4hxcw41kfc25k.png",
    description:
      "Promover o crescimento económico inclusivo e sustentável, o emprego pleno e produtivo e o trabalho decente para todos.",
  },
  {
    id: 9,
    title: "Indústria, Inovação e Infraestruturas",
    color: "#FD6925",
    image:
      "https://ods.pt/wp-content/uploads/elementor/thumbs/09-pxk2r9fmhf9xuct5yoy6t4jhjah0ofe70rgk35dgbs.png",
    description:
      "Construir infraestruturas resilientes, promover a industrialização inclusiva e sustentável e fomentar a inovação.",
  },
  {
    id: 10,
    title: "Reduzir as Desigualdades",
    color: "#DD1367",
    image:
      "https://ods.pt/wp-content/uploads/elementor/thumbs/10-pxk2r9fmhf9xuct5yoy6t4jhjah0ofe70rgk35dgbs.png",
    description: "Reduzir a desigualdade dentro dos países e entre eles.",
  },
  {
    id: 11,
    title: "Cidades e Comunidades Sustentáveis",
    color: "#FD9D24",
    image:
      "https://ods.pt/wp-content/uploads/elementor/thumbs/11-pxk2r8hsal8niquj46jk8ms0xwlngqagomt2lveui0.png",
    description:
      "Tornar as cidades e os assentamentos humanos inclusivos, seguros, resilientes e sustentáveis.",
  },
  {
    id: 12,
    title: "Produção e Consumo Sustentáveis",
    color: "#BF8B2E",
    image:
      "https://ods.pt/wp-content/uploads/elementor/thumbs/12-pxk2r8hsal8niquj46jk8ms0xwlngqagomt2lveui0.png",
    description: "Assegurar padrões de produção e de consumo sustentáveis.",
  },
  {
    id: 13,
    title: "Ação Contra a Mudança Global do Clima",
    color: "#3F7E44",
    image:
      "https://ods.pt/wp-content/uploads/elementor/thumbs/13-pxk2r8hsal8niquj46jk8ms0xwlngqagomt2lveui0.png",
    description:
      "Adotar medidas urgentes para combater as alterações climáticas e os seus impactos.",
  },
  {
    id: 14,
    title: "Vida na Água",
    color: "#0A97D9",
    image:
      "https://ods.pt/wp-content/uploads/elementor/thumbs/14-pxk2r7jy3r7d74vw9o4xo50kciqa916qci5l4lg8o8.png",
    description:
      "Conservar e usar de forma sustentável os oceanos, mares e recursos marinhos para o desenvolvimento sustentável.",
  },
  {
    id: 15,
    title: "Vida Terrestre",
    color: "#56C02B",
    image:
      "https://ods.pt/wp-content/uploads/elementor/thumbs/15-pxk2r7jy3r7d74vw9o4xo50kciqa916qci5l4lg8o8.png",
    description:
      "Proteger, recuperar e promover o uso sustentável dos ecossistemas terrestres.",
  },
  {
    id: 16,
    title: "Paz, Justiça e Instituições Eficazes",
    color: "#00689D",
    image:
      "https://ods.pt/wp-content/uploads/elementor/thumbs/16-pxk2r8hsal8niquj46jk8ms0xwlngqagomt2lveui0.png",
    description:
      "Promover sociedades pacíficas e inclusivas para o desenvolvimento sustentável.",
  },
  {
    id: 17,
    title: "Parcerias e Meios de Implementação",
    color: "#19486A",
    image:
      "https://ods.pt/wp-content/uploads/elementor/thumbs/17-pxk2r7jy3r7d74vw9o4xo50kciqa916qci5l4lg8o8.png",
    description:
      "Reforçar os meios de implementação e revitalizar a parceria global para o desenvolvimento sustentável.",
  },
];
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
