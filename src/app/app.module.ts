import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { CadastroClienteComponent } from './pages/cadastro-cliente/cadastro-cliente.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
// Importe outros componentes conforme necessário

@NgModule({
  declarations: [
    AppComponent
    // NÃO coloque componentes standalone aqui!
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    CadastroClienteComponent,
    ClientesComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}