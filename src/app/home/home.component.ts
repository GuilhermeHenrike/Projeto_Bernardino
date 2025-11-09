import { Component } from '@angular/core';
import { CabecalhoComponent } from '../cabecalho/cabecalho.component';
import { CarrosselComponent } from '../carrossel/carrossel.component';
import { OpcoesMainComponent } from '../opcoes-main/opcoes-main.component';
import { AnuncioComponent } from '../anuncio/anuncio.component';
import { RodapeComponent } from '../rodape/rodape.component';

@Component({
  selector: 'app-home',
  imports: [CabecalhoComponent, CarrosselComponent, OpcoesMainComponent, AnuncioComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
