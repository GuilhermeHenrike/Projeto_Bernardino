import { Injectable } from '@angular/core';

export interface Travel {
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
export class TravelService {

  constructor() { }

  saveTravelData(travel: Omit<Travel, 'id' | 'dataCriacao'>): void {
    const travels = this.getAllTravels();
    const newTravel: Travel = {
      ...travel,
      id: Date.now().toString(),
      dataCriacao: new Date().toISOString()
    };
    travels.push(newTravel);
    localStorage.setItem('travels', JSON.stringify(travels));
  }

  getAllTravels(): Travel[] {
    const travelsStr = localStorage.getItem('travels');
    return travelsStr ? JSON.parse(travelsStr) : [];
  }

  getTravelById(id: string): Travel | undefined {
    const travels = this.getAllTravels();
    return travels.find(t => t.id === id);
  }

  deleteTravelById(id: string): void {
    const travels = this.getAllTravels();
    const filtered = travels.filter(t => t.id !== id);
    localStorage.setItem('travels', JSON.stringify(filtered));
  }
}
