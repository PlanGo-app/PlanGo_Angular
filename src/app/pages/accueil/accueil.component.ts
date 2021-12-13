import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
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

	constructor(private travelService: TravelService, private _bottomSheet: MatBottomSheet) {}

	ngOnInit(): void {
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
				this.displayState = {
					loading: true,
					loaded: false,
					errorMessage: undefined
				}
			},
			error: (err: object) => {
				this.displayState = {
					loading: false,
					loaded: false,
					errorMessage: err?err.toString():"Error"
				}
			}
		});
	}

	share(){
		console.log("SHARE");
	}

	add(){
		const bottomSheetRef = this._bottomSheet.open(BottomSheetComponent);
	}

}
