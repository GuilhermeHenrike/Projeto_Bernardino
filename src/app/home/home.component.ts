import { Component } from '@angular/core';
import { CabecalhoComponent } from '../cabecalho/cabecalho.component';
import { OpcoesMainComponent } from '../opcoes-main/opcoes-main.component';
import { AnuncioComponent } from '../anuncio/anuncio.component';
import { RodapeComponent } from '../rodape/rodape.component';
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [CabecalhoComponent, OpcoesMainComponent, AnuncioComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
