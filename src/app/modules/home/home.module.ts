import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { CursodestacadocontainerComponent } from './components/cursodestacadocontainer/cursodestacadocontainer.component';
import { HeaderComponent } from './components/header/header.component';
import { InstructorComponent } from './components/instructor/instructor.component';
import { InstructorcontainerComponent } from './components/instructorcontainer/instructorcontainer.component';


@NgModule({
  declarations: [HomeComponent, CursodestacadocontainerComponent, HeaderComponent, InstructorComponent, InstructorcontainerComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
