import { Component,OnInit } from '@angular/core';
import { RestService } from 'src/app/Servicios/rest.service';
@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.component.html',
  styleUrls: ['./pasajero.component.css']
})
export class PasajeroComponent implements OnInit{



  constructor(public api:RestService){

  }
   
  
    ngOnInit(): void {
      this.get();
    }
  
  
  public get (){
    this.api.Get("Pasajeroes");
  }
}
