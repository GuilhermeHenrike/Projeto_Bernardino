import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderAlternativoComponent } from "../header-alternativo/header-alternativo.component";

@Component({
  selector: 'app-bagagem',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderAlternativoComponent],
  templateUrl: './bagagem.component.html',
  styleUrls: ['./bagagem.component.css']
})
export class BagagemComponent {}
