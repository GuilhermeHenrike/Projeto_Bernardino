import { Component } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { HeaderAlternativoComponent } from '../header-alternativo/header-alternativo.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cabecalho',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.css'
})
export class CabecalhoComponent {
  origem = '';
  destino = '';
  dataIda = '';
  dataVolta = '';
  pessoas = 1;

  constructor(private router: Router) {}

  calcular() {
    // mapa simples de distâncias
    const distancias: any = {
      'João Pessoa-Recife': 120,
      'Recife-João Pessoa': 120,
      'João Pessoa-Manaus': 2700,
      'Manaus-João Pessoa': 2700,
      'Recife-Manaus': 2850,
      'Manaus-Recife': 2850,
    };

    const chave = `${this.origem}-${this.destino}`;
    const distancia = distancias[chave] || 0;

    if (distancia === 0) {
      alert('Escolha cidades diferentes para calcular.');
      return;
    }

    const precoPorKm = 0.75;
    const velocidadeMedia = 800; // km/h

    const precoTotal = distancia * precoPorKm * this.pessoas;
    const tempoEstimado = (distancia / velocidadeMedia).toFixed(1);

    // redireciona para página de resultado
    this.router.navigate(['/resultado'], {
      queryParams: {
        origem: this.origem,
        destino: this.destino,
        distancia,
        preco: precoTotal.toFixed(2),
        tempo: tempoEstimado,
        ida: this.dataIda,
        volta: this.dataVolta,
        pessoas: this.pessoas
      }
    });
  }

}
