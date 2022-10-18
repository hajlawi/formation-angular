import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {ActionEvent} from "../states/product.state";


@Injectable({providedIn:"root"})
export  class DravenSubjectService {
  sourceEventSubject:Subject<ActionEvent>=new Subject<ActionEvent>();
  subjectobservable=this.sourceEventSubject.asObservable();
constructor(){}
publishedevent(event:ActionEvent){
  this. sourceEventSubject.next(event);
}
}
