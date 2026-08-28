import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SERVICES } from '../../shared/data/services.data';
import { Service } from '../../shared/models/service.models';


@Component({
  selector: 'app-service-detail',
  imports: [RouterLink],
  templateUrl: './service-detail.html',
  styleUrl: './service-detail.scss',
})

export class ServiceDetail {
  service?: Service;

  constructor(private readonly route: ActivatedRoute) {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');

      this.service = SERVICES.find((service) => service.id === id);
    })
  }
}
