import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderAlternativoComponent } from '../header-alternativo/header-alternativo.component';

@Component({
  selector: 'app-altcanc',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderAlternativoComponent],
  templateUrl: './altcanc.component.html',
  styleUrls: ['./altcanc.component.css']
})
export class AltcancComponent {}
