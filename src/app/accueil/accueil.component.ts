import { Component, OnInit } from '@angular/core';
import { TravelService } from '../services/travel-service/travel-service.component';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
	value: any;
	complete: boolean = false;

  constructor(private travelService: TravelService) { }

  ngOnInit(): void {
	  this.travelService.getTravels().subscribe({
		  next: (data) => {
			  this.value = data;
			  this.complete = true;

		  }
	  });
  }

}
