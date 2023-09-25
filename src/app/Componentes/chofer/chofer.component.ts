import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/Servicios/rest.service';
@Component({
  selector: 'app-chofer',
  templateUrl: './chofer.component.html',
  styleUrls: ['./chofer.component.css']
})
export class ChoferComponent implements OnInit {


  
  constructor(public api:RestService){

  }
   
  
    ngOnInit(): void {
      this.get();
    }
  
  
  public get (){
    this.api.Get("Chofers");
  }
  

}
