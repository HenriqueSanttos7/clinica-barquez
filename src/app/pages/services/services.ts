import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SERVICES } from '../../shared/data/services.data';

@Component({
  selector: 'app-services',
  imports: [RouterLink],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})

export class Services {
  readonly services = SERVICES;
}
