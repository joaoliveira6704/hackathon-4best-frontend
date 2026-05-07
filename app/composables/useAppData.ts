import { useStorage } from "@vueuse/core";

export const useAppData = () => {
  // Sincroniza automaticamente com o localStorage
  const globalFeed = useStorage("app_feed", [
    {
      id: 101,
      user: {
        name: "Carlos Silva",
        avatar: "https://i.pravatar.cc/150?u=carlos",
      },
      createdAt: "Há 10 min",
      text: "Instalei painéis solares em casa hoje! Um pequeno passo para o ODS 7.",
      image:
        "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800",
      odsInfo: { id: 7, color: "#FCC30B" },
    },
    {
      id: 102,
      user: { name: "Ana Verde", avatar: "https://i.pravatar.cc/150?u=ana" },
      createdAt: "Há 45 min",
      text: "Workshop de compostagem concluído. Menos lixo, mais vida! ♻️",
      image:
        "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=800",
      odsInfo: { id: 12, color: "#BF8B2E" },
    },
    {
      id: 103,
      user: {
        name: "Ricardo Santos",
        avatar: "https://i.pravatar.cc/150?u=ric",
      },
      createdAt: "Há 2 horas",
      text: "Apoiar o comércio local e pequenos produtores é essencial para comunidades sustentáveis.",
      image:
        "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZhcm18ZW58MHx8MHx8fDA%3D",
      odsInfo: { id: 11, color: "#FD9D24" },
    },
  ]);

  const statsData = useStorage("app_stats", [
    {
      label: "Atividades Concluídas",
      value: 24,
      icon: "i-lucide-check-circle",
    },
    { label: "ODS Impactados", value: "7/17", icon: "i-lucide-globe" },
    { label: "Pontos XP", value: "1.250", icon: "i-lucide-zap" },
  ]);

  const communities = useStorage("app_communities", [
    {
      id: 1,
      name: "Guardiões do Oceano",
      description:
        "Comunidade focada na limpeza de praias e preservação da vida marinha na costa portuguesa.",
      members: 1250,
      image:
        "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&q=80&w=800",
      ods: [
        { id: 14, color: "#0A97D9" },
        { id: 13, color: "#3F7E44" },
      ],
    },
    {
      id: 2,
      name: "Hortas Urbanas Lx",
      description:
        "Promovemos a agricultura sustentável e o consumo local através de hortas comunitárias em Lisboa.",
      members: 850,
      image:
        "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=800",
      ods: [
        { id: 2, color: "#DDA63A" },
        { id: 11, color: "#FD9D24" },
        { id: 12, color: "#BF8B2E" },
      ],
    },
    {
      id: 3,
      name: "Educação para Todos",
      description:
        "Mentoria gratuita para jovens em situação de vulnerabilidade, focada em competências digitais.",
      members: 2100,
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
      ods: [
        { id: 4, color: "#C5192D" },
        { id: 10, color: "#DD1367" },
      ],
    },
  ]);

  const userData = useStorage("app_user", {
    name: "Ana Silva",
    handle: "@ana_sustentavel",
    bio: "Focada em transformar metas globais em ações locais. Especialista em ODS 13 e 15.",
    avatar: "https://i.pravatar.cc/150?u=ana",
    badges: [
      { title: "Guardião", icon: "i-lucide-shield", color: "blue" },
      { title: "Eco-Hero", icon: "i-lucide-leaf", color: "green" },
    ],
    activities: [
      { label: "Plantar 5 árvores nativas", ods: "15", status: "Em curso" },
      { label: "Reduzir plástico descartável", ods: "12", status: "Pendente" },
    ],
    communities: [1, 5, 6],
  });

  // Função para adicionar novo post (exemplo de escrita no localStorage)
  const addPost = (newPost: any) => {
    globalFeed.value.unshift({
      id: Date.now(),
      ...newPost,
    });
  };

  return {
    globalFeed,
    statsData,
    communities,
    addPost,
    userData,
  };
};
