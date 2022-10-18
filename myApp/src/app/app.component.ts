import {Component, OnInit} from '@angular/core';
import {AppreilService} from "./services/appreil.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(){}

  ngOnInit(): void {
  }

}
