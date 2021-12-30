import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
	dispError: boolean = false;
	constructor(private travelService: TravelService,
		private localTravelService: LocalTravelService,
		private router: Router,
		private _snackBar: MatSnackBar,
		public formBuilder: FormBuilder) { }

	public formCreate!: FormGroup;
	ngOnInit(): void {
		this.formCreate = this.formBuilder.group({
			code: [null, [Validators.required]],
		});
	}


	join() {
		if (!this.formCreate.valid) {
			this.dispError = true;
			this.formCreate.markAllAsTouched();
			this.formCreate.markAsPristine();
		} else {
			this.travelService.joinTravel(this.formCreate.value.code).subscribe({
				next: (data) => {
					console.log(data);
					this.localTravelService.addTravel(data);
					this.router.navigateByUrl("/");
				},
				error: (err: HttpErrorResponse) => {
					var errMsg = "";
					switch (err.status) {
						case 404:
							errMsg = "Le code de voyage n'existe pas";
							break;
						case 409:
							errMsg = "Vous êtes déjà dans ce voyage";
							break;
					}
					this._snackBar.open(errMsg, "Ok", { duration: 3000, panelClass: ['red-snackbar'] });
				}
			});
		}
	}
}
