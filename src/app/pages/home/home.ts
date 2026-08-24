import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SERVICES } from '../../shared/data/services.data';

import { PROFESSIONALS_DATA } from '../../shared/data/professionals.data';
import { ProfessionalCard } from '../../shared/components/professional-card/professional-card';

@Component({
  selector: 'app-home',
  imports: [RouterLink, ProfessionalCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})

export class Home {
  readonly servicesDestaque = SERVICES.filter(
    (service) => service.destaqueHome,
  );
  readonly professionalsDestaque = PROFESSIONALS_DATA.filter(
    (professional) => professional.destaqueHome,
  );
}
