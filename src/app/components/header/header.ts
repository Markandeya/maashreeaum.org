import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

declare var bootstrap: any;

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  @ViewChild('navbarCollapse') navbarCollapse!: ElementRef;

  closeMenu() {
    if (this.navbarCollapse.nativeElement.classList.contains('show')) {
      const bsCollapse = bootstrap.Collapse.getOrCreateInstance(this.navbarCollapse.nativeElement);
      bsCollapse.hide();
    }
  }
}
