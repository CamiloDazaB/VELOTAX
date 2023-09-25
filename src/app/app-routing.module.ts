import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusComponent } from 'src/app/Componentes/bus/bus.component';
import { ChoferComponent } from 'src/app/Componentes/chofer/chofer.component';
import { MpagoComponent } from 'src/app/Componentes/mpago/mpago.component';
import { PasajeroComponent } from 'src/app/Componentes/pasajero/pasajero.component';
import { ViajeComponent } from 'src/app/Componentes/viaje/viaje.component';


const routes: Routes = [



  { path: 'bus', component: BusComponent },

  { path: 'chofer', component: ChoferComponent },

  { path: 'mpago', component: MpagoComponent },

  { path: 'viaje', component: ViajeComponent },

  { path: 'pasajero', component: PasajeroComponent },

  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
