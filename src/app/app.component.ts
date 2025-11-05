import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OpcoesMainComponent } from './opcoes-main/opcoes-main.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, OpcoesMainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto_bernardino';
}
