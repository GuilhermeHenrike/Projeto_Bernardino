import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderAlternativoComponent } from '../header-alternativo/header-alternativo.component';

@Component({
  selector: 'app-resultado',
  standalone: true,
  imports: [HeaderAlternativoComponent],
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent {
  origem = '';
  destino = '';
  dataIda = '';
  dataVolta = '';
  pessoas = 0;
  distancia = 0;
  preco = '';
  tempo = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.origem = params['origem'];
      this.destino = params['destino'];
      this.dataIda = params['dataIda'];
      this.dataVolta = params['dataVolta'];
      this.pessoas = params['pessoas'];
      this.distancia = params['distancia'];
      this.preco = params['preco'];
      this.tempo = params['tempo'];
    });
  }
}
