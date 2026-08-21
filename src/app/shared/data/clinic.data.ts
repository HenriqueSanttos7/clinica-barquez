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
  whatsappUrl: 'https://wa.me/5592981826512',

  instagram: 'clinica.barquez',
  facebook: 'https://www.facebook.com/clinica.barquez',

  email: 'contato@siahonline.com.br',
  emailUrl: 'mailto:contato@siahonline.com.br',

  addressLine1: 'Av. Cláudio Portinho, 365, Miranda Mall, Bloco C',
  addressLine2: 'Sala 105, Manaus – AM',

  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Av.+Claudio+Portinho,+365,+Manaus',
  mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=...',

  hours: ['Segunda a sexta', '08h às 18h'],
};
