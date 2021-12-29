import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LocalTravelService } from 'src/app/services/travel-service/local-travel-service.component';
import { TravelService } from 'src/app/services/travel-service/travel-service.component';

@Component({
	selector: 'app-join',
	templateUrl: './join.component.html',
	styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {
	invitationCode: string = "";
	errorMsg: string = "";
	constructor(private travelService: TravelService, private localTravelService: LocalTravelService, private router: Router,private _snackBar: MatSnackBar) { }

	ngOnInit(): void {
	}


	join() {
		this.travelService.joinTravel(this.invitationCode).subscribe({
			next: (data) => {
				console.log(data);
				this.localTravelService.addTravel(data);
				this.router.navigateByUrl("/");
			},
			error: (err: HttpErrorResponse) => {
				var errMsg="";
				switch (err.status) {
					case 404:
						errMsg = "Le code de voyage n'existe pas";
						break;
					case 409:
						errMsg = "Vous êtes déjà dans ce voyage";
						break;
				}
				this._snackBar.open(errMsg,"Ok", {duration: 3000, panelClass: ['red-snackbar']});
			}
		});
	}
}
