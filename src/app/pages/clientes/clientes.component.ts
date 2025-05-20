import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

interface Cliente {
  nome: string;
  email: string;
  numero: string;
  empresa: string;
  nota: string;
}

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule]
})
export class ClientesComponent {
  clientes: Cliente[] = [];

  constructor() {
    this.clientes = JSON.parse(localStorage.getItem('clientes') || '[]');
  }
}