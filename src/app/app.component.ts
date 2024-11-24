import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputAntigoComponent } from './components/input-antigo/input-antigo.component';
import { InputNovoComponent } from './components/input-novo/input-novo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputAntigoComponent, InputNovoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-signals';

  valorInputNovo = 'Coc';

  imprimir(value: string) {
    console.log(value);
  }
}
