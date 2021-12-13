import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Travel, TravelResponse } from 'src/model/travel';
import { map, mergeMap, take } from 'rxjs/operators';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({ providedIn: 'root' })

export class TravelService {

  constructor(private http: HttpClient) { }
  
  private baseUrl: string = "/plango-api/";
  private getTravelUrl: string = "user/travels/";
  private createTravelUrl: string ="/travel";
  private token: string = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJQbGFuZ29Bbmd1bGFyIiwiaWF0IjoxNjM5MTQ4OTQxfQ.sSondsM8XuMajf6mpLnHPsFwgt9sJQqugKQ0Or_1Kp2meGkAV3Bq_jREjGI6K2QjsTNEdV_ryfLCQ2-Ldw7e2Q"
  
  getTravels(): Observable<Travel[]>{
	return this.http.get<TravelResponse>(this.baseUrl+this.getTravelUrl).pipe(
		map((response) => response.travels));	
  }




}
