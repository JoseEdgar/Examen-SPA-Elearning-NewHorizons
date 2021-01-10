import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Punto 1b
import { AdministradorRoutingModule } from './administrador-routing.module';
import { AdministradorComponent } from './pages/administrador/administrador.component';


@NgModule({
  declarations: [AdministradorComponent],
  imports: [
    CommonModule,
    AdministradorRoutingModule
  ]
})
export class AdministradorModule { }
