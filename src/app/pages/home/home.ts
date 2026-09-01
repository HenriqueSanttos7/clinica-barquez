import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NgOptimizedImage } from '@angular/common';

import { ProfessionalCard } from '../../shared/components/professional-card/professional-card';
import { CtaSection } from '../../shared/components/cta-section/cta-section';
import { ServiceCard } from '../../shared/components/service-card/service-card';

import { PROFESSIONALS } from '../../shared/data/professionals.data';
import { SeoService } from '../../core/services/seo.service';
import { SERVICES } from '../../shared/data/services.data';


@Component({
  selector: 'app-home',
  imports: [RouterLink, NgOptimizedImage, ProfessionalCard, CtaSection, ServiceCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  private readonly seoService = inject(SeoService);

  // 🔹 Filtra os serviços destacados na Home (limite de 3)
  readonly featureServices = SERVICES.filter((service) => service.destaqueHome).slice(0, 3);

  // 🔹 Filtra os profissionais em destaque
  readonly professionalsDestaque = PROFESSIONALS.filter(
    (professional) => professional.destaqueHome
  );

  ngOnInit(): void {
    this.seoService.update({
      title: 'Saúde e Bem-Estar',
      description:
        'Cuidado humanizado, excelência médica e atendimento personalizado para sua saúde e bem-estar na Clínica Barquez.',
      url: 'https://barquez.com.br/',
    });
  }
}