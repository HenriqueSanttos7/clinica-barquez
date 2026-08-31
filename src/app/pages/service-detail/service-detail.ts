import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { ServiceCard } from '../../shared/components/service-card/service-card';
import { SERVICES } from '../../shared/data/services.data';
import { Service } from '../../shared/models/service.models';

import { CtaSection } from '../../shared/components/cta-section/cta-section';


@Component({
  selector: 'app-service-detail',
  imports: [RouterLink, CtaSection, ServiceCard],
  templateUrl: './service-detail.html',
  styleUrl: './service-detail.scss',
})

export class ServiceDetail implements OnInit {
  private readonly route = inject(ActivatedRoute);

  readonly allServices = SERVICES;
  currentId: string = '';
  service?: Service;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.currentId = params.get('id') || '';
      this.service = SERVICES.find((s) => s.id === this.currentId);
    });
  }
}
