import {Component, Input, OnInit} from '@angular/core';
import {AppreilService} from "../services/appreil.service";

@Component({
  selector: 'app-appreil',
  templateUrl: './appreil.component.html',
  styleUrls: ['./appreil.component.css']
})
export class AppreilComponent implements OnInit {
@Input() appreilName:string="";
@Input() appreilStatus="";
@Input()indexApp=0;
@Input()id=0;

  constructor(private appreilservice:AppreilService ) { }

  ngOnInit(): void {

  }
getStatus(){
return this.appreilStatus;
}
getColor(){
    if(this.appreilStatus==="eteint"){
      return "red";
    }return "green"
}
onSwitchOnOne(){
   this.appreilservice.switchOnOne(this.indexApp) ;
}
onswitchOffOne(){
   this.appreilservice.switchOffOne(this.indexApp) ;
}

}
