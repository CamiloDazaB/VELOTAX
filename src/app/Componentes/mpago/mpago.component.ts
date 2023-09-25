import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/Servicios/rest.service';
@Component({
  selector: 'app-mpago',
  templateUrl: './mpago.component.html',
  styleUrls: ['./mpago.component.css']
})
export class MpagoComponent implements OnInit {


  constructor(public api:RestService){

  }
   
   
    ngOnInit(): void {
      this.get();
    }
  
  
  public get (){
    this.api.Get("Mpagoes");
  }

}
