import { Component, Input } from '@angular/core';

import { Professional } from '../../data/professionals.data';

@Component({
  selector: 'app-professional-card',
  templateUrl: './professional-card.html',
  styleUrl: './professional-card.scss',
})
export class ProfessionalCard {
  @Input({ required: true })
  professional!: Professional;
}
