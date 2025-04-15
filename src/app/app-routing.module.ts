import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioPage } from './inicio/inicio.page';

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioPage, // Página "Início"
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full', // Redireciona para "Início" por padrão
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}