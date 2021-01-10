import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoRoutingModule } from './curso-routing.module';
import { CursoComponent } from './pages/curso/curso.component';
import { CursocategoriacontainerComponent } from './components/cursocategoriacontainer/cursocategoriacontainer.component';
import { CursocontainerComponent } from './components/cursocontainer/cursocontainer.component';
import { CursodetallepageComponent } from './pages/cursodetallepage/cursodetallepage.component';


@NgModule({
  declarations: [CursoComponent, CursocategoriacontainerComponent, CursocontainerComponent, CursodetallepageComponent],
  imports: [
    CommonModule,
    CursoRoutingModule
  ]
})
export class CursoModule { }
