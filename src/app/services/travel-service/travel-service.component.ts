import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Travel, TravelResponse } from 'src/model/travel';
import { delay, map, mergeMap, take } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })

export class TravelService {

	constructor(private http: HttpClient) { }

	private baseUrl: string = "https://plango-api.herokuapp.com/";
	private getTravelsUrl: string = "user/travels";
	private joinTravelUrl: string = "travel/invitation?code=";
	private deleteTravelUrl: string = "travel/";
	private createTravelUrl: string = "travel";
	private token: string = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJQbGFuZ29Bbmd1bGFyIiwiaWF0IjoxNjM5MTQ4OTQxfQ.sSondsM8XuMajf6mpLnHPsFwgt9sJQqugKQ0Or_1Kp2meGkAV3Bq_jREjGI6K2QjsTNEdV_ryfLCQ2-Ldw7e2Q";
	private httpOptions = {
		headers: new HttpHeaders({
		  'Content-Type':  'application/json',
		  'Authorization': `Bearer ${this.token}`
		})
	  };


	getTravels(): Observable<Travel[]> {
		return this.http.get<TravelResponse>(this.baseUrl + this.getTravelsUrl, this.httpOptions).pipe(
			map((response) => response.travels));
	}

	joinTravel(code: string): Observable<Travel> {
		return this.http.post<Travel>(this.baseUrl + this.joinTravelUrl + code, "", this.httpOptions);
	}

	deleteTravel(id: number): Observable<unknown> {
		return this.http.delete(this.baseUrl + this.deleteTravelUrl + id + "/me", this.httpOptions);
	}

	createTravel(country: string, city: string, dateStart: Date, dateEnd: Date): Observable<Travel> {
		return this.http.post<Travel>(
				this.baseUrl + this.createTravelUrl, 
				{    
					"name": "",
					"country": country,
					"city": city,
					"dateStart": new Date(dateStart).toISOString(),
					"dateEnd": new Date(dateEnd).toISOString() 
				},
				this.httpOptions
			);
	}



}
