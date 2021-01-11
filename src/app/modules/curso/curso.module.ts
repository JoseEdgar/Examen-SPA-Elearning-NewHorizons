import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoRoutingModule } from './curso-routing.module';
import { CursoComponent } from '../../shared/components/curso/curso.component';
import { CursocategoriacontainerComponent } from './components/cursocategoriacontainer/cursocategoriacontainer.component';
import { CursocontainerComponent } from './components/cursocontainer/cursocontainer.component';
import { CursodetallepageComponent } from './pages/cursodetallepage/cursodetallepage.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [CursoComponent, CursocategoriacontainerComponent, CursocontainerComponent, CursodetallepageComponent],
  imports: [
    CommonModule,
    CursoRoutingModule,
    SharedModule
  ]
})
export class CursoModule { }
