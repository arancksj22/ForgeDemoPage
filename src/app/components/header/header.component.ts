import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  showToast = false;

  copyEmail() {
    navigator.clipboard.writeText('arancksj@gmail.com').then(() => {
      this.showToast = true;
      setTimeout(() => {
        this.showToast = false;
      }, 2000);
    });
  }
}
