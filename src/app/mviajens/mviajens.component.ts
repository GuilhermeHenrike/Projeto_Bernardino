import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelService, Travel } from '../services/travel.service';

@Component({
  selector: 'app-mviajens',
  imports: [CommonModule],
  templateUrl: './mviajens.component.html',
  styleUrl: './mviajens.component.css'
})
export class MviajensComponent implements OnInit {
  travels: Travel[] = [];

  constructor(private travelService: TravelService) {}

  ngOnInit() {
    this.loadTravels();
  }

  loadTravels() {
    this.travels = this.travelService.getAllTravels();
  }

  deleteTravel(id: string) {
    this.travelService.deleteTravelById(id);
    this.loadTravels();
  }
}

