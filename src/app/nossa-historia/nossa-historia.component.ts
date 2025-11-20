import { Component } from '@angular/core';
import { HeaderAlternativoComponent } from "../header-alternativo/header-alternativo.component";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-nossa-historia',
  imports: [HeaderAlternativoComponent, RouterModule],
  templateUrl: './nossa-historia.component.html',
  styleUrl: './nossa-historia.component.css'
})
export class NossaHistoriaComponent {

}
