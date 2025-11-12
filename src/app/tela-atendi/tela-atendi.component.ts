import { Component } from '@angular/core';
import { RodapeComponent } from '../rodape/rodape.component';
import { HeaderAlternativoComponent } from '../header-alternativo/header-alternativo.component';

@Component({
  selector: 'app-tela-atendi',
  imports: [HeaderAlternativoComponent,],
  templateUrl: './tela-atendi.component.html',
  styleUrl: './tela-atendi.component.css'
})
export class TelaAtendiComponent {

}
