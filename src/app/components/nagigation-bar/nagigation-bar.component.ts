import { Component } from '@angular/core';

@Component({
  selector: 'app-nagigation-bar',
  templateUrl: './nagigation-bar.component.html',
  styleUrls: ['./nagigation-bar.component.scss']
})
export class NagigationBarComponent {
  isMenuOpen = false; // Track the state of the menu

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; // Toggle the menu open/close
  }
}
