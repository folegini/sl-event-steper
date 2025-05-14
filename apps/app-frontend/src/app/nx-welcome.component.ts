import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nx-welcome',
  imports: [CommonModule],
  template: `
   <po-page-default p-title="Página Inicial">
    <po-widget p-title="Bem-vindo!">
      Primeira tela com PO-UI funcionando!
    </po-widget>
  </po-page-default>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
