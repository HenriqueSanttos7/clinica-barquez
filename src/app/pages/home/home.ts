import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SERVICES } from '../../shared/data/services.data';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})

export class Home {
  readonly servicesDestaque = SERVICES.filter(
    (service) => service.destaqueHome,
  );
}
