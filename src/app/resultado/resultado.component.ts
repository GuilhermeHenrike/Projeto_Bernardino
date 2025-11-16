import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderAlternativoComponent } from '../header-alternativo/header-alternativo.component';
import { TravelService } from '../services/travel.service';

@Component({
  selector: 'app-resultado',
  imports: [HeaderAlternativoComponent],
  templateUrl: './resultado.component.html',
  styleUrl: './resultado.component.css'
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

  constructor(private route: ActivatedRoute, private travelService: TravelService) {}

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

      if (this.origem && this.destino) {
        this.travelService.saveTravelData({
          origem: this.origem,
          destino: this.destino,
          dataIda: this.dataIda,
          dataVolta: this.dataVolta,
          pessoas: this.pessoas,
          distancia: this.distancia,
          preco: this.preco,
          tempo: this.tempo
        });
      }
    });
  }
}
