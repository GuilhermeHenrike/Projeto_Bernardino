import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { HeaderAlternativoComponent } from '../header-alternativo/header-alternativo.component';

@Component({
  selector: 'app-cabecalho',
  standalone: true,
  imports: [RouterLink,],
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.css'
})
export class CabecalhoComponent {

}
