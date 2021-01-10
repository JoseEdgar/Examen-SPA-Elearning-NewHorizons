import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Punto 1b
import { ContactenosRoutingModule } from './contactenos-routing.module';
import { ContactenosComponent } from './pages/contactenos/contactenos.component';


@NgModule({
  declarations: [ContactenosComponent],
  imports: [
    CommonModule,
    ContactenosRoutingModule
  ]
})
export class ContactenosModule { }
