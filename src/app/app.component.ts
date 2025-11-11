import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TelaRegistroComponent } from './tela-registro/tela-registro.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TelaRegistroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto_bernardino';
}
