import { Component } from '@angular/core';
import { RodapeComponent } from '../rodape/rodape.component';
import { HeaderAlternativoComponent } from '../header-alternativo/header-alternativo.component';

@Component({
  selector: 'app-informacao',
  imports: [HeaderAlternativoComponent],
  templateUrl: './informacao.component.html',
  styleUrl: './informacao.component.css'
})
export class InformacaoComponent {

}
