import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { EmpresasComponent } from './pages/empresas/empresas.component';
import { CadastroClienteComponent } from './pages/cadastro-cliente/cadastro-cliente.component';
import { CadastroEmpresaComponent } from './pages/cadastro-empresa/cadastro-empresa.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'cadastro-cliente', component: CadastroClienteComponent },
  { path: 'empresas', component: EmpresasComponent },
  { path: 'cadastro-empresa', component: CadastroEmpresaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
