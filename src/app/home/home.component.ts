import { Component } from '@angular/core';
import { CabecalhoComponent } from '../cabecalho/cabecalho.component';
import { CarrosselComponent } from '../carrossel/carrossel.component';
import { OpcoesMainComponent } from '../opcoes-main/opcoes-main.component';
import { AnuncioComponent } from '../anuncio/anuncio.component';
import { RodapeComponent } from '../rodape/rodape.component';
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CabecalhoComponent, CarrosselComponent, OpcoesMainComponent, AnuncioComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
