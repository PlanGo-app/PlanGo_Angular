import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class TravelService {

  constructor(private http: HttpClient) { }
  
  private baseUrl: string = "https://plango-api.herokuapp.com";
  private getTravelUrl: string = "/user/travels/";
  private createTravelUrl: string ="/travel";
  private token: string = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJQbGFuZ29Bbmd1bGFyIiwiaWF0IjoxNjM5MDM3NzcyfQ.MDPiiiMXyNlUQ4tIfOBEUUgtMTTjMQD06uBBs6F6WgeV1fhZ_VHHFv4YcIoSp2IIoslM8YRJovp8UqHDJRpldQ";

  
  getTravels(): Observable<any>{
	let headers = new HttpHeaders({
		"Authorization": `Bearer ${this.token}`,
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Credentials': 'true',
		'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
		'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
	});
	console.log(headers);

	return this.http.get(this.baseUrl+this.getTravelUrl, {headers: headers})    .pipe(
		(resultat) => {
			console.log("Résultat de la requête : ",resultat);
			return resultat;	
		}
	  );
  }




}
