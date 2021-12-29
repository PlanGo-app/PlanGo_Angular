import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { LocalTravelService } from 'src/app/services/travel-service/local-travel-service.component';
import { TravelService } from 'src/app/services/travel-service/travel-service.component';
import { Travel } from 'src/model/travel';

@Component({
	selector: 'app-create',
	templateUrl: './create.component.html',
	styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
	country:string="";
	city:string="";
	dateStart:Date=new Date();
	dateEnd:Date=new Date();

	constructor(private travelService: TravelService, private localTravelService: LocalTravelService) { }

	ngOnInit(): void {
	}

	createTravel() {
		this.travelService.createTravel(this.country, this.city, this.dateStart, this.dateEnd).subscribe({
			next: (data) => {
				console.log(data);
				this.localTravelService.addTravel(data);
			},
			error: (err: HttpErrorResponse) => {
				console.log((err));
				
			}
		});
		
		
	}
}
