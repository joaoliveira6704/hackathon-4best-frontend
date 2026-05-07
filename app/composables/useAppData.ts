import { useStorage } from "@vueuse/core";

export const useAppData = () => {
  // Sincroniza automaticamente com o localStorage
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
    {
      id: 104,
      user: {
        name: "Marta Costa",
        avatar: "https://i.pravatar.cc/150?u=marta",
      },
      createdAt: "Há 3 horas",
      text: "Concluí a substituição de lâmpadas por LED no prédio. Menos consumo, mais eficiência!",
      image:
        "https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?auto=format&fit=crop&q=80&w=800",
      odsInfo: { id: 7, color: "#FCC30B" },
    },
    {
      id: 105,
      user: {
        name: "João Martins",
        avatar: "https://i.pravatar.cc/150?u=joao",
      },
      createdAt: "Há 5 horas",
      text: "Organizámos uma recolha de resíduos eletrónicos no bairro. 120 kg encaminhados!",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=800",
      odsInfo: { id: 12, color: "#BF8B2E" },
    },
    {
      id: 106,
      user: {
        name: "Inês Ferreira",
        avatar: "https://i.pravatar.cc/150?u=ines",
      },
      createdAt: "Há 1 dia",
      text: "Sessão de literacia digital concluída com 18 participantes. ODS 4 em ação!",
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800",
      odsInfo: { id: 4, color: "#C5192D" },
    },
    {
      id: 107,
      user: {
        name: "Sofia Almeida",
        avatar: "https://i.pravatar.cc/150?u=sofia",
      },
      createdAt: "Há 1 dia",
      text: "Limpeza de margem do rio concluída. Retirámos 35 sacos de resíduos.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800",
      odsInfo: { id: 6, color: "#26BDE2" },
    },
    {
      id: 108,
      user: {
        name: "Pedro Nogueira",
        avatar: "https://i.pravatar.cc/150?u=pedro",
      },
      createdAt: "Há 2 dias",
      text: "Dia sem carro no bairro. Mais bicicletas e menos ruído nas ruas.",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=800",
      odsInfo: { id: 11, color: "#FD9D24" },
    },
    {
      id: 109,
      user: {
        name: "Luísa Gomes",
        avatar: "https://i.pravatar.cc/150?u=luisa",
      },
      createdAt: "Há 2 dias",
      text: "Recolha de roupa para reutilização com 60 peças entregues.",
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800",
      odsInfo: { id: 12, color: "#BF8B2E" },
    },
    {
      id: 110,
      user: {
        name: "Tiago Lopes",
        avatar: "https://i.pravatar.cc/150?u=tiago",
      },
      createdAt: "Há 3 dias",
      text: "Caminhada comunitária para promoção da saúde com 40 participantes.",
      image:
        "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=800",
      odsInfo: { id: 3, color: "#4C9F38" },
    },
    {
      id: 111,
      user: {
        name: "Rita Sousa",
        avatar: "https://i.pravatar.cc/150?u=rita",
      },
      createdAt: "Há 4 dias",
      text: "Plantação de espécies autóctones em área ardida. 120 árvores plantadas.",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800",
      odsInfo: { id: 15, color: "#56C02B" },
    },
    {
      id: 112,
      user: {
        name: "Nuno Carvalho",
        avatar: "https://i.pravatar.cc/150?u=nuno",
      },
      createdAt: "Há 5 dias",
      text: "Sessão de sensibilização para igualdade de género numa escola local.",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
      odsInfo: { id: 5, color: "#FF3A21" },
    },
  ]);

  const statsData = useStorage("app_stats", [
    {
      label: "Atividades Concluídas",
      value: 78,
      icon: "i-lucide-check-circle",
    },
    { label: "ODS Impactados", value: "10/17", icon: "i-lucide-globe" },
    { label: "Pontos XP", value: "2.450", icon: "i-lucide-zap" },
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
    {
      id: 4,
      name: "Energia Consciente",
      description:
        "Partilha de boas práticas para eficiência energética em casas, escolas e serviços locais.",
      members: 640,
      image:
        "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&q=80&w=800",
      ods: [
        { id: 7, color: "#FCC30B" },
        { id: 13, color: "#3F7E44" },
      ],
    },
    {
      id: 5,
      name: "Cidade Circular",
      description:
        "Rede de cidadãos dedicada à redução de resíduos e à reutilização de materiais.",
      members: 980,
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=800",
      ods: [
        { id: 11, color: "#FD9D24" },
        { id: 12, color: "#BF8B2E" },
      ],
    },
    {
      id: 6,
      name: "Verde na Escola",
      description:
        "Projetos de sustentabilidade com alunos e docentes do ensino básico e secundário.",
      members: 430,
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
      ods: [
        { id: 4, color: "#C5192D" },
        { id: 15, color: "#56C02B" },
      ],
    },
    {
      id: 7,
      name: "Rios Vivos",
      description:
        "Ações de limpeza e monitorização da qualidade da água em rios da região norte.",
      members: 520,
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800",
      ods: [
        { id: 6, color: "#26BDE2" },
        { id: 14, color: "#0A97D9" },
      ],
    },
    {
      id: 8,
      name: "Mobilidade Sustentável Porto",
      description:
        "Promoção de transportes suaves e percursos seguros para peões e ciclistas.",
      members: 760,
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=800",
      ods: [
        { id: 11, color: "#FD9D24" },
        { id: 13, color: "#3F7E44" },
      ],
    },
    {
      id: 9,
      name: "Saúde Comunitária",
      description:
        "Iniciativas de bem-estar físico e mental com foco em prevenção e inclusão.",
      members: 390,
      image:
        "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=800",
      ods: [
        { id: 3, color: "#4C9F38" },
        { id: 10, color: "#DD1367" },
      ],
    },
    {
      id: 10,
      name: "Florestas Atlânticas",
      description:
        "Recuperação de áreas ardidas e proteção de biodiversidade local.",
      members: 680,
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800",
      ods: [
        { id: 15, color: "#56C02B" },
        { id: 13, color: "#3F7E44" },
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
      { label: "Apoiar uma horta comunitária", ods: "2", status: "Concluída" },
      { label: "Workshop de reciclagem", ods: "12", status: "Concluída" },
      { label: "Organizar limpeza de praia", ods: "14", status: "Em curso" },
      { label: "Reduzir consumo de água", ods: "6", status: "Pendente" },
    ],
    communities: [1, 5, 6],
  });

  const usersData = useStorage("app_users", [
    {
      id: 1,
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
        {
          label: "Reduzir plástico descartável",
          ods: "12",
          status: "Pendente",
        },
        {
          label: "Apoiar uma horta comunitária",
          ods: "2",
          status: "Concluída",
        },
      ],
      communities: [1, 5, 6],
    },
    {
      id: 2,
      name: "Carlos Silva",
      handle: "@carlos_solar",
      bio: "Entusiasta de energia renovável e eficiência energética em casa.",
      avatar: "https://i.pravatar.cc/150?u=carlos",
      badges: [{ title: "Energia+", icon: "i-lucide-sun", color: "yellow" }],
      activities: [
        { label: "Instalar painéis solares", ods: "7", status: "Concluída" },
        { label: "Trocar lâmpadas por LED", ods: "7", status: "Concluída" },
        { label: "Monitorizar consumo diário", ods: "13", status: "Em curso" },
      ],
      communities: [4],
    },
    {
      id: 3,
      name: "Ana Verde",
      handle: "@ana_verde",
      bio: "Promotora de compostagem doméstica e redução do desperdício alimentar.",
      avatar: "https://i.pravatar.cc/150?u=ana",
      badges: [
        { title: "Compostagem", icon: "i-lucide-recycle", color: "green" },
      ],
      activities: [
        { label: "Workshop de compostagem", ods: "12", status: "Concluída" },
        { label: "Criar compostor comunitário", ods: "11", status: "Em curso" },
        {
          label: "Reduzir desperdício alimentar",
          ods: "12",
          status: "Em curso",
        },
      ],
      communities: [2, 5],
    },
    {
      id: 4,
      name: "Ricardo Santos",
      handle: "@ricardo_local",
      bio: "Apoia pequenos produtores e comércio de proximidade.",
      avatar: "https://i.pravatar.cc/150?u=ric",
      badges: [
        { title: "Comércio Local", icon: "i-lucide-store", color: "orange" },
      ],
      activities: [
        { label: "Feira de produtores locais", ods: "11", status: "Concluída" },
        { label: "Campanha compra local", ods: "8", status: "Em curso" },
        { label: "Criar rede de produtores", ods: "9", status: "Pendente" },
      ],
      communities: [1, 5],
    },
    {
      id: 5,
      name: "Marta Costa",
      handle: "@marta_eficiente",
      bio: "Focada em melhorar a eficiência energética em comunidades.",
      avatar: "https://i.pravatar.cc/150?u=marta",
      badges: [{ title: "Eficiência", icon: "i-lucide-bolt", color: "yellow" }],
      activities: [
        { label: "Substituir lâmpadas por LED", ods: "7", status: "Concluída" },
        { label: "Auditoria energética", ods: "13", status: "Em curso" },
        {
          label: "Sessão de poupança de energia",
          ods: "7",
          status: "Pendente",
        },
      ],
      communities: [4, 6],
    },
    {
      id: 6,
      name: "João Martins",
      handle: "@joao_circular",
      bio: "Gestão de resíduos e ações de reciclagem no bairro.",
      avatar: "https://i.pravatar.cc/150?u=joao",
      badges: [{ title: "Circular", icon: "i-lucide-repeat", color: "blue" }],
      activities: [
        {
          label: "Recolha de resíduos eletrónicos",
          ods: "12",
          status: "Concluída",
        },
        { label: "Ação de limpeza urbana", ods: "11", status: "Em curso" },
        { label: "Oficina de reparação", ods: "12", status: "Pendente" },
      ],
      communities: [5],
    },
    {
      id: 7,
      name: "Inês Ferreira",
      handle: "@ines_educa",
      bio: "Formadora em competências digitais e inclusão social.",
      avatar: "https://i.pravatar.cc/150?u=ines",
      badges: [
        { title: "Mentora", icon: "i-lucide-graduation-cap", color: "red" },
      ],
      activities: [
        { label: "Sessão de literacia digital", ods: "4", status: "Concluída" },
        { label: "Mentoria semanal", ods: "10", status: "Em curso" },
        { label: "Capacitar jovens em CV", ods: "8", status: "Pendente" },
      ],
      communities: [3, 6],
    },
    {
      id: 8,
      name: "Sofia Almeida",
      handle: "@sofia_rio",
      bio: "Defensora de rios limpos e educação ambiental.",
      avatar: "https://i.pravatar.cc/150?u=sofia",
      badges: [{ title: "Água", icon: "i-lucide-droplet", color: "blue" }],
      activities: [
        { label: "Limpeza de margem do rio", ods: "6", status: "Concluída" },
        {
          label: "Monitorizar qualidade da água",
          ods: "6",
          status: "Em curso",
        },
        {
          label: "Sessão sobre poupança de água",
          ods: "6",
          status: "Pendente",
        },
      ],
      communities: [7],
    },
    {
      id: 9,
      name: "Pedro Nogueira",
      handle: "@pedro_mobilidade",
      bio: "Mobilidade ativa e segurança rodoviária no centro urbano.",
      avatar: "https://i.pravatar.cc/150?u=pedro",
      badges: [{ title: "Mobilidade", icon: "i-lucide-bike", color: "orange" }],
      activities: [
        { label: "Dia sem carro", ods: "11", status: "Concluída" },
        { label: "Mapear percursos seguros", ods: "11", status: "Em curso" },
        { label: "Oficina de bicicletas", ods: "11", status: "Pendente" },
      ],
      communities: [8],
    },
    {
      id: 10,
      name: "Luísa Gomes",
      handle: "@luisa_circular",
      bio: "Redução de resíduos e reutilização no dia a dia.",
      avatar: "https://i.pravatar.cc/150?u=luisa",
      badges: [
        { title: "Reutilização", icon: "i-lucide-refresh-ccw", color: "green" },
      ],
      activities: [
        {
          label: "Recolha de roupa para reutilização",
          ods: "12",
          status: "Concluída",
        },
        { label: "Troca de livros comunitária", ods: "12", status: "Em curso" },
        { label: "Campanha contra desperdício", ods: "12", status: "Pendente" },
      ],
      communities: [5],
    },
    {
      id: 11,
      name: "Tiago Lopes",
      handle: "@tiago_saude",
      bio: "Promoção da saúde e bem-estar em contexto comunitário.",
      avatar: "https://i.pravatar.cc/150?u=tiago",
      badges: [{ title: "Bem-Estar", icon: "i-lucide-heart", color: "red" }],
      activities: [
        { label: "Caminhada comunitária", ods: "3", status: "Concluída" },
        { label: "Sessão de alongamentos", ods: "3", status: "Em curso" },
        { label: "Rastreios básicos", ods: "3", status: "Pendente" },
      ],
      communities: [9],
    },
    {
      id: 12,
      name: "Rita Sousa",
      handle: "@rita_floresta",
      bio: "Proteção de biodiversidade e reflorestação local.",
      avatar: "https://i.pravatar.cc/150?u=rita",
      badges: [
        { title: "Floresta", icon: "i-lucide-tree-pine", color: "green" },
      ],
      activities: [
        {
          label: "Plantação de espécies autóctones",
          ods: "15",
          status: "Concluída",
        },
        { label: "Mapear áreas degradadas", ods: "15", status: "Em curso" },
        {
          label: "Educação ambiental na escola",
          ods: "15",
          status: "Pendente",
        },
      ],
      communities: [10, 6],
    },
    {
      id: 13,
      name: "Nuno Carvalho",
      handle: "@nuno_igualdade",
      bio: "Educação para igualdade e inclusão social.",
      avatar: "https://i.pravatar.cc/150?u=nuno",
      badges: [{ title: "Igualdade", icon: "i-lucide-users", color: "pink" }],
      activities: [
        {
          label: "Sessão sobre igualdade de género",
          ods: "5",
          status: "Concluída",
        },
        { label: "Clube de debate", ods: "10", status: "Em curso" },
        { label: "Plano de inclusão", ods: "10", status: "Pendente" },
      ],
      communities: [3, 9],
    },
  ]);

  const odsList = useStorage("app_ods_list", [
    {
      id: 1,
      title: "Erradicar a Pobreza",
      color: "#E5243B",
      description:
        "Acabar com a pobreza em todas as suas formas, em todos os lugares.",
      tasks: [
        "Doar itens essenciais a bancos de bens locais",
        "Apoiar programas de mentoria para jovens em risco",
        "Consumir em negócios de comércio justo",
      ],
    },
    {
      id: 2,
      title: "Fome Zero e Agricultura Sustentável",
      color: "#DDA63A",
      description:
        "Erradicar a fome, alcançar a segurança alimentar e promover a agricultura sustentável.",
      tasks: [
        "Participar em hortas comunitárias",
        "Reduzir o desperdício alimentar doméstico",
        "Comprar produtos sazonais e de produtores locais",
      ],
    },
    {
      id: 3,
      title: "Saúde e Bem-Estar",
      color: "#4C9F38",
      description:
        "Garantir o acesso à saúde de qualidade e promover o bem-estar para todos.",
      tasks: [
        "Promover a saúde mental no ambiente de trabalho",
        "Participar em campanhas de doação de sangue",
        "Praticar e incentivar a mobilidade ativa (caminhada/bike)",
      ],
    },
    {
      id: 4,
      title: "Educação de Qualidade",
      color: "#C5192D",
      description:
        "Garantir educação inclusiva, equitativa e de qualidade para todos.",
      tasks: [
        "Doar livros para bibliotecas comunitárias",
        "Ser tutor voluntário numa área que domines",
        "Apoiar ONGs que combatem o abandono escolar",
      ],
    },
    {
      id: 5,
      title: "Igualdade de Género",
      color: "#FF3A21",
      description:
        "Alcançar a igualdade de género e empoderar todas as mulheres e meninas.",
      tasks: [
        "Denunciar comportamentos sexistas ou discriminatórios",
        "Apoiar empresas fundadas por mulheres",
        "Promover a divisão equitativa de tarefas domésticas",
      ],
    },
    {
      id: 6,
      title: "Água Potável e Saneamento",
      color: "#26BDE2",
      description:
        "Garantir a disponibilidade e gestão sustentável da água e saneamento.",
      tasks: [
        "Instalar redutores de caudal nas torneiras",
        "Não descartar resíduos químicos na canalização",
        "Apoiar projetos de acesso a água potável",
      ],
    },
    {
      id: 7,
      title: "Energia Limpa e Acessível",
      color: "#FCC30B",
      description:
        "Garantir o acesso a fontes de energia fiáveis, sustentáveis e modernas.",
      tasks: [
        "Trocar lâmpadas incandescentes por LED",
        "Desligar aparelhos em standby",
        "Optar por fornecedores de energia 100% renovável",
      ],
    },
    {
      id: 8,
      title: "Trabalho Decente e Crescimento Económico",
      color: "#A21942",
      description:
        "Promover o crescimento económico inclusivo e trabalho decente para todos.",
      tasks: [
        "Apoiar o empreendedorismo local",
        "Garantir condições dignas em toda a cadeia de valor",
        "Investir em formação contínua",
      ],
    },
    {
      id: 9,
      title: "Indústria, Inovação e Infraestruturas",
      color: "#FD6925",
      description:
        "Construir infraestruturas resilientes e fomentar a inovação.",
      tasks: [
        "Promover a digitalização sustentável",
        "Apoiar startups de impacto social ou ambiental",
        "Reutilizar materiais em processos industriais",
      ],
    },
    {
      id: 10,
      title: "Reduzir as Desigualdades",
      color: "#DD1367",
      description: "Reduzir a desigualdade dentro dos países e entre eles.",
      tasks: [
        "Apoiar políticas de inclusão de minorias",
        "Praticar o recrutamento inclusivo",
        "Contribuir para fundos de desenvolvimento global",
      ],
    },
    {
      id: 11,
      title: "Cidades e Comunidades Sustentáveis",
      color: "#FD9D24",
      description:
        "Tornar as cidades inclusivas, seguras, resilientes e sustentáveis.",
      tasks: [
        "Utilizar transportes públicos regularmente",
        "Preservar espaços verdes e jardins urbanos",
        "Participar em reuniões de planeamento local",
      ],
    },
    {
      id: 12,
      title: "Produção e Consumo Sustentáveis",
      color: "#BF8B2E",
      description: "Assegurar padrões de produção e de consumo sustentáveis.",
      tasks: [
        "Praticar a política dos 5R (Recusar, Reduzir, Reutilizar, Recuperar, Reciclar)",
        "Evitar plásticos de uso único",
        "Escolher produtos com embalagens minimalistas",
      ],
    },
    {
      id: 13,
      title: "Ação Contra a Mudança Global do Clima",
      color: "#3F7E44",
      description:
        "Adotar medidas urgentes para combater as alterações climáticas.",
      tasks: [
        "Reduzir o consumo de carne e derivados",
        "Plantar árvores ou apoiar a reflorestação",
        "Sensibilizar a rede de contactos para a crise climática",
      ],
    },
    {
      id: 14,
      title: "Vida na Água",
      color: "#0A97D9",
      description:
        "Conservar e usar de forma sustentável os oceanos e recursos marinhos.",
      tasks: [
        "Participar em limpezas de praias",
        "Consumir apenas peixe de pesca sustentável",
        "Evitar produtos cosméticos com microplásticos",
      ],
    },
    {
      id: 15,
      title: "Vida Terrestre",
      color: "#56C02B",
      description:
        "Proteger, recuperar e promover o uso sustentável dos ecossistemas.",
      tasks: [
        "Não utilizar pesticidas sintéticos no jardim",
        "Denunciar o comércio ilegal de vida selvagem",
        "Apoiar a conservação de parques naturais",
      ],
    },
    {
      id: 16,
      title: "Paz, Justiça e Instituições Eficazes",
      color: "#00689D",
      description: "Promover sociedades pacíficas e instituições inclusivas.",
      tasks: [
        "Exercer o direito de voto conscientemente",
        "Promover a transparência em organizações",
        "Mediar conflitos de forma não violenta",
      ],
    },
    {
      id: 17,
      title: "Parcerias e Meios de Implementação",
      color: "#19486A",
      description:
        "Reforçar a parceria global para o desenvolvimento sustentável.",
      tasks: [
        "Colaborar em projetos intersectoriais",
        "Partilhar conhecimentos e tecnologias",
        "Promover o voluntariado corporativo",
      ],
    },
  ]);

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
    odsList,
  };
};
