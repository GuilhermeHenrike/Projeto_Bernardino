import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RodapeComponent } from './rodape/rodape.component';
import { TelaAtendiComponent } from './tela-atendi/tela-atendi.component';
import { InformacaoComponent } from './informacao/informacao.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RodapeComponent, InformacaoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto_bernardino';
}
