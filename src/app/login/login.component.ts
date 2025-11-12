import { Component, inject } from '@angular/core';


import {FormsModule} from '@angular/forms';
import{CommonModule} from '@angular/common';
import{MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone:true,
  imports: [FormsModule,CommonModule,MatCardModule,MatInputModule,MatButtonModule,MatIconModule,MatFormFieldModule,],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user={
    email:'',
    senha:'',
  };
  storedUser={
    email: 'teste@gmail.com',
    senha: '123teste'
  }

  rounter=inject(Router);

  validateLogin(email:string,senha:string):boolean{
    return email===this.storedUser.email && senha===this.storedUser.senha;
  }
  login(){
    if(this.validateLogin(this.user.email,this.user.senha)){
      localStorage.setItem('loggedIngUser',JSON.stringify(this.user.email));
      this.rounter.navigate(['/home']);
    }else{
      alert('E-mail ou senha incorreta')
    }
  }

    
 
}