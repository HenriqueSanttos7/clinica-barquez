import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PROFESSIONALS } from '../../shared/data/professionals.data';
import { ProfessionalCard } from '../../shared/components/professional-card/professional-card';

@Component({
  selector: 'app-about',
  imports: [RouterLink, ProfessionalCard],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  readonly professionals = PROFESSIONALS;
}
