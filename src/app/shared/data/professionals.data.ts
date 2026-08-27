import { Professional } from '../models/professional.models';

export const PROFESSIONALS_DATA: Professional[] = [
  {
    id: 'herdeson',
    nome: 'Dr. Herdeson Queiroz',
    titulo: 'Médico',
    especialidade: 'Clínica Médica',
    registro: 'CRM 00000-AM',
    descricao:
      'Atendimento humanizado, com foco em cuidado integral, prevenção e acompanhamento da saúde.',
    imagem: '/images/team/herdeson.webp',
    destaqueHome: true,
  },

  {
    id: 'giully',
    nome: 'Dra. Giully Barbosa',
    titulo: 'Médica',
    especialidade: 'Nutrição',
    registro: 'CRM 00000-AM',
    descricao:
      'Atendimento acolhedor e individualizado, com atenção às necessidades de cada paciente.',
    imagem: '/images/team/giully.webp',
    destaqueHome: true,
  },
];
