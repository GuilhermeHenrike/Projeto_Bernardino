import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { CarrosselComponent } from './carrossel/carrossel.component';
import { RodapeComponent } from './rodape/rodape.component';
import { HeaderAlternativoComponent } from './header-alternativo/header-alternativo.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CabecalhoComponent, CarrosselComponent, RodapeComponent, HeaderAlternativoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto_bernardino';
}
