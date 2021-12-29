import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
	dispError: boolean = false;


	constructor(private travelService: TravelService, 
		private localTravelService: LocalTravelService,
		private _snackBar: MatSnackBar,
		public formBuilder: FormBuilder) { }

	public formCreate!: FormGroup;


	ngOnInit(): void {
		this.formCreate = this.formBuilder.group({
			country: [null, [Validators.required]],
			city: [null, [Validators.required]],
			dateStart: [null, [Validators.required]],
			dateEnd: [null, [Validators.required]],
		})
	}

	createTravel() {
		if(!this.formCreate.valid){
			this.dispError = true;
			this.formCreate.markAllAsTouched();
			this.formCreate.markAsPristine();
		}else{
			this.travelService.createTravel(this.formCreate.value.country, 
											this.formCreate.value.city, 
											this.formCreate.value.dateStart, 
											this.formCreate.value.dateEnd).subscribe({
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
}
