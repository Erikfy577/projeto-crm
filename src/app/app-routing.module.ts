import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioPage } from './inicio/inicio.page';

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioPage, // Usando o componente standalone diretamente
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}