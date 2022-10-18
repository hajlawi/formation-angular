import { Component, OnInit } from '@angular/core';
import {AppreilService} from "../services/appreil.service";

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit {
  appareils: any[] = [];
  isauth = false;
  constructor(private appareiservice: AppreilService) {
    setTimeout(() => {
      this.isauth = true;
    }, 3000);
  }

  ngOnInit(): void {
    this.appareils = this.appareiservice.appareils
  }

  onSwitchOnAll() {
    this.appareiservice.switchOnAll();
  }

  onSwitchOffAll() {
    this.appareiservice.switchOffAll();
  }
}

