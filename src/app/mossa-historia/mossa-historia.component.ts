import { Component } from '@angular/core';
import { HeaderAlternativoComponent } from "../header-alternativo/header-alternativo.component";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-mossa-historia',
  imports: [HeaderAlternativoComponent, RouterModule],
  templateUrl: './mossa-historia.component.html',
  styleUrl: './mossa-historia.component.css'
})
export class MossaHistoriaComponent {

}
