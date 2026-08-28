import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface SeoConfig {
  title: string;
  description?: string;
  image?: string;
  url?: string;
}

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private readonly titleService = inject(Title);
  private readonly metaService = inject(Meta);

  private readonly defaultTitle = 'Clínica Barquez | Saúde e Bem-Estar';
  private readonly defaultDescription =
    'Cuidado humanizado, excelência médica e atendimento personalizado para sua saúde e bem-estar.';
  private readonly defaultImage = 'https://barquez.com.br/images/og/clinica-barquez.jpg';

  update(config: SeoConfig): void {
    const fullTitle = config.title ? `${config.title} | Clínica Barquez` : this.defaultTitle;
    const description = config.description || this.defaultDescription;
    const image = config.image || this.defaultImage;

    // Título da Aba
    this.titleService.setTitle(fullTitle);

    // Meta Tags Padrão & Open Graph
    this.metaService.updateTag({ name: 'description', content: description });
    this.metaService.updateTag({ property: 'og:title', content: fullTitle });
    this.metaService.updateTag({
      property: 'og:description',
      content: description,
    });
    this.metaService.updateTag({ property: 'og:image', content: image });

    if (config.url) {
      this.metaService.updateTag({ property: 'og:url', content: config.url });
    }
  }
}
