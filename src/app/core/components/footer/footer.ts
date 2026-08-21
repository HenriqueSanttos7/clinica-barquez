import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SERVICES } from '../../../shared/data/services.data';

import { CLINIC_CONTACT } from '../../../shared/data/clinic.data';
@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})

export class Footer {
  protected readonly currentYear = new Date().getFullYear();
  readonly services = SERVICES;
  readonly clinicContact = CLINIC_CONTACT;
}
