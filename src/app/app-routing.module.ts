import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'curso',
        loadChildren: () => import('./modules/curso/curso.module').then(m => m.CursoModule)
      },
      {
        path: 'contactenos',
        loadChildren: () => import('./modules/contactenos/contactenos.module').then(m => m.ContactenosModule)
      },
      {
        path: 'administrador',
        loadChildren: () => import('./modules/administrador/administrador.module').then(m => m.AdministradorModule)
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
