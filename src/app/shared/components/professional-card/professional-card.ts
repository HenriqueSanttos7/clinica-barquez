import { Component, Input } from '@angular/core';

import { Professional } from '../../models/professional.models';

@Component({
  selector: 'app-professional-card',
  templateUrl: './professional-card.html',
  styleUrl: './professional-card.scss',
})
export class ProfessionalCard {
  @Input({ required: true })
  professional!: Professional;
}
