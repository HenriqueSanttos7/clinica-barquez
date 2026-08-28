import { Component, Input } from '@angular/core';
import { CLINIC_CONTACT } from '../../data/clinic.data';

@Component({
  selector: 'app-cta-section',
  imports: [],
  templateUrl: './cta-section.html',
  styleUrl: './cta-section.scss',
})
export class CtaSection {
  @Input() tagline: string = 'CONTE COM NOSSA EQUIPE';
  @Input() title: string = 'Estamos prontos para cuidar de você.';
  @Input() description: string = 'Entre em contato e agende seu atendimento na Clínica Barquez.';
  @Input() buttonText: string = 'AGENDE SUA CONSULTA';

  readonly clinic = CLINIC_CONTACT;
}
