import { Component, inject, OnInit } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';
import { RouterLink } from '@angular/router';

import { PROFESSIONALS_DATA } from '../../shared/data/professionals.data';
import { ProfessionalCard } from '../../shared/components/professional-card/professional-card';
import { CtaSection } from '../../shared/components/cta-section/cta-section';

@Component({
  selector: 'app-team',
  imports: [RouterLink, ProfessionalCard, CtaSection],
  templateUrl: './team.html',
  styleUrl: './team.scss',
})
export class Team implements OnInit {
  private readonly seoService = inject(SeoService);

  readonly professionals = PROFESSIONALS_DATA;

  ngOnInit(): void {
    this.seoService.update({
      title: 'Nossa Equipe',
      description:
        'Conheça nossos médicos e especialistas dedicados ao cuidado integral da sua saúde.',
      url: 'https://sitebarquez-2026.web.app/equipe',
    });
  }
}
