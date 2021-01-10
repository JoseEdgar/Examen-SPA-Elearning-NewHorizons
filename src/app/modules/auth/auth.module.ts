import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Punto 1b
import { AuthRoutingModule } from './auth-routing.module';
import { AuthpageComponent } from './page/authpage/authpage.component';


@NgModule({
  declarations: [AuthpageComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
