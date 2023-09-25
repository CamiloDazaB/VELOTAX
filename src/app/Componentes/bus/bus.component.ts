import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/Servicios/rest.service';
@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent implements OnInit {




  constructor(public api:RestService){

  }
   
  
    ngOnInit(): void {
      this.get();
    }
  
  
  public get (){
    this.api.Get("Buses");
  }
  


}
