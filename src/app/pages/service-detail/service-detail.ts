import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Service, SERVICES } from '../../shared/data/services.data';

@Component({
  selector: 'app-service-detail',
  imports: [RouterLink],
  templateUrl: './service-detail.html',
  styleUrl: './service-detail.scss',
})

export class ServiceDetail {
  service?: Service;

  constructor(private readonly route: ActivatedRoute) {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.service = SERVICES.find((service) => service.slug === slug);
  }
}
