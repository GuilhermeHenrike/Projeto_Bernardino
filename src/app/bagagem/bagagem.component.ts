import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-bagagem',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './bagagem.component.html',
  styleUrls: ['./bagagem.component.css']
})
export class BagagemComponent {}
