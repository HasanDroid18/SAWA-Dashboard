import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  standalone: true,
  imports: [CommonModule, ButtonModule, RouterModule],
})
export class AccessComponent {
  constructor(private router: Router) {}

  goToDashboard() {
    this.router.navigate(['/app-dashboard']);
  }
}
