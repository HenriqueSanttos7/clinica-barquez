export interface Service {
  id: string;
  nome: string;
  resumo: string;
  subtitulo: string;
  descricaoCompleta: string[];
  indicacoes: string[];
  beneficios: string[];
  icone: string;
  imagem: string;

  destaqueHome?: boolean;
}

export const SERVICES: Service[] = [
  {
    id: 'clinica-medica',
    nome: 'Clínica Médica',
    resumo: 'Cuidados abrangentes para sua saúde',
    subtitulo: 'Atendimento personalizado e humanizado',
    descricaoCompleta: [
      'Atendimento personalizado e humanizado',
      'Equipe de profissionais qualificados',
      'Infraestrutura moderna e equipamentos de última geração',
    ],
    indicacoes: [
      'Pacientes que buscam atendimento médico completo',
      'Indivíduos com necessidades de acompanhamento contínuo',
      'Pacientes que desejam melhorar a saúde e a qualidade de vida',
    ],
    beneficios: [
      'Agendamento fácil e rápido',
      'Consultas em ambiente confortável',
      'Acesso a informações sobre saúde e prevenção',
    ],
    icone: 'fa-solid fa-stethoscope',
    imagem: '/images/services/clinica-medica.jpg',
    destaqueHome: true,
  },

  {
    id: 'cardiologia',
    nome: 'Cardiologia',
    subtitulo: 'Cuidando do seu coração',
    resumo: 'Especializada no diagnóstico e tratamento de doenças do coração e do sistema circulatório.',
    descricaoCompleta: [
      'Avaliação completa da saúde cardiovascular',
      'Exames de imagem e laboratoriais avançados',
    ],
    indicacoes: [
      'Pacientes com sintomas de doenças cardíacas',
      'Indivíduos em risco para problemas cardiovasculares',
    ],
    beneficios: [
      'Diagnóstico preciso e tratamento eficaz',
      'Acompanhamento contínuo da saúde cardíaca',
      'Educação e orientação sobre prevenção',
    ],
    icone: 'fa-solid fa-heart',
    imagem: '/images/services/cardiologia.jpg',
    destaqueHome: true,
  },

  {
    id: 'ginecologia',
    nome: 'Ginecologia',
    subtitulo: 'Cuidados especializados para a saúde feminina',
    resumo: 'Cuidados especializados para a saúde feminina, incluindo exames, consultas e tratamentos.',
    descricaoCompleta: [
      'Atendimento personalizado e humanizado',
      'Equipe de profissionais qualificados',
      'Infraestrutura moderna e equipamentos de última geração',
    ],
    indicacoes: [
      'Pacientes que buscam atendimento ginecológico',
      'Indivíduos com necessidades de acompanhamento contínuo',
    ],
    beneficios: [
      'Agendamento fácil e rápido',
      'Consultas em ambiente confortável',
      'Acesso a informações sobre saúde e prevenção',
    ],
    icone: 'fa-solid fa-venus',
    imagem: '/images/services/ginecologia.jpg',
    destaqueHome: false,
  },

  {
    id: 'nutricao',
    nome: 'Nutrição',
    subtitulo: 'Promovendo hábitos alimentares saudáveis',
    resumo: 'A Nutrição oferece orientação e acompanhamento para promover hábitos alimentares saudáveis e melhorar a qualidade de vida.',
    descricaoCompleta: [
      'Avaliação nutricional individualizada',
      'Elaboração de planos alimentares personalizados',
      'Acompanhamento contínuo e suporte motivacional',
    ],
    indicacoes: [
      'Pacientes que buscam melhorar a alimentação e a saúde',
      'Indivíduos com necessidades nutricionais específicas',
    ],
    beneficios: [
      'Avaliação nutricional completa',
      'Plano alimentar personalizado',
      'Acompanhamento contínuo',
    ],
    icone: 'fa-solid fa-utensils',
    imagem: '/images/services/nutricao.jpg',
    destaqueHome: true,
  },

  {
    id: 'psicologia',
    nome: 'Psicologia',
    subtitulo: 'Cuidando da saúde mental e emocional',
    resumo: 'A Psicologia oferece atendimento especializado para cuidar da saúde mental e emocional, com foco em prevenção, diagnóstico e tratamento.',
    descricaoCompleta: [
      'Avaliação psicológica individualizada',
      'Terapias personalizadas',
      'Acompanhamento contínuo e suporte',
    ],
    indicacoes: [
      'Pacientes que buscam atendimento psicológico',
      'Indivíduos com necessidades de acompanhamento contínuo',
    ],
    beneficios: [
      'Avaliação psicológica completa',
      'Terapia personalizada',
      'Acompanhamento contínuo',
    ],
    icone: 'fa-solid fa-brain',
    imagem: '/images/services/psicologia.jpg',
    destaqueHome: false,
  },

  {
    id: 'pediatria',
    nome: 'Pediatria',
    subtitulo: 'Cuidando da saúde e do desenvolvimento infantil',
    resumo: 'A Pediatria oferece cuidados especializados para crianças e adolescentes, acompanhando seu crescimento, desenvolvimento e saúde integral.',
    descricaoCompleta: [
      'Acompanhamento do crescimento e desenvolvimento',
      'Atendimento personalizado e humanizado',
      'Orientação para prevenção e cuidados infantis',
    ],
    indicacoes: [
      'Crianças e adolescentes que necessitam de acompanhamento médico',
      'Famílias que buscam orientação para a saúde infantil',
    ],
    beneficios: [
      'Avaliação completa da saúde infantil',
      'Acompanhamento contínuo do desenvolvimento',
      'Orientação para pais e responsáveis',
    ],
    icone: 'fa-solid fa-child',
    imagem: '/images/services/pediatria.jpg',
    destaqueHome: false,
  },
];
