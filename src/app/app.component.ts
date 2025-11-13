import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RodapeComponent } from './rodape/rodape.component';
import { PoliticaCooksComponent } from './politica-cooks/politica-cooks.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RodapeComponent, PoliticaCooksComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto_bernardino';
}
