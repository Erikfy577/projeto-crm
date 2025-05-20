import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

interface Cliente {
  nome: string;
  email: string;
  numero: string;
  empresa: string;
  nota: string;
}

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule]
})
export class CadastroClienteComponent {
  nome: string = '';
  email: string = '';
  numero: string = '';
  empresa: string = '';
  nota: string = '';

  salvar() {
    const novoCliente: Cliente = {
      nome: this.nome,
      email: this.email,
      numero: this.numero,
      empresa: this.empresa,
      nota: this.nota
    };

    const clientes: Cliente[] = JSON.parse(localStorage.getItem('clientes') || '[]');
    clientes.push(novoCliente);
    localStorage.setItem('clientes', JSON.stringify(clientes));

    alert('Cliente cadastrado com sucesso!');
  }
}