import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LocalTravelService } from 'src/app/services/travel-service/local-travel-service.component';
import { TravelService } from 'src/app/services/travel-service/travel-service.component';
import { Travel } from 'src/model/travel';

@Component({
	selector: 'app-create',
	templateUrl: './create.component.html',
	styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
	country: string = "";
	city: string = "";
	dateStart: Date = new Date();
	dateEnd: Date = new Date();

	constructor(private travelService: TravelService, private localTravelService: LocalTravelService,private _snackBar: MatSnackBar) { }

	ngOnInit(): void {
	}

	createTravel() {
		if (this.country != "")
			this.travelService.createTravel(this.country, this.city, this.dateStart, this.dateEnd).subscribe({
				next: (data) => {
					console.log(data);
					this.localTravelService.addTravel(data);
				},
				error: (err: HttpErrorResponse) => {
					var errMsg = "";
					switch (err.status) {
						case 400:
							errMsg = "Les informations données ne permettent pas de créer un voyage";
							break;
					}
					this._snackBar.open(errMsg,"Ok", {duration: 3000, panelClass: ['red-snackbar']});

				}
			});
	}
}
