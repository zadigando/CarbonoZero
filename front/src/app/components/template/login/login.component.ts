import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpresaDataService } from 'src/app/services/empresa.data-service';
import { Participante } from 'src/app/models/participante';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private empresaDataService: EmpresaDataService,
    private router: Router,
    private TokenStorageService: TokenStorageService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      usuario: ['', Validators.required],
      senha: ['', Validators.required],
    });
  }

  fazerLogin(): void {
    if (this.loginForm.valid) {
      const participante: Participante = {
        id: 0,
        nome: '',
        CNPJ: '',
        razaoSocial: '',
        telefone: '',
        email: this.loginForm.get('usuario')!.value,
        senha: this.loginForm.get('senha')!.value,
        tipo: '',
        dataRegistro: new Date(),
        empresas: [],
      };

      const self = this;

      this.empresaDataService.login(participante).subscribe(
        function (loginResponse: any) {
          if (loginResponse && loginResponse.token) {
            // Armazena o token usando o TokenStorageService
            self.TokenStorageService.setToken(loginResponse.token);
            console.log('Login bem-sucedido:', loginResponse.mensagem);
            self.router.navigate(['/']);
          } else {
            console.error('Resposta de login inválida:', loginResponse);
            // Lide com o erro ou redirecione para a página de login
          }
        },
        function (error) {
          console.error('Erro no login:', error);
          // Lide com o erro ou redirecione para a página de login
        }
      );
    }
  }
}
