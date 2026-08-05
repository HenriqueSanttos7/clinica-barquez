import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnDestroy {
  protected readonly isMenuOpen = signal(false);

  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  protected toggleMenu(): void {
    const menuWillOpen = !this.isMenuOpen();

    this.isMenuOpen.set(menuWillOpen);
    this.updatePageState(menuWillOpen);
  }

  protected closeMenu(): void {
    this.isMenuOpen.set(false);
    this.updatePageState(false);
  }

  private updatePageState(isOpen: boolean): void {
    this.document.body.classList.toggle('menu-open', isOpen);
  }

  ngOnDestroy(): void {
    this.document.body.classList.remove('menu-open');
  }
}
