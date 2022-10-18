import {Observable, Subject} from "rxjs";

export  class AppreilService {
appareilSubject=new Subject<any[]>();
  private appareils=[
    {
      id:1,
      name:"machine a laver",
      status:"eteint"
    },
    {
      id:2,
      name:"ordinateur",
      status:"allumer"
    },
    {
      id:3,
      name:"climatiseur",
      status:"eteint"
    }
  ];
  emitAppareil(){
    this.appareilSubject.next(this.appareils.slice())
  }
switchOnAll(){
  for(let appreil of this.appareils){
    appreil.status='allumer';
  }
}
switchOffAll(){
this.appareils.forEach(appreil=>{
  appreil.status='eteint';
});
}
switchOnOne(index:number){
this.appareils[index].status='allumer';
}
switchOffOne(index:number){
  this.appareils[index].status='eteint';
}
getAppreilById(id:number){
  const appareil=this.appareils.find((singleApp)=>{

    return singleApp.id===id;
  });
  return appareil;
}

}
