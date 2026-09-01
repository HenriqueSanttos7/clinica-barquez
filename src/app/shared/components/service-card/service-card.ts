import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Service } from '../../models/service.models';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-service-card',
  imports: [RouterLink],
  templateUrl: './service-card.html',
  styleUrl: './service-card.scss',
})
export class ServiceCard {
  @Input({ required: true }) service!: Service;
  @Input() compact: boolean = false; // Ativa layout menor para a barra lateral
  @Input() active: boolean = false; // Destaca o serviço atual da página
}
