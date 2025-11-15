import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tela-registro',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './tela-registro.component.html',
  styleUrl: './tela-registro.component.css'
})
export class TelaRegistroComponent {

  router = inject(Router);

  goToLogin(){
    this.router.navigate(['/login']);
  }

  user: any = {
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    dataNascimento: '',
    pais: ''
  };

  register(){
    if(!this.user.email || !this.user.senha || !this.user.confirmarSenha){
      alert('Preencha os campos obrigatórios.');
      return;
    }
    if(this.user.senha !== this.user.confirmarSenha){
      alert('As senhas não coincidem.');
      return;
    }

    const storedUser = { email: this.user.email, senha: this.user.senha };
    localStorage.setItem('storedUser', JSON.stringify(storedUser));
    localStorage.setItem('loggedIngUser', JSON.stringify(this.user.email));
    this.router.navigate(['/home']);
  }

}
