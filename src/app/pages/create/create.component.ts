import { HttpErrorResponse } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
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
		private router: Router,
		public formBuilder: FormBuilder) { }

	public formCreate!: FormGroup;


	ngOnInit(): void {
		this.formCreate = this.formBuilder.group({
			country: [null, [Validators.required]],
			city: [null, [Validators.required]],
			dateStart: [null, [Validators.required]],
			dateEnd: [null, [Validators.required]]
		},
			{ validator: this.dateLessThan('dateStart', 'dateEnd') }
		)
	}

	dateLessThan(from: string, to: string) {
		return (group: FormGroup): { [key: string]: any } => {
			let f = group.controls[from];
			let t = group.controls[to];
			if (f.value > t.value) {
				t.setErrors({ 'date_incorrect': true });
				f.setErrors({ 'date_incorrect': true });
				return {
					dates: "La date de fin doit être superieur à la date de début"
				};
			}
			if (f.value)
				f.setErrors(null);
			if (t.value)
				t.setErrors(null);
			return {};
		}
	}

	createTravel() {
		if (!this.formCreate.valid) {
			this.dispError = true;
			this.formCreate.markAllAsTouched();
			this.formCreate.markAsPristine();
		} else {
			this.travelService.createTravel(this.formCreate.value.country,
				this.formCreate.value.city,
				this.formCreate.value.dateStart,
				this.formCreate.value.dateEnd).subscribe({
					next: (data) => {
						this.localTravelService.addTravel(data);
						this.router.navigateByUrl("/");
					},
					error: (err: HttpErrorResponse) => {
						var errMsg = "";
						switch (err.status) {
							case 400:
								errMsg = "Les informations données ne permettent pas de créer un voyage";
								break;
						}
						this._snackBar.open(errMsg, "Ok", { duration: 3000, panelClass: ['red-snackbar'] });

					}
				});
		}

	}
}
