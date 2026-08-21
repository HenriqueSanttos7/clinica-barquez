export interface ClinicContact {
  whatsappDisplay: string;
  whatsappUrl: string;

  instagram: string;
  facebook: string;

  email: string;
  emailUrl: string;

  addressLine1: string;
  addressLine2: string;

  mapsUrl: string;
  mapsEmbedUrl: string;

  hours: string[];
}

export const CLINIC_CONTACT: ClinicContact = {
  whatsappDisplay: '(92) 98182-6512',
  whatsappUrl: 'https://wa.me/5592981826512?text=Olá%2C%20vim%20pelo%20site%20da%20Clínica%20Barquez.',

  instagram: 'clinica.barquez',
  facebook: 'https://www.facebook.com/clinica.barquez',

  email: 'contato@siahonline.com.br',
  emailUrl: 'mailto:contato@siahonline.com.br',

  addressLine1: 'Av. Cláudio Portinho, 365, Miranda Mall, Bloco C',
  addressLine2: 'Sala 105, Manaus – AM',

  mapsUrl: 'https://maps.app.goo.gl/gdAVLL4FwDYa449R8',
  mapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1215.2346392743066!2d-59.966990373518904!3d-3.10918582835312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c04cfbf8d79d9%3A0xe53857e78365c63e!2sSIAH%20Software%20e%20Servi%C3%A7os!5e0!3m2!1spt-BR!2sbr!4v1787323187834!5m2!1spt-BR!2sbr',

  hours: ['Segunda a Sábado', '08h às 18h'],
};
