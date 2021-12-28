import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LocalTravelService } from 'src/app/services/travel-service/local-travel-service.component';
import { Travel } from 'src/model/travel';
import { TravelService } from '../../services/travel-service/travel-service.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';

@Component({
	selector: 'app-accueil',
	templateUrl: './accueil.component.html',
	styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
	travels: Travel[] = [];
	displayState: any;

	constructor(private travelService: TravelService, private localTravelService: LocalTravelService, private _bottomSheet: MatBottomSheet,private _snackBar: MatSnackBar) { }

	ngOnInit(): void {
		this.displayState = {
			loading: false,
			loaded: true,
			errorMessage: undefined
		}
		if ((this.travels = this.localTravelService.getTravels()).length == 0) {
			this.displayState = {
				loading: true,
				loaded: false,
				errorMessage: undefined
			}
			this.travelService.getTravels().subscribe({
				complete: () => {
					this.displayState = {
						loading: false,
						loaded: true,
						errorMessage: undefined
					}
				},

				next: (data: Travel[]) => {
					this.travels = data;
					this.localTravelService.setTravels(this.travels);
					this.displayState = {
						loading: true,
						loaded: false,
						errorMessage: undefined
					}
				},
				error: (err: HttpErrorResponse) => {
					this.displayState = {
						loading: false,
						loaded: false,
						errorMessage: err ? err.toString() : "Une erreur est survenue veuillez réessayer plus tard"
					}
				}
			});
		}

	}

	share() {
		console.log("SHARE");
	}


	add() {
		this._bottomSheet.open(BottomSheetComponent, { data: this._bottomSheet });
	}

	delete(travel:Travel) {
		this.travelService.deleteTravel(travel.id).subscribe({
			next:() =>{
				this.travels = this.localTravelService.deleteTravel(travel);
			},
			error:(err:HttpErrorResponse) =>{
				var errMsg="";
				switch(err.status){
					case 403:
						errMsg = 'Impossible de supprimer votre voyage';
						break;
					case 404:
						errMsg = 'Le voyage que vous essayer de supprimer n\'existe pas';
						break;
				}
				this._snackBar.open(errMsg,"Ok", {duration: 3000, panelClass: ['red-snackbar']});
			},
		});
	
	}

}
