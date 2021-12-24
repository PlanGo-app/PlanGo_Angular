import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {
	invitationCode: string = "";

  constructor(private activatedRoute: ActivatedRoute, private clipboard: Clipboard) { 

	this.activatedRoute.params.subscribe(params => {
		this.invitationCode = params['invitationCode'];
		});
  }

  ngOnInit(): void {  }

  copyInvitationCode(){
	  this.clipboard.copy(this.invitationCode);
  }

  

}
