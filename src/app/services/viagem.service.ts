import { Injectable } from '@angular/core';

export interface Viagem {
  id: string;
  origem: string;
  destino: string;
  dataIda: string;
  dataVolta: string;
  pessoas: number;
  distancia: number;
  preco: string;
  tempo: string;
  dataCriacao: string;
}

@Injectable({
  providedIn: 'root'
})
export class ViagemService {

  constructor() {}

  salvarViagem(viagem: Omit<Viagem, 'id' | 'dataCriacao'>): void {
    const listaViagens = this.buscarTodasViagens();

    const novaViagem: Viagem = {
      ...viagem,
      id: Date.now().toString(),
      dataCriacao: new Date().toISOString()
    };

    listaViagens.push(novaViagem);
    localStorage.setItem('viagens', JSON.stringify(listaViagens));
  }

  buscarTodasViagens(): Viagem[] {
    const viagensStr = localStorage.getItem('viagens');
    return viagensStr ? JSON.parse(viagensStr) : [];
  }

  buscarViagemPorId(id: string): Viagem | undefined {
    const listaViagens = this.buscarTodasViagens();
    return listaViagens.find(v => v.id === id);
  }

  excluirViagemPorId(id: string): void {
    const listaViagens = this.buscarTodasViagens();
    const filtradas = listaViagens.filter(v => v.id !== id);
    localStorage.setItem('viagens', JSON.stringify(filtradas));
  }
}
