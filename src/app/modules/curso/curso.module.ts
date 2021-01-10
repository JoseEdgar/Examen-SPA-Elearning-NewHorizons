import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Punto 1b
import { CursoRoutingModule } from './curso-routing.module';
import { CursoComponent } from './pages/curso/curso.component';


@NgModule({
  declarations: [CursoComponent],
  imports: [
    CommonModule,
    CursoRoutingModule
  ]
})
export class CursoModule { }
