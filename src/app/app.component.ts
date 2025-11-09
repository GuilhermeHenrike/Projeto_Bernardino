import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { CarrosselComponent } from './carrossel/carrossel.component';
import { RodapeComponent } from './rodape/rodape.component';
import { HeaderAlternativoComponent } from './header-alternativo/header-alternativo.component';
import { MossaHistoriaComponent } from './mossa-historia/mossa-historia.component';
import { BagagemComponent } from "./bagagem/bagagem.component";
import { AnuncioComponent } from './anuncio/anuncio.component';
import { OpcoesMainComponent } from './opcoes-main/opcoes-main.component';
import { PoliticaCooksComponent } from './politica-cooks/politica-cooks.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RodapeComponent, PoliticaCooksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto_bernardino';
}
