import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViagemService } from '../services/viagem.service';
import { Viagem } from '../services/viagem.service';
import { HeaderAlternativoComponent } from '../header-alternativo/header-alternativo.component';


@Component({
  selector: 'app-mviagem',
  imports: [CommonModule, HeaderAlternativoComponent],
  templateUrl: './mviagem.component.html',
  standalone: true,
  styleUrl: './mviagem.component.css'
})
export class MviagemComponent implements OnInit {

  viagens: Viagem[] = [];

  constructor(private viagemService: ViagemService) {}

  ngOnInit() {
    this.carregarViagens();
  }

  carregarViagens() {
    this.viagens = this.viagemService.buscarTodasViagens();
  }

  excluirViagem(id: string) {
    this.viagemService.excluirViagemPorId(id);
    this.carregarViagens();
  }
}
