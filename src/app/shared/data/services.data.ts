export interface Service {
    slug: string;
    nome: string;
    subtitulo: string;
    descricao: string;
    descricaoCompleta: string[];
    indicacoes: string[];
    beneficios: string[];
    icone: string;
    imagem: string;
}

export const SERVICES: Service[] = [
    {
        slug: 'clinica-medica',
        nome: 'Clínica Médica',
        subtitulo: 'Cuidados abrangentes para sua saúde',
        descricao: 'A Clínica Médica oferece cuidados abrangentes para a saúde, com foco na prevenção, diagnóstico e tratamento de doenças.',
        descricaoCompleta: [
            'Atendimento personalizado e humanizado',
            'Equipe de profissionais qualificados',
            'Infraestrutura moderna e equipamentos de última geração'
        ],
        indicacoes: [
            'Pacientes que buscam atendimento médico completo',
            'Indivíduos com necessidades de acompanhamento contínuo'
        ],
        beneficios: [
            'Agendamento fácil e rápido',
            'Consultas em ambiente confortável',
            'Acesso a informações sobre saúde e prevenção'
        ],
        icone: 'fa-solid fa-stethoscope',
        imagem: '/images/services/clinica-medica.jpg'
    }
]