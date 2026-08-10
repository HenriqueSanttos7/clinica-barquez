import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-floating-actions',
  imports: [],
  templateUrl: './floating-actions.html',
  styleUrl: './floating-actions.scss',
})
export class FloatingActions {
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
