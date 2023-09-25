import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/Servicios/rest.service';

@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.component.html',
  styleUrls: ['./viaje.component.css']
})
export class ViajeComponent implements OnInit {
 
 
constructor(public api:RestService){



}
 

  ngOnInit(): void {
    this.get();
    const viaje={
      origen: "sbogota",
      destino: "CALI",
      precio: "1000000",
      asiento: "19",

    }
    this.delete();
    
    this.post("https://localhost:7238/api/Viajes" ,viaje);
  }


public get (){
  this.api.Get("Viajes");
}


public post (controller:string,body:any){
  this.api.Post("Viajes","id_viaje");
}


public delete (){
  this.api.Delete("Viajes","id_viaje",);
}

}
