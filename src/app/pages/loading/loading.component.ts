import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  constructor() { }
  options: AnimationOptions = {
		path: '../../assets/img/mango.json',
	};
  ngOnInit(): void {
  }

}
