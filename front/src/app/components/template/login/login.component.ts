// login.component.ts
import { Component } from '@angular/core';
import { EmpresaDataService } from 'src/app/services/empresa.data-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user: any = {};

  constructor(private empresaDataservice: EmpresaDataService) {}

  postLogin() {
    console.log('Fazendo login...');
    this.empresaDataservice.postLogin(this.user).subscribe(
      (data) => {
        console.log('Login bem-sucedido:', data);
        alert('Login feito com sucesso');
      },
      (error) => {
        console.error('Erro no login:', error);
        alert('Erro ao efetuar o login');
      }
    );
  } 
}
