import { Component, Inject, OnInit } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

@Component({
	selector: 'app-bottom-sheet',
	templateUrl: './bottom-sheet.component.html',
	styleUrls: ['./bottom-sheet.component.css']
})
export class BottomSheetComponent implements OnInit {

	constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any) { }

	ngOnInit(): void {
	}

	join() {
		console.log("join");
	}

	create() {
		console.log("create");
	}

	closeSheet() {
		this.data.dismiss();
	}



}
