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
