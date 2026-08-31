import { Component } from '@angular/core';

import { SERVICES } from '../../shared/data/services.data';
import { ServiceCard } from '../../shared/components/service-card/service-card';
import { CtaSection } from '../../shared/components/cta-section/cta-section';

@Component({
  selector: 'app-services',
  imports: [ServiceCard, CtaSection],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})

export class Services {
  readonly services = SERVICES;
}
