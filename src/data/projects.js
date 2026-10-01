const github = 'https://github.com/karoldamiani'

export const projects = [
  {
    title: 'Dashboard de Usuários',
    description:
      'Interface web para consultar, buscar, cadastrar, editar e excluir usuários, consumindo dados de uma API REST.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    repo: `${github}/user-dashboard`,
  },
  {
    title: 'Automação de Atendimento',
    description:
      'Fluxo que automatiza o atendimento inicial e a organização de dados, integrando serviços, APIs e um modelo de linguagem (IA).',
    tags: ['n8n', 'Google Sheets', 'Groq', 'APIs'],
  },
  {
    title: 'API e Integração de Contatos',
    description:
      'Solução para cadastro e processamento de contatos, com integração ao WhatsApp via API.',
    tags: ['Python', 'Supabase', 'Z-API'],
  },
  {
    title: 'Loja Online',
    status: 'Em desenvolvimento',
    description:
      'Loja virtual com landing page, barra de navegação e páginas de produto. Projeto em construção.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    repo: `${github}/online-store`,
  },
  {
    title: 'Simulador de Trem',
    description:
      'Simulação de trens entre estações, com trilho encadeado, lógica de desvio para evitar colisões, estruturas de dados próprias (pilha e fila) e relatório final em arquivo.',
    tags: ['Java', 'POO', 'MVC'],
    repo: `${github}/SimuladorDeTrem`,
  },
  {
    title: 'Shopping Manager',
    description:
      'Sistema de gestão de um shopping center para aplicar abstração, herança e polimorfismo, usando arrays.',
    tags: ['Java', 'POO'],
    repo: `${github}/Lab1-Shopping-Manager`,
  },
]