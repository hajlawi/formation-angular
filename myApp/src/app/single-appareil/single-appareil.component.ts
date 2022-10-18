import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AppreilService} from "../services/appreil.service";

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.css']
})
export class SingleAppareilComponent implements OnInit {
name='appareil';
status='status'

  constructor(private appservice:AppreilService, private route:ActivatedRoute) { }

  ngOnInit(): void {
  const id=this.route.snapshot.params['id'];
  // @ts-ignore
    this.name=this.appservice.getAppreilById(+id).name;
    // @ts-ignore
    this.status=this.appservice.getAppreilById(+id).status;
  }

}
