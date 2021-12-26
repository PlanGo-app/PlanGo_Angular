import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TravelService } from 'src/app/services/travel-service/travel-service.component';

@Component({
	selector: 'app-join',
	templateUrl: './join.component.html',
	styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {
	invitationCode: string = "";
	errorMsg: string = "";
	constructor(private travelService: TravelService, private router: Router) { }

	ngOnInit(): void {
	}


	join() {
		console.log(this.invitationCode);
		this.travelService.joinTravels(this.invitationCode).subscribe({	
			   next: (data) => {
					console.log(data);
					this.router.navigateByUrl("/");
				},
				error: (err: HttpErrorResponse) => {
					console.log(err.status);
					
					this.errorMsg=err.message;
				}
			});
		

	}

}
