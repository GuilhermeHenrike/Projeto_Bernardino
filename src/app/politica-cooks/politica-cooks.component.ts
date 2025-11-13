import { Component } from '@angular/core';
import { CabecalhoComponent } from "../cabecalho/cabecalho.component";
import { HeaderAlternativoComponent } from "../header-alternativo/header-alternativo.component";

@Component({
  selector: 'app-politica-cooks',
  standalone: true,
  imports: [HeaderAlternativoComponent],
  templateUrl: './politica-cooks.component.html',
  styleUrls: ['./politica-cooks.component.css']
})
export class PoliticaCooksComponent {

}
