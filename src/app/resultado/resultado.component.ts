import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  imports: [],
  templateUrl: './resultado.component.html',
  styleUrl: './resultado.component.css'
})
export class ResultadoComponent {
  origem = '';
  destino = '';
  distancia = '';
  preco = '';
  tempo = '';
  ida = '';
  volta = '';
  pessoas = '';

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.origem = params['origem'];
      this.destino = params['destino'];
      this.distancia = params['distancia'];
      this.preco = params['preco'];
      this.tempo = params['tempo'];
      this.ida = params['ida'];
      this.volta = params['volta'];
      this.pessoas = params['pessoas'];
    });
  }

}
