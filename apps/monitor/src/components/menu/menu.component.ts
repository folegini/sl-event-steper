import { Component } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  menus: PoMenuItem[] = [
    { label: 'Início', action: () => this.navigate('/home'), icon: 'po-icon-home' },
    { label: 'Stepper', action: () => this.navigate('/stepper'), icon: 'po-icon-list' },
    { label: 'Sobre', action: () => this.navigate('/sobre'), icon: 'po-icon-info' }
  ];

  constructor(private router: Router) {}

  navigate(route: string) {
    this.router.navigate([route]);
  }
}