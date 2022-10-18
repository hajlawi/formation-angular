import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-appreil',
  templateUrl: './appreil.component.html',
  styleUrls: ['./appreil.component.css']
})
export class AppreilComponent implements OnInit {
 appareilName="";
 appreilStatus: string = "";

  constructor() {
  }

  ngOnInit(): void {
  }


  getStatus() {
    return this.appreilStatus;
  }



}
