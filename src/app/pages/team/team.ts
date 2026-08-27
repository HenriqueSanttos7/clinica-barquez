import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PROFESSIONALS_DATA } from '../../shared/data/professionals.data';
import { ProfessionalCard } from '../../shared/components/professional-card/professional-card';

@Component({
  selector: 'app-team',
  imports: [RouterLink, ProfessionalCard],
  templateUrl: './team.html',
  styleUrl: './team.scss',
})

export class Team {
  readonly professionals = PROFESSIONALS_DATA;
}
