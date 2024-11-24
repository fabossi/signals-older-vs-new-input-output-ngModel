import { Component, effect, input, model, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-novo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-novo.component.html',
  styleUrl: './input-novo.component.scss',
})
export class InputNovoComponent {
  label = input.required<string>();

  botaoDesativado = input(false, {
    transform: (valor: string | boolean) =>
      typeof valor === 'string' ? valor === '' || valor === 'true' : valor,
  });

  botaoClicado = output<string>();

  valor = model('');

  constructor() {
    effect(() => console.log('EFFECT ' + this.valor()));
  }
}
