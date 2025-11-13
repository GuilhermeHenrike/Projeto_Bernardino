import { Component } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { HeaderAlternativoComponent } from '../header-alternativo/header-alternativo.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cabecalho',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent {
  origem = '';
  destino = '';
  dataIda = '';
  dataVolta = '';
  pessoas = 1;

  constructor(private router: Router) {}

  calcular() {
    const distancias: any = {
      'João Pessoa-Rio de Janeiro': 2330,
      'João Pessoa-São Paulo': 2640,
      'João Pessoa-Manaus': 2850,
      'João Pessoa-Porto Alegre': 3200,
      'Rio de Janeiro-São Paulo': 430,
      'Rio de Janeiro-Manaus': 2850,
      'Rio de Janeiro-Porto Alegre': 1550,
      'São Paulo-Manaus': 2680,
      'São Paulo-Porto Alegre': 850,
      'Manaus-Porto Alegre': 3300,
    };

    const chave1 = `${this.origem}-${this.destino}`;
    const chave2 = `${this.destino}-${this.origem}`;
    const distancia =
      distancias[chave1] || distancias[chave2] || 0;

    const precoPorKm = 0.55;
    const precoTotal = distancia * precoPorKm * this.pessoas;


    const tempoEstimado = (distancia / 800).toFixed(1);

    this.router.navigate(['/resultado'], {
      queryParams: {
        origem: this.origem,
        destino: this.destino,
        dataIda: this.dataIda,
        dataVolta: this.dataVolta,
        pessoas: this.pessoas,
        distancia: distancia,
        preco: precoTotal.toFixed(2),
        tempo: tempoEstimado,
      },
    });
  }
}
