import { Injectable } from "@angular/core";
import { Travel } from "src/model/travel";

@Injectable({ providedIn: 'root' })

export class LocalTravelService {
	storeName: string = 'travel-storage';
	travelList: Travel[];

	constructor() {
		this.travelList = JSON.parse(localStorage.getItem(this.storeName) || '[]');
	}

	getTravels():Travel[] { return this.travelList; }

	addTravel(travel: Travel) {
		this.travelList.push(travel);
		return this.update();
	}

	setTravels(travels: Travel[]) {
		this.travelList = travels;
		return this.update();
	}

	update() {
		localStorage.setItem(this.storeName, JSON.stringify(this.travelList));
		return this.getTravels();
	}


	deleteTravel(travel: any) {
		this.travelList.splice(this.travelList.findIndex(x=> x.id == travel.id), 1);
		return this.update();
	}


}