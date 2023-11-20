import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpresaDataService } from 'src/app/services/empresa.data-service';
import { Participante } from 'src/app/models/participante';
import { Router } from '@angular/router';

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
    private router: Router
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

      this.empresaDataService.login(participante).subscribe(
        (response) => {
          console.log('Login bem-sucedido:', response.Mensagem);
          this.router.navigate(['/']);
          // Realize ações necessárias após o login bem-sucedido
        },
        (error) => {
          console.error('Erro no login:', error);
          // Trate o erro conforme necessário
        }
      );
    }
  }
}
