import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';
import { PROFESSIONALS } from '../../shared/data/professionals.data';
import { ProfessionalCard } from '../../shared/components/professional-card/professional-card';
import { CtaSection } from '../../shared/components/cta-section/cta-section';

@Component({
  selector: 'app-about',
  imports: [RouterLink, ProfessionalCard, CtaSection],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About implements OnInit {
  private readonly seoService = inject(SeoService);
  readonly professionals = PROFESSIONALS;
  readonly featuredProfessional = PROFESSIONALS.slice(0,2);

  ngOnInit(): void {
    this.seoService.update({
      title: 'Sobre Nós',
      description: 'Descricao',
      url: 'https://barquez.com.br/sobre',
    });
  }
}
