import { Component, HostListener, signal } from '@angular/core';
import { CLINIC_CONTACT } from '../../../shared/data/clinic.data';

@Component({
  selector: 'app-floating-actions',
  imports: [],
  templateUrl: './floating-actions.html',
  styleUrl: './floating-actions.scss',
})
export class FloatingActions {

  readonly clinicContact = CLINIC_CONTACT;

  showScrollTop = signal(false);

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.showScrollTop.set(window.scrollY > 350);
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
