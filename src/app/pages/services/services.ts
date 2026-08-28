import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SERVICES } from '../../shared/data/services.data';
import { ServiceCard } from '../../shared/components/service-card/service-card';

@Component({
  selector: 'app-services',
  imports: [RouterLink, ServiceCard],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})

export class Services {
  readonly services = SERVICES;
}
