import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AdministradorComponent } from './administrador/pages/administrador/administrador.component';
import { ContactenosComponent } from './contactenos/pages/contactenos/contactenos.component';
import { CursoComponent } from './curso/pages/curso/curso.component';
import { HomeComponent } from './home/pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    AdministradorComponent,
    ContactenosComponent,
    CursoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
