import { Component } from '@angular/core';
import { HeaderAlternativoComponent } from "../header-alternativo/header-alternativo.component";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-mossa-historia',
  standalone: true,
  imports: [HeaderAlternativoComponent, RouterModule],
  templateUrl: './mossa-historia.component.html',
  styleUrls: ['./mossa-historia.component.css']
})
export class MossaHistoriaComponent {

}
