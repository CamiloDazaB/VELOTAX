import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VELOTAXComponent } from './Componentes/velotax/velotax.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './Componentes/menu/menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AvatarModule } from 'ngx-avatars';
import { HttpClientModule } from '@angular/common/http';
import { BusComponent } from './Componentes/bus/bus.component';
import { ViajeComponent } from './Componentes/viaje/viaje.component';
import { PasajeroComponent } from './Componentes/pasajero/pasajero.component';
import { ChoferComponent } from './Componentes/chofer/chofer.component';
import { MpagoComponent } from './Componentes/mpago/mpago.component';

@NgModule({
  declarations: [
    AppComponent,
    VELOTAXComponent,
    MenuComponent,
    BusComponent,
    ViajeComponent,
    PasajeroComponent,
    ChoferComponent,
    MpagoComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AvatarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
