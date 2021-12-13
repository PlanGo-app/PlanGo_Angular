export interface TravelResponse{
	travels:Travel[];
}

export interface Travel{
	id:number;
	city:string;
	country:string;
	dateStart:Date;
	dateEnd:Date;
	invationCode:string;
}