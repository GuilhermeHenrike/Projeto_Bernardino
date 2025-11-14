import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderAlternativoComponent } from '../header-alternativo/header-alternativo.component';

@Component({
  selector: 'app-informacoes',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderAlternativoComponent],
  templateUrl: './informacoes.component.html',
  styleUrls: ['./informacoes.component.css']
})
export class InformacoesComponent {}
