<script setup lang="ts">
definePageMeta({
  layout: "landing",
});
</script>

<template>
  <UPage>
    <UPageHero
      title="Crie a sua Bucket List para um Futuro Sustentável"
      description="Transforme as Metas Globais em ações concretas. Escolha atividades relacionadas com os ODS e acompanhe o seu impacto no mundo."
      :links="[
        { label: 'Começar Agora', color: 'primary', size: 'lg' },
        { label: 'Saber mais', color: 'neutral', variant: 'ghost' },
      ]"
    />

    <UPageSection
      title="Explore Atividades por ODS"
      description="Descubra desafios práticos para cada um dos 17 objetivos."
    >
      <UPageGrid>
        <UPageCard
          title="Erradicar a Pobreza"
          description="Apoie bancos alimentares locais ou participe em programas de mentoria."
          icon="i-lucide-heart"
        />
        <UPageCard
          title="Ação Climática"
          description="Reduza a sua pegada de carbono com desafios semanais de desperdício zero."
          icon="i-lucide-leaf"
        />
        <UPageCard
          title="Educação de Qualidade"
          description="Doe livros ou ensine uma competência nova a alguém da sua comunidade."
          icon="i-lucide-book-open"
        />
      </UPageGrid>
    </UPageSection>

    <UPageSection title="Perguntas Frequentes">
      <UAccordion
        :items="[
          {
            label: 'Como funciona o sistema de bucket list?',
            content:
              'Pode selecionar atividades pré-definidas ou criar as suas próprias metas alinhadas com os ODS.',
          },
          {
            label: 'É possível partilhar o meu progresso?',
            content:
              'Sim, pode convidar amigos para desafios conjuntos e partilhar as suas conquistas nas redes sociais.',
          },
        ]"
      />
    </UPageSection>

    <UPageCTA
      title="Pronto para fazer a diferença?"
      description="Junte-se a milhares de utilizadores que já estão a completar as suas listas."
      :links="[{ label: 'Criar conta gratuita', color: 'primary' }]"
    />
  </UPage>
</template>
